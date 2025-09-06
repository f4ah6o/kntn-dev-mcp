import { readFile, writeFile, access } from "fs/promises";
import { join } from "path";

export class FileStorageService {
	private dataDir: string;

	constructor(dataDir = "data") {
		this.dataDir = dataDir;
	}

	async loadApiSpecs(): Promise<any[]> {
		try {
			const filePath = join(this.dataDir, "api-specs.json");
			const data = await readFile(filePath, "utf-8");
			return JSON.parse(data);
		} catch {
			return []; // Return empty array if file doesn't exist
		}
	}

	async loadFieldTypes(): Promise<any[]> {
		try {
			const filePath = join(this.dataDir, "field-types.json");
			const data = await readFile(filePath, "utf-8");
			return JSON.parse(data);
		} catch {
			return []; // Return empty array if file doesn't exist
		}
	}

	async loadDevelopmentTips(): Promise<any[]> {
		try {
			const filePath = join(this.dataDir, "development-tips.json");
			const data = await readFile(filePath, "utf-8");
			return JSON.parse(data);
		} catch {
			return []; // Return empty array if file doesn't exist
		}
	}

	async saveApiSpecs(specs: any[]): Promise<void> {
		const filePath = join(this.dataDir, "api-specs.json");
		await writeFile(filePath, JSON.stringify(specs, null, 2));
	}

	async saveFieldTypes(types: any[]): Promise<void> {
		const filePath = join(this.dataDir, "field-types.json");
		await writeFile(filePath, JSON.stringify(types, null, 2));
	}

	async saveDevelopmentTips(tips: any[]): Promise<void> {
		const filePath = join(this.dataDir, "development-tips.json");
		await writeFile(filePath, JSON.stringify(tips, null, 2));
	}
}
