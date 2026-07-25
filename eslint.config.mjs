import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'it-tools-main/**',
      'animate-ui-main/**',
      'inspira-ui-main/**',
      'lenis-main/**',
    ],
  },
];
