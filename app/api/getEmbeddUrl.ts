import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SESSION_KEY = "powerbi_embed_url";

export async function getEmbedUrl() {
  // Check if the embed URL is already in sessionStorage
  // if (typeof window !== "undefined") {
    const cached = sessionStorage.getItem(SESSION_KEY);
    console.log("it is cached");
    console.log("it is cached");
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        console.log("cached", cachedData);

        if (cachedData.expiresAt > Date.now()) {
          new Error("cached data is expired refetching");
          // sessionStorage.removeItem(SESSION_KEY);
        }
        
        return cachedData;
      } catch (e) {
        // If parsing fails, remove the corrupted cache
        sessionStorage.removeItem(SESSION_KEY);
      }
    }
  // }

      console.log("api is called");
  // If not cached, fetch from API
  try {
    const baseUrl = import.meta.env.VITE_POWERBI_BASE_URL;
    const response = await axios.get(baseUrl);

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(response.data));
    // if (typeof window !== "undefined") {
    //   sessionStorage.setItem(SESSION_KEY, JSON.stringify(response.data));
    // }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching embed URL:", error);
    throw error;
  }
}

function fakeapi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "fake data" });
    }, 1000);
  });
}

export function useGetEmbedUrl() {
  return useQuery({
    queryKey: ["embedUrl"],
    queryFn: getEmbedUrl,
  });
}
