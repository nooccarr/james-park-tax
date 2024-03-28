export const pathToCapitalize = (path) => {
  const pathArray = path.split('-');
  const capitalizedPathArray = pathArray.map((path) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  });
  return capitalizedPathArray.join(' ');
};

export const titleToSlug = (title) => {
  return title.toLowerCase().split(' ').join('-');
};

export const categoryToPath = (category) => {
  return category.toLowerCase() + '-info';
};
