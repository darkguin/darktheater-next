export type HttpError<T> = {
  json(): Promise<T>;
} & Response;