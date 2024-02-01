let iceServers = [];

export async function getIceServers(apiKey) {
  if (iceServers.length === 0) {
    try {
      const response = await fetch(
        `https://metered.live/api/v1/turn/credentials?apiKey=${apiKey}`
      );
      iceServers = await response.json();
    } catch (_) {
      iceServers = [];
    }
  }
  return iceServers;
}
