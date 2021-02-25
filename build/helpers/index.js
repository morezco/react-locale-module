import { Load } from "./load";
import { Save } from "./save";
export { AddThrough } from "./AddThrough";
export { RemoveFrom } from "./RemoveFrom";
export { U } from "./U";
export { Load } from "./load";
export { Save } from "./save";
export { copy } from "./copy";
export { useRerender } from "./useRerender";
export { removeRepeatingElements } from "./removeRepeatingElements";
export var LS = function (key, value) {
    return value === undefined ? Load(key) : Save(key, value);
};
//# sourceMappingURL=index.js.map