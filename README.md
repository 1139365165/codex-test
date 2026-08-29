# MOMO 毛球研究所 · 宠物洗护

一个为宠物洗护门店打造的单页品牌站点。以「让每一次洗护，都像被拥抱」为核心，向毛孩子家长传递温柔、安心、可视化的服务体验。

## ✨ 功能特性

- **品牌首屏**：服务承诺（全程可视护理 / 一宠一浴巾 / 温和无刺激）与真实好评
- **门店数据**：门店位置、护理年限、安心用品等信任信息
- **服务与价格**：狗狗清爽洗护、猫咪舒缓洗护、造型修剪、深层呵护加购
- **为什么选我们**：从认识到清洁、修护到离店的完整护理流程
- **在线预约表单**：填写毛孩子信息、联系方式与服务类型（前端演示）
- **常见问题**：预约、猫咪护理、洗护准备等 FAQ
- **门店信息与地图**：地址、营业时间、地铁出行、到店咨询及地图导航
- **响应式布局**：适配桌面端与移动端

## 🛠 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | [Next.js](https://nextjs.org/) 16 |
| 前端 | React 19 + TypeScript |
| 样式 | 原生 CSS（`app/globals.css`） |
| 代码规范 | ESLint（`eslint-config-next`） |
| 包管理 | pnpm |

## 🚀 快速开始

### 环境要求

- Node.js 20+
- pnpm

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

### 生产构建与启动

```bash
pnpm build
pnpm start
```

### 代码检查

```bash
pnpm lint
```

## 📁 项目结构

```
├── app/               # 页面与全局样式（App Router）
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/        # 页面组件
│   ├── BookingForm.tsx
│   ├── Faq.tsx
│   └── Header.tsx
├── data/              # 站点数据（服务、流程、FAQ、门店信息）
│   └── site.ts
├── public/            # 静态资源
│   └── images/        # 页面图片
├── assets/            # 原始图片素材
├── next.config.ts     # Next.js 配置
└── package.json
```
