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

import { ResourceHandler } from './ResourceHandler';
import { ToolHandler } from './ToolHandler';

export class MCPServer {
  private resources: ResourceHandler;
  private tools: ToolHandler;

  constructor() {
    this.resources = new ResourceHandler();
    this.tools = new ToolHandler();
  }
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
    const resources = await this.resources.listResources();
    return { resources };
  }

  async readResource(request: { uri: string }): Promise<{ contents: Array<{ uri: string; mimeType: string; text?: string; blob?: string }> }> {
    const contents = await this.resources.readResource(request.uri);
    return { contents };
  }

  async listTools(): Promise<{ tools: Array<{ name: string; description: string; inputSchema: unknown }> }> {
    const tools = await this.tools.listTools();
    return { tools };
  }

  async callTool(request: { name: string; arguments: Record<string, unknown> }): Promise<{ content: unknown[]; isError?: boolean }> {
    const content = await this.tools.callTool(request.name, request.arguments);
    return { content, isError: false };
  }
}
