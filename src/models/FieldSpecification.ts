import type { FieldProperty, Constraint, FieldExample } from './Supporting';

export interface FieldSpecification {
  type: string;
  name: string;
  description: string;
  properties: FieldProperty[];
  constraints: Constraint[];
  supportedOperators: string[];
  examples: FieldExample[];
  compatibleApis: string[];
  limitations: string[];
}

