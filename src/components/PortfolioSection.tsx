import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight, ExternalLink, Folder, Camera } from "lucide-react";
import { useState, useCallback } from "react";

const getGoogleDriveThumbnail = (fileId: string, size: number = 1000): string =>
  `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
const getImageUrl = (fileId: string): string =>
  `https://drive.google.com/uc?export=view&id=${fileId}`;
const getVideoEmbedUrl = (fileId: string): string =>
  `https://drive.google.com/file/d/${fileId}/preview`;
const getYouTubeThumbnail = (videoId: string): string =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
const getYouTubeEmbedUrl = (videoId: string): string =>
  `https://www.youtube.com/embed/${videoId}`;

const createItem = (fileId: string, title: string, link: string, type: "image" | "video") => ({
  thumbnail: getGoogleDriveThumbnail(fileId, 1000),
  src: type === "image" ? getImageUrl(fileId) : getGoogleDriveThumbnail(fileId, 1000),
  title, link, fileId, type, source: "drive" as const,
  embedUrl: type === "video" ? getVideoEmbedUrl(fileId) : null,
});

const createYouTubeItem = (videoId: string, title: string) => ({
  thumbnail: getYouTubeThumbnail(videoId),
  src: getYouTubeThumbnail(videoId),
  title,
  link: `https://www.youtube.com/watch?v=${videoId}`,
  fileId: videoId, type: "video" as const, source: "youtube" as const,
  embedUrl: getYouTubeEmbedUrl(videoId),
});

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

const adEditsItems = [
  createItem("1dKJvM_r5MEdHgpuu81y1VXRAKWi2hNWk", "Ad Edit 1", "https://drive.google.com/file/d/1dKJvM_r5MEdHgpuu81y1VXRAKWi2hNWk/view?usp=drive_link", "video"),
  createItem("1mBv75WOUJjVgLFUafp7gHlhjzWYpW3VR", "Ad Edit 2", "https://drive.google.com/file/d/1mBv75WOUJjVgLFUafp7gHlhjzWYpW3VR/view?usp=drive_link", "video"),
  createItem("1YnCvxFh-5jdXr1ZcsmmxDoYXP2c5RFd2", "Ad Edit 3", "https://drive.google.com/file/d/1YnCvxFh-5jdXr1ZcsmmxDoYXP2c5RFd2/view?usp=drive_link", "video"),
  createItem("18zp1mzFhnez85z6mmFDAdvjQuBgW01oI", "Ad Edit 4", "https://drive.google.com/file/d/18zp1mzFhnez85z6mmFDAdvjQuBgW01oI/view?usp=drive_link", "video"),
  createItem("1_A6IhHdfnzdu2PVewoi5ZOmUSwe2vAR3", "Ad Edit 5", "https://drive.google.com/file/d/1_A6IhHdfnzdu2PVewoi5ZOmUSwe2vAR3/view?usp=drive_link", "video"),
  createItem("1fE-9Hh_K17V2iPpaBINvz57ZtOYq_4Y-", "Ad Edit 6", "https://drive.google.com/file/d/1fE-9Hh_K17V2iPpaBINvz57ZtOYq_4Y-/view?usp=drive_link", "video"),
];

const aiVideosBaseItems = [
  createItem("1Q9pgVMD8RiNDL9zyoOEW0kcHgOdoNW5F", "AI Showcase 1", "https://drive.google.com/file/d/1Q9pgVMD8RiNDL9zyoOEW0kcHgOdoNW5F/view?usp=drive_link", "video"),
  createItem("1-Is5dnzrUG6-DZyjYQpXZuuixfJ52b3a", "AI Showcase 2", "https://drive.google.com/file/d/1-Is5dnzrUG6-DZyjYQpXZuuixfJ52b3a/view?usp=drive_link", "video"),
  createItem("1if7K64dndKsjgCz2QFdPQB0c-PqDlm0y", "AI Showcase 3", "https://drive.google.com/file/d/1if7K64dndKsjgCz2QFdPQB0c-PqDlm0y/view?usp=drive_link", "video"),
  createItem("1olt17wzcihPHojy1IoNZmwHV4DYqJgqZ", "AI Showcase 4", "https://drive.google.com/file/d/1olt17wzcihPHojy1IoNZmwHV4DYqJgqZ/view?usp=drive_link", "video"),
  createItem("1AXFy158z3vNRFKAwKPQQ2OVEIDIRVNgx", "AI Showcase 5", "https://drive.google.com/file/d/1AXFy158z3vNRFKAwKPQQ2OVEIDIRVNgx/view?usp=drive_link", "video"),
  createItem("1spNPNu6P1bme_luNy_DGCmi0V9OHDEh8", "AI Showcase 6", "https://drive.google.com/file/d/1spNPNu6P1bme_luNy_DGCmi0V9OHDEh8/view?usp=drive_link", "video"),
];

const digitalProductsItems = [
  createItem("1T_8c_1fR7jQkVMP9exqp3jUOd4TFCZhE", "Digital Product 1", "https://drive.google.com/file/d/1T_8c_1fR7jQkVMP9exqp3jUOd4TFCZhE/view?usp=drive_link", "video"),
  createItem("1uk9gVk9uRiGXdb7vjmMxxN0aYYLFRMYc", "Digital Product 2", "https://drive.google.com/file/d/1uk9gVk9uRiGXdb7vjmMxxN0aYYLFRMYc/view?usp=drive_link", "video"),
  createItem("1TFTyRcOIYxiJRSWrROY6u2IxOeuHq29_", "Digital Product 3", "https://drive.google.com/file/d/1TFTyRcOIYxiJRSWrROY6u2IxOeuHq29_/view?usp=drive_link", "video"),
  createItem("1YQ8eh_BhsPc2oi2TgA6EnwPYM5mAX-jO", "Digital Product 4", "https://drive.google.com/file/d/1YQ8eh_BhsPc2oi2TgA6EnwPYM5mAX-jO/view?usp=drive_link", "video"),
  createItem("14caIZ0fmMDS9XpLWRggyRketkvjKou59", "Digital Product 5", "https://drive.google.com/file/d/14caIZ0fmMDS9XpLWRggyRketkvjKou59/view?usp=drive_link", "video"),
];

const montageVideosItems = [
  createItem("12N4fPIdf3BLeZR9qD7zDi-Hqo3IneniQ", "Montage Video 1", "https://drive.google.com/file/d/12N4fPIdf3BLeZR9qD7zDi-Hqo3IneniQ/view?usp=drive_link", "video"),
  createItem("1piUzDzLFvZmI0lkQgdT5HIja_LZ0fSQl", "Montage Video 2", "https://drive.google.com/file/d/1piUzDzLFvZmI0lkQgdT5HIja_LZ0fSQl/view?usp=drive_link", "video"),
  createItem("17DRQ6UweLA3nIErnCqBdYDtu1ALmnCUp", "Montage Video 3", "https://drive.google.com/file/d/17DRQ6UweLA3nIErnCqBdYDtu1ALmnCUp/view?usp=drive_link", "video"),
  createItem("1eVm3Q4uyWICtMHIJ91nbJF2W9iKt4bNw", "Montage Video 4", "https://drive.google.com/file/d/1eVm3Q4uyWICtMHIJ91nbJF2W9iKt4bNw/view?usp=drive_link", "video"),
  createItem("1Got-KF4dRvipGodo9kvvLVeO6jWcxMoI", "Montage Video 5", "https://drive.google.com/file/d/1Got-KF4dRvipGodo9kvvLVeO6jWcxMoI/view?usp=drive_link", "video"),
];

const movieEditsItems = [
  createItem("1yR-kT3RT31pfwW7hz-XPYJweoxnSIUED", "Movie Edit 1", "https://drive.google.com/file/d/1yR-kT3RT31pfwW7hz-XPYJweoxnSIUED/view?usp=drive_link", "video"),
  createItem("16M9BFNmDUYVoihwEFqF5AbbLxdlaCpl9", "Movie Edit 2", "https://drive.google.com/file/d/16M9BFNmDUYVoihwEFqF5AbbLxdlaCpl9/view?usp=drive_link", "video"),
  createItem("1ImuY-_ASH31xbjuCJ-I7i_IE88PxvHH-", "Movie Edit 3", "https://drive.google.com/file/d/1ImuY-_ASH31xbjuCJ-I7i_IE88PxvHH-/view?usp=drive_link", "video"),
  createItem("1wiy_eFS2uiRqBZn7MbbW2ZFHjFXsJbpx", "Movie Edit 4", "https://drive.google.com/file/d/1wiy_eFS2uiRqBZn7MbbW2ZFHjFXsJbpx/view?usp=drive_link", "video"),
  createItem("1GC2sdSQg7QUNXHEq8LxA0zgu5l2hjMT2", "Movie Edit 5", "https://drive.google.com/file/d/1GC2sdSQg7QUNXHEq8LxA0zgu5l2hjMT2/view?usp=drive_link", "video"),
];

const musicVideosItems = [
  createItem("1YaGkUQ6wGJ3zRihCcLl4J41zy1w3jPoL", "Music Video 1", "https://drive.google.com/file/d/1YaGkUQ6wGJ3zRihCcLl4J41zy1w3jPoL/view?usp=drive_link", "video"),
  createItem("1hk1yz5tX9RBAzCfqmBPlBuY8QLFdrfYE", "Music Video 2", "https://drive.google.com/file/d/1hk1yz5tX9RBAzCfqmBPlBuY8QLFdrfYE/view?usp=drive_link", "video"),
  createItem("1zJPCdpuCXlnnP8epcX40ogGtaevEEbAk", "Music Video 3", "https://drive.google.com/file/d/1zJPCdpuCXlnnP8epcX40ogGtaevEEbAk/view?usp=drive_link", "video"),
  createItem("1LB2F0ny3nN3vwr9VgGan8EDlGSNyCjvQ", "Music Video 4", "https://drive.google.com/file/d/1LB2F0ny3nN3vwr9VgGan8EDlGSNyCjvQ/view?usp=drive_link", "video"),
  createItem("1RHsdRy9-_ni6Ut1Z-c02Ac7-4YO1cun7", "Music Video 5", "https://drive.google.com/file/d/1RHsdRy9-_ni6Ut1Z-c02Ac7-4YO1cun7/view?usp=drive_link", "video"),
  createItem("1mbaghd04NZPsZzfTHIkxvRgMf2IeRpGa", "Music Video 6", "https://drive.google.com/file/d/1mbaghd04NZPsZzfTHIkxvRgMf2IeRpGa/view?usp=drive_link", "video"),
];

const podcastBaseItems = [
  createItem("1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8", "Long Form 1", "https://drive.google.com/file/d/1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8/view?usp=drive_link", "video"),
  createItem("1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH", "Long Form 2", "https://drive.google.com/file/d/1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH/view?usp=drive_link", "video"),
  createItem("1_pn7HONVKK55n8IODsm64I55J2sVognx", "Long Form 3", "https://drive.google.com/file/d/1_pn7HONVKK55n8IODsm64I55J2sVognx/view?usp=drive_link", "video"),
  createItem("1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8", "Long Form 4", "https://drive.google.com/file/d/1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8/view?usp=drive_link", "video"),
  createItem("13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-", "Long Form 5", "https://drive.google.com/file/d/13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-/view?usp=drive_link", "video"),
];

const realEstateItems = [
  createItem("1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex", "Real Estate 1", "https://drive.google.com/file/d/1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex/view?usp=drive_link", "video"),
  createItem("1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6", "Real Estate 2", "https://drive.google.com/file/d/1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6/view?usp=drive_link", "video"),
  createItem("1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB", "Real Estate 3", "https://drive.google.com/file/d/1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB/view?usp=drive_link", "video"),
  createItem("1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh", "Real Estate 4", "https://drive.google.com/file/d/1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh/view?usp=drive_link", "video"),
  createItem("1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae", "Real Estate 5", "https://drive.google.com/file/d/1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae/view?usp=drive_link", "video"),
  createItem("1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL", "Real Estate 6", "https://drive.google.com/file/d/1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL/view?usp=drive_link", "video"),
];

const reelsBaseItems = [
  createItem("1eyxc-j7SmF_P69DL0oqcFxeCCqjPfscJ", "Reel/TikTok 1", "https://drive.google.com/file/d/1eyxc-j7SmF_P69DL0oqcFxeCCqjPfscJ/view?usp=sharing", "video"),
  createItem("1nlx5VSGk7mUeX7YeHmPdDeTTPtLESi7F", "Reel/TikTok 2", "https://drive.google.com/file/d/1nlx5VSGk7mUeX7YeHmPdDeTTPtLESi7F/view?usp=drive_link", "video"),
  createItem("17Ep5Ui7fjVt7n8ESuyvIjgk78rRrOOXc", "Reel/TikTok 3", "https://drive.google.com/file/d/17Ep5Ui7fjVt7n8ESuyvIjgk78rRrOOXc/view?usp=drive_link", "video"),
  createItem("18ytVl-cjtw6B4xRxOdAh9mRRJ1OMmctG", "Reel/TikTok 4", "https://drive.google.com/file/d/18ytVl-cjtw6B4xRxOdAh9mRRJ1OMmctG/view?usp=drive_link", "video"),
  createItem("19Q2bFWr_UBi1H4B7ACf3rLbOdleo6Q14", "Reel/TikTok 5", "https://drive.google.com/file/d/19Q2bFWr_UBi1H4B7ACf3rLbOdleo6Q14/view?usp=drive_link", "video"),
  createItem("14kW8MlCCe9JRR9yxPOhnreeZVTbzweUM", "Reel/TikTok 6", "https://drive.google.com/file/d/14kW8MlCCe9JRR9yxPOhnreeZVTbzweUM/view?usp=drive_link", "video"),
];

const sportsHighlightsItems = [
  createItem("1H2w3qtHauR1zN-nt4N_mqZcaC33nkBaq", "Sports/Highlights 1", "https://drive.google.com/file/d/1H2w3qtHauR1zN-nt4N_mqZcaC33nkBaq/view?usp=drive_link", "video"),
  createItem("1F0CQT6RvmSfuhCXC-fIPtatTCQI_1pS5", "Sports/Highlights 2", "https://drive.google.com/file/d/1F0CQT6RvmSfuhCXC-fIPtatTCQI_1pS5/view?usp=drive_link", "video"),
  createItem("136gM5511VQNTcgL_1_RYL2LuIipt-EN6", "Sports/Highlights 3", "https://drive.google.com/file/d/136gM5511VQNTcgL_1_RYL2LuIipt-EN6/view?usp=drive_link", "video"),
  createItem("1J3m-u_NMVATKcdAu5FHhw5WbskyumEaS", "Sports/Highlights 4", "https://drive.google.com/file/d/1J3m-u_NMVATKcdAu5FHhw5WbskyumEaS/view?usp=drive_link", "video"),
  createItem("14XnfXNfgYCbQeeU8ht-a_a0Rww5YkoXD", "Sports/Highlights 5", "https://drive.google.com/file/d/14XnfXNfgYCbQeeU8ht-a_a0Rww5YkoXD/view?usp=drive_link", "video"),
  createItem("1Abi3ekD2RycaM7NbNOabQy_796Gxtb8m", "Sports/Highlights 6", "https://drive.google.com/file/d/1Abi3ekD2RycaM7NbNOabQy_796Gxtb8m/view?usp=drive_link", "video"),
];

const vlogsItems = [
  createItem("1ghokM8kLonfohH5gezdFBDnRSfLGft4T", "Vlog 1", "https://drive.google.com/file/d/1ghokM8kLonfohH5gezdFBDnRSfLGft4T/view?usp=drive_link", "video"),
  createItem("1_mmVVN9k3hAVUh4nHozWLux7Z6FgeKbr", "Vlog 2", "https://drive.google.com/file/d/1_mmVVN9k3hAVUh4nHozWLux7Z6FgeKbr/view?usp=drive_link", "video"),
  createItem("1-dWkdFfQo3sjhqnUan-6aJGmLYTL3v5t", "Vlog 3", "https://drive.google.com/file/d/1-dWkdFfQo3sjhqnUan-6aJGmLYTL3v5t/view?usp=drive_link", "video"),
  createItem("1f_w0sbqlcxm7MURvei4J2m0A4mVbNqwq", "Vlog 4", "https://drive.google.com/file/d/1f_w0sbqlcxm7MURvei4J2m0A4mVbNqwq/view?usp=drive_link", "video"),
  createItem("1A_Oh9kC8HiZBzBT9iHJ2pOV2JA2GYxm8", "Vlog 5", "https://drive.google.com/file/d/1A_Oh9kC8HiZBzBT9iHJ2pOV2JA2GYxm8/view?usp=drive_link", "video"),
];

const aiVideosNewItems = [
  createItem("1IP0h6-CRkZhtphI3yeuFCthnfhFJB-vV", "AI Video 1", "https://drive.google.com/file/d/1IP0h6-CRkZhtphI3yeuFCthnfhFJB-vV/view?usp=drive_link", "video"),
  createItem("1cxLMuOVUEb5K72hleTM9zdxs-rgYI_-a", "AI Video 2", "https://drive.google.com/file/d/1cxLMuOVUEb5K72hleTM9zdxs-rgYI_-a/view?usp=drive_link", "video"),
  createItem("1Ukq2PkpZCLN8ReiT-ai1gpR83k-WeFIR", "AI Video 3", "https://drive.google.com/file/d/1Ukq2PkpZCLN8ReiT-ai1gpR83k-WeFIR/view?usp=drive_link", "video"),
  createItem("1g3WnaWMTDmZTBJf6Ki1W8ausLLLBfbB6", "AI Video 4", "https://drive.google.com/file/d/1g3WnaWMTDmZTBJf6Ki1W8ausLLLBfbB6/view?usp=drive_link", "video"),
  createItem("1hS4cakeid0syLi2_zuH2o9U6YD24pULz", "AI Video 5", "https://drive.google.com/file/d/1hS4cakeid0syLi2_zuH2o9U6YD24pULz/view?usp=drive_link", "video"),
  createItem("1Cd79XohKlTmBeDu3V9KoZBrxv0x-870e", "AI Video 6", "https://drive.google.com/file/d/1Cd79XohKlTmBeDu3V9KoZBrxv0x-870e/view?usp=drive_link", "video"),
  createItem("1XxHDJL3K9JQulOr0Rb3dDn3sGekqF2_5", "AI Video 7", "https://drive.google.com/file/d/1XxHDJL3K9JQulOr0Rb3dDn3sGekqF2_5/view?usp=drive_link", "video"),
  createItem("1jmcdCn9gB7cmwKj_1H7Bqk__LbQCxdDx", "AI Video 8", "https://drive.google.com/file/d/1jmcdCn9gB7cmwKj_1H7Bqk__LbQCxdDx/view?usp=drive_link", "video"),
  createItem("13GpT0emo2Xi774_uDWW9mQARYL51Iz7d", "AI Video 9", "https://drive.google.com/file/d/13GpT0emo2Xi774_uDWW9mQARYL51Iz7d/view?usp=drive_link", "video"),
  createItem("1h5qoWOzyi68xiJBLZWxaaBQ6v09xAXoN", "AI Video 10", "https://drive.google.com/file/d/1h5qoWOzyi68xiJBLZWxaaBQ6v09xAXoN/view?usp=drive_link", "video"),
  createItem("1jHjZp-2YcQBGgrS3uUTNC2kKpzE8agmm", "AI Video 11", "https://drive.google.com/file/d/1jHjZp-2YcQBGgrS3uUTNC2kKpzE8agmm/view?usp=drive_link", "video"),
  createItem("1BUoAhmqidendlNTiDANjrJDydABT-1Tl", "AI Video 12", "https://drive.google.com/file/d/1BUoAhmqidendlNTiDANjrJDydABT-1Tl/view?usp=drive_link", "video"),
  createItem("1nJUdsxp7zGi7DUSo0GtUzRwQpc6qO-3r", "AI Video 13", "https://drive.google.com/file/d/1nJUdsxp7zGi7DUSo0GtUzRwQpc6qO-3r/view?usp=drive_link", "video"),
  createItem("1xE1ueJcDAAPxHKkmjZyiOh8Mo5MvnJzT", "AI Video 14", "https://drive.google.com/file/d/1xE1ueJcDAAPxHKkmjZyiOh8Mo5MvnJzT/view?usp=drive_link", "video"),
  createItem("12rN0M7kvieAQNHpAbQcmFzBj1an8AYVq", "AI Video 15", "https://drive.google.com/file/d/12rN0M7kvieAQNHpAbQcmFzBj1an8AYVq/view?usp=drive_link", "video"),
  createItem("1qqvUA3HooySVCPSk4Xo9GrFHNp_JW0ZQ", "AI Video 16", "https://drive.google.com/file/d/1qqvUA3HooySVCPSk4Xo9GrFHNp_JW0ZQ/view?usp=drive_link", "video"),
  createItem("1Vye-pdDn426lNqz3pSqWq3wO0YZL8kBV", "AI Video 17", "https://drive.google.com/file/d/1Vye-pdDn426lNqz3pSqWq3wO0YZL8kBV/view?usp=drive_link", "video"),
  createItem("1A3-d4ovKCsrlr_WidzmTkr_ANVcCYzqX", "AI Video 18", "https://drive.google.com/file/d/1A3-d4ovKCsrlr_WidzmTkr_ANVcCYzqX/view?usp=drive_link", "video"),
  createItem("11J3Lov0l8_F_wS26n75WLAqnn7SlikZo", "AI Video 19", "https://drive.google.com/file/d/11J3Lov0l8_F_wS26n75WLAqnn7SlikZo/view?usp=drive_link", "video"),
  createItem("1ouS0D5Vxb5uLxQlfmjN_k1dA3wGZmsx2", "AI Video 20", "https://drive.google.com/file/d/1ouS0D5Vxb5uLxQlfmjN_k1dA3wGZmsx2/view?usp=drive_link", "video"),
  createItem("1OoL9shNjiahL_KISaQBKOdIvYA8-g9Zi", "AI Video 21", "https://drive.google.com/file/d/1OoL9shNjiahL_KISaQBKOdIvYA8-g9Zi/view?usp=drive_link", "video"),
  createItem("1ov7oUp0ohoKGvCSq3mSpK6Y1dK8OBBEg", "AI Video 22", "https://drive.google.com/file/d/1ov7oUp0ohoKGvCSq3mSpK6Y1dK8OBBEg/view?usp=drive_link", "video"),
  createItem("1Ireq1I1MR2xie2MkcRIiBrkid84dadsD", "AI Video 23", "https://drive.google.com/file/d/1Ireq1I1MR2xie2MkcRIiBrkid84dadsD/view?usp=drive_link", "video"),
  createItem("18HSy1eoAc2t_VCP0C_dU4w43idv7pjfI", "AI Video 24", "https://drive.google.com/file/d/18HSy1eoAc2t_VCP0C_dU4w43idv7pjfI/view?usp=drive_link", "video"),
  createItem("18x6bLoBjc25EU_o0i3nC5kIy77MvQ8tL", "AI Video 25", "https://drive.google.com/file/d/18x6bLoBjc25EU_o0i3nC5kIy77MvQ8tL/view?usp=drive_link", "video"),
  createItem("1g9IXyJ7OOS8u71K6npNmWFyw6mkRe6X7", "AI Video 26", "https://drive.google.com/file/d/1g9IXyJ7OOS8u71K6npNmWFyw6mkRe6X7/view?usp=drive_link", "video"),
  createItem("1JlzhFFgCHxCkJNmrI6MiIGrqXQMZe1N5", "AI Video 27", "https://drive.google.com/file/d/1JlzhFFgCHxCkJNmrI6MiIGrqXQMZe1N5/view?usp=drive_link", "video"),
  createItem("1MSuGNj16RrhCAGRb8v_o8ExCN286U2YS", "AI Video 28", "https://drive.google.com/file/d/1MSuGNj16RrhCAGRb8v_o8ExCN286U2YS/view?usp=drive_link", "video"),
  createItem("1pm-yD4gy-8fOiytEMI83ekhEj-TlgSPV", "AI Video 29", "https://drive.google.com/file/d/1pm-yD4gy-8fOiytEMI83ekhEj-TlgSPV/view?usp=drive_link", "video"),
  createItem("1LjXrWV8B8e46A2W_XxWi2eF1RpVopAby", "AI Video 30", "https://drive.google.com/file/d/1LjXrWV8B8e46A2W_XxWi2eF1RpVopAby/view?usp=drive_link", "video"),
  createItem("1lzdgYUjdOs7IZ-hjamm9owy7Nm8wSGW-", "AI Video 31", "https://drive.google.com/file/d/1lzdgYUjdOs7IZ-hjamm9owy7Nm8wSGW-/view?usp=drive_link", "video"),
  createItem("1kVCvAXKlFUYoxJ6nJJ0Glntxm5NYPGvM", "AI Video 32", "https://drive.google.com/file/d/1kVCvAXKlFUYoxJ6nJJ0Glntxm5NYPGvM/view?usp=drive_link", "video"),
  createItem("1M6frEfpMGITRcbTveDgXzsknVEr_sCnM", "AI Video 33", "https://drive.google.com/file/d/1M6frEfpMGITRcbTveDgXzsknVEr_sCnM/view?usp=drive_link", "video"),
  createItem("1-LII31NQYZOoVKceSy2DnGpFjYdY7fDN", "AI Video 34", "https://drive.google.com/file/d/1-LII31NQYZOoVKceSy2DnGpFjYdY7fDN/view?usp=drive_link", "video"),
  createItem("1OYnHZmktH0SYKWTWy_ns2y7kcVV4Qz4g", "AI Video 35", "https://drive.google.com/file/d/1OYnHZmktH0SYKWTWy_ns2y7kcVV4Qz4g/view?usp=drive_link", "video"),
  createItem("1X6gcnj9XavRG1AD5RW3aadw0a9XLP61g", "AI Video 36", "https://drive.google.com/file/d/1X6gcnj9XavRG1AD5RW3aadw0a9XLP61g/view?usp=drive_link", "video"),
  createItem("1Z__xpddDAhfohLuIfc7rgo1e3j11AXWY", "AI Video 37", "https://drive.google.com/file/d/1Z__xpddDAhfohLuIfc7rgo1e3j11AXWY/view?usp=drive_link", "video"),
  createItem("1vADfYajOkc9zkklyXGGxgknL-ufN86uw", "AI Video 38", "https://drive.google.com/file/d/1vADfYajOkc9zkklyXGGxgknL-ufN86uw/view?usp=drive_link", "video"),
  createItem("1SjcxSq6J3P7VOLgrsjBoJSbkXLFQdaij", "AI Video 39", "https://drive.google.com/file/d/1SjcxSq6J3P7VOLgrsjBoJSbkXLFQdaij/view?usp=drive_link", "video"),
  createItem("1LvdKxw2ePW5hhSOOXK6_ESr_tJ_MjGGG", "AI Video 40", "https://drive.google.com/file/d/1LvdKxw2ePW5hhSOOXK6_ESr_tJ_MjGGG/view?usp=drive_link", "video"),
  createItem("1l6kCJgBnWSDL-cO62Jigi7uAJYoaY4ll", "AI Video 41", "https://drive.google.com/file/d/1l6kCJgBnWSDL-cO62Jigi7uAJYoaY4ll/view?usp=drive_link", "video"),
];

const reelsNewItems = [
  createItem("1yLM0NpzAjrfcY5XymTVMdBCZvqB8M_kC", "Short-Form Reel 1", "https://drive.google.com/file/d/1yLM0NpzAjrfcY5XymTVMdBCZvqB8M_kC/view?usp=drive_link", "video"),
  createItem("1Xyoq9U-UwEK2-puYr_BODuBVAyUAr-E0", "Short-Form Reel 2", "https://drive.google.com/file/d/1Xyoq9U-UwEK2-puYr_BODuBVAyUAr-E0/view?usp=drive_link", "video"),
  createItem("1W0nAJReVf8NfGXovVBwRCE33UMGNKUrA", "Short-Form Reel 3", "https://drive.google.com/file/d/1W0nAJReVf8NfGXovVBwRCE33UMGNKUrA/view?usp=drive_link", "video"),
  createItem("11g_sB-BZpJw3-z0q020FcBaStcfDkvzz", "Short-Form Reel 4", "https://drive.google.com/file/d/11g_sB-BZpJw3-z0q020FcBaStcfDkvzz/view?usp=drive_link", "video"),
  createItem("1UvbYBbU0omWOqWysYOomkDUmYc-Kuo13", "Short-Form Reel 5", "https://drive.google.com/file/d/1UvbYBbU0omWOqWysYOomkDUmYc-Kuo13/view?usp=drive_link", "video"),
  createItem("1l-0aJNOrzBWOoOZ1cV8p5Wj6wSTK7OA3", "Short-Form Reel 6", "https://drive.google.com/file/d/1l-0aJNOrzBWOoOZ1cV8p5Wj6wSTK7OA3/view?usp=drive_link", "video"),
  createItem("1rlfcFvypUIGHak__5S39JCNluthTK62Q", "Short-Form Reel 7", "https://drive.google.com/file/d/1rlfcFvypUIGHak__5S39JCNluthTK62Q/view?usp=drive_link", "video"),
  createItem("1l1tx1Qe6iO5xwNPhIuNjzSMeEgI3_WsH", "Short-Form Reel 8", "https://drive.google.com/file/d/1l1tx1Qe6iO5xwNPhIuNjzSMeEgI3_WsH/view?usp=drive_link", "video"),
  createItem("1mrRFoW9TLBpC69Ca9_GBmVYCYlJGiMFG", "Short-Form Reel 9", "https://drive.google.com/file/d/1mrRFoW9TLBpC69Ca9_GBmVYCYlJGiMFG/view?usp=drive_link", "video"),
  createItem("1wuDtCXT8OwETCLBq9k17HSh9oF5k24ek", "Short-Form Reel 10", "https://drive.google.com/file/d/1wuDtCXT8OwETCLBq9k17HSh9oF5k24ek/view?usp=drive_link", "video"),
  createItem("13BQfqC6YIUy10jmHM4yHgp0nnnxPDHFm", "Short-Form Reel 11", "https://drive.google.com/file/d/13BQfqC6YIUy10jmHM4yHgp0nnnxPDHFm/view?usp=drive_link", "video"),
  createItem("12zQVPZd7gsxpB6V6xik0HHOuPZw8K1n7", "Short-Form Reel 12", "https://drive.google.com/file/d/12zQVPZd7gsxpB6V6xik0HHOuPZw8K1n7/view?usp=drive_link", "video"),
  createItem("1HYbvZo2BopwUJyGRxKQJSAIbeGMvWlvO", "Short-Form Reel 13", "https://drive.google.com/file/d/1HYbvZo2BopwUJyGRxKQJSAIbeGMvWlvO/view?usp=drive_link", "video"),
  createItem("1QjsaoaPyfeIFk4NQGjdqYRMzgXp2yE8F", "Short-Form Reel 14", "https://drive.google.com/file/d/1QjsaoaPyfeIFk4NQGjdqYRMzgXp2yE8F/view?usp=drive_link", "video"),
  createItem("1No-A6yVzInd4a_ZP_2Q-risdiaB7M0Gd", "Short-Form Reel 15", "https://drive.google.com/file/d/1No-A6yVzInd4a_ZP_2Q-risdiaB7M0Gd/view?usp=drive_link", "video"),
  createItem("1hlFkfoyNoQ5GtP2e50c_M8tW9zU4r3zL", "Short-Form Reel 16", "https://drive.google.com/file/d/1hlFkfoyNoQ5GtP2e50c_M8tW9zU4r3zL/view?usp=drive_link", "video"),
  createItem("15HwpmGDMwenERfEHibQ-ywWnIzyEdGET", "Short-Form Reel 17", "https://drive.google.com/file/d/15HwpmGDMwenERfEHibQ-ywWnIzyEdGET/view?usp=drive_link", "video"),
  createItem("1jwvQN0y0x2AMaR288gthHdiiiXCjL2ux", "Short-Form Reel 18", "https://drive.google.com/file/d/1jwvQN0y0x2AMaR288gthHdiiiXCjL2ux/view?usp=drive_link", "video"),
  createItem("14dziN4r5whBN_biaexjbd3DciQlJ66_K", "Short-Form Reel 19", "https://drive.google.com/file/d/14dziN4r5whBN_biaexjbd3DciQlJ66_K/view?usp=drive_link", "video"),
  createItem("1LnC2ruybxGV30O0d-CrnJtjn1_yScOS1", "Short-Form Reel 20", "https://drive.google.com/file/d/1LnC2ruybxGV30O0d-CrnJtjn1_yScOS1/view?usp=drive_link", "video"),
  createItem("15UOvj9fL_2JHXBETY8se0P-jLebic8-c", "Short-Form Reel 21", "https://drive.google.com/file/d/15UOvj9fL_2JHXBETY8se0P-jLebic8-c/view?usp=drive_link", "video"),
  createItem("1xf8p8q11muLqkDQs6osBxf4QFa4FBaQx", "Short-Form Reel 22", "https://drive.google.com/file/d/1xf8p8q11muLqkDQs6osBxf4QFa4FBaQx/view?usp=drive_link", "video"),
  createItem("1fTcx-68zKLno9Xzum0AAiZKNlH1ePJLd", "Short-Form Reel 23", "https://drive.google.com/file/d/1fTcx-68zKLno9Xzum0AAiZKNlH1ePJLd/view?usp=drive_link", "video"),
  createItem("1GCyuxn2q9JBPtC-e86VW4eqB5czdNWR6", "Short-Form Reel 24", "https://drive.google.com/file/d/1GCyuxn2q9JBPtC-e86VW4eqB5czdNWR6/view?usp=drive_link", "video"),
  createItem("1_pWIgmVGqu--5-91Q5I_B4t-GGtxExV3", "Short-Form Reel 25", "https://drive.google.com/file/d/1_pWIgmVGqu--5-91Q5I_B4t-GGtxExV3/view?usp=drive_link", "video"),
  createItem("1U-PHsLKpUupJMjfEIgMAe2-70DOlbLrP", "Short-Form Reel 26", "https://drive.google.com/file/d/1U-PHsLKpUupJMjfEIgMAe2-70DOlbLrP/view?usp=drive_link", "video"),
  createItem("1U2jqm-IQ4nBi2wDYE3evrGXVuZhxCONh", "Short-Form Reel 27", "https://drive.google.com/file/d/1U2jqm-IQ4nBi2wDYE3evrGXVuZhxCONh/view?usp=drive_link", "video"),
  createItem("1J2YC7ZQFSi7A9bIiVOKC2J6y7lDbAqs9", "Short-Form Reel 28", "https://drive.google.com/file/d/1J2YC7ZQFSi7A9bIiVOKC2J6y7lDbAqs9/view?usp=drive_link", "video"),
  createItem("13h2AAZn66SgGjD0G7BwjU9z4jyPVCn-L", "Short-Form Reel 29", "https://drive.google.com/file/d/13h2AAZn66SgGjD0G7BwjU9z4jyPVCn-L/view?usp=drive_link", "video"),
  createItem("1t8OshsudR7qudad_VchRvb8aM0W30GSk", "Short-Form Reel 30", "https://drive.google.com/file/d/1t8OshsudR7qudad_VchRvb8aM0W30GSk/view?usp=drive_link", "video"),
];

const documentaryItems = [
  createItem("1ntURPpOPWwx4JJuuX7QDhZRjzCXb2BBb", "Documentary 1", "https://drive.google.com/file/d/1ntURPpOPWwx4JJuuX7QDhZRjzCXb2BBb/view?usp=drive_link", "video"),
  createItem("1eF7ZrcJl37bRybKp55P4k1s6WqwUp4CW", "Documentary 2", "https://drive.google.com/file/d/1eF7ZrcJl37bRybKp55P4k1s6WqwUp4CW/view?usp=drive_link", "video"),
  createItem("1BbPt4lEdwtVJcz0An7ddphLcBvtBcUYD", "Documentary 3", "https://drive.google.com/file/d/1BbPt4lEdwtVJcz0An7ddphLcBvtBcUYD/view?usp=drive_link", "video"),
  createItem("1uPlHXEX8-LXZQoUwl8RHQh10ot4r8e3j", "Documentary 4", "https://drive.google.com/file/d/1uPlHXEX8-LXZQoUwl8RHQh10ot4r8e3j/view?usp=drive_link", "video"),
  createItem("1tbSVgMka7YDDPDe49CcqBd9Mq1Fc_RU1", "Documentary 5", "https://drive.google.com/file/d/1tbSVgMka7YDDPDe49CcqBd9Mq1Fc_RU1/view?usp=drive_link", "video"),
  createItem("1Tz57mFCRCFaMy-CxPM9wqIouaxehi4B7", "Documentary 6", "https://drive.google.com/file/d/1Tz57mFCRCFaMy-CxPM9wqIouaxehi4B7/view?usp=drive_link", "video"),
];

const dropshippingItems = [
  createItem("1aEpTiIQXN6FcYEjBiJrrrWvzNWim3xyI", "Dropshipping 1", "https://drive.google.com/file/d/1aEpTiIQXN6FcYEjBiJrrrWvzNWim3xyI/view?usp=drive_link", "video"),
  createItem("10B2fXTwmQ36gvZFwGZr48lTAxCD8VmOy", "Dropshipping 2", "https://drive.google.com/file/d/10B2fXTwmQ36gvZFwGZr48lTAxCD8VmOy/view?usp=drive_link", "video"),
  createItem("1RH0f2gx3o18qcwnAwky9snWHiVB_Ngjl", "Dropshipping 3", "https://drive.google.com/file/d/1RH0f2gx3o18qcwnAwky9snWHiVB_Ngjl/view?usp=drive_link", "video"),
  createItem("1JbZKntDaJdWH-3fD95x0Yva5sa8-HGlX", "Dropshipping 4", "https://drive.google.com/file/d/1JbZKntDaJdWH-3fD95x0Yva5sa8-HGlX/view?usp=drive_link", "video"),
  createItem("18eiZEGUDCmctsVDud1nepkgdDv0XVUjR", "Dropshipping 5", "https://drive.google.com/file/d/18eiZEGUDCmctsVDud1nepkgdDv0XVUjR/view?usp=drive_link", "video"),
  createItem("1EN7PBIGWsFRXzODnpXvP2IgBN-olP-VD", "Dropshipping 6", "https://drive.google.com/file/d/1EN7PBIGWsFRXzODnpXvP2IgBN-olP-VD/view?usp=drive_link", "video"),
  createItem("1d3xkdQjI0eiHwbSqBTgW4pTyKL0fI0Ho", "Dropshipping 7", "https://drive.google.com/file/d/1d3xkdQjI0eiHwbSqBTgW4pTyKL0fI0Ho/view?usp=drive_link", "video"),
  createItem("1IgzNhMI1cOHaAB4G9QWNzB3pKcRpdbB6", "Dropshipping 8", "https://drive.google.com/file/d/1IgzNhMI1cOHaAB4G9QWNzB3pKcRpdbB6/view?usp=drive_link", "video"),
  createItem("1GAfLl3KjmIaZgQyGfFxQY2EdoMPl9R6Y", "Dropshipping 9", "https://drive.google.com/file/d/1GAfLl3KjmIaZgQyGfFxQY2EdoMPl9R6Y/view?usp=drive_link", "video"),
  createItem("1TulpNrTVJ0o2qsHGmYpxXedruHylPgRY", "Dropshipping 10", "https://drive.google.com/file/d/1TulpNrTVJ0o2qsHGmYpxXedruHylPgRY/view?usp=drive_link", "video"),
  createItem("10F8f8-45Ybr3UWSXAxsXRQ-VrUHBKpPA", "Dropshipping 11", "https://drive.google.com/file/d/10F8f8-45Ybr3UWSXAxsXRQ-VrUHBKpPA/view?usp=drive_link", "video"),
  createItem("1kUn7gfYP84bdZCsQZBhCA16dGf_cT6s6", "Dropshipping 12", "https://drive.google.com/file/d/1kUn7gfYP84bdZCsQZBhCA16dGf_cT6s6/view?usp=drive_link", "video"),
  createItem("15DlL0AtIV7jAmsdGS-YyVR4sBwW4DUek", "Dropshipping 13", "https://drive.google.com/file/d/15DlL0AtIV7jAmsdGS-YyVR4sBwW4DUek/view?usp=drive_link", "video"),
  createItem("1e_zK5F2OBPPkwCK1-MeW3M8Hx01X1JPV", "Dropshipping 14", "https://drive.google.com/file/d/1e_zK5F2OBPPkwCK1-MeW3M8Hx01X1JPV/view?usp=drive_link", "video"),
  createItem("154TzQh2R1vfS3E6Mg0wRtzOd2YMVRlMm", "Dropshipping 15", "https://drive.google.com/file/d/154TzQh2R1vfS3E6Mg0wRtzOd2YMVRlMm/view?usp=drive_link", "video"),
  createItem("10YSJshhQzeSIFAIOqWoi7mcSICy3Zf2I", "Dropshipping 16", "https://drive.google.com/file/d/10YSJshhQzeSIFAIOqWoi7mcSICy3Zf2I/view?usp=drive_link", "video"),
  createItem("1z0-6WwGMe2q3YIkq8cUCD_nnh9oLUL3-", "Dropshipping 17", "https://drive.google.com/file/d/1z0-6WwGMe2q3YIkq8cUCD_nnh9oLUL3-/view?usp=drive_link", "video"),
  createItem("1KGuMXzFCGDx8UHanYaSoO6j4kKE-HZsZ", "Dropshipping 18", "https://drive.google.com/file/d/1KGuMXzFCGDx8UHanYaSoO6j4kKE-HZsZ/view?usp=drive_link", "video"),
  createItem("1-ZZjcGu7CHnETYcYI4goBp8RXhopqjwr", "Dropshipping 19", "https://drive.google.com/file/d/1-ZZjcGu7CHnETYcYI4goBp8RXhopqjwr/view?usp=drive_link", "video"),
  createItem("11xKUeieEDWTRNs_9tWrkfhE6oE0cvd0y", "Dropshipping 20", "https://drive.google.com/file/d/11xKUeieEDWTRNs_9tWrkfhE6oE0cvd0y/view?usp=drive_link", "video"),
  createItem("11eQrASmdDvwvVc8N8dKbgqJIZ2nNT_8Z", "Dropshipping 21", "https://drive.google.com/file/d/11eQrASmdDvwvVc8N8dKbgqJIZ2nNT_8Z/view?usp=drive_link", "video"),
  createItem("1-GlpaRjEiFf0hkcDhkYxc1TPzaevo0Zp", "Dropshipping 22", "https://drive.google.com/file/d/1-GlpaRjEiFf0hkcDhkYxc1TPzaevo0Zp/view?usp=drive_link", "video"),
  createItem("1wFmv5p1WwvTBzI0oQ_mLoTJJwyPJQkp4", "Dropshipping 23", "https://drive.google.com/file/d/1wFmv5p1WwvTBzI0oQ_mLoTJJwyPJQkp4/view?usp=drive_link", "video"),
  createItem("13VhUzA_QZ5yrWSOPnij0jyzBp9mdEFYZ", "Dropshipping 24", "https://drive.google.com/file/d/13VhUzA_QZ5yrWSOPnij0jyzBp9mdEFYZ/view?usp=drive_link", "video"),
  createItem("1sOzbqVFHqCBqQgyXxAp_UYbmqIvcKPZ7", "Dropshipping 25", "https://drive.google.com/file/d/1sOzbqVFHqCBqQgyXxAp_UYbmqIvcKPZ7/view?usp=drive_link", "video"),
  createItem("1_gdyNeIiVXCADagV6Rddtfvf7jzJHGcx", "Dropshipping 26", "https://drive.google.com/file/d/1_gdyNeIiVXCADagV6Rddtfvf7jzJHGcx/view?usp=drive_link", "video"),
  createItem("1bxGf2YCBJlruEld_Ni1GtbPuOZP_E768", "Dropshipping 27", "https://drive.google.com/file/d/1bxGf2YCBJlruEld_Ni1GtbPuOZP_E768/view?usp=drive_link", "video"),
  createItem("19qLwd7CvCI5TaC-nwYcrMh2OJac7GI9Q", "Dropshipping 28", "https://drive.google.com/file/d/19qLwd7CvCI5TaC-nwYcrMh2OJac7GI9Q/view?usp=drive_link", "video"),
  createItem("1CKDvg7oRuhtoFYelKvB3wDY9kSYUQHF8", "Dropshipping 29", "https://drive.google.com/file/d/1CKDvg7oRuhtoFYelKvB3wDY9kSYUQHF8/view?usp=drive_link", "video"),
  createItem("1t4vSpxewq1chxP0ygGryTowqpeIp75oj", "Dropshipping 30", "https://drive.google.com/file/d/1t4vSpxewq1chxP0ygGryTowqpeIp75oj/view?usp=drive_link", "video"),
  createItem("18Q6K9xy3uD7ruBMamJtcBjzWCOUuQ2Ji", "Dropshipping 31", "https://drive.google.com/file/d/18Q6K9xy3uD7ruBMamJtcBjzWCOUuQ2Ji/view?usp=drive_link", "video"),
  createItem("1oMp036Ay4G6sxA9iiGji-TEBtFJV7t2l", "Dropshipping 32", "https://drive.google.com/file/d/1oMp036Ay4G6sxA9iiGji-TEBtFJV7t2l/view?usp=drive_link", "video"),
  createItem("1VQ4N-emzEYniKWs0HttLUMW1FHJAWS5R", "Dropshipping 33", "https://drive.google.com/file/d/1VQ4N-emzEYniKWs0HttLUMW1FHJAWS5R/view?usp=drive_link", "video"),
  createItem("15513dDYGjYrE1-Nym6ABD_gBEc37e9k6", "Dropshipping 34", "https://drive.google.com/file/d/15513dDYGjYrE1-Nym6ABD_gBEc37e9k6/view?usp=drive_link", "video"),
];

const afterEffectsItems = [
  createItem("1Yi0kMsMhHv6jGW0u6uTOkOVH0rDfesM-", "After Effects 1", "https://drive.google.com/file/d/1Yi0kMsMhHv6jGW0u6uTOkOVH0rDfesM-/view?usp=drive_link", "video"),
  createItem("1lUvIDgovk9tUkt3HDO-p7kulnIj2uD5q", "After Effects 2", "https://drive.google.com/file/d/1lUvIDgovk9tUkt3HDO-p7kulnIj2uD5q/view?usp=drive_link", "video"),
  createItem("1iGxgqXqyh20XZdDaK-24k54mmj6MgtW0", "After Effects 3", "https://drive.google.com/file/d/1iGxgqXqyh20XZdDaK-24k54mmj6MgtW0/view?usp=drive_link", "video"),
  createItem("1UV5ZsJyRXZ81lQLRAj4pMM6i8yiYiIZt", "After Effects 4", "https://drive.google.com/file/d/1UV5ZsJyRXZ81lQLRAj4pMM6i8yiYiIZt/view?usp=drive_link", "video"),
  createItem("1nLaWnIWfaB-v7dSOgTbyXBPix3et5aIl", "After Effects 5", "https://drive.google.com/file/d/1nLaWnIWfaB-v7dSOgTbyXBPix3et5aIl/view?usp=drive_link", "video"),
  createItem("1ZrI3sXwy6vPw4nYeGrbzhVtmNDe-em-c", "After Effects 6", "https://drive.google.com/file/d/1ZrI3sXwy6vPw4nYeGrbzhVtmNDe-em-c/view?usp=drive_link", "video"),
  createItem("1I6Hb2kjXu-08hgyvZ98B4fS_7QCy7dHt", "After Effects 7", "https://drive.google.com/file/d/1I6Hb2kjXu-08hgyvZ98B4fS_7QCy7dHt/view?usp=drive_link", "video"),
  createItem("1RB1X6geAPgtZ2VZanCeYnPDK38OR6iKQ", "After Effects 8", "https://drive.google.com/file/d/1RB1X6geAPgtZ2VZanCeYnPDK38OR6iKQ/view?usp=drive_link", "video"),
  createItem("1vwGlkTcdFQFxZ1zNcSIyj2ccc3Hd5u9-", "After Effects 9", "https://drive.google.com/file/d/1vwGlkTcdFQFxZ1zNcSIyj2ccc3Hd5u9-/view?usp=drive_link", "video"),
  createItem("17XVOB08Dp6UsEK7N_bLvex7GT3JPWIwe", "After Effects 10", "https://drive.google.com/file/d/17XVOB08Dp6UsEK7N_bLvex7GT3JPWIwe/view?usp=drive_link", "video"),
];

const stockFootageItems = [
  createItem("1YFH5GZgTclM80pANNzmZ6t2W5AyqC_i0", "Stock Footage 1", "https://drive.google.com/file/d/1YFH5GZgTclM80pANNzmZ6t2W5AyqC_i0/view?usp=drive_link", "video"),
  createItem("1oH1XfD9SlO4kI5IzXauB46HXSDO4p4nV", "Stock Footage 2", "https://drive.google.com/file/d/1oH1XfD9SlO4kI5IzXauB46HXSDO4p4nV/view?usp=drive_link", "video"),
  createItem("1fHyQOA3fv6XhqERWtuJmdA6zfNVZfVo-", "Stock Footage 3", "https://drive.google.com/file/d/1fHyQOA3fv6XhqERWtuJmdA6zfNVZfVo-/view?usp=drive_link", "video"),
  createItem("1ZwPycX1WhXCpRWZpHaYX0M7DmrjaeX-x", "Stock Footage 4", "https://drive.google.com/file/d/1ZwPycX1WhXCpRWZpHaYX0M7DmrjaeX-x/view?usp=drive_link", "video"),
  createItem("14bBPRDjbKn28dXwDel2IjQYytIFgD5Y1", "Stock Footage 5", "https://drive.google.com/file/d/14bBPRDjbKn28dXwDel2IjQYytIFgD5Y1/view?usp=drive_link", "video"),
  createItem("1iH_yAtp5EwvrFN7gq8rr6AZ89BPNLn34", "Stock Footage 6", "https://drive.google.com/file/d/1iH_yAtp5EwvrFN7gq8rr6AZ89BPNLn34/view?usp=drive_link", "video"),
  createItem("1ROAkJpLlOI-_XdIf-Nh27xrmzVn903E3", "Stock Footage 7", "https://drive.google.com/file/d/1ROAkJpLlOI-_XdIf-Nh27xrmzVn903E3/view?usp=drive_link", "video"),
  createItem("1JPgY7NZFgc0sA3p0saQKnSIKG645u35B", "Stock Footage 8", "https://drive.google.com/file/d/1JPgY7NZFgc0sA3p0saQKnSIKG645u35B/view?usp=drive_link", "video"),
  createItem("1I91KYKwvADkMjVAE6dxz6V-uW-433Rb6", "Stock Footage 9", "https://drive.google.com/file/d/1I91KYKwvADkMjVAE6dxz6V-uW-433Rb6/view?usp=drive_link", "video"),
  createItem("1HjGst3CmlPM2qkEixyROlIOkf5hgmn_4", "Stock Footage 10", "https://drive.google.com/file/d/1HjGst3CmlPM2qkEixyROlIOkf5hgmn_4/view?usp=drive_link", "video"),
  createItem("1MXd0STNvuYw4hoqkes7JwFJrSVE16wFM", "Stock Footage 11", "https://drive.google.com/file/d/1MXd0STNvuYw4hoqkes7JwFJrSVE16wFM/view?usp=drive_link", "video"),
  createItem("1kR6mW4fYqX_X3RM-c8Ru3T-cClXFomJ9", "Stock Footage 12", "https://drive.google.com/file/d/1kR6mW4fYqX_X3RM-c8Ru3T-cClXFomJ9/view?usp=drive_link", "video"),
  createItem("1wWTgpZh-mTpeuCXUWLpebA7i6BqV1UaW", "Stock Footage 13", "https://drive.google.com/file/d/1wWTgpZh-mTpeuCXUWLpebA7i6BqV1UaW/view?usp=drive_link", "video"),
  createItem("1cGAz4h2uSRzvVdh4hISECIC1gVcP1Gm9", "Stock Footage 14", "https://drive.google.com/file/d/1cGAz4h2uSRzvVdh4hISECIC1gVcP1Gm9/view?usp=drive_link", "video"),
  createItem("1F08ZJqMK3ydHeyXpH3kjNB3wAX06P_VD", "Stock Footage 15", "https://drive.google.com/file/d/1F08ZJqMK3ydHeyXpH3kjNB3wAX06P_VD/view?usp=drive_link", "video"),
  createItem("1yTqkM3UPnU2QTmMhyNJyVC5oNPyDv12A", "Stock Footage 16", "https://drive.google.com/file/d/1yTqkM3UPnU2QTmMhyNJyVC5oNPyDv12A/view?usp=drive_link", "video"),
  createItem("1O6iaCZyCeV-6K840d9doOqSu5LWsgPIg", "Stock Footage 17", "https://drive.google.com/file/d/1O6iaCZyCeV-6K840d9doOqSu5LWsgPIg/view?usp=drive_link", "video"),
  createItem("1tXVGGLTDb3p8OgYR7UfFnifxOkHpZ8T5", "Stock Footage 18", "https://drive.google.com/file/d/1tXVGGLTDb3p8OgYR7UfFnifxOkHpZ8T5/view?usp=drive_link", "video"),
  createItem("10FgA_HS_zqDXHfsMPncgOZQgQn3F419G", "Stock Footage 19", "https://drive.google.com/file/d/10FgA_HS_zqDXHfsMPncgOZQgQn3F419G/view?usp=drive_link", "video"),
  createItem("1fNNcdYb4LS5Prk3TI1gtR1vx_yYiI1u9", "Stock Footage 20", "https://drive.google.com/file/d/1fNNcdYb4LS5Prk3TI1gtR1vx_yYiI1u9/view?usp=drive_link", "video"),
  createItem("1EQAtczbFu3SC6zJbJDeWzoOeBWRcAr-1", "Stock Footage 21", "https://drive.google.com/file/d/1EQAtczbFu3SC6zJbJDeWzoOeBWRcAr-1/view?usp=drive_link", "video"),
  createItem("1L1LYx9VAvq59k_dAfKXpc81llC5Lww3A", "Stock Footage 22", "https://drive.google.com/file/d/1L1LYx9VAvq59k_dAfKXpc81llC5Lww3A/view?usp=drive_link", "video"),
  createItem("1LDFd9pHiIbIR_fl2n7clVTtvFOC9x2h1", "Stock Footage 23", "https://drive.google.com/file/d/1LDFd9pHiIbIR_fl2n7clVTtvFOC9x2h1/view?usp=drive_link", "video"),
  createItem("1VpqrvWch9_sD6S37br_cHXRbymuArair", "Stock Footage 24", "https://drive.google.com/file/d/1VpqrvWch9_sD6S37br_cHXRbymuArair/view?usp=drive_link", "video"),
  createItem("134aSJbUXXaAiq4REuX0TVakRgMg0Url0", "Stock Footage 25", "https://drive.google.com/file/d/134aSJbUXXaAiq4REuX0TVakRgMg0Url0/view?usp=drive_link", "video"),
  createItem("1uMoHgPSdy62ZgqVtFn54e1pNhTIlRTct", "Stock Footage 26", "https://drive.google.com/file/d/1uMoHgPSdy62ZgqVtFn54e1pNhTIlRTct/view?usp=drive_link", "video"),
  createItem("1PDmgRxnaoR5qAv7TbORnHhNeo3Jzx-4C", "Stock Footage 27", "https://drive.google.com/file/d/1PDmgRxnaoR5qAv7TbORnHhNeo3Jzx-4C/view?usp=drive_link", "video"),
  createItem("1uHluldk1JH3JoGGC85_li65ar7ifybI1", "Stock Footage 28", "https://drive.google.com/file/d/1uHluldk1JH3JoGGC85_li65ar7ifybI1/view?usp=drive_link", "video"),
  createItem("1vqvjw0WfS92rSrbFwTuIle_Ri6_-0Ad4", "Stock Footage 29", "https://drive.google.com/file/d/1vqvjw0WfS92rSrbFwTuIle_Ri6_-0Ad4/view?usp=drive_link", "video"),
  createItem("12Jm12c6xPC8yYYVSnfd9Hce5_OjJwAA3", "Stock Footage 30", "https://drive.google.com/file/d/12Jm12c6xPC8yYYVSnfd9Hce5_OjJwAA3/view?usp=drive_link", "video"),
  createItem("1QZQxSwcFN3wbdQl0uSTSiaJT40AZOQ-I", "Stock Footage 31", "https://drive.google.com/file/d/1QZQxSwcFN3wbdQl0uSTSiaJT40AZOQ-I/view?usp=drive_link", "video"),
  createItem("15A-LqpOXYWJ1HzbtBR8yp0V16eUMAsM2", "Stock Footage 32", "https://drive.google.com/file/d/15A-LqpOXYWJ1HzbtBR8yp0V16eUMAsM2/view?usp=drive_link", "video"),
  createItem("1B34dzyB9oCRK6f4YPAaB9bd0hMMuIM8b", "Stock Footage 33", "https://drive.google.com/file/d/1B34dzyB9oCRK6f4YPAaB9bd0hMMuIM8b/view?usp=drive_link", "video"),
  createItem("1S8OK_wCWYJsXq-mwUxY0lKR2RllxPfNK", "Stock Footage 34", "https://drive.google.com/file/d/1S8OK_wCWYJsXq-mwUxY0lKR2RllxPfNK/view?usp=drive_link", "video"),
  createItem("14kX6Gh30cgOaU8cxuKw4yW_ItTUolZkN", "Stock Footage 35", "https://drive.google.com/file/d/14kX6Gh30cgOaU8cxuKw4yW_ItTUolZkN/view?usp=drive_link", "video"),
  createItem("1xUIh3Jz3HQLd06FEbRf3hR3wGz-EGD2h", "Stock Footage 36", "https://drive.google.com/file/d/1xUIh3Jz3HQLd06FEbRf3hR3wGz-EGD2h/view?usp=drive_link", "video"),
  createItem("16yxjfN7Y9jM7dD4V3-R0m9rk0or0AIFq", "Stock Footage 37", "https://drive.google.com/file/d/16yxjfN7Y9jM7dD4V3-R0m9rk0or0AIFq/view?usp=drive_link", "video"),
  createItem("1B-X4PnhIZa9A_1k1FyOPd7nGy1UJORn8", "Stock Footage 38", "https://drive.google.com/file/d/1B-X4PnhIZa9A_1k1FyOPd7nGy1UJORn8/view?usp=drive_link", "video"),
  createItem("1Oos8bs8t3xFJbFnlTKd9FBosFsSPjAwA", "Stock Footage 39", "https://drive.google.com/file/d/1Oos8bs8t3xFJbFnlTKd9FBosFsSPjAwA/view?usp=drive_link", "video"),
];

const captionsItems = [
  createItem("1L3HDEufmCKW1jA2yr-hJprFboxO5ms15", "Caption Video 1", "https://drive.google.com/file/d/1L3HDEufmCKW1jA2yr-hJprFboxO5ms15/view?usp=drive_link", "video"),
  createItem("1StEs7dEz0ifRWXODRHn3p7sYGMGWFfQ_", "Caption Video 2", "https://drive.google.com/file/d/1StEs7dEz0ifRWXODRHn3p7sYGMGWFfQ_/view?usp=drive_link", "video"),
  createItem("12y0r2ie6m6oYUZOQESFiqkJYnWjR5bd2", "Caption Video 3", "https://drive.google.com/file/d/12y0r2ie6m6oYUZOQESFiqkJYnWjR5bd2/view?usp=drive_link", "video"),
  createItem("1cD8MQucwQ30PLzSeranbrF9A2ZsQ24Uh", "Caption Video 4", "https://drive.google.com/file/d/1cD8MQucwQ30PLzSeranbrF9A2ZsQ24Uh/view?usp=drive_link", "video"),
  createItem("1ljOxU08FOHva2Q_87fa2ynOh8aj-VdV3", "Caption Video 5", "https://drive.google.com/file/d/1ljOxU08FOHva2Q_87fa2ynOh8aj-VdV3/view?usp=drive_link", "video"),
  createItem("1mdB1Lo_fteeJos_XTWeoEHLJp8cgRli4", "Caption Video 6", "https://drive.google.com/file/d/1mdB1Lo_fteeJos_XTWeoEHLJp8cgRli4/view?usp=drive_link", "video"),
  createItem("1Md172lRTNLED2_vDabWKhDxfjKHcQOQ5", "Caption Video 7", "https://drive.google.com/file/d/1Md172lRTNLED2_vDabWKhDxfjKHcQOQ5/view?usp=drive_link", "video"),
  createItem("15L4QCZNKKHBIb1iGBQQGw1W5BasMMOXK", "Caption Video 8", "https://drive.google.com/file/d/15L4QCZNKKHBIb1iGBQQGw1W5BasMMOXK/view?usp=drive_link", "video"),
  createItem("1i2aNpxBl916wiYM7ZVjVCKq5RDDh8h_S", "Caption Video 9", "https://drive.google.com/file/d/1i2aNpxBl916wiYM7ZVjVCKq5RDDh8h_S/view?usp=drive_link", "video"),
  createItem("18bj9fjt6BohX0ohUUVLdzVQd6Q5OnG63", "Caption Video 10", "https://drive.google.com/file/d/18bj9fjt6BohX0ohUUVLdzVQd6Q5OnG63/view?usp=drive_link", "video"),
  createItem("1ygoPuZXPlIEbbVQRzcLXMSTo0Xz2Z5Rx", "Caption Video 11", "https://drive.google.com/file/d/1ygoPuZXPlIEbbVQRzcLXMSTo0Xz2Z5Rx/view?usp=drive_link", "video"),
  createItem("1W8qhj6YBlgbT3QDlKdkOJvxnleDn2f-2", "Caption Video 12", "https://drive.google.com/file/d/1W8qhj6YBlgbT3QDlKdkOJvxnleDn2f-2/view?usp=drive_link", "video"),
  createItem("13CRU6sAmChLW3B6LGrDJ1TKq1HKTF1QM", "Caption Video 13", "https://drive.google.com/file/d/13CRU6sAmChLW3B6LGrDJ1TKq1HKTF1QM/view?usp=drive_link", "video"),
  createItem("1nENtMC3UcxbK0mC541Ww0lGzoZTaVu-1", "Caption Video 14", "https://drive.google.com/file/d/1nENtMC3UcxbK0mC541Ww0lGzoZTaVu-1/view?usp=drive_link", "video"),
  createItem("1Sm252aV-5k5FooGawhcLBpQWZtz5gwIe", "Caption Video 15", "https://drive.google.com/file/d/1Sm252aV-5k5FooGawhcLBpQWZtz5gwIe/view?usp=drive_link", "video"),
  createItem("14CL6MTKpr8mlMhMRq99OERE7t6oA5t0W", "Caption Video 16", "https://drive.google.com/file/d/14CL6MTKpr8mlMhMRq99OERE7t6oA5t0W/view?usp=drive_link", "video"),
  createItem("12_a9UTZmNK8USL69Bb4bhHDx_W_sBDN4", "Caption Video 17", "https://drive.google.com/file/d/12_a9UTZmNK8USL69Bb4bhHDx_W_sBDN4/view?usp=drive_link", "video"),
  createItem("13uvLer0QYr4_mdE4tGPC8t7V8yPOa8_m", "Caption Video 18", "https://drive.google.com/file/d/13uvLer0QYr4_mdE4tGPC8t7V8yPOa8_m/view?usp=drive_link", "video"),
  createItem("1Hhe9627mxGjPXTW6pRayT8YFjF0DZvJ-", "Caption Video 19", "https://drive.google.com/file/d/1Hhe9627mxGjPXTW6pRayT8YFjF0DZvJ-/view?usp=drive_link", "video"),
  createItem("1SCr9MDQrrGRKpkAv6o5M611Lm-SkvxDu", "Caption Video 20", "https://drive.google.com/file/d/1SCr9MDQrrGRKpkAv6o5M611Lm-SkvxDu/view?usp=drive_link", "video"),
  createItem("1EaPRB7gLhy-sX5cWhYbdbCPLfeXyDN_l", "Caption Video 21", "https://drive.google.com/file/d/1EaPRB7gLhy-sX5cWhYbdbCPLfeXyDN_l/view?usp=drive_link", "video"),
  createItem("1YzvmMEkKUcSLeTSfq8X3uqHoK83HoJy8", "Caption Video 22", "https://drive.google.com/file/d/1YzvmMEkKUcSLeTSfq8X3uqHoK83HoJy8/view?usp=drive_link", "video"),
  createItem("18KFf6Tie7kjhNjRGdxDu49kRzQCVgc3m", "Caption Video 23", "https://drive.google.com/file/d/18KFf6Tie7kjhNjRGdxDu49kRzQCVgc3m/view?usp=drive_link", "video"),
  createItem("17GB8YbI6hiJKyTJe3E99RI2l_tYjztYX", "Caption Video 24", "https://drive.google.com/file/d/17GB8YbI6hiJKyTJe3E99RI2l_tYjztYX/view?usp=drive_link", "video"),
  createItem("1wRTKxsv4TQ52QajDB3a88Hma3Eo1gy_f", "Caption Video 25", "https://drive.google.com/file/d/1wRTKxsv4TQ52QajDB3a88Hma3Eo1gy_f/view?usp=drive_link", "video"),
  createItem("1iI5UXQZHbRwVGvjlHay018dZb3u0phKy", "Caption Video 26", "https://drive.google.com/file/d/1iI5UXQZHbRwVGvjlHay018dZb3u0phKy/view?usp=drive_link", "video"),
  createItem("1hYUTWCSkIasArK7XHu_4TPE-FVd0xmJd", "Caption Video 27", "https://drive.google.com/file/d/1hYUTWCSkIasArK7XHu_4TPE-FVd0xmJd/view?usp=drive_link", "video"),
  createItem("1WxybEEPfISBkZNwkhlqgZA7HrMXSgg1u", "Caption Video 28", "https://drive.google.com/file/d/1WxybEEPfISBkZNwkhlqgZA7HrMXSgg1u/view?usp=drive_link", "video"),
  createItem("12RJawDlCB813oyjsjmGfO1t_RQwLvHZN", "Caption Video 29", "https://drive.google.com/file/d/12RJawDlCB813oyjsjmGfO1t_RQwLvHZN/view?usp=drive_link", "video"),
  createItem("1jprfqz6O0qxowHE5c6ZEODtL9NXcnNJA", "Caption Video 30", "https://drive.google.com/file/d/1jprfqz6O0qxowHE5c6ZEODtL9NXcnNJA/view?usp=drive_link", "video"),
  createItem("1quElzhIj5-_mPPGdkVLMJqJCKSBoaKiX", "Caption Video 31", "https://drive.google.com/file/d/1quElzhIj5-_mPPGdkVLMJqJCKSBoaKiX/view?usp=drive_link", "video"),
  createItem("13-YKiN1vv_0Cp6WAdMXoIceL1-EiA9hQ", "Caption Video 32", "https://drive.google.com/file/d/13-YKiN1vv_0Cp6WAdMXoIceL1-EiA9hQ/view?usp=drive_link", "video"),
  createItem("1O7pGuFYhbCFUIJd8e_ngutRcxUy5fGvW", "Caption Video 33", "https://drive.google.com/file/d/1O7pGuFYhbCFUIJd8e_ngutRcxUy5fGvW/view?usp=drive_link", "video"),
  createItem("17Wg94wBR84qe4SCcFjBX2lIHVEvCamqW", "Caption Video 34", "https://drive.google.com/file/d/17Wg94wBR84qe4SCcFjBX2lIHVEvCamqW/view?usp=drive_link", "video"),
  createItem("1GqX_FiXnqHB4hKuqSJUAaVu5x1m6y9rZ", "Caption Video 35", "https://drive.google.com/file/d/1GqX_FiXnqHB4hKuqSJUAaVu5x1m6y9rZ/view?usp=drive_link", "video"),
  createItem("1LT1PeHyW2treEUZWb6LpajYxPe1oeNvP", "Caption Video 36", "https://drive.google.com/file/d/1LT1PeHyW2treEUZWb6LpajYxPe1oeNvP/view?usp=drive_link", "video"),
  createItem("1FyMwGKHQP1mUcnywC0QVdQN3T6soA1L_", "Caption Video 37", "https://drive.google.com/file/d/1FyMwGKHQP1mUcnywC0QVdQN3T6soA1L_/view?usp=drive_link", "video"),
  createItem("16ztN7TKMMoWWaVxo9KsLii7AoPL0YNyj", "Caption Video 38", "https://drive.google.com/file/d/16ztN7TKMMoWWaVxo9KsLii7AoPL0YNyj/view?usp=drive_link", "video"),
  createItem("1adzX6T6-nt4VBfGmgruyJJ95atM3HeBH", "Caption Video 39", "https://drive.google.com/file/d/1adzX6T6-nt4VBfGmgruyJJ95atM3HeBH/view?usp=drive_link", "video"),
  createItem("1ZvCDooSbULhFlMgVwo74YAXvKHDSdh5c", "Caption Video 40", "https://drive.google.com/file/d/1ZvCDooSbULhFlMgVwo74YAXvKHDSdh5c/view?usp=drive_link", "video"),
  createItem("1lTwR-NmKf8zN0Jt3IRvOvdF24oIMWzrQ", "Caption Video 41", "https://drive.google.com/file/d/1lTwR-NmKf8zN0Jt3IRvOvdF24oIMWzrQ/view?usp=drive_link", "video"),
  createItem("1KNyjmQDWcpk0ispVt3hhBiOXXqfpqbcx", "Caption Video 42", "https://drive.google.com/file/d/1KNyjmQDWcpk0ispVt3hhBiOXXqfpqbcx/view?usp=drive_link", "video"),
  createItem("1_2FZmM5FYMgR0U5uv3oVboepbbHxkldk", "Caption Video 43", "https://drive.google.com/file/d/1_2FZmM5FYMgR0U5uv3oVboepbbHxkldk/view?usp=drive_link", "video"),
  createItem("1jpMw_G5_b4kB1kpQLJh7iovWVJY8Ky1U", "Caption Video 44", "https://drive.google.com/file/d/1jpMw_G5_b4kB1kpQLJh7iovWVJY8Ky1U/view?usp=drive_link", "video"),
  createItem("12VNl1owv3rOAYU0LigVIJT7C07uTffmE", "Caption Video 45", "https://drive.google.com/file/d/12VNl1owv3rOAYU0LigVIJT7C07uTffmE/view?usp=drive_link", "video"),
  createItem("1fFOGZw4w2WaB_6CKRrNBIIBHL0FHd2OW", "Caption Video 46", "https://drive.google.com/file/d/1fFOGZw4w2WaB_6CKRrNBIIBHL0FHd2OW/view?usp=drive_link", "video"),
  createItem("1jKb1kiqDvYZUkkbV0fWL2gSZablXiXjc", "Caption Video 47", "https://drive.google.com/file/d/1jKb1kiqDvYZUkkbV0fWL2gSZablXiXjc/view?usp=drive_link", "video"),
  createItem("1pqAZIIG67C6BZ7fIXTz7I1dRqGMPsdbI", "Caption Video 48", "https://drive.google.com/file/d/1pqAZIIG67C6BZ7fIXTz7I1dRqGMPsdbI/view?usp=drive_link", "video"),
  createItem("1-DWHPUg-bPHP1Nm7E4tTEIU1nu16KQ36", "Caption Video 49", "https://drive.google.com/file/d/1-DWHPUg-bPHP1Nm7E4tTEIU1nu16KQ36/view?usp=drive_link", "video"),
  createItem("1y0MEqVER2Jsc7jvHbAV6lnjKdMOY3EYM", "Caption Video 50", "https://drive.google.com/file/d/1y0MEqVER2Jsc7jvHbAV6lnjKdMOY3EYM/view?usp=drive_link", "video"),
  createItem("1eIaWlmgqw-xeZtTtvxgv5vkw2v0HsMl8", "Caption Video 51", "https://drive.google.com/file/d/1eIaWlmgqw-xeZtTtvxgv5vkw2v0HsMl8/view?usp=drive_link", "video"),
  createItem("1w_yngY-qen50LMFtJEa5RVgYo52BrO6w", "Caption Video 52", "https://drive.google.com/file/d/1w_yngY-qen50LMFtJEa5RVgYo52BrO6w/view?usp=drive_link", "video"),
];

const fastPacedItems = [
  createItem("1t3IpOQP6w1TNqcPY6aMPKrXqJXniExMB", "Fast-Paced 1", "https://drive.google.com/file/d/1t3IpOQP6w1TNqcPY6aMPKrXqJXniExMB/view?usp=drive_link", "video"),
  createItem("18X53jQBR7rnqrlw0QDUXtk4ol1W7jyKt", "Fast-Paced 2", "https://drive.google.com/file/d/18X53jQBR7rnqrlw0QDUXtk4ol1W7jyKt/view?usp=drive_link", "video"),
  createItem("10FrZASwAbam9qCAdGXl8ZncttL0yJMPX", "Fast-Paced 3", "https://drive.google.com/file/d/10FrZASwAbam9qCAdGXl8ZncttL0yJMPX/view?usp=drive_link", "video"),
  createItem("1Z93LBp9Cf0MJ0qV7c5jPtuqU-YPYYPlk", "Fast-Paced 4", "https://drive.google.com/file/d/1Z93LBp9Cf0MJ0qV7c5jPtuqU-YPYYPlk/view?usp=drive_link", "video"),
  createItem("1xPK4vUHDoWrE6S3KXaSbMHYCKRMtX5O5", "Fast-Paced 5", "https://drive.google.com/file/d/1xPK4vUHDoWrE6S3KXaSbMHYCKRMtX5O5/view?usp=drive_link", "video"),
  createItem("1lyDyzEqb6OYEsLi40NR3rAtS8sSuwjjV", "Fast-Paced 6", "https://drive.google.com/file/d/1lyDyzEqb6OYEsLi40NR3rAtS8sSuwjjV/view?usp=drive_link", "video"),
  createItem("1vJzIXUNshBSFC6g5AuK4_9HMBPfiinIk", "Fast-Paced 7", "https://drive.google.com/file/d/1vJzIXUNshBSFC6g5AuK4_9HMBPfiinIk/view?usp=drive_link", "video"),
  createItem("1HggIRLUiNa9eMSLp9OheMG9Soqwxxpbf", "Fast-Paced 8", "https://drive.google.com/file/d/1HggIRLUiNa9eMSLp9OheMG9Soqwxxpbf/view?usp=drive_link", "video"),
  createItem("102Tj_VYdUYYMoPmPG76L905C01x1-JjU", "Fast-Paced 9", "https://drive.google.com/file/d/102Tj_VYdUYYMoPmPG76L905C01x1-JjU/view?usp=drive_link", "video"),
  createItem("1gXxdZHnAQgNY86_xD5VasiF6XuskZkUR", "Fast-Paced 10", "https://drive.google.com/file/d/1gXxdZHnAQgNY86_xD5VasiF6XuskZkUR/view?usp=drive_link", "video"),
  createItem("1VAABflzbDGVVfhUyXlSEybVWLVbUlFgb", "Fast-Paced 11", "https://drive.google.com/file/d/1VAABflzbDGVVfhUyXlSEybVWLVbUlFgb/view?usp=drive_link", "video"),
  createItem("1Q4RoYM-EPiFNpxW8u9Vs89EsU5hL1JwI", "Fast-Paced 12", "https://drive.google.com/file/d/1Q4RoYM-EPiFNpxW8u9Vs89EsU5hL1JwI/view?usp=drive_link", "video"),
  createItem("1adnvkohRjiujbfuWXk1Hdx18QMxh_IMB", "Fast-Paced 13", "https://drive.google.com/file/d/1adnvkohRjiujbfuWXk1Hdx18QMxh_IMB/view?usp=drive_link", "video"),
  createItem("1NDNuREG0yrj5G6e14cCacCueusD4UvKV", "Fast-Paced 14", "https://drive.google.com/file/d/1NDNuREG0yrj5G6e14cCacCueusD4UvKV/view?usp=drive_link", "video"),
  createItem("1MgmlmlS2JnvnvUs9Syq4EeasQix6dtlN", "Fast-Paced 15", "https://drive.google.com/file/d/1MgmlmlS2JnvnvUs9Syq4EeasQix6dtlN/view?usp=drive_link", "video"),
  createItem("1GrjtQs8gZy3Rr26Wr0DmOMEsY3R3tabI", "Fast-Paced 16", "https://drive.google.com/file/d/1GrjtQs8gZy3Rr26Wr0DmOMEsY3R3tabI/view?usp=drive_link", "video"),
  createItem("1EYHg0Z-h0RyZpdOIZgz8vwfByYORXDmI", "Fast-Paced 17", "https://drive.google.com/file/d/1EYHg0Z-h0RyZpdOIZgz8vwfByYORXDmI/view?usp=drive_link", "video"),
  createItem("16t8zqg2q7A_cQPTTlejF51FsZ5XlnTLy", "Fast-Paced 18", "https://drive.google.com/file/d/16t8zqg2q7A_cQPTTlejF51FsZ5XlnTLy/view?usp=drive_link", "video"),
  createItem("1cgmiVKa3j-yq1mGGTSP62nTLcoID1ncL", "Fast-Paced 19", "https://drive.google.com/file/d/1cgmiVKa3j-yq1mGGTSP62nTLcoID1ncL/view?usp=drive_link", "video"),
  createItem("12RIb8PlOurGofDJyWug-D_2rpaR-cvZU", "Fast-Paced 20", "https://drive.google.com/file/d/12RIb8PlOurGofDJyWug-D_2rpaR-cvZU/view?usp=drive_link", "video"),
  createItem("1ENAmoR2EmvFIX1_1BhPMYTSQ3DpMXdnz", "Fast-Paced 21", "https://drive.google.com/file/d/1ENAmoR2EmvFIX1_1BhPMYTSQ3DpMXdnz/view?usp=drive_link", "video"),
  createItem("17uk4aNyZM3YC6MU7H9-ax4KLN0ihwtv5", "Fast-Paced 22", "https://drive.google.com/file/d/17uk4aNyZM3YC6MU7H9-ax4KLN0ihwtv5/view?usp=drive_link", "video"),
  createItem("1U87hI_WlLvr4CnpMdnXnB0NHmbmyBb4a", "Fast-Paced 23", "https://drive.google.com/file/d/1U87hI_WlLvr4CnpMdnXnB0NHmbmyBb4a/view?usp=drive_link", "video"),
  createItem("1vabifQhQpZ3qIi_skz5yy-5n3yEAH3s2", "Fast-Paced 24", "https://drive.google.com/file/d/1vabifQhQpZ3qIi_skz5yy-5n3yEAH3s2/view?usp=drive_link", "video"),
  createItem("1wzzh6QF6Mvb2Omh5bbE1ncVaRmJ8eccl", "Fast-Paced 25", "https://drive.google.com/file/d/1wzzh6QF6Mvb2Omh5bbE1ncVaRmJ8eccl/view?usp=drive_link", "video"),
  createItem("1iDqBBM7GWQ6rp5_NY_jLpMVrN6hLWw0w", "Fast-Paced 26", "https://drive.google.com/file/d/1iDqBBM7GWQ6rp5_NY_jLpMVrN6hLWw0w/view?usp=drive_link", "video"),
  createItem("1xwVlaNwFPt2wjxc0RUnq_RDVeELZSEzB", "Fast-Paced 27", "https://drive.google.com/file/d/1xwVlaNwFPt2wjxc0RUnq_RDVeELZSEzB/view?usp=drive_link", "video"),
  createItem("115N40CVsjwNDW78ryflpuUpf2WUiYInD", "Fast-Paced 28", "https://drive.google.com/file/d/115N40CVsjwNDW78ryflpuUpf2WUiYInD/view?usp=drive_link", "video"),
  createItem("1J9XACCRAdH93szn5SjtzLNgpcHN7eeo3", "Fast-Paced 29", "https://drive.google.com/file/d/1J9XACCRAdH93szn5SjtzLNgpcHN7eeo3/view?usp=drive_link", "video"),
  createItem("10hvjwgU9jTtxA3wRkgG5PeuZhTPxw67O", "Fast-Paced 30", "https://drive.google.com/file/d/10hvjwgU9jTtxA3wRkgG5PeuZhTPxw67O/view?usp=drive_link", "video"),
  createItem("1foKhNYtK4kXkY4X8IdQRs1XzOeGVRU1W", "Fast-Paced 31", "https://drive.google.com/file/d/1foKhNYtK4kXkY4X8IdQRs1XzOeGVRU1W/view?usp=drive_link", "video"),
  createItem("1ulfiFfsRoJ8ZyaIBTDtpAfDH_m-HPATw", "Fast-Paced 32", "https://drive.google.com/file/d/1ulfiFfsRoJ8ZyaIBTDtpAfDH_m-HPATw/view?usp=drive_link", "video"),
  createItem("1lzfM9R2xFW817WOKC2pbR_YI9mzOGk54", "Fast-Paced 33", "https://drive.google.com/file/d/1lzfM9R2xFW817WOKC2pbR_YI9mzOGk54/view?usp=drive_link", "video"),
  createItem("1szNVYUnX-Pgo-p-WIJIXQ2MIorlUCLGp", "Fast-Paced 34", "https://drive.google.com/file/d/1szNVYUnX-Pgo-p-WIJIXQ2MIorlUCLGp/view?usp=drive_link", "video"),
  createItem("14yAPVOxh80bu4MQqjFHgyWegS2ZdSz_W", "Fast-Paced 35", "https://drive.google.com/file/d/14yAPVOxh80bu4MQqjFHgyWegS2ZdSz_W/view?usp=drive_link", "video"),
  createItem("1YyelW7DutiVB1iJFPqVTn0ZiuPrPzcoq", "Fast-Paced 36", "https://drive.google.com/file/d/1YyelW7DutiVB1iJFPqVTn0ZiuPrPzcoq/view?usp=drive_link", "video"),
  createItem("1j9SqPCs6_b3JEUS2TMtVt4QdrVTTxtfX", "Fast-Paced 37", "https://drive.google.com/file/d/1j9SqPCs6_b3JEUS2TMtVt4QdrVTTxtfX/view?usp=drive_link", "video"),
  createItem("1AeHOaaktX-Hd2S5NVDIVxXPzi7AKkZhd", "Fast-Paced 38", "https://drive.google.com/file/d/1AeHOaaktX-Hd2S5NVDIVxXPzi7AKkZhd/view?usp=drive_link", "video"),
  createItem("1SjmuI5G0xJUmTradKHECl8kPLYtlvBiA", "Fast-Paced 39", "https://drive.google.com/file/d/1SjmuI5G0xJUmTradKHECl8kPLYtlvBiA/view?usp=drive_link", "video"),
  createItem("16JD9V_LmCGT2Mgv4skF7MTkjpIipFLlU", "Fast-Paced 40", "https://drive.google.com/file/d/16JD9V_LmCGT2Mgv4skF7MTkjpIipFLlU/view?usp=drive_link", "video"),
];

const podcastDriveItems = [
  createItem("1SvecFaaNchrputfzRpUkqKu3S8KOWBU1", "Podcast 1", "https://drive.google.com/file/d/1SvecFaaNchrputfzRpUkqKu3S8KOWBU1/view?usp=drive_link", "video"),
  createItem("1lp4LfJaCfaYghR6BiulST4JvYCQ0grZH", "Podcast 2", "https://drive.google.com/file/d/1lp4LfJaCfaYghR6BiulST4JvYCQ0grZH/view?usp=drive_link", "video"),
  createItem("1U61MVD1YYbonjthSCTUlW1F2F5JuOtLy", "Podcast 3", "https://drive.google.com/file/d/1U61MVD1YYbonjthSCTUlW1F2F5JuOtLy/view?usp=drive_link", "video"),
  createItem("1CVzd9DhU5cyVF1GLLvhUGj8ogxRb5_a5", "Podcast 4", "https://drive.google.com/file/d/1CVzd9DhU5cyVF1GLLvhUGj8ogxRb5_a5/view?usp=drive_link", "video"),
  createItem("1f1NVpwFti_x7KpJQFnvUJNmPU3sij01U", "Podcast 5", "https://drive.google.com/file/d/1f1NVpwFti_x7KpJQFnvUJNmPU3sij01U/view?usp=drive_link", "video"),
  createItem("1-2ZX7N2Ztyc9xN-7sJAJ_gDUwZLqhVAX", "Podcast 6", "https://drive.google.com/file/d/1-2ZX7N2Ztyc9xN-7sJAJ_gDUwZLqhVAX/view?usp=drive_link", "video"),
  createItem("1aVvYvYgUwCuEhZ0BmYIqgRPc9PILkjz6", "Podcast 7", "https://drive.google.com/file/d/1aVvYvYgUwCuEhZ0BmYIqgRPc9PILkjz6/view?usp=drive_link", "video"),
  createItem("1avIMzHtakzf_hwKNk-5zBLYTWpKpAMtC", "Podcast 8", "https://drive.google.com/file/d/1avIMzHtakzf_hwKNk-5zBLYTWpKpAMtC/view?usp=drive_link", "video"),
  createItem("1DtucBC7iJk3Slww7mIePglz-q9eavDVg", "Podcast 9", "https://drive.google.com/file/d/1DtucBC7iJk3Slww7mIePglz-q9eavDVg/view?usp=drive_link", "video"),
  createItem("1E2qjblE9VCviDAiwMlh6l423kGDFlkv5", "Podcast 10", "https://drive.google.com/file/d/1E2qjblE9VCviDAiwMlh6l423kGDFlkv5/view?usp=drive_link", "video"),
  createItem("1KkarBho1Z6vk5q8Ms5p36WCQ_hL4vj_T", "Podcast 11", "https://drive.google.com/file/d/1KkarBho1Z6vk5q8Ms5p36WCQ_hL4vj_T/view?usp=drive_link", "video"),
  createItem("1njaRfeVFBDR4QLY84rNwGnMBlr_4KsCa", "Podcast 12", "https://drive.google.com/file/d/1njaRfeVFBDR4QLY84rNwGnMBlr_4KsCa/view?usp=drive_link", "video"),
  createItem("19XD_i2kYH2g8cFi0-hpbFd-k_F9NaJEs", "Podcast 13", "https://drive.google.com/file/d/19XD_i2kYH2g8cFi0-hpbFd-k_F9NaJEs/view?usp=drive_link", "video"),
  createItem("1LD91Ou9B-sd91tIaX3526WfC_435hO5t", "Podcast 14", "https://drive.google.com/file/d/1LD91Ou9B-sd91tIaX3526WfC_435hO5t/view?usp=drive_link", "video"),
  createItem("1e_-mSIlGuZ3BlG4uDDWLJ9GURoinPYUv", "Podcast 15", "https://drive.google.com/file/d/1e_-mSIlGuZ3BlG4uDDWLJ9GURoinPYUv/view?usp=drive_link", "video"),
  createItem("1AOP5JNG13cLrcKhhkVWyOfqiH3q-9BLt", "Podcast 16", "https://drive.google.com/file/d/1AOP5JNG13cLrcKhhkVWyOfqiH3q-9BLt/view?usp=drive_link", "video"),
  createItem("1JJCr0Kzqttuk_kwNN_O9mqXiPNZ8UnZO", "Podcast 17", "https://drive.google.com/file/d/1JJCr0Kzqttuk_kwNN_O9mqXiPNZ8UnZO/view?usp=drive_link", "video"),
  createItem("1BUrRkGgHQsocDxpEP4f-GT0aMWn-rcmf", "Podcast 18", "https://drive.google.com/file/d/1BUrRkGgHQsocDxpEP4f-GT0aMWn-rcmf/view?usp=drive_link", "video"),
  createItem("1hJeWq1sqTsT7BVk9JH3BdyMWy5uEWiCq", "Podcast 19", "https://drive.google.com/file/d/1hJeWq1sqTsT7BVk9JH3BdyMWy5uEWiCq/view?usp=drive_link", "video"),
  createItem("1XGaa5m8WfAGR4wT1p8XvX0AMCFXNRDZV", "Podcast 20", "https://drive.google.com/file/d/1XGaa5m8WfAGR4wT1p8XvX0AMCFXNRDZV/view?usp=drive_link", "video"),
  createItem("1KrY874EZ3ReJ_r9IRyWUD9QcGp9YDtBQ", "Podcast 21", "https://drive.google.com/file/d/1KrY874EZ3ReJ_r9IRyWUD9QcGp9YDtBQ/view?usp=drive_link", "video"),
  createItem("1zlbOnyiHUZsiS8wDlPQqmSYFoEW1ozEG", "Podcast 22", "https://drive.google.com/file/d/1zlbOnyiHUZsiS8wDlPQqmSYFoEW1ozEG/view?usp=drive_link", "video"),
  createItem("12iXEzRHEF82ppgx5HnoVGPX18wQ1cZ1P", "Podcast 23", "https://drive.google.com/file/d/12iXEzRHEF82ppgx5HnoVGPX18wQ1cZ1P/view?usp=drive_link", "video"),
  createItem("1bygu668bVgA_PXihnClNLUE7G9qRveuT", "Podcast 24", "https://drive.google.com/file/d/1bygu668bVgA_PXihnClNLUE7G9qRveuT/view?usp=drive_link", "video"),
  createItem("1i-71UbNd6TU_Rjmbyi_bL43YwpEeNAMU", "Podcast 25", "https://drive.google.com/file/d/1i-71UbNd6TU_Rjmbyi_bL43YwpEeNAMU/view?usp=drive_link", "video"),
  createItem("16K_taBdsh4rPF4A1dylmdDRPTlJr5MtV", "Podcast 26", "https://drive.google.com/file/d/16K_taBdsh4rPF4A1dylmdDRPTlJr5MtV/view?usp=drive_link", "video"),
  createItem("1rqZaUETZ86Bp6AXPaxO28AALyOIJDIR-", "Podcast 27", "https://drive.google.com/file/d/1rqZaUETZ86Bp6AXPaxO28AALyOIJDIR-/view?usp=drive_link", "video"),
  createItem("1TDG0YHhwBhl_vgnIomA8uINz26ziMLu9", "Podcast 28", "https://drive.google.com/file/d/1TDG0YHhwBhl_vgnIomA8uINz26ziMLu9/view?usp=drive_link", "video"),
];

const podcastYouTubeItems = [
  createYouTubeItem("ktws3TvQmSI", "Podcast 1"),
  createYouTubeItem("jf74gzkUNZ8", "Podcast 2"),
  createYouTubeItem("079BgbLbuoY", "Podcast 3"),
  createYouTubeItem("_NMZcaTh94k", "Podcast 4"),
  createYouTubeItem("QvmstOqbE0Y", "Podcast 5"),
  createYouTubeItem("HbsuS8kn6I4", "Podcast 6"),
  createYouTubeItem("-nlw6Eh69vk", "Podcast 7"),
  createYouTubeItem("xigmLYV5GXg", "Podcast 8"),
  createYouTubeItem("GK1_wYQJU18", "Podcast 9"),
  createYouTubeItem("1P3z7wfKMKY", "Podcast 10"),
  createYouTubeItem("jXo8MwmAZ2k", "Podcast 11"),
  createYouTubeItem("et784jfA5PM", "Podcast 12"),
  createYouTubeItem("TCnFlMYmrRM", "Podcast 13"),
  createYouTubeItem("2236sDdbzh8", "Podcast 14"),
  createYouTubeItem("33OrNFTjqAQ", "Podcast 15"),
  createYouTubeItem("sXzWrUw0t_4", "Podcast 16"),
  createYouTubeItem("U-gUW4puqXI", "Podcast 17"),
  createYouTubeItem("_wl0pk-rAdw", "Podcast 18"),
  createYouTubeItem("Qtv3UPeD0AA", "Podcast 19"),
  createYouTubeItem("003Tjf7A7Kw", "Podcast 20"),
  createYouTubeItem("6X8hZcBeLBI", "Podcast 21"),
  createYouTubeItem("zI5uTUyiIBE", "Podcast 22"),
  createYouTubeItem("kgdpMH5nC-o", "Podcast 23"),
  createYouTubeItem("4j_9yygj2Po", "Podcast 24"),
  createYouTubeItem("_t3D_sRXTM4", "Podcast 25"),
  createYouTubeItem("-Jhmm7we25I", "Podcast 26"),
  createYouTubeItem("Qim7omDh-vI", "Podcast 27"),
  createYouTubeItem("hxuXpg6CQUg", "Podcast 28"),
  createYouTubeItem("rM6RX3fvKhs", "Podcast 29"),
  createYouTubeItem("XyOSw1KcfH8", "Podcast 30"),
  createYouTubeItem("dDMeYmAFJck", "Podcast 31"),
  createYouTubeItem("0-WETk3UIHs", "Podcast 32"),
  createYouTubeItem("xY0UnEpYC4A", "Podcast 33"),
];

const aiVideosItems = [...aiVideosBaseItems, ...aiVideosNewItems];
const reelsTikTokItems = [...reelsBaseItems, ...reelsNewItems];
const podcastItems = [...podcastBaseItems, ...podcastDriveItems, ...podcastYouTubeItems];

const videoCategories = [
  { title: "AI Videos", items: aiVideosItems },
  { title: "Short-Form Videos (Reels)", items: reelsTikTokItems },
  { title: "Documentary Videos", items: documentaryItems },
  { title: "Dropshipping (DTC / VSL / UGC)", items: dropshippingItems },
  { title: "After Effects", items: afterEffectsItems },
  { title: "Stock Footage (B-Roll)", items: stockFootageItems },
  { title: "Captioned / Transcript Videos", items: captionsItems },
  { title: "Fast-Paced Videos", items: fastPacedItems },
  { title: "Long-Form / Podcast", items: podcastItems },
  { title: "Ad Edits", items: adEditsItems },
  { title: "Digital Products", items: digitalProductsItems },
  { title: "Montage", items: montageVideosItems },
  { title: "Movie Edits", items: movieEditsItems },
  { title: "Music Videos", items: musicVideosItems },
  { title: "Real Estate", items: realEstateItems },
  { title: "Sports / Highlights", items: sportsHighlightsItems },
  { title: "Vlogs", items: vlogsItems },
];

const videoItems = videoCategories.flatMap((c) => c.items);

const allItems = [...graphicItems, ...videoItems];

type PortfolioItem = {
  src: string; thumbnail: string; title: string; link: string;
  fileId: string; type: "image" | "video"; embedUrl: string | null;
  source: "drive" | "youtube";
};

const Lightbox = ({
  items, currentIndex, onClose, onPrev, onNext,
}: {
  items: PortfolioItem[]; currentIndex: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) => {
  const item = items[currentIndex];
  const isVideo = item.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(40_30%_16%/0.96)]"
      onClick={onClose}
    >
      <div className="absolute inset-0 tactical-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-1 diag-stripes" />

      <div className="absolute top-1 left-0 right-0 bg-[hsl(45_36%_97%)] border-b border-[hsl(var(--accent-red)/0.45)] px-4 py-2.5 flex items-center justify-between z-10">
        <span className="font-blackops text-[hsl(var(--accent-red))] text-sm tracking-[0.3em] flex items-center gap-2">
          <span className="status-pulse" />
          SHOWREEL · ITEM {String(currentIndex + 1).padStart(3, "0")} / {String(items.length).padStart(3, "0")}
        </span>
        <span className="font-courier text-[12px] text-[hsl(var(--ink-brown))] tracking-[0.3em] hidden sm:inline">
          REF: {item.fileId.slice(0, 10)}
        </span>
      </div>

      <button onClick={onClose} aria-label="Close"
        className="absolute top-16 right-4 p-2 bg-[hsl(45_36%_97%)] border border-[hsl(var(--accent-red))] text-[hsl(var(--accent-red))] hover:bg-[hsl(var(--accent-red))] hover:text-[hsl(40_45%_10%)] transition-colors z-10 glow-red">
        <X className="w-5 h-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous"
        className="absolute left-4 sm:left-8 p-2.5 bg-[hsl(45_36%_97%)] border border-[hsl(var(--accent-red))] text-[hsl(var(--accent-red))] hover:bg-[hsl(var(--accent-red))] hover:text-[hsl(40_45%_10%)] transition-colors z-10">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next"
        className="absolute right-4 sm:right-8 p-2.5 bg-[hsl(45_36%_97%)] border border-[hsl(var(--accent-red))] text-[hsl(var(--accent-red))] hover:bg-[hsl(var(--accent-red))] hover:text-[hsl(40_45%_10%)] transition-colors z-10">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative max-w-[92vw] max-h-[82vh] flex flex-col items-center gap-3 mt-10" onClick={(e) => e.stopPropagation()}>
        <div className="relative paper-card-cream p-2 sm:p-3">
          <div className="absolute -top-1 -left-1 w-5 h-5 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute -top-1 -right-1 w-5 h-5 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute -bottom-1 -left-1 w-5 h-5 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

          {isVideo && item.embedUrl ? (
            <motion.div key={item.fileId} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              className="w-full max-w-6xl aspect-video border-2 border-[hsl(var(--accent-red)/0.5)] overflow-hidden bg-black">
              <iframe src={item.embedUrl} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={item.title} />
            </motion.div>
          ) : (
            <motion.img key={item.src} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              src={item.src} alt={item.title}
              className="max-w-full max-h-[68vh] object-contain border-2 border-[hsl(var(--accent-red)/0.5)]"
              onError={(e) => { (e.target as HTMLImageElement).src = item.thumbnail; }} />
          )}
        </div>

        <div className="paper-card-cream px-4 py-2 flex items-center gap-3">
          <span className="font-blackops text-[hsl(var(--accent-red))] text-sm tracking-[0.3em]">TITLE:</span>
          <p className="font-typewriter text-lg text-[hsl(var(--accent-bone))] uppercase tracking-wide">{item.title}</p>
        </div>

        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            className="dossier-cta mt-1 text-sm">
            <ExternalLink className="w-4 h-4" />
            ACCESS SECURE ARCHIVE
          </a>
        )}
      </div>
    </motion.div>
  );
};

const MarqueeRow = ({
  items, direction = "left", type, onItemClick,
}: {
  items: PortfolioItem[]; direction?: "left" | "right";
  type: "graphic" | "video"; onItemClick: (item: PortfolioItem) => void;
}) => {
  const doubled = [...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-container overflow-hidden py-3">
      <div className={`flex gap-5 ${animClass}`} style={{ width: "max-content" }}>
        {doubled.map((item, i) => {
          const rot = ((i * 37) % 7) - 3;
          return (
            <div key={`${item.title}-${i}`}
              className="group relative shrink-0 paper-card-cream p-2 cursor-pointer transition-all duration-300 hover:!rotate-0 hover:-translate-y-1.5"
              style={{
                width: type === "graphic" ? 420 : 520,
                height: type === "graphic" ? 360 : 340,
                transform: `rotate(${rot}deg)`,
              }}
              onClick={() => onItemClick(item)}
            >
              <div className="absolute -top-2 left-3 bg-[hsl(45_36%_97%)] border border-[hsl(var(--accent-red))] px-2 py-0.5 font-courier text-[11px] tracking-[0.28em] text-[hsl(var(--accent-red))] z-10 rotate-[-2deg]">
                PIECE·{String(i + 1).padStart(3, "0")}
              </div>
              <div className="tape w-12 h-4 -top-2 right-6 rotate-[5deg] z-10" />

              <div className="relative w-full h-full overflow-hidden border border-[hsl(var(--accent-red)/0.4)] group-hover:border-[hsl(var(--accent-red))] transition-colors">
                <img src={item.thumbnail} alt={item.title} loading="lazy"
                  className="w-full h-full object-cover photocopy transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const retryCount = parseInt(target.dataset.retryCount || "0");
                    if (item.source === "youtube") {
                      if (retryCount === 0) { target.dataset.retryCount = "1"; target.src = `https://img.youtube.com/vi/${item.fileId}/mqdefault.jpg`; }
                      else { target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f0f0f' width='400' height='300'/%3E%3Ctext fill='%23e63946' font-family='monospace' font-size='14' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E" + encodeURIComponent(item.title) + "%3C/text%3E%3C/svg%3E"; }
                      return;
                    }
                    if (retryCount === 0) { target.dataset.retryCount = "1"; target.src = `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w800`; }
                    else if (retryCount === 1) { target.dataset.retryCount = "2"; target.src = `https://drive.google.com/uc?export=view&id=${item.fileId}`; }
                    else if (retryCount === 2) { target.dataset.retryCount = "3"; target.src = `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w1000&authuser=0`; }
                    else if (retryCount === 3) { target.dataset.retryCount = "4"; target.src = `https://drive.google.com/uc?export=download&id=${item.fileId}`; }
                    else { target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f0f0f' width='400' height='300'/%3E%3Ctext fill='%23e63946' font-family='monospace' font-size='14' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E" + encodeURIComponent(item.title) + "%3C/text%3E%3C/svg%3E"; }
                  }}
                />

                {/* Cinematic noir gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(40_30%_16%/0.55)] via-transparent to-[hsl(40_30%_16%/0.15)] pointer-events-none" />

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[hsl(var(--accent-red))]" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[hsl(var(--accent-red))]" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[hsl(var(--accent-red))]" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[hsl(var(--accent-red))]" />

                <div className="absolute top-2 right-6 stamp text-[12px] !p-1 !rotate-0">
                  {type === "video" ? "VIDEO" : "PRINT"}
                </div>

                <div className="absolute inset-0 bg-[hsl(40_30%_16%/0.88)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                  {type === "video" ? (
                    <div className="w-14 h-14 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(var(--accent-red)/0.18)] glow-red">
                      <Play className="w-5 h-5 text-[hsl(var(--accent-red))] ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 border-2 border-[hsl(var(--accent-red))] flex items-center justify-center bg-[hsl(var(--accent-red)/0.18)] glow-red">
                      <ImageIcon className="w-5 h-5 text-[hsl(var(--accent-red))]" />
                    </div>
                  )}
                  <span className="font-blackops text-base text-[hsl(45_36%_94%)] text-center tracking-[0.3em] uppercase">
                    View Work
                  </span>
                  <span className="font-courier text-[12px] text-[hsl(var(--accent-red-bright))] tracking-[0.2em]">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="mt-1.5 flex items-center justify-between font-courier text-[12px] tracking-[0.22em] text-[hsl(var(--ink-charcoal))]">
                <span className="truncate uppercase">{item.title}</span>
                <span className="text-[hsl(var(--accent-red))] shrink-0 ml-2">{item.fileId.slice(0, 8)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
      <section id="portfolio" className="relative py-20 sm:py-28 overflow-hidden paper-grain">
        <div className="absolute inset-0 tactical-grid opacity-[0.35] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
          <div className="watermark watermark-dark text-[17vw] leading-none -rotate-6 -mr-10 mt-10">
            THE BOOK
          </div>
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 relative">
            <div className="section-eyebrow mb-3">
              <Folder className="w-4 h-4 text-[hsl(var(--accent-red))]" />
              SECTION 04 // THE SHOWREEL
            </div>
            <p className="font-courier text-[12px] tracking-[0.4em] text-[hsl(var(--accent-red))] mb-2 uppercase">
              The Portfolio · Greatest Hits
            </p>
            <h2 className="display-title text-6xl sm:text-8xl md:text-9xl uppercase">
              FEATURED <span className="accent">WORK</span>
            </h2>
            <div className="mt-4 flex items-start gap-4 max-w-3xl">
              <div className="stamp stamp-black text-[13px] !p-1.5 hidden sm:inline-flex">THE BOOK</div>
              <p className="font-typewriter text-xl sm:text-2xl text-[hsl(var(--ink-charcoal))] leading-relaxed">
                A selection of{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">graphics design</span>,{" "}
                <span className="font-bold text-[hsl(var(--accent-bone))] underline decoration-[hsl(var(--accent-red))] underline-offset-4">video editing</span>, and multimedia projects delivered for clients.{" "}
                <span className="font-bold underline decoration-[hsl(var(--accent-red))] text-[hsl(var(--accent-red))]">Click any item</span> to view full screen.
              </p>
            </div>
          </motion.div>

          <div className="mb-3 flex items-center gap-3">
            <Camera className="w-5 h-5 text-[hsl(var(--accent-red))]" />
            <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] uppercase tracking-[0.14em]">
              Graphics Design
            </h3>
            <span className="flex-1 h-px bg-[hsl(var(--accent-red)/0.5)]" />
            <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em]">
              {graphicItems.length} PIECES
            </span>
          </div>
        </div>

        <div className="mb-14">
          <MarqueeRow items={graphicItems} direction="left" type="graphic" onItemClick={openLightbox} />
        </div>

        {videoCategories.map((cat, idx) => (
          <div key={cat.title} className="mb-14">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mb-3 flex items-center gap-3">
              <Play className="w-5 h-5 text-[hsl(var(--accent-red))]" />
              <h3 className="font-blackops text-3xl sm:text-4xl text-[hsl(var(--accent-bone))] uppercase tracking-[0.14em]">
                {cat.title}
              </h3>
              <span className="flex-1 h-px bg-[hsl(var(--accent-red)/0.5)]" />
              <span className="font-courier text-[12px] text-[hsl(var(--accent-red))] tracking-[0.3em] whitespace-nowrap">
                {cat.items.length} REELS
              </span>
            </div>
            <MarqueeRow items={cat.items} direction={idx % 2 === 0 ? "right" : "left"} type="video" onItemClick={openLightbox} />
          </div>
        ))}

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[11px] text-[hsl(var(--ink-brown))] tracking-[0.3em] uppercase border-t border-[hsl(var(--accent-red)/0.3)] pt-3">
          <span><span className="text-[hsl(var(--accent-red))]">◉</span> THE BOOK IS OPEN · LIVE FEED</span>
          <span>{allItems.length} TOTAL PIECES</span>
          <span>HOVER TO PAUSE THE TAPE</span>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox items={allItems} currentIndex={lightboxIndex} onClose={closeLightbox} onPrev={goPrev} onNext={goNext} />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
