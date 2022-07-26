export function formatPrice(price) {
  return `$${price / 100}`;
}

export function pluralize(string, num) {
  return num === 1 ? `${num} ${string}` : `${num} ${string}s`;
}

export function isNewShoe(releaseDate) {
  const differenceInDays = new Date() - releaseDate;

  if (differenceInDays < 1000 * 60 * 60 * 24 * 30) {
    return true;
  } else {
    return false;
  }
}
