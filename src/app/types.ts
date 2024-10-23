export type DataPropTypes = {
  id: string;
  name?: string;
  client?: {
    name?: string;
    imageUrl?: string;
  };
  rol?: string;
  imageUrl?: string;
  seniority?: string;
  discipline?: string;
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
  relation: {
    id?: string;
  }[];
};

export type NotionImageType = {
  files: {
    id?: string;
    file: {
      url?: string;
      expiry_time?: string;
    };
  }[];
};

export type NotionDisciplineType = {
  select: {
    name?: string;
  };
};

export type NotionSeniorityType = {
  select: {
    name?: string;
  };
};

export type NotionClientPageType = {
  icon?: {
    file?: {
      url?: string;
    };
  };
  properties?: {
    Nombre: NotionNameType;
  };
};

export type PageDataPropTypes = {
  properties?: {
    Nombre: NotionNameType;
    Rol: NotionRolType;
    Cliente: NotionClientType;
    Image: NotionImageType;
    Seniority: NotionSeniorityType;
    Disciplina: NotionDisciplineType;
  };
};
