/// <reference types="vite/client" />


export interface ImportMetaEnv {
    VITE_API_BASE_URL: string;
    // readonly VITE_APP_TITLE: string
    // more env variables...
  }
  
export interface ImportMeta {
    readonly env: ImportMetaEnv
  }