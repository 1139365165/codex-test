<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 项目说明（供 AI 助手阅读）

以下内容由通读整个项目整理而来，描述的是提交 `bd2d0bd` 时的状态。写代码前请先通读本文件。

## 一、安全规则（最高优先级，必须遵守）

- 禁止批量删除文件或目录。
- 禁止使用：`del /s`、`rd /s`、`rmdir /s`、`Remove-Item -Recurse`、`rm -rf`。
- 删除文件时，一次只删除一个明确路径的文件，例如 `Remove-Item "C:\path\to\file.txt"`。
- 需要批量删除时必须停止操作，向用户说明并请用户手动删除。

## 二、项目概述

| 项目 | 内容 |
| --- | --- |
| 包名 | `momo-pet-grooming` |
| 品牌 | MOMO 毛球研究所（GROOMING STUDIO） |
| 定位 | 上海宠物洗护门店的单页品牌官网 |
| 语言 | 简体中文（`zh-CN`） |
| 框架 | Next.js 16（App Router，开发服务器用 Turbopack） |
| 前端 | React 19 + TypeScript 6（strict 模式） |
| 样式 | 原生 CSS，无 Tailwind、无 UI 框架 |
| 包管理 | pnpm |
| 后端 | 无。预约表单是纯前端演示，不会向服务器提交数据 |
| 环境变量 | 无 `.env` 文件，项目不依赖任何环境变量 |

品牌主张：让每一次洗护，都像被拥抱。页面以温柔、安心、可视化的服务体验为核心。

## 三、目录结构

```text
├── app/                      # App Router 页面与全局样式
│   ├── globals.css           # 全局样式与设计令牌（纯手写 CSS，约 25KB）
│   ├── icon.svg              # 网站图标（珊瑚色星形）
│   ├── layout.tsx            # 根布局：metadata、viewport、lang=zh-CN
│   └── page.tsx              # 唯一页面（首页），按区块拼装全部内容
├── components/               # 全部为 "use client" 交互组件
│   ├── BookingForm.tsx       # 预约表单（纯前端演示）
│   ├── Faq.tsx               # 常见问题手风琴
│   ├── Header.tsx            # 顶部导航 + 移动端菜单
│   └── Testimonials.tsx      # 客户评价轮播
├── data/
│   └── site.ts               # 全站文案与数据的唯一来源（含 TS 类型）
├── public/images/            # 页面实际引用的图片
│   ├── anime-map.png         # 二次元手绘地图（门店区块）
│   ├── grooming-care.png     # 护理照片（为什么选我们区块）
│   ├── hero-pet-grooming.png # 首屏主图
│   └── salon-interior.png    # 门店环境照片（浮动小图）
├── assets/                   # 原始图片素材备份，代码未直接引用
├── legacy-index.html         # 迁移前的旧版纯 HTML 页面，仅作参考，不要编辑
├── next.config.ts            # 仅 reactStrictMode: true
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml       # allowBuilds: unrs-resolver
├── tsconfig.json             # strict + 路径别名 @/* → 项目根
└── eslint.config.mjs         # ESLint 9 flat config
```

## 四、页面结构（app/page.tsx）

单页从上到下的区块顺序与锚点：

| 顺序 | 区块 | 锚点 | 说明 |
| --- | --- | --- | --- |
| 1 | 顶部导航 | `#top` | Header 组件，含移动端汉堡菜单 |
| 2 | 首屏 Hero | 无 | 大标题、双 CTA、主图、4.9/5 评分贴纸 |
| 3 | 信任条 | 无 | 4 项门店数据（近地铁 / 8 年 / 可视 / 用品） |
| 4 | 服务项目 | `#services` | 服务卡片网格，来自 `services` 数据 |
| 5 | 为什么选我们 | `#why-us` | 照片叠放 + 三条卖点 |
| 6 | 护理流程 | 无 | 4 步流程卡片，来自 `processSteps` |
| 7 | 客户评价 | `#reviews` | Testimonials 轮播组件 |
| 8 | 常见问题 | `#faq` | Faq 手风琴组件 |
| 9 | 门店位置 | `#map` | 手绘地图 + 高德/百度导航链接 + 门店信息 |
| 10 | 预约表单 | `#booking` | BookingForm 组件 |
| 11 | 页脚 | 无 | 品牌语 + 站内链接 |
| 12 | 悬浮按钮 | 无 | 右下角"立即预约"悬浮入口 |

导航链接只指向：`#services`、`#why-us`、`#reviews`、`#faq`、`#booking`。

## 五、组件与交互

| 组件 | 文件 | 交互行为 |
| --- | --- | --- |
| Header | `components/Header.tsx` | 移动端汉堡菜单展开/收起（useState） |
| BookingForm | `components/BookingForm.tsx` | 表单校验 `reportValidity()`，提交后显示成功提示 6 秒并重置表单；无后端请求 |
| Faq | `components/Faq.tsx` | 手风琴，同时只展开一项，默认展开第一项；带 aria-expanded / aria-controls |
| Testimonials | `components/Testimonials.tsx` | 每 5200ms 自动轮播；悬停/聚焦暂停；圆点与左右按钮切换 |

注意：这四个组件全部是客户端组件（`"use client"`），页面其余部分是服务端组件。

## 六、数据层（data/site.ts）

所有可变文案集中在此文件，导出以下只读数据（`as const`）和类型：

| 导出名 | 类型 | 用途 |
| --- | --- | --- |
| `services` | `Service[]` | 服务卡片：名称、价格、时长、描述、图标 |
| `processSteps` | `ProcessStep[]` | 护理流程 4 步 |
| `testimonials` | `Testimonial[]` | 6 条客户评价（quote / author / pet / service / rating） |
| `faqItems` | `FaqItem[]` | 4 条常见问题 |
| `storeDetails` | `StoreDetail[]` | 地址、营业时间、地铁、电话 |
| `mapLinks` | 对象 | 高德 / 百度地图导航链接 |

修改文案或价格时，只改 `data/site.ts`，不要在 `page.tsx` 里硬编码。

## 七、设计系统（app/globals.css）

CSS 变量（设计令牌）：

| 变量 | 值 | 用途 |
| --- | --- | --- |
| `--ink` | `#2f352e` | 主文字色（深墨绿） |
| `--muted` | `#72776d` | 次要文字 |
| `--paper` | `#f7f2e9` | 页面背景（暖米色） |
| `--paper-deep` | `#efe7da` | 深一档背景 |
| `--white` | `#fffdf9` | 卡片白 |
| `--sage` / `--sage-deep` | `#aabbaa` / `#566d5b` | 鼠尾草绿辅助色 |
| `--coral` / `--coral-soft` | `#e77955` / `#f5d3c4` | 珊瑚橙主强调色 |
| `--line` | `rgba(47,53,46,.13)` | 分隔线 |
| `--shadow` | 大阴影 | 卡片投影 |
| `--radius-lg` / `--radius-md` | `30px` / `18px` | 圆角 |
| `--max` | `1180px` | 内容容器最大宽度 |

其他约定：

- 标题字号用 `clamp()` 流式缩放：h1 约 46-78px，h2 约 34-54px。
- `html { scroll-behavior: smooth }`，所有跳转都是锚点平滑滚动。
- 表单控件、按钮、焦点态（coral 描边）已全局定义。
- 图片统一用 `next/image`，必须写 `width/height` 或 `fill` + `sizes`。

## 八、常用命令

```bash
pnpm install   # 安装依赖
pnpm dev       # 开发服务器，http://localhost:3000（Turbopack）
pnpm build     # 生产构建
pnpm start     # 运行生产构建
pnpm lint      # ESLint 检查（--max-warnings=0，零警告要求）
```

## 九、Git 信息

| 项 | 值 |
| --- | --- |
| 远程仓库 | https://github.com/1139365165/codex-test.git |
| 默认分支 | `main`，与 `origin/main` 同步 |
| 提交身份 | `1139365165 <66761109+1139365165@users.noreply.github.com>`（本地 git config） |

网络说明：本机直连 GitHub 不通，访问 GitHub 必须走 `v2rayN` 本地代理。Git 已配置：

```text
http.proxy = http://127.0.0.1:10808
http.sslBackend = openssl
```

推送时如果遇到连接失败，先确认 `v2rayN` 已启动且 `10808` 端口在监听。

## 十、开发注意事项

- 本项目使用的是 Next.js 16，API 和约定可能与旧版本不同。写代码前先查阅 `node_modules/next/dist/docs/` 里的对应文档，注意弃用提示。
- 路径别名：`@/*` 指向项目根目录，例如 `@/data/site`。
- TypeScript 为 strict 模式，不要用 `any` 逃避类型检查。
- 交互组件必须保留 `"use client"`；纯展示区块留在 `page.tsx` 作为服务端组件即可。
- 所有用户可见文案集中在 `data/site.ts`，改文案去那里。
- `legacy-index.html` 是旧版参考文件，不要编辑或删除。
- `assets/` 目录是素材备份，页面引用的是 `public/images/` 下的同名文件；代码只依赖 `public/`。
- `.gitignore` 已排除 `node_modules/`、`.next/`、日志、开发截图、`.codex/` 等本地产物，不要把它们提交进仓库。
