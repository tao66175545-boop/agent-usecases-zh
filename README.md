# Agent用例导航（agent-usecases-zh）

中文 AI Agent 用例导航静态站：精选可复现玩法（场景 / 工具栈 / 步骤 / 来源）。

对标公开目录站思路，内容用 Markdown 维护，禁止编造来源链接。

## 技术栈

- [Astro 4](https://astro.build/) 静态输出
- Content Collections（`src/content/usecases/`）
- 可部署到 Vercel / 任意静态托管

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:4321`）。

## 构建与预览

```bash
npm run build    # 输出到 dist/
npm run preview  # 预览生产构建
```

## 添加用例

1. 复制 `src/content/usecases/_template.md`（该文件 `draft: true`，不会上线）
2. 重命名为 `your-slug.md`，填写 frontmatter，设 `draft: false`
3. **`source` 必须是真实公开 URL，或明确写 `待补链接`**
4. 本地 `npm run build` 确认通过

字段说明见模板正文表格。

## 部署到 Vercel

1. 将本仓库推送到 GitHub（由维护者操作；本脚手架不负责 push）
2. 在 [Vercel](https://vercel.com/) Import 该仓库
3. Framework Preset 选 **Astro**，Build Command：`npm run build`，Output：`dist`
4. 部署后使用 Vercel 预览域名；自定义域名稍后配置

无需 Serverless：当前订阅页为前端占位，**未接入 Resend / 邮件发送**。

## 脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 开发服务器 |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建产物 |

## 目录结构（简）

```
src/
  content/usecases/   # 用例 Markdown
  components/         # Header / Card 等
  layouts/            # 页面布局
  pages/              # 路由：/  /subscribe  /usecases/[slug]
  styles/global.css
public/favicon.svg
```
