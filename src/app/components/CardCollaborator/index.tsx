import React from "react";
import type { CardPropTypes } from "./types";
import Seniority from "../Seniority";
import Avatar from "../Avatar";
import Role from "../Role";
import ProfileMonogram from "../ProfileMonogram";
import Client from "../Client";

export default function CardCollaborator({
  imageUrl,
  name,
  seniority,
  role,
  client,
}: CardPropTypes) {
  return (
    <article className="w-full flex flex-col max-w-96 p-4 rounded-3xl gap-4 bg-gradient-to-tl from-black-200 from-20% to-90% to-acai-900 shadow-card">
      <header className="w-full flex items-center gap-3 justify-between">
        {name && (
          <Avatar
            imageSrc={imageUrl}
            imageAlt={"Foto de".concat(" ", name)}
            name={name}
          />
        )}
        <Seniority types={seniority} />
      </header>
      {role && (
        <div className="flex flex-col gap-2">
          <Role name={role} />
          <ProfileMonogram name={role} />
        </div>
      )}
      <Client
        imageAlt={"Imagen del cliente".concat(" ", client?.name ?? "")}
        imageSrc={client?.imageUrl}
        name={client?.name}
      />
    </article>
  );
}
