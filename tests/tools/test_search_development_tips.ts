import { describe, it, expect } from 'vitest';
import { SearchDevelopmentTips } from '../../src/tools/SearchDevelopmentTips';

describe('search_development_tips tool', () => {
  it('exposes name, inputSchema, and run() returns array', async () => {
    expect(SearchDevelopmentTips.name).toBe('search_development_tips');
    expect(typeof SearchDevelopmentTips.description).toBe('string');
    expect(typeof SearchDevelopmentTips.inputSchema).toBe('object');

    const result = await SearchDevelopmentTips.run({ query: 'performance' } as any);
    expect(Array.isArray(result)).toBe(true);
  });
});

