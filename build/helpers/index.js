import { Load } from "./load";
import { Save } from "./save";
export * from "./AddThrough";
export * from "./RemoveFrom";
export * from "./U";
export * from "./load";
export * from "./save";
export * from "./copy";
export * from "./useRerender";
export var LS = function (key, value) {
    return value === undefined ? Load(key) : Save(key, value);
};
//# sourceMappingURL=index.js.map