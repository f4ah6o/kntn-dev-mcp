export const SearchDevelopmentTips = {
  name: 'search_development_tips',
  description: 'Search kintone development tips and best practices',
  inputSchema: {
    type: 'object',
    properties: {
      query: { type: 'string' },
      category: { type: 'string' },
      difficulty: { type: 'string' },
      includeCode: { type: 'boolean', default: true },
      maxResults: { type: 'integer', default: 10 },
    },
    required: ['query'],
    additionalProperties: false,
  },
  async run(_args: Record<string, unknown>): Promise<unknown[]> {
    return [];
  },
};

export type SearchDevelopmentTipsTool = typeof SearchDevelopmentTips;

