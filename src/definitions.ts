export interface IOSBouncePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
