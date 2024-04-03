export const pathToCapitalize = (path) => {
  const pathArray = path.split('-');
  const capitalizedPathArray = pathArray.map((path) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  });
  return capitalizedPathArray.join(' ');
};

export const formatTitle = (title, join) => {
  const smallWords = ['a', 'an', 'of'];
  const sentences = title.trim().replace(/\s+/g, ' ').split('. ');

  for (let s = 0; s < sentences.length; s++) {
    const words = sentences[s].split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        words[i] =
          words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      } else {
        words[i] = smallWords.includes(words[i].toLowerCase())
          ? words[i].toLowerCase()
          : words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }

    sentences[s] = words.join(join);
  }

  return sentences.join(`.${join}`);
};

export const categoryToPath = (category) => {
  return category.toLowerCase() + '-info';
};
