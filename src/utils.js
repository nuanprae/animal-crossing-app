export const getDayNumber = () => {
  const date = new Date();
  return date.toLocaleDateString('default', { day: '2-digit' });
};

export const getMonthName = () => {
  const date = new Date();
  return date.toLocaleString('default', { month: 'long' });
};

export const getMonthNumber = () => {
  const date = new Date();
  return date.getMonth() + 1;
};

export const getTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const getDailyAcnhResults = (data) => {
  const results = Object.values(data);
  const monthNumber = getMonthNumber();
  return results?.filter((obj) => obj.availability['month-array-northern'].includes(monthNumber));
};

export const sortDescendingOrder = (items, price) => {
  if (items) {
    return [...items].sort((a, b) => b[price] - a[price]);
  }
};

export const sortAscendingOrder = (items, price) => {
  if (items) {
    return [...items].sort((a, b) => a[price] - b[price]);
  }
};
