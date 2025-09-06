import { describe, it, expect } from 'vitest';
import { MCPServer } from '../../src/server/MCPServer';
describe('MCP tools call contract', () => {
    it('executes a tool and returns content array', async () => {
        const server = new MCPServer();
        const request = {
            name: 'search_api_specs',
            arguments: {
                query: 'records',
            },
        };
        const response = await server.callTool(request);
        expect(response).toHaveProperty('content');
        expect(Array.isArray(response.content)).toBe(true);
        if ('isError' in response) {
            expect(response.isError).toBe(false);
        }
    });
});
//# sourceMappingURL=test_tools_call.js.map