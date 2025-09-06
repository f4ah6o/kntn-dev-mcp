import { describe, it, expect } from "vitest";
import { MCPServer } from "../../src/server/MCPServer";
import { FileStorageService } from "../../src/services/FileStorageService";
import { UpdateService } from "../../src/services/UpdateService";

describe("MCP tools call contract", () => {
	it("executes a tool and returns content array", async () => {
		const storage = new FileStorageService();
		const updateService = new UpdateService(storage);
		const server = new MCPServer(storage, updateService);
		const request = {
			name: "search_api_specs",
			arguments: {
				query: "records",
			},
		};

		const response = await server.callTool(request as any);

		expect(response).toHaveProperty("content");
		expect(Array.isArray(response.content)).toBe(true);
		if ("isError" in response) {
			expect(response.isError).toBe(false);
		}
	});
});
