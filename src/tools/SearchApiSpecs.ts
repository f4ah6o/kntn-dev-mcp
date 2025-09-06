export const SearchApiSpecs = {
  name: 'search_api_specs',
  description: 'Search kintone API specifications by endpoint, method, or keyword',
  inputSchema: {
    type: 'object',
    properties: {
      query: { type: 'string' },
      category: { type: 'string' },
      method: { type: 'string' },
      version: { type: 'string' },
      includeDeprecated: { type: 'boolean' },
    },
    required: ['query'],
    additionalProperties: false,
  },
  async run(args: { query: string }): Promise<unknown[]> {
    void args;
    return [];
  },
};

export type SearchApiSpecsTool = typeof SearchApiSpecs;

