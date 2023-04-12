export interface AccordionItemMaterialAndCareProps {
  materials: materials;
  care: careItem[];
}

interface materials {
  header: string;
  materialDetailData: materialItem[];
}

interface materialItem {
  header: string;
  content: string;
  image: {
    altText: string;
    url: string;
  };
}

interface careItem {
  name: string;
  imageUrl: string;
}
