import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight, ExternalLink, Folder, Camera } from "lucide-react";
import { useState, useCallback } from "react";

const getGoogleDriveThumbnail = (fileId: string, size: number = 1000): string =>
  `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
const getImageUrl = (fileId: string): string =>
  `https://drive.google.com/uc?export=view&id=${fileId}`;
const getVideoEmbedUrl = (fileId: string): string =>
  `https://drive.google.com/file/d/${fileId}/preview`;

const createItem = (fileId: string, title: string, link: string, type: "image" | "video") => ({
  thumbnail: getGoogleDriveThumbnail(fileId, 1000),
  src: type === "image" ? getImageUrl(fileId) : getGoogleDriveThumbnail(fileId, 1000),
  title, link, fileId, type,
  embedUrl: type === "video" ? getVideoEmbedUrl(fileId) : null,
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

const aiVideosItems = [
  createItem("1Q9pgVMD8RiNDL9zyoOEW0kcHgOdoNW5F", "AI Video 1", "https://drive.google.com/file/d/1Q9pgVMD8RiNDL9zyoOEW0kcHgOdoNW5F/view?usp=drive_link", "video"),
  createItem("1-Is5dnzrUG6-DZyjYQpXZuuixfJ52b3a", "AI Video 2", "https://drive.google.com/file/d/1-Is5dnzrUG6-DZyjYQpXZuuixfJ52b3a/view?usp=drive_link", "video"),
  createItem("1if7K64dndKsjgCz2QFdPQB0c-PqDlm0y", "AI Video 3", "https://drive.google.com/file/d/1if7K64dndKsjgCz2QFdPQB0c-PqDlm0y/view?usp=drive_link", "video"),
  createItem("1olt17wzcihPHojy1IoNZmwHV4DYqJgqZ", "AI Video 4", "https://drive.google.com/file/d/1olt17wzcihPHojy1IoNZmwHV4DYqJgqZ/view?usp=drive_link", "video"),
  createItem("1AXFy158z3vNRFKAwKPQQ2OVEIDIRVNgx", "AI Video 5", "https://drive.google.com/file/d/1AXFy158z3vNRFKAwKPQQ2OVEIDIRVNgx/view?usp=drive_link", "video"),
  createItem("1spNPNu6P1bme_luNy_DGCmi0V9OHDEh8", "AI Video 6", "https://drive.google.com/file/d/1spNPNu6P1bme_luNy_DGCmi0V9OHDEh8/view?usp=drive_link", "video"),
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

const podcastItems = [
  createItem("1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8", "Podcast/Long Form 1", "https://drive.google.com/file/d/1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8/view?usp=drive_link", "video"),
  createItem("1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH", "Podcast/Long Form 2", "https://drive.google.com/file/d/1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH/view?usp=drive_link", "video"),
  createItem("1_pn7HONVKK55n8IODsm64I55J2sVognx", "Podcast/Long Form 3", "https://drive.google.com/file/d/1_pn7HONVKK55n8IODsm64I55J2sVognx/view?usp=drive_link", "video"),
  createItem("1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8", "Podcast/Long Form 4", "https://drive.google.com/file/d/1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8/view?usp=drive_link", "video"),
  createItem("13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-", "Podcast/Long Form 5", "https://drive.google.com/file/d/13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-/view?usp=drive_link", "video"),
];

const realEstateItems = [
  createItem("1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex", "Real Estate 1", "https://drive.google.com/file/d/1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex/view?usp=drive_link", "video"),
  createItem("1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6", "Real Estate 2", "https://drive.google.com/file/d/1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6/view?usp=drive_link", "video"),
  createItem("1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB", "Real Estate 3", "https://drive.google.com/file/d/1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB/view?usp=drive_link", "video"),
  createItem("1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh", "Real Estate 4", "https://drive.google.com/file/d/1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh/view?usp=drive_link", "video"),
  createItem("1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae", "Real Estate 5", "https://drive.google.com/file/d/1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae/view?usp=drive_link", "video"),
  createItem("1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL", "Real Estate 6", "https://drive.google.com/file/d/1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL/view?usp=drive_link", "video"),
];

const reelsTikTokItems = [
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

const videoItems = [
  ...adEditsItems, ...aiVideosItems, ...digitalProductsItems, ...montageVideosItems,
  ...movieEditsItems, ...musicVideosItems, ...podcastItems, ...realEstateItems,
  ...reelsTikTokItems, ...sportsHighlightsItems, ...vlogsItems,
];

const allItems = [...graphicItems, ...videoItems];

type PortfolioItem = {
  src: string; thumbnail: string; title: string; link: string;
  fileId: string; type: "image" | "video"; embedUrl: string | null;
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--ink-charcoal)/0.92)]"
      onClick={onClose}
    >
      <div className="absolute inset-0 tactical-grid opacity-[0.12] pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 bg-paper border-b-2 border-ink px-4 py-2 flex items-center justify-between z-10">
        <span className="font-blackops text-ink text-sm tracking-[0.3em]">
          EVIDENCE VIEWER · FILE {String(currentIndex + 1).padStart(3, "0")} / {String(items.length).padStart(3, "0")}
        </span>
        <span className="font-courier text-[13px] text-ink-brown tracking-widest hidden sm:inline">
          REF: {item.fileId.slice(0, 10)}
        </span>
      </div>

      <button onClick={onClose} aria-label="Close"
        className="absolute top-14 right-4 p-2 bg-paper border-2 border-ink text-ink hover:bg-ink hover:text-paper transition-colors z-10">
        <X className="w-5 h-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous"
        className="absolute left-4 sm:left-8 p-2 bg-paper border-2 border-ink text-ink hover:bg-ink hover:text-paper transition-colors z-10">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next"
        className="absolute right-4 sm:right-8 p-2 bg-paper border-2 border-ink text-ink hover:bg-ink hover:text-paper transition-colors z-10">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative max-w-[92vw] max-h-[82vh] flex flex-col items-center gap-3 mt-10" onClick={(e) => e.stopPropagation()}>
        <div className="relative paper-card-cream p-2 sm:p-3">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-ink" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-ink" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-ink" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-ink" />

          {isVideo && item.embedUrl ? (
            <motion.div key={item.fileId} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              className="w-full max-w-6xl aspect-video border-2 border-ink overflow-hidden bg-black">
              <iframe src={item.embedUrl} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={item.title} />
            </motion.div>
          ) : (
            <motion.img key={item.src} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              src={item.src} alt={item.title}
              className="max-w-full max-h-[68vh] object-contain border-2 border-ink"
              onError={(e) => { (e.target as HTMLImageElement).src = item.thumbnail; }} />
          )}
        </div>

        <div className="paper-card-cream px-4 py-2 flex items-center gap-3">
          <span className="font-blackops text-ink text-sm tracking-widest">EVIDENCE TAG:</span>
          <p className="font-typewriter text-lg text-ink uppercase tracking-wide">{item.title}</p>
        </div>

        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            className="mt-1 px-5 py-2 bg-ink text-paper border-2 border-ink font-blackops text-sm tracking-[0.18em] uppercase hover:bg-paper hover:text-ink transition-colors flex items-center gap-2">
            ACCESS SECURE ARCHIVE
            <ExternalLink className="w-4 h-4" />
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
              className="group relative shrink-0 paper-card-cream p-2 cursor-pointer transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1"
              style={{
                width: type === "graphic" ? 420 : 520,
                height: type === "graphic" ? 360 : 340,
                transform: `rotate(${rot}deg)`,
              }}
              onClick={() => onItemClick(item)}
            >
              <div className="absolute -top-2 left-3 bg-paper border border-ink px-2 py-0.5 font-courier text-[12px] tracking-widest text-ink z-10 rotate-[-2deg]">
                EVIDENCE-{String(i + 1).padStart(3, "0")}
              </div>
              <div className="tape tape-yellow w-12 h-4 -top-2 right-6 rotate-[5deg] z-10" />

              <div className="relative w-full h-full overflow-hidden border-2 border-ink">
                <img src={item.thumbnail} alt={item.title} loading="lazy"
                  className="w-full h-full object-cover photocopy transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const retryCount = parseInt(target.dataset.retryCount || "0");
                    if (retryCount === 0) { target.dataset.retryCount = "1"; target.src = `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w800`; }
                    else if (retryCount === 1) { target.dataset.retryCount = "2"; target.src = `https://drive.google.com/uc?export=view&id=${item.fileId}`; }
                    else if (retryCount === 2) { target.dataset.retryCount = "3"; target.src = `https://drive.google.com/thumbnail?id=${item.fileId}&sz=w1000&authuser=0`; }
                    else if (retryCount === 3) { target.dataset.retryCount = "4"; target.src = `https://drive.google.com/uc?export=download&id=${item.fileId}`; }
                    else { target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23E8E0D0' width='400' height='300'/%3E%3Ctext fill='%231A1A1A' font-family='monospace' font-size='14' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E" + encodeURIComponent(item.title) + "%3C/text%3E%3C/svg%3E"; }
                  }}
                />

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-paper" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-paper" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-paper" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-paper" />

                <div className="absolute top-2 right-6 stamp-black stamp text-[13px] !p-1 !rotate-0">
                  {type === "video" ? "VIDEO REC" : "PHOTO REF"}
                </div>

                <div className="absolute inset-0 bg-[hsl(var(--ink-charcoal)/0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                  {type === "video" ? (
                    <div className="w-12 h-12 border-2 border-paper flex items-center justify-center">
                      <Play className="w-5 h-5 text-paper ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 border-2 border-paper flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-paper" />
                    </div>
                  )}
                  <span className="font-blackops text-base text-paper text-center tracking-widest uppercase">
                    REVIEW EVIDENCE
                  </span>
                  <span className="font-courier text-[13px] text-paper/70 tracking-widest">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="mt-1.5 flex items-center justify-between font-courier text-[13px] tracking-widest text-ink">
                <span className="truncate uppercase">{item.title}</span>
                <span className="text-ink-brown shrink-0 ml-2">{item.fileId.slice(0, 8)}</span>
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
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end">
          <div className="watermark watermark-dark text-[16.1vw] leading-none -rotate-6 -mr-10 mt-10">
            CASE FILES
          </div>
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 relative">
            <div className="flex items-center gap-3 mb-3">
              <Folder className="w-5 h-5 text-ink" />
              <span className="font-blackops text-base tracking-[0.3em] text-ink">
                SECTION 04 // PORTFOLIO
              </span>
              <span className="font-courier text-sm text-ink-brown tracking-widest hidden sm:inline">CLASSIFIED MISSIONS ARCHIVE</span>
            </div>
            <h2 className="font-blackops text-6xl sm:text-8xl md:text-9xl text-ink leading-[0.9] tracking-tight">
              FEATURED <span className="text-ink">WORK</span>
            </h2>
            <div className="mt-4 flex items-start gap-4 max-w-3xl">
              <div className="stamp stamp-black text-[14px] !p-1.5 hidden sm:inline-flex">FILE 04</div>
              <p className="font-typewriter text-xl sm:text-2xl text-ink leading-relaxed">
                A selection of <span className="font-bold text-ink underline">graphics design</span>, <span className="font-bold text-ink underline">video editing</span>, and multimedia projects delivered for clients. <span className="font-bold underline">Click any item</span> to view full screen.
              </p>
            </div>
          </motion.div>

          <div className="mb-3 flex items-center gap-3">
            <Camera className="w-5 h-5 text-ink" />
            <h3 className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-[0.1em]">
              Graphics Design
            </h3>
            <span className="flex-1 h-px border-t border-dashed-ink" />
            <span className="font-courier text-[13px] text-ink-brown tracking-widest">
              {graphicItems.length} ARTIFACTS
            </span>
          </div>
        </div>

        <div className="mb-12">
          <MarqueeRow items={graphicItems} direction="left" type="graphic" onItemClick={openLightbox} />
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mb-3 flex items-center gap-3">
          <Play className="w-5 h-5 text-ink" />
          <h3 className="font-blackops text-3xl sm:text-4xl text-ink uppercase tracking-[0.1em]">
            Video Editing &amp; Multimedia
          </h3>
          <span className="flex-1 h-px border-t border-dashed-ink" />
          <span className="font-courier text-[13px] text-ink-brown tracking-widest">
            {videoItems.length} REELS
          </span>
        </div>

        <div>
          <MarqueeRow items={videoItems} direction="right" type="video" onItemClick={openLightbox} />
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mt-10 flex flex-wrap items-center justify-between gap-3 font-courier text-[13px] text-ink-brown tracking-widest">
          <span>EVIDENCE LIVE-FEED ENGAGED</span>
          <span>{allItems.length} TOTAL ARTIFACTS LOGGED</span>
          <span>HOVER PAUSES TRANSMISSION</span>
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
