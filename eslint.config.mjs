import { defineConfig } from 'eslint/config';

import js from './packages/base/index.mts';
import ts from './packages/typescript/index.mts';
import node from './packages/node/index.mts';

export default defineConfig(js, ts, node);
