import { describe, it, expect } from "vitest";
import { SearchFieldTypes } from "../../src/tools/SearchFieldTypes";
describe("search_field_types tool", () => {
	it("exposes name, inputSchema, and run() returns array", async () => {
		expect(SearchFieldTypes.name).toBe("search_field_types");
		expect(typeof SearchFieldTypes.description).toBe("string");
		expect(typeof SearchFieldTypes.inputSchema).toBe("object");
		const result = await SearchFieldTypes.run({
			fieldType: "SINGLE_LINE_TEXT",
		});
		expect(Array.isArray(result)).toBe(true);
	});
});
//# sourceMappingURL=test_search_field_types.js.map
