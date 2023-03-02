export type FieldState = {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: Record<string, unknown> & { message?: string };
} & Record<string, unknown>;
