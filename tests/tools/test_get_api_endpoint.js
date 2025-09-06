import { describe, it, expect } from "vitest";
import { GetApiEndpoint } from "../../src/tools/GetApiEndpoint";
describe("get_api_endpoint tool", () => {
	it("exposes name, inputSchema, and run({endpoint, method}) returns object", async () => {
		expect(GetApiEndpoint.name).toBe("get_api_endpoint");
		expect(typeof GetApiEndpoint.description).toBe("string");
		expect(typeof GetApiEndpoint.inputSchema).toBe("object");
		const result = await GetApiEndpoint.run({
			endpoint: "/k/v1/records.json",
			method: "GET",
		});
		expect(typeof result).toBe("object");
	});
});
//# sourceMappingURL=test_get_api_endpoint.js.map
