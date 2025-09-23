// src/utils/videos.js
const videos = import.meta.glob("../assets/*.{mp4,webm,ogg}", { eager: true });

/**
 * Clean object with filename as key
 * Example: { "intro.mp4": "/assets/intro-abc123.mp4" }
 */
const importedVideos = Object.fromEntries(
  Object.entries(videos).map(([path, module]) => {
    const name = path.split("/").pop(); // filename only
    return [name, module.default];
  })
);

export default importedVideos;
