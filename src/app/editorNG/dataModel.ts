 interface Paragraph {
  type: string;
  attrs?: {
    align?: string | null;
    level?: number | null;
    order?: number | null;
    [key: string]: any;
  };
  content?: ContentItem[];
}

 interface ContentItem {
  type: string;
  text?: string;
  marks?: Mark[];
  attrs?: {
    src?: string;
    alt?: string;
    title?: string;
    width?: number | null;
    [key: string]: any;
  };
}

 interface Mark {
  type: string;
  attrs?: {
    color?: string;
    [key: string]: any;
  };
}

 export interface Document {
  id: number;
  type: string;
  content: Paragraph[];
}
