import { describe, it, expect } from 'vitest';
import { MCPServer } from '../../src/server/MCPServer';
describe('MCP resources list contract', () => {
    it('returns an array of resources with uri and name', async () => {
        const server = new MCPServer();
        const response = await server.listResources();
        expect(response).toHaveProperty('resources');
        expect(Array.isArray(response.resources)).toBe(true);
        if (response.resources.length > 0) {
            const r = response.resources[0];
            expect(typeof r.uri).toBe('string');
            expect(typeof r.name).toBe('string');
        }
    });
});
//# sourceMappingURL=test_resources_list.js.map