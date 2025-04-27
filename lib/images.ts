import { getBasePath } from './utils';

// This is a static list of images that will be served from the public directory
// The client will need to update this list when adding/removing images
export const heroImages = [
  {
    src: getBasePath("/images/about-us/gallery/hero-1.jpg"),
    alt: "Container in warehouse"
  }
]; 