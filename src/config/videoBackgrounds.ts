// Centralized video background config
// Google Drive doesn't work well for direct video embedding due to access restrictions.
// Better alternatives for video hosting:
// 1. YouTube (unlisted videos): Use embed URLs
// 2. Vimeo: Direct video URLs
// 3. CloudFlare R2, AWS S3, or similar cloud storage
// 4. Your own server/hosting
// 5. Leave empty to use local videos from /public/videos/ folder

export const videoBackgrounds = {
  photographyHero: "https://player.vimeo.com/video/1106694402?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1", // Add your video URL here or leave empty for local fallback
  photographyCategory: "https://player.vimeo.com/video/1106694328?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1", // Add your video URL here or leave empty for local fallback
  videographyHero: "https://vimeo.com/1106694288", // Add your video URL here or leave empty for local fallback
  videographyCategory: "https://vimeo.com/1106694256", // Add your video URL here or leave empty for local fallback
  designHero: "https://vimeo.com/1106694212", // Add your video URL here or leave empty for local fallback
  designCategory: "https://vimeo.com/1106694093", // Add your video URL here or leave empty for local fallback
  aboutHero: "" // Add your video URL here or leave empty for local fallback
};
