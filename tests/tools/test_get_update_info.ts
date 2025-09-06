import { describe, it, expect } from 'vitest';
import { GetUpdateInfo } from '../../src/tools/GetUpdateInfo';

describe('get_update_info tool', () => {
  it('exposes name, inputSchema, and run() returns object', async () => {
    expect(GetUpdateInfo.name).toBe('get_update_info');
    expect(typeof GetUpdateInfo.description).toBe('string');
    expect(typeof GetUpdateInfo.inputSchema).toBe('object');

    const result = await GetUpdateInfo.run({} as any);
    expect(typeof result).toBe('object');
  });
});

