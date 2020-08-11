export var RemoveFrom = function (setter) { return function (predicate) { return setter(function (current) { return current.filter(predicate(current)); }); }; };
//# sourceMappingURL=RemoveFrom.js.map