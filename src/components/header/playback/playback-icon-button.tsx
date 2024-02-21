import React from "react";
import { StaticImageData } from "next/image";
import HoverableIcon from "@/utils/hoverable-icon";

interface PlaybackButtonProps {
  icon?: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
}

const PlaybackButton: React.FC<PlaybackButtonProps> = ({ icon, onClick }) => (
  <button
    className={`w-8 h-8 ${
      icon ? " p-1 bg-opacity-80 rounded-md m-1 backdrop-blur-sm" : ""
    }`}
    onClick={onClick}
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    {icon ? <HoverableIcon src={icon.src} alt={icon.alt} /> : null}
  </button>
);

export default PlaybackButton;
