declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SECRET_TOKEN_CLIENT: string;
      SECRET_TOKEN_DELIVERYMAN: string;

    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }