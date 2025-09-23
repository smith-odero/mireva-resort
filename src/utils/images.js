
// src/utils/images.js
// src/utils/images.js
const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", { eager: true });

/**
 * Convert the Vite glob import into a clean object:
 * { "pic1.jpg": <url>, "pic2.png": <url> }
 */
const importedImages = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const name = path.split("/").pop(); // filename only
    return [name, module.default];
  })
);

export default importedImages;
