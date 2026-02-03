const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
  if (!API_URL) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_API_ENDPOINT is not set');
  }

  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}