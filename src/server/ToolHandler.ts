export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: unknown;
}

import { FileStorageService } from '../services/FileStorageService.js';
import { UpdateService } from '../services/UpdateService.js';
import { SearchApiSpecs } from '../tools/SearchApiSpecs.js';
import { SearchFieldTypes } from '../tools/SearchFieldTypes.js';
import { SearchDevelopmentTips } from '../tools/SearchDevelopmentTips.js';
import { GetApiEndpoint } from '../tools/GetApiEndpoint.js';
import { ValidateApiRequest } from '../tools/ValidateApiRequest.js';
import { GetUpdateInfo } from '../tools/GetUpdateInfo.js';

export class ToolHandler {
  private storage: FileStorageService;
  private updateService: UpdateService;

  constructor(storage: FileStorageService, updateService: UpdateService) {
    this.storage = storage;
    this.updateService = updateService;
  }

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

  async callTool(name: string, args: Record<string, unknown>): Promise<unknown[]> {
    try {
      let result: any;

      switch (name) {
        case 'search_api_specs':
          result = await SearchApiSpecs.run(args as any);
          break;
        case 'search_field_types':
          result = await SearchFieldTypes.run(args as any);
          break;
        case 'search_development_tips':
          result = await SearchDevelopmentTips.run(args as any);
          break;
        case 'get_api_endpoint':
          result = await GetApiEndpoint.run(args as any);
          break;
        case 'validate_api_request':
          result = await ValidateApiRequest.run(args as any);
          break;
        case 'get_update_info':
          result = await GetUpdateInfo.run(args as any);
          break;
        default:
          throw new Error(`Unknown tool: ${name}`);
      }

      return [
        {
          type: 'text',
          text: typeof result === 'string' ? result : JSON.stringify(result, null, 2),
        },
      ];
    } catch (error) {
      return [
        {
          type: 'text',
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ];
    }
  }
}

