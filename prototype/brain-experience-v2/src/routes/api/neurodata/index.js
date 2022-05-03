export async function get({ ctx }) {
  const url = `/test.json`;
  const res = await fetch(url);
  const data = await res.json();
  const publications = data["publications"];
  return {
    status: 200,
    body: publications,
  };
}
