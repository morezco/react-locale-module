export function removeRepeatingElements(array) {
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
//# sourceMappingURL=removeRepeatingElements.js.map