---
title: 用 agent-qa 将用户流程变为可追溯的回归测试
scene: 编程
audience: 测试工程师 / 软件开发团队
tools:
  - agent-qa
  - Claude Code
  - Codex
difficulty: 进阶
summary: 用自然语言编写 Web 或移动端回归测试，结合运行证据、memidex 持久记忆与经验证的自我改进定位问题。
source: https://vostride.com/docs/agent-qa/coding-agents
sourceName: vostride 官方文档
steps:
  - 准备 Node.js 24+ 和独立测试项目，按官方指南配置模型连接及获准测试的应用；移动端另需 Appium 和设备环境
  - 选择 Claude Code 或 Codex，按官方指南配置 agent-qa MCP，并安装软件包内附的官方技能
  - 描述用户操作与验收条件，让 agent-qa-authoring 创建测试；使用工具返回的 ID，先验证草稿再写入
  - 检查测试文件差异后，通过 agent_qa_start_run 按文件路径或模式启动测试
  - 用 agent-qa-result-triage 和 agent-qa-knowledge 查看运行概览、失败步骤与截图等已记录证据，保留 run ID 便于追溯
  - 检查该次运行使用和产生的 memidex 知识及其来源、验证状态；复核修复后再运行同一用例
draft: false
---

依据官方 [编码 Agent 接入指南](https://vostride.com/docs/agent-qa/coding-agents) 和公开仓库的 [authoring](https://github.com/vostride/agent-qa/blob/main/skills/agent-qa-authoring/SKILL.md)、[knowledge](https://github.com/vostride/agent-qa/blob/main/skills/agent-qa-knowledge/SKILL.md) 技能整理。Claude Code 与 Codex 任选其一。本条目提供可执行流程，未声称已在投稿时完成真实应用测试。

agent-qa 会写入测试项目并操作目标应用。使用获准的测试环境与临时、最小权限账号；截图和录屏可能包含应用数据。模型提供商可能收费，运行要求与许可证以官方文档和仓库为准。
