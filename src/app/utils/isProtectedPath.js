const isProtectedPath = (currentPath) =>
  ['/new-post', '/tax-info/edit', '/insurance-info/edit'].some((path) =>
    currentPath.startsWith(path)
  );

export default isProtectedPath;
