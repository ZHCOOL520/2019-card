# 健康码 & 行程卡 纪念版

> 💚 疫情时代的纪念，一个纯前端的健康码 / 行程卡生成器

![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-HTML%2FCSS%2FJS-blue)
![GitHub stars](https://img.shields.io/github/stars/ZHCOOL520/2019-card?style=social)

---

## 📖 项目介绍

这是一个**纯前端**的健康码 & 行程卡纪念版生成器，仅作**纪念和娱乐用途**，无任何实际作用。

致敬那段难忘的岁月，做好自己健康的第一责任人。

> ⚠️ **重要声明**：本项目仅作纪念用途，仅供娱乐，无任何实际作用，不得用于防疫等相关场景，所有数据均为虚构，请勿当真。

---

## ✨ 功能特性

| 功能 | 说明 |
|------|------|
| 🟩 **健康码** | 高度还原真实健康码样式，大时间显示 + 二维码 + 核酸检测 + 疫苗接种 |
| 🟢 **行程卡** | 还原行程卡样式，大箭头 + 行程信息 |
| 🔄 **Tab切换** | 一键切换健康码 / 行程卡，平滑过渡动画 |
| 🎨 **颜色自定义** | 预设绿/黄/红/紫/蓝五种颜色，支持任意自定义颜色 |
| ⏰ **自动时间** | 实时更新当前时间，精确到秒 |
| 📍 **定位功能** | 支持浏览器地理定位，自动获取位置坐标 |
| 🔳 **二维码自定义** | 可自定义二维码内容，默认跳转到作者B站空间 |
| 📝 **丰富设置** | 标题、姓名、手机号、地点、核酸天数、疫苗状态等均可自定义 |
| 📥 **保存图片** | 一键保存为高清PNG图片，支持下载 |
| 💾 **本地存储** | 自动保存配置，刷新页面不丢失 |
| ✨ **GSAP动画** | 流畅的页面入场和切换动画 |
| 📱 **移动端适配** | 完美适配手机屏幕，触控友好 |

---

## 🚀 快速开始

### 直接使用

本项目是纯静态HTML页面，无需构建：

1. 直接用浏览器打开 `index.html` 即可使用
2. 或部署到任意静态托管服务（GitHub Pages、Vercel、Netlify 等）

### 本地预览

```bash
# 方法一：使用 Python
python -m http.server 8000

# 方法二：使用 Node.js
npx serve .

# 方法三：使用项目自带的服务器
node server.js
```

然后访问 `http://localhost:8000` 即可。

---

## 🌐 GitHub Pages 部署

### 方法一：直接上传

1. 将本项目推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main` 分支，目录选择 `/ (root)`
5. 点击 Save，等待部署完成
6. 访问 `https://zhcool520.github.io/2019-card/`

### 方法二：使用其他平台

- **Vercel**：Import 仓库后一键部署
- **Netlify**：拖拽文件夹到 Netlify 即可
- **Cloudflare Pages**：连接 GitHub 仓库自动部署

---

## 📁 项目结构

```
.
├── index.html          # 主页面（包含所有代码）
├── server.js           # 本地预览服务器（可选）
├── README.md           # 项目说明文档
└── LICENSE             # MIT 开源协议
```

> 💡 本项目采用**单文件架构**，所有HTML、CSS、JS都在 `index.html` 中，方便部署和分享。

---

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| **HTML5** | 页面结构 |
| **CSS3** | 样式 + 动画 |
| **JavaScript (ES6+)** | 交互逻辑 |
| **Tailwind CSS** | 快速样式构建（CDN） |
| **GSAP** | 高性能动画库 |
| **html2canvas** | DOM转图片导出 |
| **QRCode.js** | 二维码生成 |

---

## 📸 效果预览

### 健康码
- 顶部导航栏 + Tab切换
- 大字体实时时间显示
- 金色四角装饰的二维码
- 背景斜向水印文字
- 核酸检测 + 行程卡双卡片
- 疫苗接种状态

### 行程卡
- 大标题"行程卡"
- 波浪形顶部标签
- 圆形大箭头图标
- 行程信息展示

---

## ⚙️ 自定义说明

### 二维码内容
在设置面板中可以修改二维码跳转的链接，默认是作者的B站空间：
```
https://space.bilibili.com/1414910921?spm_id_from=333.1007.0.0
```

### 修改默认配置
在 `index.html` 的 JS 部分找到配置对象修改默认值：

```javascript
// 健康码配置
let healthConfig = {
    navbarTitle: '健康码出示',
    name: '某某某',
    location: '北京市',
    nucleicDays: '5',
    vaccine: '已全程接种',
    qrcodeUrl: '你的自定义链接'
};

// 行程卡配置
let travelConfig = {
    navbarTitle: '行程卡',
    phone: '185****7621',
    days: '7',
    location: '北京市'
};
```

### 水印文字
修改 `generateWatermark()` 函数中的 `watermarkTexts` 数组即可自定义水印内容。

---

## 📄 开源协议

本项目采用 **MIT License** 开源协议，详见 [LICENSE](LICENSE) 文件。

简单来说：
- ✅ 可以自由使用、复制、修改
- ✅ 可以用于商业用途
- ✅ 可以再分发
- ❗ 需要保留版权声明和许可证声明
- ❗ 作者不承担任何责任

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支
3. 提交你的改动
4. 推送到分支
5. 创建 PR

---

## 💬 免责声明

1. 本项目**仅供学习、研究和纪念使用**
2. 本项目**不具有任何实际功能**，不得用于防疫等相关场景
3. 使用本项目产生的一切后果由使用者自行承担
4. 请遵守当地法律法规，不得用于非法用途

---

## 📮 联系方式

- **作者B站**：[点击访问](https://space.bilibili.com/1414910921?spm_id_from=333.1007.0.0)
- **项目地址**：[GitHub](https://github.com/ZHCOOL520/2019-card)

---

<div align="center">

**如果觉得不错，记得点个 ⭐ Star 支持一下~**

*Made with ❤️ for纪念*

</div>
