import type { Parameter, Response, Example } from './Supporting.js';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface APISpecification {
  id: string;
  name: string;
  method: HttpMethod;
  endpoint: string;
  description: string;
  parameters: Parameter[];
  responses: Response[];
  examples: Example[];
  deprecated: boolean;
  version: 'v1' | 'v2';
  category: string;
}

