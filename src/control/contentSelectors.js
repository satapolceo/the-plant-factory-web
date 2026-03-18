export function getValueAtPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

export function getValuesAtPaths(source, paths) {
  return paths.map((path) => ({
    path,
    value: getValueAtPath(source, path)
  }));
}
