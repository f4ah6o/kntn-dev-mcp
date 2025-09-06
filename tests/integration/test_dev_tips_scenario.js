import { describe, it, expect } from "vitest";
import { SearchDevelopmentTips } from "../../src/tools/SearchDevelopmentTips";
describe("Integration: Development tips search scenario", () => {
	it("finds performance tips with code examples", async () => {
		const tips = await SearchDevelopmentTips.run({
			query: "performance optimization",
			includeCode: true,
		});
		expect(Array.isArray(tips)).toBe(true);
	});
});
//# sourceMappingURL=test_dev_tips_scenario.js.map
