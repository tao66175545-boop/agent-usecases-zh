---
title: 编码 Agent TDD 闭环：先测后实现
scene: 编程
audience: 软件工程师
tools:
  - Cursor
difficulty: 进阶
summary: 按 TDD 顺序让 Agent 先写失败测试，再迭代实现直到测试全绿，降低大段幻觉代码风险。
source: https://cursor.com/blog/agent-best-practices
sourceName: Cursor Blog
steps:
  - 写清输入输出样例，明确要求「先测后码」
  - 让 Agent 只写测试并确认失败
  - 提交测试后，再要求实现且禁止改测试
  - 循环跑测直到全绿
  - 人工审查边界条件与测试质量
---

对应 Cursor Agent 最佳实践中的 Test-driven development 工作流。适合有明确验收标准的功能切片。
