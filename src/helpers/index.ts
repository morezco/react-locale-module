import { Load } from "./load";
import { Save } from "./save";

export * from "./AddThrough";
export * from "./RemoveFrom";
export * from "./U";
export * from "./load";
export * from "./save";
export * from "./copy";

export const LS = (key: string, value?: any) =>
  value === undefined ? Load(key) : Save(key, value);
