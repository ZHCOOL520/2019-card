# 健康码 & 行程卡 纪念版

> 疫情时代的纪念 —— 纯前端健康码 / 行程卡生成器

![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-HTML%2FCSS%2FJS-blue)
![GitHub stars](https://img.shields.io/github/stars/ZHCOOL520/2019-card?style=social)

---

## 项目介绍

纯前端实现的健康码 & 行程卡纪念版生成器，仅作纪念和娱乐用途，无任何实际作用。

致敬那段难忘的岁月，做好自己健康的第一责任人。

> ⚠️ **重要声明**：本项目仅作纪念用途，仅供娱乐，无任何实际作用，不得用于防疫等相关场景，所有数据均为虚构，请勿当真。

---

## 功能特性

| 功能 | 说明 |
|------|------|
| 健康码 | 大时间显示 + 二维码 + 核酸检测 + 疫苗状态 |
| 行程卡 | 大箭头图标 + 行程信息展示 |
| Tab切换 | 一键切换健康码 / 行程卡，平滑动画 |
| 颜色自定义 | 预设绿 / 黄 / 红 / 紫 / 蓝，支持任意颜色 |
| 自动时间 | 实时更新当前时间，精确到秒 |
| 地理定位 | 支持浏览器定位，自动获取坐标 |
| 二维码自定义 | 可自定义内容，默认跳转作者B站 |
| 参数设置 | 标题、姓名、手机号、地点、天数等均可修改 |
| 保存图片 | 一键保存为高清 PNG |
| 本地存储 | 自动保存配置，刷新不丢失 |
| GSAP 动画 | 流畅的入场和切换动画 |
| 移动端适配 | 完美适配手机屏幕 |

---

## 快速开始

### 直接使用

纯静态 HTML，无需构建：

1. 浏览器打开 `index.html` 即可使用
2. 或部署到任意静态托管服务

### 本地预览

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# 项目自带
node server.js
```

访问 `http://localhost:8000`

### 在线体验

[https://zhcool520.xyz/2019-card/](https://zhcool520.xyz/2019-card/)

---

## 项目结构

```
.
├── index.html    # 主页面（HTML + CSS + JS）
├── server.js     # 本地预览服务器
├── README.md     # 本文件
└── LICENSE       # MIT 协议
```

采用单文件架构，所有代码集中在 `index.html` 中，方便部署和分享。

---

## 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 + CSS3 | 页面结构与样式 |
| JavaScript (ES6+) | 交互逻辑 |
| Tailwind CSS | 快速样式（CDN） |
| GSAP | 动画库 |
| html2canvas | DOM 转图片导出 |
| QRCode.js | 二维码生成 |

---

## 参考与致谢

页面 UI 风格参考了 [coder-xiaomo/travel-card](https://github.com/coder-xiaomo/travel-card)，部分代码逻辑参考自该项目，特此感谢原作者。

---

## 自定义说明

### 二维码内容

在设置面板中自定义，默认为作者 B 站空间。

### 默认配置

在 `index.html` 中找到配置对象修改：

```javascript
let healthConfig = {
    navbarTitle: '健康码出示',
    name: '某某某',
    location: '北京市',
    nucleicDays: '5',
    vaccine: '仅供娱乐',
    qrcodeUrl: '你的自定义链接'
};

let travelConfig = {
    navbarTitle: '行程卡',
    phone: '188****8888',
    days: '7',
    location: '北京市'
};
```

### 水印文字

修改 `generateWatermark()` 中的 `watermarkTexts` 数组即可。

---

## 开源协议

本项目采用 **MIT License**，详见 [LICENSE](LICENSE) 文件。

---

## 免责声明

1. 仅供学习、研究和纪念使用
2. 不具有任何实际功能，不得用于防疫等相关场景
3. 使用本项目产生的一切后果由使用者自行承担
4. 请遵守当地法律法规，不得用于非法用途

---

## 链接

- GitHub：[https://github.com/ZHCOOL520/2019-card](https://github.com/ZHCOOL520/2019-card)
- 在线示例：[https://zhcool520.xyz/2019-card/](https://zhcool520.xyz/2019-card/)
- 作者B站：[https://space.bilibili.com/1414910921](https://space.bilibili.com/1414910921)

---

<div align="center">

**如果觉得不错，记得点个 ⭐ Star 支持一下~**

*本文档由 AI 生成*

</div>
