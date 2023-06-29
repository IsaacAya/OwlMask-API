declare global {
    export namespace NodeJS {
      export interface ProcessEnv {
        MONGODB_URI: string
        MONGODB_DB_NAME: string
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}