#!/usr/bin/env node

import { MCPServer } from "./server/MCPServer.js";
import { FileStorageService } from "./services/FileStorageService.js";
import { UpdateService } from "./services/UpdateService.js";

async function main() {
	try {
		const storage = new FileStorageService();
		const updateService = new UpdateService(storage);

		// Initialize sample data if needed
		await updateService.updateFromSources();

		const server = new MCPServer(storage, updateService);
		await server.start();

		console.log("Kintone MCP Server started successfully");
	} catch (error) {
		console.error("Failed to start MCP Server:", error);
		process.exit(1);
	}
}

if (import.meta.url === `file://${process.argv[1]}`) {
	main();
}
