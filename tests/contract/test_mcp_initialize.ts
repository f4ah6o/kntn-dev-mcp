import { describe, it, expect } from 'vitest';
import { MCPServer } from '../../src/server/MCPServer';
import { FileStorageService } from '../../src/services/FileStorageService';
import { UpdateService } from '../../src/services/UpdateService';

describe('MCP initialize contract', () => {
  it('returns protocolVersion, capabilities, and serverInfo', async () => {
    const storage = new FileStorageService();
    const updateService = new UpdateService(storage);
    const server = new MCPServer(storage, updateService);
    const request = {
      protocolVersion: '2025-03-26',
      capabilities: {
        resources: {},
        tools: {},
      },
    };

    // Act
    // Implementation should satisfy the contract in
    // specs/001-kintone-customize-mcp/contracts/mcp-server.json
    const response = await server.initialize(request as any);

    // Assert
    expect(response).toHaveProperty('protocolVersion', '2025-03-26');
    expect(response).toHaveProperty('capabilities');
    expect(response.capabilities).toHaveProperty('resources');
    expect(response.capabilities).toHaveProperty('tools');
    expect(response).toHaveProperty('serverInfo');
    expect(response.serverInfo).toEqual(
      expect.objectContaining({ name: expect.any(String), version: expect.any(String) }),
    );
  });
});

