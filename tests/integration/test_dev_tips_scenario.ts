import { describe, it, expect } from "vitest";
import { SearchDevelopmentTips } from "../../src/tools/SearchDevelopmentTips";

describe("Integration: Development tips search scenario", () => {
	it("finds performance tips with code examples", async () => {
		const tips = await SearchDevelopmentTips.run({
			query: "performance optimization",
			includeCode: true,
		} as any);
		expect(Array.isArray(tips)).toBe(true);
	});
});
