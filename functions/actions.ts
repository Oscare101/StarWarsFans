export async function GetDataRequest(url?: string) {
  const response = await fetch(url || 'https://swapi.py4e.com/api/people');
  const data = await response.json();
  return data;
}
