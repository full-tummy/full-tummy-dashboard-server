export default interface SchemaI {
  readonly type: string;
  readonly properties: Record<string, unknown>;
}
