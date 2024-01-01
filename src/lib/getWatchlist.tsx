export async function getWatchlist() {
  try {
    const response = await fetch("/api/get_watchlist", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch watchlist! ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
