export interface Resource {
	uri: string;
	name: string;
	description?: string;
	mimeType?: string;
}

export interface ResourceContent {
	uri: string;
	mimeType: string;
	text?: string;
	blob?: string;
}

import { FileStorageService } from "../services/FileStorageService.js";

export class ResourceHandler {
	private storage: FileStorageService;

	constructor(storage: FileStorageService) {
		this.storage = storage;
	}

	async listResources(): Promise<Resource[]> {
		return [
			{
				uri: "kintone://api/specifications",
				name: "Kintone API Specifications",
				description: "Complete API specification catalog",
				mimeType: "application/json",
			},
			{
				uri: "kintone://api/field-types",
				name: "Kintone Field Types",
				description: "Field types documentation",
				mimeType: "application/json",
			},
			{
				uri: "kintone://tips/all",
				name: "Development Tips",
				description: "All development tips",
				mimeType: "application/json",
			},
		];
	}

	async readResource(uri: string): Promise<ResourceContent[]> {
		try {
			let data: any;

			switch (uri) {
				case "kintone://api/specifications":
					data = await this.storage.loadApiSpecs();
					break;
				case "kintone://api/field-types":
					data = await this.storage.loadFieldTypes();
					break;
				case "kintone://tips/all":
					data = await this.storage.loadDevelopmentTips();
					break;
				default:
					throw new Error(`Unknown resource: ${uri}`);
			}

			return [
				{
					uri,
					mimeType: "application/json",
					text: JSON.stringify(data, null, 2),
				},
			];
		} catch (error) {
			throw new Error(`Failed to read resource ${uri}: ${error}`);
		}
	}
}
