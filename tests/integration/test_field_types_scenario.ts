import { describe, it, expect } from "vitest";
import { MCPServer } from "../../src/server/MCPServer";
import { SearchFieldTypes } from "../../src/tools/SearchFieldTypes";
import { FileStorageService } from "../../src/services/FileStorageService";
import { UpdateService } from "../../src/services/UpdateService";

describe("Integration: Field types documentation scenario", () => {
	it("reads field types resource and searches specific field", async () => {
		const storage = new FileStorageService();
		const updateService = new UpdateService(storage);
		const server = new MCPServer(storage, updateService);

		const resource = await server.readResource({
			uri: "kintone://api/field-types",
		} as any);
		expect(resource).toHaveProperty("contents");
		expect(Array.isArray(resource.contents)).toBe(true);

		const result = await SearchFieldTypes.run({
			fieldType: "SINGLE_LINE_TEXT",
		} as any);
		expect(Array.isArray(result)).toBe(true);
	});
});
