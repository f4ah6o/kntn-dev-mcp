import { describe, it, expect } from 'vitest';
import { MCPServer } from '../../src/server/MCPServer';

describe('MCP resources read contract', () => {
  it('returns content list with uri and mimeType for a known resource', async () => {
    const server = new MCPServer();
    const request = { uri: 'kintone://api/field-types' };

    const response = await server.readResource(request as any);

    expect(response).toHaveProperty('contents');
    expect(Array.isArray(response.contents)).toBe(true);
    if (response.contents.length > 0) {
      const c = response.contents[0] as any;
      expect(typeof c.uri).toBe('string');
      expect(typeof c.mimeType).toBe('string');
    }
  });
});

