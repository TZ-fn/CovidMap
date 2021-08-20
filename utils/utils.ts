export async function fetchData(API: string) {
  try {
    const response = await fetch(API);
    return response.json();
  } catch (error) {
    return error;
  }
}
