import { describe, expect, it } from "vitest";
import { MCPServer } from "../../src/server/MCPServer";
import { FileStorageService } from "../../src/services/FileStorageService";
import { UpdateService } from "../../src/services/UpdateService";

describe("MCP tools list contract", () => {
	it("returns an array of tools with name, description, and inputSchema", async () => {
		const storage = new FileStorageService();
		const updateService = new UpdateService(storage);
		const server = new MCPServer(storage, updateService);

		const response = await server.listTools();

		expect(response).toHaveProperty("tools");
		expect(Array.isArray(response.tools)).toBe(true);
		if (response.tools.length > 0) {
			const t = response.tools[0] as {
				name: unknown;
				description: unknown;
				inputSchema: unknown;
			};
			expect(typeof t.name).toBe("string");
			expect(typeof t.description).toBe("string");
			expect(typeof t.inputSchema).toBe("object");
		}
	});
});
