---
title: 邮箱分流 Agent：分类、草稿与升级
scene: 个人效率
audience: 创始人 / 客服负责人 / 忙碌知识工作者
tools:
  - n8n
  - Gmail / IMAP
  - Claude（或等价 LLM）
difficulty: 进阶
summary: 定时拉取邮件，Agent 分类（发票/支持/销售/其他），发票入库、支持建任务、其余打标，并起草需回复的草稿。
source: https://n8n.io/workflows/20399-triage-gmail-inbox-label-emails-and-draft-replies-with-openai/
sourceName: n8n Workflow Templates
steps:
  - 定义分类标签与「必须人工」规则（金钱、法务、投诉）
  - 用邮件触发器拉取主题、发件人、正文与附件元数据
  - LLM 分类 + 工具调用：写 Notion/任务系统、打 Gmail 标签
  - 对需回复类生成草稿，不自动发送
  - 每周复盘误分类样本，迭代提示词
---

对应 n8n 社区模板：Gmail 触发 → LLM 分类与草稿 → 仅创建草稿/打标签，不自动发送。落地时请按自己的标签体系改分类桶。
