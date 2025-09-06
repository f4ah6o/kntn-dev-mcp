import { describe, it, expect } from "vitest";
import { GetUpdateInfo } from "../../src/tools/GetUpdateInfo";
describe("Integration: CICD update process", () => {
	it("reports update info and source versions", async () => {
		const info = await GetUpdateInfo.run({
			includeHistory: false,
			includeSourceVersions: true,
		});
		expect(typeof info).toBe("object");
	});
});
//# sourceMappingURL=test_cicd_update.js.map
