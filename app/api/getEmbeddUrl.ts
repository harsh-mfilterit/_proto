import axios from "axios";

const SESSION_KEY = "powerbi_embed_url";

export async function getEmbedUrl() {
  // Check if the embed URL is already in sessionStorage
  if (typeof window !== "undefined") {
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        // If parsing fails, remove the corrupted cache
        sessionStorage.removeItem(SESSION_KEY);
      }
    }
  }

  // If not cached, fetch from API
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v1/powerbi/get-embed-url"
    );
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching embed URL:", error);
    throw error;
  }
}


