export function Save(key, value) {
    localStorage.setItem(key, typeof value === "object" ? JSON.stringify(value) : value);
}
//# sourceMappingURL=save.js.map