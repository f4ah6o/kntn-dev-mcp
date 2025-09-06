export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: unknown;
}

export class ToolHandler {
  async listTools(): Promise<ToolDefinition[]> {
    return [];
  }

  async callTool(name: string, args: Record<string, unknown>): Promise<unknown[]> {
    return [];
  }
}

