export function generateRandomId() {
  return "component__" + Math.random().toString(36).substring(2, 10);
}