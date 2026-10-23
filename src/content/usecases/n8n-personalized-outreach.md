---
title: 用 n8n Agent 批量个性化销售触达
scene: 运营
audience: 销售 / 增长运营
tools:
  - n8n
  - Google Sheets
  - LLM（如 OpenAI / Claude）
difficulty: 进阶
summary: 从线索表出发，让 Agent 访问官网、提炼卖点、起草个性化外联邮件并打分，减少模板化冷邮件。
source: https://blog.n8n.io/ai-agents-examples/
sourceName: n8n Blog
steps:
  - 在 Google Sheet 准备 prospect URL 列表与基础字段
  - 在 n8n 用表格触发或定时拉取新线索
  - 接 AI Agent：抓取/分析官网信息，生成个性化邮件草稿与线索评分
  - 把草稿写回表格或 CRM，高分线索优先人工发送
  - 人工抽检语气与事实，避免幻觉卖点
---

改编自 n8n 官方博文中的 Marketing AI outreach 思路。落地时务必加人工审核，不要自动群发未校验文案。
