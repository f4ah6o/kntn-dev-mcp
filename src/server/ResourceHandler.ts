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

export class ResourceHandler {
  async listResources(): Promise<Resource[]> {
    return [];
  }

  async readResource(uri: string): Promise<ResourceContent[]> {
    return [];
  }
}

