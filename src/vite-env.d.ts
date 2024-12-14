/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DISABLE_RECAPTCHA: string
  // Add other env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}