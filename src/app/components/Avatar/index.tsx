import React from "react";
import Image from "next/image";
import avatarFallbackImg from "@/app/assets/images/avatar-fallback.png";
import type { AvatarPropTypes } from "./types";

export default function Avatar({ imageAlt, imageSrc, name }: AvatarPropTypes) {
  const showImage = !!imageAlt && !!imageSrc;

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="rounded-full h-20 w-20 min-h-20 min-w-20 bg-white overflow-hidden">
        {showImage ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={74}
            width={74}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={avatarFallbackImg}
            alt="Imagen de Avatar por defecto"
            height={74}
            width={74}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {!!name && <span className="text-3xl font-semibold">{name}</span>}
    </div>
  );
}
