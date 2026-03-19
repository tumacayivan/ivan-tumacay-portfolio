import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useCallback } from "react";

// Helper function to extract file ID from Google Drive link
const extractFileId = (link: string): string | null => {
  const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

// Helper function to get Google Drive thumbnail URL
// Proper Google Drive thumbnail API format
const getGoogleDriveThumbnail = (fileId: string, size: number = 1000): string => {
  // Google Drive thumbnail API: https://drive.google.com/thumbnail?id=FILE_ID&sz=SIZE
  // sz parameter: wSIZE for width, hSIZE for height, or SIZE for square
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
};

// Helper function to get viewable image URL from Google Drive (for lightbox)
const getImageUrl = (fileId: string): string => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

// Helper function to get embeddable video URL from Google Drive
const getVideoEmbedUrl = (fileId: string): string => {
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

// Helper to create portfolio item with proper Google Drive thumbnails
const createItem = (fileId: string, title: string, link: string, type: "image" | "video") => ({
  // For display in marquee, always use Google Drive thumbnail
  thumbnail: getGoogleDriveThumbnail(fileId, 1000),
  // For lightbox, use full image URL for images, thumbnail for videos
  src: type === "image" ? getImageUrl(fileId) : getGoogleDriveThumbnail(fileId, 1000),
  title,
  link,
  fileId,
  type,
  embedUrl: type === "video" ? getVideoEmbedUrl(fileId) : null,
});

// Graphics items
const graphicItems = [
  createItem("1toQYy3AdaVkTnPFw7WNjev34y_ta7VGA", "Graphic Design 7", "https://drive.google.com/file/d/1toQYy3AdaVkTnPFw7WNjev34y_ta7VGA/view?usp=sharing", "image"),
  createItem("1PIoQxv2kctT17fze6M4XW4b-aFmRZtY7", "Graphic Design 8", "https://drive.google.com/file/d/1PIoQxv2kctT17fze6M4XW4b-aFmRZtY7/view?usp=drive_link", "image"),
  createItem("16KEm2YmSU-TmI3oGJUdh8qUdujcFltns", "Graphic Design 9", "https://drive.google.com/file/d/16KEm2YmSU-TmI3oGJUdh8qUdujcFltns/view?usp=sharing", "image"),
  createItem("1Q-PnhubB8mA6rZYzJg9w_AWs5uugMxAU", "Graphic Design 10", "https://drive.google.com/file/d/1Q-PnhubB8mA6rZYzJg9w_AWs5uugMxAU/view?usp=drive_link", "image"),
  createItem("1I_MSaFLM5ZQG2QNOpSTEgo8w3pLca5mL", "Graphic Design 11", "https://drive.google.com/file/d/1I_MSaFLM5ZQG2QNOpSTEgo8w3pLca5mL/view?usp=sharing", "image"),
  createItem("1BAomqVwLSMmxhOIq6irJRIazQF_iTmOT", "Graphic Design 12", "https://drive.google.com/file/d/1BAomqVwLSMmxhOIq6irJRIazQF_iTmOT/view?usp=drive_link", "image"),
  createItem("1iKplJOsbZanEf7iLl7reAuILwJryBv9c", "Graphic Design 5", "https://drive.google.com/file/d/1iKplJOsbZanEf7iLl7reAuILwJryBv9c/view?usp=drive_link", "image"),
  createItem("1aAEvUGRLKIk8_TWEf9G0zzhunUvFyTS2", "Graphic Design 6", "https://drive.google.com/file/d/1aAEvUGRLKIk8_TWEf9G0zzhunUvFyTS2/view?usp=drive_link", "image"),
  createItem("18lf40HCgUyvSpkKHHXamjwcNpo0HDANG", "Graphic Design 13", "https://drive.google.com/file/d/18lf40HCgUyvSpkKHHXamjwcNpo0HDANG/view?usp=drive_link", "image"),
  createItem("11ze9IpA_WaDx1covaqOcC-6WSfiCoZGD", "Graphic Design 14", "https://drive.google.com/file/d/11ze9IpA_WaDx1covaqOcC-6WSfiCoZGD/view?usp=drive_link", "image"),
  createItem("1otn-5yWqn7mW5IIq507xDhVqUNu22JSP", "Graphic Design 15", "https://drive.google.com/file/d/1otn-5yWqn7mW5IIq507xDhVqUNu22JSP/view?usp=drive_link", "image"),
  createItem("14E1CHWwKNuqwcE3Y5Os9DdJ3EDv_YA3Z", "Graphic Design 1", "https://drive.google.com/file/d/14E1CHWwKNuqwcE3Y5Os9DdJ3EDv_YA3Z/view?usp=drive_link", "image"),
  createItem("1qLs86u9entGSnPg3dCo1u5PTQVcLq3FZ", "Graphic Design 2", "https://drive.google.com/file/d/1qLs86u9entGSnPg3dCo1u5PTQVcLq3FZ/view?usp=drive_link", "image"),
  createItem("1IsDzHHcNdcLg4bLshjKzp581SYpujwSR", "Graphic Design 3", "https://drive.google.com/file/d/1IsDzHHcNdcLg4bLshjKzp581SYpujwSR/view?usp=drive_link", "image"),
  createItem("1j0GnAG0c4C3IE74fV5QO1iQEFbI2_6rl", "Graphic Design 4", "https://drive.google.com/file/d/1j0GnAG0c4C3IE74fV5QO1iQEFbI2_6rl/view?usp=drive_link", "image"),
];

// Video items - Ad Edits
const adEditsItems = [
  createItem("1dKJvM_r5MEdHgpuu81y1VXRAKWi2hNWk", "Ad Edit 1", "https://drive.google.com/file/d/1dKJvM_r5MEdHgpuu81y1VXRAKWi2hNWk/view?usp=drive_link", "video"),
  createItem("1mBv75WOUJjVgLFUafp7gHlhjzWYpW3VR", "Ad Edit 2", "https://drive.google.com/file/d/1mBv75WOUJjVgLFUafp7gHlhjzWYpW3VR/view?usp=drive_link", "video"),
  createItem("1YnCvxFh-5jdXr1ZcsmmxDoYXP2c5RFd2", "Ad Edit 3", "https://drive.google.com/file/d/1YnCvxFh-5jdXr1ZcsmmxDoYXP2c5RFd2/view?usp=drive_link", "video"),
  createItem("18zp1mzFhnez85z6mmFDAdvjQuBgW01oI", "Ad Edit 4", "https://drive.google.com/file/d/18zp1mzFhnez85z6mmFDAdvjQuBgW01oI/view?usp=drive_link", "video"),
  createItem("1_A6IhHdfnzdu2PVewoi5ZOmUSwe2vAR3", "Ad Edit 5", "https://drive.google.com/file/d/1_A6IhHdfnzdu2PVewoi5ZOmUSwe2vAR3/view?usp=drive_link", "video"),
  createItem("1fE-9Hh_K17V2iPpaBINvz57ZtOYq_4Y-", "Ad Edit 6", "https://drive.google.com/file/d/1fE-9Hh_K17V2iPpaBINvz57ZtOYq_4Y-/view?usp=drive_link", "video"),
];

// Video items - AI Videos
const aiVideosItems = [
  createItem("1Q9pgVMD8RiNDL9zyoOEW0kcHgOdoNW5F", "AI Video 1", "https://drive.google.com/file/d/1Q9pgVMD8RiNDL9zyoOEW0kcHgOdoNW5F/view?usp=drive_link", "video"),
  createItem("1-Is5dnzrUG6-DZyjYQpXZuuixfJ52b3a", "AI Video 2", "https://drive.google.com/file/d/1-Is5dnzrUG6-DZyjYQpXZuuixfJ52b3a/view?usp=drive_link", "video"),
  createItem("1if7K64dndKsjgCz2QFdPQB0c-PqDlm0y", "AI Video 3", "https://drive.google.com/file/d/1if7K64dndKsjgCz2QFdPQB0c-PqDlm0y/view?usp=drive_link", "video"),
  createItem("1olt17wzcihPHojy1IoNZmwHV4DYqJgqZ", "AI Video 4", "https://drive.google.com/file/d/1olt17wzcihPHojy1IoNZmwHV4DYqJgqZ/view?usp=drive_link", "video"),
  createItem("1AXFy158z3vNRFKAwKPQQ2OVEIDIRVNgx", "AI Video 5", "https://drive.google.com/file/d/1AXFy158z3vNRFKAwKPQQ2OVEIDIRVNgx/view?usp=drive_link", "video"),
  createItem("1spNPNu6P1bme_luNy_DGCmi0V9OHDEh8", "AI Video 6", "https://drive.google.com/file/d/1spNPNu6P1bme_luNy_DGCmi0V9OHDEh8/view?usp=drive_link", "video"),
];

// Video items - Digital Products
const digitalProductsItems = [
  createItem("1T_8c_1fR7jQkVMP9exqp3jUOd4TFCZhE", "Digital Product 1", "https://drive.google.com/file/d/1T_8c_1fR7jQkVMP9exqp3jUOd4TFCZhE/view?usp=drive_link", "video"),
  createItem("1uk9gVk9uRiGXdb7vjmMxxN0aYYLFRMYc", "Digital Product 2", "https://drive.google.com/file/d/1uk9gVk9uRiGXdb7vjmMxxN0aYYLFRMYc/view?usp=drive_link", "video"),
  createItem("1TFTyRcOIYxiJRSWrROY6u2IxOeuHq29_", "Digital Product 3", "https://drive.google.com/file/d/1TFTyRcOIYxiJRSWrROY6u2IxOeuHq29_/view?usp=drive_link", "video"),
  createItem("1YQ8eh_BhsPc2oi2TgA6EnwPYM5mAX-jO", "Digital Product 4", "https://drive.google.com/file/d/1YQ8eh_BhsPc2oi2TgA6EnwPYM5mAX-jO/view?usp=drive_link", "video"),
  createItem("14caIZ0fmMDS9XpLWRggyRketkvjKou59", "Digital Product 5", "https://drive.google.com/file/d/14caIZ0fmMDS9XpLWRggyRketkvjKou59/view?usp=drive_link", "video"),
];

// Video items - Montage Videos
const montageVideosItems = [
  createItem("12N4fPIdf3BLeZR9qD7zDi-Hqo3IneniQ", "Montage Video 1", "https://drive.google.com/file/d/12N4fPIdf3BLeZR9qD7zDi-Hqo3IneniQ/view?usp=drive_link", "video"),
  createItem("1piUzDzLFvZmI0lkQgdT5HIja_LZ0fSQl", "Montage Video 2", "https://drive.google.com/file/d/1piUzDzLFvZmI0lkQgdT5HIja_LZ0fSQl/view?usp=drive_link", "video"),
  createItem("17DRQ6UweLA3nIErnCqBdYDtu1ALmnCUp", "Montage Video 3", "https://drive.google.com/file/d/17DRQ6UweLA3nIErnCqBdYDtu1ALmnCUp/view?usp=drive_link", "video"),
  createItem("1eVm3Q4uyWICtMHIJ91nbJF2W9iKt4bNw", "Montage Video 4", "https://drive.google.com/file/d/1eVm3Q4uyWICtMHIJ91nbJF2W9iKt4bNw/view?usp=drive_link", "video"),
  createItem("1Got-KF4dRvipGodo9kvvLVeO6jWcxMoI", "Montage Video 5", "https://drive.google.com/file/d/1Got-KF4dRvipGodo9kvvLVeO6jWcxMoI/view?usp=drive_link", "video"),
];

// Video items - Movie edits
const movieEditsItems = [
  createItem("1yR-kT3RT31pfwW7hz-XPYJweoxnSIUED", "Movie Edit 1", "https://drive.google.com/file/d/1yR-kT3RT31pfwW7hz-XPYJweoxnSIUED/view?usp=drive_link", "video"),
  createItem("16M9BFNmDUYVoihwEFqF5AbbLxdlaCpl9", "Movie Edit 2", "https://drive.google.com/file/d/16M9BFNmDUYVoihwEFqF5AbbLxdlaCpl9/view?usp=drive_link", "video"),
  createItem("1ImuY-_ASH31xbjuCJ-I7i_IE88PxvHH-", "Movie Edit 3", "https://drive.google.com/file/d/1ImuY-_ASH31xbjuCJ-I7i_IE88PxvHH-/view?usp=drive_link", "video"),
  createItem("1wiy_eFS2uiRqBZn7MbbW2ZFHjFXsJbpx", "Movie Edit 4", "https://drive.google.com/file/d/1wiy_eFS2uiRqBZn7MbbW2ZFHjFXsJbpx/view?usp=drive_link", "video"),
  createItem("1GC2sdSQg7QUNXHEq8LxA0zgu5l2hjMT2", "Movie Edit 5", "https://drive.google.com/file/d/1GC2sdSQg7QUNXHEq8LxA0zgu5l2hjMT2/view?usp=drive_link", "video"),
];

// Video items - Music videos
const musicVideosItems = [
  createItem("1YaGkUQ6wGJ3zRihCcLl4J41zy1w3jPoL", "Music Video 1", "https://drive.google.com/file/d/1YaGkUQ6wGJ3zRihCcLl4J41zy1w3jPoL/view?usp=drive_link", "video"),
  createItem("1hk1yz5tX9RBAzCfqmBPlBuY8QLFdrfYE", "Music Video 2", "https://drive.google.com/file/d/1hk1yz5tX9RBAzCfqmBPlBuY8QLFdrfYE/view?usp=drive_link", "video"),
  createItem("1zJPCdpuCXlnnP8epcX40ogGtaevEEbAk", "Music Video 3", "https://drive.google.com/file/d/1zJPCdpuCXlnnP8epcX40ogGtaevEEbAk/view?usp=drive_link", "video"),
  createItem("1LB2F0ny3nN3vwr9VgGan8EDlGSNyCjvQ", "Music Video 4", "https://drive.google.com/file/d/1LB2F0ny3nN3vwr9VgGan8EDlGSNyCjvQ/view?usp=drive_link", "video"),
  createItem("1RHsdRy9-_ni6Ut1Z-c02Ac7-4YO1cun7", "Music Video 5", "https://drive.google.com/file/d/1RHsdRy9-_ni6Ut1Z-c02Ac7-4YO1cun7/view?usp=drive_link", "video"),
  createItem("1mbaghd04NZPsZzfTHIkxvRgMf2IeRpGa", "Music Video 6", "https://drive.google.com/file/d/1mbaghd04NZPsZzfTHIkxvRgMf2IeRpGa/view?usp=drive_link", "video"),
];

// Video items - Podcast/long form
const podcastItems = [
  createItem("1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8", "Podcast/Long Form 1", "https://drive.google.com/file/d/1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8/view?usp=drive_link", "video"),
  createItem("1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH", "Podcast/Long Form 2", "https://drive.google.com/file/d/1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH/view?usp=drive_link", "video"),
  createItem("1_pn7HONVKK55n8IODsm64I55J2sVognx", "Podcast/Long Form 3", "https://drive.google.com/file/d/1_pn7HONVKK55n8IODsm64I55J2sVognx/view?usp=drive_link", "video"),
  createItem("1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8", "Podcast/Long Form 4", "https://drive.google.com/file/d/1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8/view?usp=drive_link", "video"),
  createItem("13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-", "Podcast/Long Form 5", "https://drive.google.com/file/d/13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-/view?usp=drive_link", "video"),
];

// Video items - Real-Estate
const realEstateItems = [
  createItem("1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex", "Real Estate 1", "https://drive.google.com/file/d/1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex/view?usp=drive_link", "video"),
  createItem("1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6", "Real Estate 2", "https://drive.google.com/file/d/1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6/view?usp=drive_link", "video"),
  createItem("1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB", "Real Estate 3", "https://drive.google.com/file/d/1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB/view?usp=drive_link", "video"),
  createItem("1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh", "Real Estate 4", "https://drive.google.com/file/d/1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh/view?usp=drive_link", "video"),
  createItem("1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae", "Real Estate 5", "https://drive.google.com/file/d/1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae/view?usp=drive_link", "video"),
  createItem("1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL", "Real Estate 6", "https://drive.google.com/file/d/1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL/view?usp=drive_link", "video"),
];

// Video items - Reels/TikTok
const reelsTikTokItems = [
  createItem("1eyxc-j7SmF_P69DL0oqcFxeCCqjPfscJ", "Reel/TikTok 1", "https://drive.google.com/file/d/1eyxc-j7SmF_P69DL0oqcFxeCCqjPfscJ/view?usp=sharing", "video"),
  createItem("1nlx5VSGk7mUeX7YeHmPdDeTTPtLESi7F", "Reel/TikTok 2", "https://drive.google.com/file/d/1nlx5VSGk7mUeX7YeHmPdDeTTPtLESi7F/view?usp=drive_link", "video"),
  createItem("17Ep5Ui7fjVt7n8ESuyvIjgk78rRrOOXc", "Reel/TikTok 3", "https://drive.google.com/file/d/17Ep5Ui7fjVt7n8ESuyvIjgk78rRrOOXc/view?usp=drive_link", "video"),
  createItem("18ytVl-cjtw6B4xRxOdAh9mRRJ1OMmctG", "Reel/TikTok 4", "https://drive.google.com/file/d/18ytVl-cjtw6B4xRxOdAh9mRRJ1OMmctG/view?usp=drive_link", "video"),
  createItem("19Q2bFWr_UBi1H4B7ACf3rLbOdleo6Q14", "Reel/TikTok 5", "https://drive.google.com/file/d/19Q2bFWr_UBi1H4B7ACf3rLbOdleo6Q14/view?usp=drive_link", "video"),
  createItem("14kW8MlCCe9JRR9yxPOhnreeZVTbzweUM", "Reel/TikTok 6", "https://drive.google.com/file/d/14kW8MlCCe9JRR9yxPOhnreeZVTbzweUM/view?usp=drive_link", "video"),
];

// Video items - Sports/highlights
const sportsHighlightsItems = [
  createItem("1H2w3qtHauR1zN-nt4N_mqZcaC33nkBaq", "Sports/Highlights 1", "https://drive.google.com/file/d/1H2w3qtHauR1zN-nt4N_mqZcaC33nkBaq/view?usp=drive_link", "video"),
  createItem("1F0CQT6RvmSfuhCXC-fIPtatTCQI_1pS5", "Sports/Highlights 2", "https://drive.google.com/file/d/1F0CQT6RvmSfuhCXC-fIPtatTCQI_1pS5/view?usp=drive_link", "video"),
  createItem("136gM5511VQNTcgL_1_RYL2LuIipt-EN6", "Sports/Highlights 3", "https://drive.google.com/file/d/136gM5511VQNTcgL_1_RYL2LuIipt-EN6/view?usp=drive_link", "video"),
  createItem("1J3m-u_NMVATKcdAu5FHhw5WbskyumEaS", "Sports/Highlights 4", "https://drive.google.com/file/d/1J3m-u_NMVATKcdAu5FHhw5WbskyumEaS/view?usp=drive_link", "video"),
  createItem("14XnfXNfgYCbQeeU8ht-a_a0Rww5YkoXD", "Sports/Highlights 5", "https://drive.google.com/file/d/14XnfXNfgYCbQeeU8ht-a_a0Rww5YkoXD/view?usp=drive_link", "video"),
  createItem("1Abi3ekD2RycaM7NbNOabQy_796Gxtb8m", "Sports/Highlights 6", "https://drive.google.com/file/d/1Abi3ekD2RycaM7NbNOabQy_796Gxtb8m/view?usp=drive_link", "video"),
];

// Video items - Vlogs
const vlogsItems = [
  createItem("1ghokM8kLonfohH5gezdFBDnRSfLGft4T", "Vlog 1", "https://drive.google.com/file/d/1ghokM8kLonfohH5gezdFBDnRSfLGft4T/view?usp=drive_link", "video"),
  createItem("1_mmVVN9k3hAVUh4nHozWLux7Z6FgeKbr", "Vlog 2", "https://drive.google.com/file/d/1_mmVVN9k3hAVUh4nHozWLux7Z6FgeKbr/view?usp=drive_link", "video"),
  createItem("1-dWkdFfQo3sjhqnUan-6aJGmLYTL3v5t", "Vlog 3", "https://drive.google.com/file/d/1-dWkdFfQo3sjhqnUan-6aJGmLYTL3v5t/view?usp=drive_link", "video"),
  createItem("1f_w0sbqlcxm7MURvei4J2m0A4mVbNqwq", "Vlog 4", "https://drive.google.com/file/d/1f_w0sbqlcxm7MURvei4J2m0A4mVbNqwq/view?usp=drive_link", "video"),
  createItem("1A_Oh9kC8HiZBzBT9iHJ2pOV2JA2GYxm8", "Vlog 5", "https://drive.google.com/file/d/1A_Oh9kC8HiZBzBT9iHJ2pOV2JA2GYxm8/view?usp=drive_link", "video"),
];

// Combine all video items
const videoItems = [
  ...adEditsItems,
  ...aiVideosItems,
  ...digitalProductsItems,
  ...montageVideosItems,
  ...movieEditsItems,
  ...musicVideosItems,
  ...podcastItems,
  ...realEstateItems,
  ...reelsTikTokItems,
  ...sportsHighlightsItems,
  ...vlogsItems,
];

const allItems = [...graphicItems, ...videoItems];

type PortfolioItem = {
  src: string;
  thumbnail: string;
  title: string;
  link: string;
  fileId: string;
  type: "image" | "video";
  embedUrl: string | null;
};

/* ── Fullscreen Lightbox ── */
const Lightbox = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const item = items[currentIndex];
  const isVideo = item.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 p-3 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 p-3 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-primary transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo && item.embedUrl ? (
          <motion.div
            key={item.fileId}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl aspect-video rounded-xl border border-border/30 shadow-2xl overflow-hidden bg-black"
          >
            <iframe
              src={item.embedUrl}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={item.title}
            />
          </motion.div>
        ) : (
          <motion.img
            key={item.src}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={item.src}
            alt={item.title}
            className="max-w-full max-h-[75vh] object-contain rounded-xl border border-border/30 shadow-2xl"
            onError={(e) => {
              // Fallback to thumbnail if main image fails
              (e.target as HTMLImageElement).src = item.thumbnail;
            }}
          />
        )}
        <p className="text-lg font-heading font-bold text-foreground uppercase tracking-wide">
          {item.title}
        </p>
        <p className="text-sm font-semibold text-muted-foreground">
          {currentIndex + 1} / {items.length}
        </p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo ? "Watch on Google Drive" : "View on Google Drive"}
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

/* ── Marquee Row ── */
const MarqueeRow = ({
  items,
  direction = "left",
  type,
  onItemClick,
}: {
  items: PortfolioItem[];
  direction?: "left" | "right";
  type: "graphic" | "video";
  onItemClick: (item: PortfolioItem) => void;
}) => {
  const doubled = [...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-container overflow-hidden py-3">
      <div className={`flex gap-5 ${animClass}`} style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="group relative shrink-0 overflow-hidden rounded-xl border border-border/40 bg-card/40 cursor-pointer"
            style={{ width: type === "graphic" ? 420 : 520, height: type === "graphic" ? 320 : 300 }}
            onClick={() => onItemClick(item)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                let retryCount = parseInt(target.dataset.retryCount || '0');
                
                // Google Drive thumbnail fallback chain
                if (retryCount === 0) {
                  // Retry 1: Try with different size parameter
                  target.dataset.retryCount = '1';
                  target.src = `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w800`;
                } else if (retryCount === 1) {
                  // Retry 2: Try direct view URL (works if file is public)
                  target.dataset.retryCount = '2';
                  target.src = `https://drive.google.com/uc?export=view&id=${item.fileId}`;
                } else if (retryCount === 2) {
                  // Retry 3: Try with authuser parameter
                  target.dataset.retryCount = '3';
                  target.src = `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w1000&authuser=0`;
                } else if (retryCount === 3) {
                  // Retry 4: Try alternative thumbnail format
                  target.dataset.retryCount = '4';
                  target.src = `https://drive.google.com/uc?export=download&id=${item.fileId}`;
                } else {
                  // Final fallback: Show placeholder with title
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='14' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E" + encodeURIComponent(item.title) + "%3C/text%3E%3C/svg%3E";
                }
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              {type === "video" ? (
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
              <span className="text-sm font-bold font-heading text-foreground text-center px-4 uppercase tracking-wide">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Portfolio Section ── */
const PortfolioSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((item: PortfolioItem) => {
    const idx = allItems.findIndex((i) => i.fileId === item.fileId);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allItems.length) % allItems.length : null));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allItems.length : null));
  }, []);

  return (
    <>
      <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading text-lg font-black tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter mb-6">
              FEATURED <span className="text-gradient-gold">WORK</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl text-xl sm:text-2xl font-semibold">
              A selection of <span className="text-foreground font-bold">graphics design</span>, <span className="text-foreground font-bold">video editing</span>, and multimedia projects delivered for clients. <span className="text-foreground font-bold">Click any item</span> to view full screen.
            </p>
          </motion.div>
        </div>

        {/* Graphics Marquee */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <ImageIcon className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-extrabold text-2xl text-foreground uppercase tracking-tight">Graphics Design</h3>
            </motion.div>
          </div>
          <MarqueeRow items={graphicItems} direction="left" type="graphic" onItemClick={openLightbox} />
        </div>

        {/* Video Marquee */}
        <div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <Play className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-extrabold text-2xl text-foreground uppercase tracking-tight">Video Editing & Multimedia</h3>
            </motion.div>
          </div>
          <MarqueeRow items={videoItems} direction="right" type="video" onItemClick={openLightbox} />
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={allItems}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
