import { api } from "./api";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { DataPropTypes, PageDataPropTypes } from "./types";
import Seniority, { SeniorityPropTypes } from "./components/Seniority";
import Avatar from "./components/Avatar";

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
      if (pageData) {
        const id = pageData.id;
        const name = (pageData as PageDataPropTypes)?.properties?.Nombre
          ?.title[0]?.plain_text;
        const rol = (pageData as PageDataPropTypes)?.properties?.Rol?.select
          ?.name;
        const client = (pageData as PageDataPropTypes)?.properties?.Cliente
          ?.rich_text[0].plain_text;
        const imageUrl = (pageData as PageDataPropTypes)?.properties?.Image
          .files[0].file.url;
        const seniority = (pageData as PageDataPropTypes)?.properties?.Seniority
          ?.select?.name;
        const discipline = (pageData as PageDataPropTypes)?.properties
          ?.Disciplina?.select?.name;

        pagesData.push({
          id,
          name,
          rol,
          client,
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
      {data.map(({ id, imageUrl, name, rol, client, seniority }) => (
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
            <span className="bg-green-200 text-green-950 rounded-full px-2 text-sm text-center w-fit">
              {client}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
