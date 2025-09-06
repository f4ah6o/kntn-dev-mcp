import { describe, expect, it } from "vitest";
import { SearchFieldTypes } from "../../src/tools/SearchFieldTypes";

describe("search_field_types tool", () => {
	it("exposes name, inputSchema, and run() returns array", async () => {
		expect(SearchFieldTypes.name).toBe("search_field_types");
		expect(typeof SearchFieldTypes.description).toBe("string");
		expect(typeof SearchFieldTypes.inputSchema).toBe("object");

		const result = await SearchFieldTypes.run({
			fieldType: "SINGLE_LINE_TEXT",
		} as Record<string, unknown>);
		expect(Array.isArray(result)).toBe(true);
	});
});
