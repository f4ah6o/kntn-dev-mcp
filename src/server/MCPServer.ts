export interface InitializeRequest {
  protocolVersion: string;
  capabilities: {
    resources?: Record<string, unknown>;
    tools?: Record<string, unknown>;
  };
}

export interface InitializeResponse {
  protocolVersion: string;
  capabilities: {
    resources: Record<string, unknown>;
    tools: Record<string, unknown>;
  };
  serverInfo: {
    name: string;
    version: string;
    description?: string;
  };
}

export class MCPServer {
  async initialize(req: InitializeRequest): Promise<InitializeResponse> {
    return {
      protocolVersion: req.protocolVersion,
      capabilities: {
        resources: req.capabilities.resources ?? {},
        tools: req.capabilities.tools ?? {},
      },
      serverInfo: {
        name: 'kintone-mcp-server',
        version: '1.0.0',
        description: 'MCP server for kintone development support',
      },
    };
  }

  async listResources(): Promise<{ resources: Array<{ uri: string; name: string; description?: string; mimeType?: string }> }> {
    // Minimal stub; actual population via ResourceHandler in later tasks
    return { resources: [] };
  }

  async readResource(request: { uri: string }): Promise<{ contents: Array<{ uri: string; mimeType: string; text?: string; blob?: string }> }> {
    // Minimal stub; actual resolution via ResourceHandler in later tasks
    return { contents: [] };
  }

  async listTools(): Promise<{ tools: Array<{ name: string; description: string; inputSchema: unknown }> }> {
    // Minimal stub; actual population via ToolHandler in later tasks
    return { tools: [] };
  }

  async callTool(request: { name: string; arguments: Record<string, unknown> }): Promise<{ content: unknown[]; isError?: boolean }> {
    // Minimal stub; actual execution via ToolHandler in later tasks
    return { content: [], isError: false };
  }
}

