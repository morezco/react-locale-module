export function Load(key: string, fallback?: any) {
  const data = localStorage.getItem(key)!;
  try {
    const attempt = JSON.parse(data);
    return attempt === null ? fallback : attempt;
  } catch (oof) {
    return data;
  }
}
