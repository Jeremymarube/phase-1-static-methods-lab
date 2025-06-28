class Formatter {
  // Capitalizes the first letter of the string
  static capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
  }

  // Removes all characters except letters, numbers, dashes, single quotes, and spaces
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]+/g, '');
  }

  // Capitalizes all words except the exceptions, always capitalizes first word
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    if (!str) return '';

    // First sanitize the string (optional, depending on your test requirements)
    // str = Formatter.sanitize(str);

    const words = str.toLowerCase().split(' ');
    const titleized = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return Formatter.capitalize(word);
      } else {
        return word;
      }
    });

    return titleized.join(' ');
  }
}
