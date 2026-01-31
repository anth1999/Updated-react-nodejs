export const getMessage = async () => {
  const response = await fetch("/api/health");
  return response.json();
};
