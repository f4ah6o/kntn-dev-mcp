export interface ToolDefinition {
	name: string;
	description: string;
	inputSchema: unknown;
}

import { GetApiEndpoint } from "../tools/GetApiEndpoint.js";
import { GetUpdateInfo } from "../tools/GetUpdateInfo.js";
import { SearchApiSpecs } from "../tools/SearchApiSpecs.js";
import { SearchDevelopmentTips } from "../tools/SearchDevelopmentTips.js";
import { SearchFieldTypes } from "../tools/SearchFieldTypes.js";
import { ValidateApiRequest } from "../tools/ValidateApiRequest.js";

export class ToolHandler {
	async listTools(): Promise<ToolDefinition[]> {
		return [
			{
				name: SearchApiSpecs.name,
				description: SearchApiSpecs.description,
				inputSchema: SearchApiSpecs.inputSchema,
			},
			{
				name: SearchFieldTypes.name,
				description: SearchFieldTypes.description,
				inputSchema: SearchFieldTypes.inputSchema,
			},
			{
				name: SearchDevelopmentTips.name,
				description: SearchDevelopmentTips.description,
				inputSchema: SearchDevelopmentTips.inputSchema,
			},
			{
				name: GetApiEndpoint.name,
				description: GetApiEndpoint.description,
				inputSchema: GetApiEndpoint.inputSchema,
			},
			{
				name: ValidateApiRequest.name,
				description: ValidateApiRequest.description,
				inputSchema: ValidateApiRequest.inputSchema,
			},
			{
				name: GetUpdateInfo.name,
				description: GetUpdateInfo.description,
				inputSchema: GetUpdateInfo.inputSchema,
			},
		];
	}

	async callTool(
		name: string,
		args: Record<string, unknown>,
	): Promise<unknown[]> {
		try {
			let result: unknown;

			switch (name) {
				case "search_api_specs":
					result = await SearchApiSpecs.run(args as Record<string, unknown>);
					break;
				case "search_field_types":
					result = await SearchFieldTypes.run(args as Record<string, unknown>);
					break;
				case "search_development_tips":
					result = await SearchDevelopmentTips.run(
						args as Record<string, unknown>,
					);
					break;
				case "get_api_endpoint":
					result = await GetApiEndpoint.run(args as Record<string, unknown>);
					break;
				case "validate_api_request":
					result = await ValidateApiRequest.run(
						args as Record<string, unknown>,
					);
					break;
				case "get_update_info":
					result = await GetUpdateInfo.run(args as Record<string, unknown>);
					break;
				default:
					throw new Error(`Unknown tool: ${name}`);
			}

			return [
				{
					type: "text",
					text:
						typeof result === "string"
							? result
							: JSON.stringify(result, null, 2),
				},
			];
		} catch (error) {
			return [
				{
					type: "text",
					text: `Error: ${error instanceof Error ? error.message : String(error)}`,
				},
			];
		}
	}
}
