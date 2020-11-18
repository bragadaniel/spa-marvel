export function range(start, data) {
  return Array(...Array(data)).map((_, idx) => idx + start);
}
