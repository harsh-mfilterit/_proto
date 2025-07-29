/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POWERBI_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 