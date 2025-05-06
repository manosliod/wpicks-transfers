export async function safeFetch<T = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const errorText = await res.text();
    console.error(
      `[safeFetch] Request to ${input} failed:`,
      res.status,
      errorText
    );
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }

  try {
    const data = await res.json();
    return data as T;
  } catch (err) {
    console.error(`[safeFetch] Failed to parse JSON from ${input}`);
    throw new Error('Invalid JSON response');
  }
}
