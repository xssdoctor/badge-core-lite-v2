export function badge(status) {
  return String(status).toLowerCase() === "ok" ? "OK" : "WARN";
}
