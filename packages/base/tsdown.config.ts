import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    target: 'esnext',
    outDir: 'dist',
    format: ['esm', 'cjs'],
    entry: './index.mts',
    platform: 'node',
    dts: true,
    sourcemap: false,
    clean: true,
    minify: false,
    unbundle: true,
    exports: {
      enabled: true,
      devExports: false,
      packageJson: false,
    },
    publint: true,
  },
]);
