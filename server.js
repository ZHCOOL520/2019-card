// 简单的本地HTTP服务器，用于测试静态页面
const http = require('http');
const fs = require('fs');
const path = require('path');

// 服务器端口
const PORT = 8000;

// MIME类型映射
const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    // 获取请求的文件路径
    let filePath = '.' + req.url;
    
    // 如果是根路径，返回index.html
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // 获取文件扩展名
    const extname = String(path.extname(filePath)).toLowerCase();
    
    // 获取对应的MIME类型
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    // 读取文件
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，返回404
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 - 文件不存在</h1>', 'utf-8');
            } else {
                // 服务器错误
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`<h1>500 - 服务器错误: ${error.code}</h1>`, 'utf-8');
            }
        } else {
            // 成功返回文件
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// 启动服务器
server.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`  健康码 & 行程卡 本地服务器已启动`);
    console.log(`========================================`);
    console.log(`  访问地址: http://localhost:${PORT}`);
    console.log(`  按 Ctrl+C 停止服务器`);
    console.log(`========================================`);
});
