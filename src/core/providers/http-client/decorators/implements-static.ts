export function ImplementsStatic<T>() {
  return <U extends T>(constructor: U) => {};
}
