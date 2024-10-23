import { api } from "./api";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type {
  DataPropTypes,
  NotionClientPageType,
  PageDataPropTypes,
} from "./types";
import Seniority, { SeniorityPropTypes } from "./components/Seniority";
import Avatar from "./components/Avatar";
import Client from "./components/Client";

export default async function Home() {
  const query = await api.getObjectByDatabase();
  const results: Array<
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  > = query.results;

  const getData = async () => {
    const pagesData: DataPropTypes[] = [];
    for (const result of results) {
      const pageId = result.id;
      const pageData = await api.getDataPageById(pageId);
      const clientsDatabaseId = (pageData as PageDataPropTypes)?.properties
        ?.Cliente.relation[0].id;
      const clientPageData = await api.getDataPageById(clientsDatabaseId ?? "");
      if (pageData) {
        const id = pageData.id;
        const name = (pageData as PageDataPropTypes)?.properties?.Nombre
          ?.title[0]?.plain_text;
        const rol = (pageData as PageDataPropTypes)?.properties?.Rol?.select
          ?.name;
        const imageUrl = (pageData as PageDataPropTypes)?.properties?.Image
          .files[0].file.url;
        const seniority = (pageData as PageDataPropTypes)?.properties?.Seniority
          ?.select?.name;
        const discipline = (pageData as PageDataPropTypes)?.properties
          ?.Disciplina?.select?.name;
        const clientImage = (clientPageData as NotionClientPageType).icon?.file
          ?.url;
        const clientName = (clientPageData as NotionClientPageType).properties
          ?.Nombre?.title[0]?.plain_text;

        pagesData.push({
          id,
          name,
          rol,
          client: { imageUrl: clientImage, name: clientName },
          imageUrl,
          seniority,
          discipline,
        });
      } else {
        console.error("Error procesando pagina con ID: ", pageId);
      }
    }
    return pagesData;
  };

  const data = await getData();

  return (
    <div className="flex flex-col items-center gap-4 justify-center place-items-center min-h-screen">
      {data.map(({ id, imageUrl, name, rol, seniority, client }) => (
        <article
          key={id}
          className="flex gap-4 border rounded-md items-center py-4 px-8 border-slate-500"
        >
          <div className="flex flex-col gap-2 items-start">
            <Avatar
              imageSrc={imageUrl}
              imageAlt={"Foto de".concat(" ", name ?? id)}
              name={name}
            />
            <Seniority types={seniority as SeniorityPropTypes["types"]} />
            <span className="bg-cyan-200 text-cyan-950 rounded-full px-2 text-sm text-center w-fit">
              {rol}
            </span>
            <Client
              imageAlt={"Imagen del cliente".concat(" ", name ?? id)}
              imageSrc={client?.imageUrl}
              name={name}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
