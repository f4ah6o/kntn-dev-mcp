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

import type { FileStorageService } from "../services/FileStorageService.js";
import type { UpdateService } from "../services/UpdateService.js";
import { ResourceHandler } from "./ResourceHandler.js";
import { ToolHandler } from "./ToolHandler.js";

export class MCPServer {
	private resources: ResourceHandler;
	private tools: ToolHandler;

	constructor(storage: FileStorageService, updateService: UpdateService) {
		this.resources = new ResourceHandler(storage);
		this.tools = new ToolHandler();
	}

	async start(): Promise<void> {
		// Initialize MCP server connection
		console.log("MCP Server initialized with kintone development support");
	}
	async initialize(req: InitializeRequest): Promise<InitializeResponse> {
		return {
			protocolVersion: req.protocolVersion,
			capabilities: {
				resources: req.capabilities.resources ?? {},
				tools: req.capabilities.tools ?? {},
			},
			serverInfo: {
				name: "kintone-mcp-server",
				version: "1.0.0",
				description: "MCP server for kintone development support",
			},
		};
	}

	async listResources(): Promise<{
		resources: Array<{
			uri: string;
			name: string;
			description?: string;
			mimeType?: string;
		}>;
	}> {
		const resources = await this.resources.listResources();
		return { resources };
	}

	async readResource(request: { uri: string }): Promise<{
		contents: Array<{
			uri: string;
			mimeType: string;
			text?: string;
			blob?: string;
		}>;
	}> {
		const contents = await this.resources.readResource(request.uri);
		return { contents };
	}

	async listTools(): Promise<{
		tools: Array<{ name: string; description: string; inputSchema: unknown }>;
	}> {
		const tools = await this.tools.listTools();
		return { tools };
	}

	async callTool(request: {
		name: string;
		arguments: Record<string, unknown>;
	}): Promise<{ content: unknown[]; isError?: boolean }> {
		const content = await this.tools.callTool(request.name, request.arguments);
		return { content, isError: false };
	}
}
