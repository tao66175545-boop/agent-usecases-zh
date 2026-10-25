---
title: 周报 Agent：多源指标合成管理层摘要
scene: 运营
audience: 运营负责人 / 创业团队
tools:
  - n8n
  - ChatGPT / Claude
  - Slack / 邮件
difficulty: 高阶
summary: 定时拉取分析与支付等指标，先规整成简报再让 LLM 写叙事周报，同步到 Slack 与邮箱。
source: https://n8n.io/workflows/14332-generate-weekly-ai-business-digest-from-google-sheets-with-gpt-4o-and-send-to-slack-and-email/
sourceName: n8n Workflow Templates
steps:
  - 选定核心指标与环比口径，避免把原始 JSON 直接塞给模型
  - 用工作流拉取各 API，用代码节点压成短 Markdown brief
  - LLM 生成「发生了什么 / 为什么 / 下周建议」三段
  - 分发到 Slack 频道与干系人邮箱，并归档到 Notion
  - 人工核对异常尖刺后再对外转发
---

对应 n8n 社区模板：Sheets 指标 → 代码节点算环比 → LLM 写叙事周报 → 同步 Slack 与邮件。上线前请人工核对异常尖刺，勿未校验就自动群发。
