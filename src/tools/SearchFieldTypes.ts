export const SearchFieldTypes = {
  name: 'search_field_types',
  description: 'Search and retrieve kintone field type specifications',
  inputSchema: {
    type: 'object',
    properties: {
      fieldType: { type: 'string' },
      category: { type: 'string' },
      includeProperties: { type: 'boolean', default: true },
      includeConstraints: { type: 'boolean', default: true },
      includeExamples: { type: 'boolean', default: false },
    },
    additionalProperties: false,
  },
  async run(_args: Record<string, unknown>): Promise<unknown[]> {
    return [];
  },
};

export type SearchFieldTypesTool = typeof SearchFieldTypes;

