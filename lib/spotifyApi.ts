const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

const getSpotifyToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(
      "Error fetching token:",
      response.status,
      response.statusText,
      errorData
    );
    throw new Error("Failed to fetch token");
  }

  const data = await response.json();
  return data.access_token;
};

const searchSongs = async (term: string) => {
  const token = await getSpotifyToken();
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${term}&type=track`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error(
      "Error fetching songs:",
      response.status,
      response.statusText,
      errorData
    );
    return [];
  }

  const data = await response.json();

  if (data.tracks && data.tracks.items) {
    return data.tracks.items.map(
      (item: {
        id: string;
        name: string;
        artists: Artist[];
        album: { images: { url: string }[] };
      }) => ({
        id: item.id,
        name: item.name,
        artists: item.artists,
        albumImageUrl: item.album.images[0]?.url || "",
      })
    );
  } else {
    console.error("Unexpected response structure:", data);
    return [];
  }
};

const getTrackDetails = async (trackId: string) => {
  const token = await getSpotifyToken();
  const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error fetching track details:", response.status, errorData);
    return null;
  }

  const trackData = await response.json();
  return trackData.preview_url;
};

export interface Artist {
  name: string;
}

export interface Song {
  id: string;
  name: string;
  artists: Artist[];
  albumImageUrl: string;
  previewUrl?: string;
}

export { searchSongs, getSpotifyToken, getTrackDetails };
