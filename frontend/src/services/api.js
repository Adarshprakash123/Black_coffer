export const fetchData = async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/data?${query}`);
    const data = await response.json();
    return data;
};
  