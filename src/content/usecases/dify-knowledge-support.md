---
title: Dify 知识库客服：检索后作答并升级人工
scene: 运营
audience: 中小团队客服 / 社群运营
tools:
  - Dify
  - 向量知识库
  - 工单系统（可选）
difficulty: 进阶
summary: 把产品文档与 FAQ 灌进 Dify，聊天 Agent 先检索再回答，低置信或敏感问题自动转人工。
source: https://docs.dify.ai/en/use-dify/knowledge/integrate-knowledge-within-application
sourceName: Dify Docs
steps:
  - 整理 FAQ / 帮助中心文档，分块清洗后导入知识库
  - 配置检索增强对话，要求回答附「依据片段」
  - 设定拒答与升级规则（退款、账号安全等）
  - 灰度到内部群或小流量渠道，记录差评样例
  - 每周把未覆盖问题补进知识库
---

依据 Dify 官方「把知识库接入应用」流程：建知识库 → Chatbot 加 Context → 开 Citation → 调试后发布。升级人工需另接工单/人工渠道规则。
