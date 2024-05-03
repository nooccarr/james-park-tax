const isProtectedPath = (currentPath) =>
  ['/new-post', '/edit-post'].some((path) => currentPath === path);

export default isProtectedPath;
