export const findData = (data, id) => {
  const found = data.filter((element) => {
    return String(element.id) === id;
  });
  return found;
};
