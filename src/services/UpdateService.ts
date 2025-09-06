import type { FileStorageService } from "./FileStorageService.js";

export class UpdateService {
	private storage: FileStorageService;

	constructor(storage: FileStorageService) {
		this.storage = storage;
	}

	async updateFromSources(): Promise<void> {
		// Stub implementation - in production, this would fetch from:
		// - https://github.com/kintone/rest-api-spec
		// - https://cybozu.dev/ja/kintone/docs/overview/field-types/
		// - https://cybozu.dev/ja/kintone/tips/development/

		const mockApiSpecs = [
			{
				id: "get-records",
				name: "Get Records",
				method: "GET",
				endpoint: "/k/v1/records.json",
				description: "Get records from a kintone app",
				category: "records",
			},
		];

		const mockFieldTypes = [
			{
				type: "SINGLE_LINE_TEXT",
				name: "Single-line text",
				description: "A field for inputting a single line of text",
				category: "basic",
			},
		];

		const mockTips = [
			{
				id: "bulk-operations",
				title: "Use Bulk Operations for Better Performance",
				category: "performance",
				content:
					"When working with many records, use bulk APIs instead of individual requests.",
			},
		];

		await this.storage.saveApiSpecs(mockApiSpecs);
		await this.storage.saveFieldTypes(mockFieldTypes);
		await this.storage.saveDevelopmentTips(mockTips);
	}

	async getUpdateInfo(): Promise<unknown> {
		return {
			lastUpdate: new Date().toISOString(),
			nextUpdate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
			status: "up-to-date",
		};
	}
}
