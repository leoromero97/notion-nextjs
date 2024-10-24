import React from 'react'
import type { ClientPropTypes } from './types'
import Image from 'next/image';
import nxcImage from '@/app/assets/images/nonconformist-pink.png'

export default function Client({ imageAlt, imageSrc, name }: ClientPropTypes) {
  const showImage = !!imageAlt && !!imageSrc;

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="rounded-full h-12 w-12 min-h-12 min-w-12 bg-white overflow-hidden">
        {showImage ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={50}
            width={50}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={nxcImage}
            alt="Imagen de cliente por defecto"
            height={50}
            width={50}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {!!name && <span className="text-lg font-semibold">{name}</span>}
    </div>
  )
}
