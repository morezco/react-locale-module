export function Save(key: string, value: any) {
  localStorage.setItem(
    key,
    typeof value === "object" ? JSON.stringify(value) : value
  );
}
