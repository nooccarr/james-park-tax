const pathToCapitalized = (path) => {
  const pathArray = path.split('-');
  const capitalizedPathArray = pathArray.map((path) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  });
  return capitalizedPathArray.join(' ');
};

export default pathToCapitalized;