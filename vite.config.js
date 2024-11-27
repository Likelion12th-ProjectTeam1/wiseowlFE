import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 기본 설정: 루트 경로로 배포
  plugins: [
    react()
  ]
});