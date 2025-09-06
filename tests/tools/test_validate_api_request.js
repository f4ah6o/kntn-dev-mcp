import { describe, it, expect } from "vitest";
import { ValidateApiRequest } from "../../src/tools/ValidateApiRequest";
describe("validate_api_request tool", () => {
	it("exposes name, inputSchema, and run({endpoint, method, requestBody}) returns result", async () => {
		expect(ValidateApiRequest.name).toBe("validate_api_request");
		expect(typeof ValidateApiRequest.description).toBe("string");
		expect(typeof ValidateApiRequest.inputSchema).toBe("object");
		const result = await ValidateApiRequest.run({
			endpoint: "/k/v1/records.json",
			method: "POST",
			requestBody: { app: 1, records: [] },
		});
		expect(typeof result).toBe("object");
	});
});
//# sourceMappingURL=test_validate_api_request.js.map
