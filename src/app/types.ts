export type DataPropTypes = {
  id: string;
  name?: string;
  client?: string;
  rol?: string;
  imageUrl?: string;
};

export type NotionNameType = {
  title: {
    type?: string;
    text?: {
      content?: string;
      link?: null;
    };
    plain_text?: string;
    href?: null;
  }[];
};

export type NotionRolType = {
  select: {
    name?: string;
  };
};

export type NotionClientType = {
  rich_text: {
    type?: string
    plain_text?: string
    href?: string | null
  }[]
}

export type NotionImageType = {
  files: {
    id?: string
    file: {
      url?: string
      expiry_time?: string
    }
  }[]
}

export type PageDataPropTypes = {
  properties?: {
    Nombre: NotionNameType;
    Rol: NotionRolType;
    Cliente: NotionClientType
    Image: NotionImageType
  };
};
