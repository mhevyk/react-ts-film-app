export {};

type NodeEnv = "development" | "production";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: NodeEnv;
      readonly PORT: number;
      readonly FILM_API_KEY: string;
      readonly FILM_API_URL: string;
      readonly FILM_API_LOCALE: string;
    }
  }
}
