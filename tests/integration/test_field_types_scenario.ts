import { describe, it, expect } from 'vitest';
import { MCPServer } from '../../src/server/MCPServer';
import { SearchFieldTypes } from '../../src/tools/SearchFieldTypes';

describe('Integration: Field types documentation scenario', () => {
  it('reads field types resource and searches specific field', async () => {
    const server = new MCPServer();

    const resource = await server.readResource({ uri: 'kintone://api/field-types' } as any);
    expect(resource).toHaveProperty('contents');
    expect(Array.isArray(resource.contents)).toBe(true);

    const result = await SearchFieldTypes.run({ fieldType: 'SINGLE_LINE_TEXT' } as any);
    expect(Array.isArray(result)).toBe(true);
  });
});

