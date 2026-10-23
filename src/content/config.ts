import { defineCollection, z } from 'astro:content';

const usecases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    scene: z.string(),
    audience: z.string(),
    tools: z.array(z.string()),
    difficulty: z.enum(['入门', '进阶', '高阶']),
    summary: z.string(),
    /** 真实公开 URL，或明确写「待补链接」 */
    source: z.string(),
    /** 来源站点名（有真实链接时建议填写） */
    sourceName: z.string().optional(),
    steps: z.array(z.string()).min(3).max(8),
    draft: z.boolean().default(false),
  }),
});

export const collections = { usecases };
