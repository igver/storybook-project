export interface AccordionQualityProps {
  items: item[];
}

interface item {
  header: string;
  image: { url: string };
  content: string;
}
