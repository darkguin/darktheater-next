export interface Mapper<T, U> {
  map(model: T): U;
}
