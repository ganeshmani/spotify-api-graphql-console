const config = {
  server: {
    sessionSecret: process.env.SESSION_SECRET || "charly",
    port: process.env.PORT || 9999,
    mountPath: process.env.MOUNT_PATH || "http://localhost:9999",
  },
  spotify: {
    clientId:
      process.env.SPOTIFY_CLIENT_ID || "c83bb6bf62eb42229f300aa78243cb1a",
    clientSecret:
      process.env.SPOTIFY_CLIENT_SECRET || "98b2c12e46134f4b9fdd0847572727e6",
    scopes: [
      "user-library-read",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-read-private",
      "user-read-email",
      "user-follow-read",
      "user-top-read",
      "user-read-playback-state",
    ],
    redirectUri:
      process.env.SPOTIFY_REDIRECT_URI || "http://localhost:9999/auth/callback",
  },
};

export { config };
