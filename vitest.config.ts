import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Shared self-hosted CI runners (10 runners on 32 cores): keep each run small.
    maxWorkers: process.env.CI ? 2 : undefined,
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '*.config.ts',
        'tests/',
        'src/index.ts'
      ]
    },
    testTimeout: 10000,
    hookTimeout: 10000
  }
});