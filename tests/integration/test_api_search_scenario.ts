import { describe, it, expect } from 'vitest';
import { SearchApiSpecs } from '../../src/tools/SearchApiSpecs';
import { GetApiEndpoint } from '../../src/tools/GetApiEndpoint';

describe('Integration: API specification search scenario', () => {
  it('searches specs and fetches endpoint details', async () => {
    const list = await SearchApiSpecs.run({ query: 'get records', category: 'records', method: 'GET' } as any);
    expect(Array.isArray(list)).toBe(true);

    const details = await GetApiEndpoint.run({ endpoint: '/k/v1/records.json', method: 'GET' } as any);
    expect(typeof details).toBe('object');
  });
});

