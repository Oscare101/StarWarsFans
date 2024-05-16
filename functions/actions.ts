export async function GetDataRequest() {
  const response = await fetch('https://swapi.py4e.com/api/people');
  const data = await response.json();
  return data;
}
