const isProtectedPath = (currentPath) =>
  [
    '/new-post',
    '/tax-info/edit',
    '/insurance-info/edit',
    '/magi-calculator',
    '/admin-portal',
  ].some((path) => currentPath.startsWith(path));

export default isProtectedPath;
