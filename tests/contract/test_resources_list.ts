import { describe, expect, it } from "vitest";
import { MCPServer } from "../../src/server/MCPServer";
import { FileStorageService } from "../../src/services/FileStorageService";
import { UpdateService } from "../../src/services/UpdateService";

describe("MCP resources list contract", () => {
	it("returns an array of resources with uri and name", async () => {
		const storage = new FileStorageService();
		const updateService = new UpdateService(storage);
		const server = new MCPServer(storage, updateService);

		const response = await server.listResources();

		expect(response).toHaveProperty("resources");
		expect(Array.isArray(response.resources)).toBe(true);
		if (response.resources.length > 0) {
			const r = response.resources[0] as { uri: unknown; name: unknown };
			expect(typeof r.uri).toBe("string");
			expect(typeof r.name).toBe("string");
		}
	});
});
