export const formatDateWithTime = (baseData: Date) => {
  const day = baseData.getDate().toString().padStart(2, "0");
  const month = (baseData.getMonth() + 1).toString().padStart(2, "0");
  const year = baseData.getFullYear().toString();
  const hours = baseData.getHours().toString().padStart(2, "0");
  const minutes = baseData.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
