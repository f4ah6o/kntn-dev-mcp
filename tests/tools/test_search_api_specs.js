import { describe, it, expect } from 'vitest';
import { SearchApiSpecs } from '../../src/tools/SearchApiSpecs';
describe('search_api_specs tool', () => {
    it('exposes name, inputSchema, and run(query) returns array', async () => {
        expect(SearchApiSpecs.name).toBe('search_api_specs');
        expect(typeof SearchApiSpecs.description).toBe('string');
        expect(typeof SearchApiSpecs.inputSchema).toBe('object');
        const result = await SearchApiSpecs.run({ query: 'records' });
        expect(Array.isArray(result)).toBe(true);
    });
});
//# sourceMappingURL=test_search_api_specs.js.map