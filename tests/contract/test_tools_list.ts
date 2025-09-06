import { describe, it, expect } from 'vitest';
import { MCPServer } from '../../src/server/MCPServer';

describe('MCP tools list contract', () => {
  it('returns an array of tools with name, description, and inputSchema', async () => {
    const server = new MCPServer();

    const response = await server.listTools();

    expect(response).toHaveProperty('tools');
    expect(Array.isArray(response.tools)).toBe(true);
    if (response.tools.length > 0) {
      const t = response.tools[0] as any;
      expect(typeof t.name).toBe('string');
      expect(typeof t.description).toBe('string');
      expect(typeof t.inputSchema).toBe('object');
    }
  });
});

