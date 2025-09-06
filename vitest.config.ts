import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.ts'],
    environment: 'node',
    reporters: ['default'],
    globals: false,
    coverage: {
      enabled: false,
    },
  },
});

