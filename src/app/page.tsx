import { api } from "./api";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { DataPropTypes } from "./types";

export default async function Home() {
  const query = await api.getObjectByDatabase();
  const results: Array<
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  > = query.results;
  let pagesData: DataPropTypes[] = [];
  
  const getData = async () => {
    for (const result of results) {
      const pageId = result.id;
      const pageData = await api.getDataPageById(pageId);
      if (pageData) {
        const id = pageData.id;
        const name = (pageData as any).properties.Nombre?.title[0].plain_text;
        const rol = (pageData as any)?.properties.rol.select.name;
        const client = (pageData as any)?.properties.Cliente.rich_text[0]
          .plain_text;
        const imageUrl = (pageData as any)?.properties.Image.files[0].file.url;
        pagesData.push({ id, name, rol, client, imageUrl });
      } else {
        console.log("Error procesando pagina con ID: ", pageId);
      }
    }
    return pagesData;
  };

  const data = await getData();

  return (
    <div className="flex flex-col items-center gap-4 justify-center place-items-center min-h-screen">
      {data.map(({ id, imageUrl, name, rol, client }) => (
        <article
          key={id}
          className="flex gap-4 border rounded-md items-center py-4 px-8 border-slate-500"
        >
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-lg font-semibold">{name}</h1>
            <span className="bg-cyan-200 text-cyan-950 rounded-full px-2 text-sm text-center w-fit">
              {rol}
            </span>
            <span className="bg-green-200 text-green-950 rounded-full px-2 text-sm text-center w-fit">
              {client}
            </span>
          </div>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={"Foto de ".concat(name)}
              style={{
                borderRadius: "100%",
                objectFit: "cover",
                maxHeight: 150,
              }}
              height={150}
              width={150}
              loading="lazy"
            />
          )}
        </article>
      ))}
    </div>
  );
}
