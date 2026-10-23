---
title: Cursor Agent：设计稿转前端实现
scene: 设计
audience: 设计师 / 前端 / 独立开发者
tools:
  - Cursor
  - Figma（可选 MCP）
difficulty: 入门
summary: 把设计稿截图或 Figma 资源丢给 Cursor Agent，按布局/色板/间距生成可运行 UI，再迭代微调。
source: https://cursor.com/blog/agent-best-practices
sourceName: Cursor Blog
steps:
  - 准备清晰的设计截图，或接入 Figma MCP
  - 在 Cursor Agent 中说明目标框架（如 Astro / React）与约束
  - 粘贴或引用图片，要求按布局、颜色、间距实现
  - 本地预览后，针对偏差截图继续让 Agent 修正
  - 人工核对可访问性与响应式断点
---

对应 Cursor《Best practices for coding with agents》中的 Design to code / 视觉调试模式。适合原型与内部工具，上线前仍需人工评审。
