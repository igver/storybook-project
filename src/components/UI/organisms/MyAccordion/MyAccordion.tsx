import React, { Children, PropsWithChildren } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import Heading from "../../atoms/Heading/Heading";

// import AccordionItemPanelInfo from "src/components/UI/atoms/AccordionItemPanelInfo/AccordionItemPanelInfo";
import AccordionItemProductDetail from "../../molecules/AccordionItemProductDetail/AccordionItemProductDetail";
import AccordionItemFitForm from "../../molecules/AccordionItemFitForm/AccordionItemFitForm";
import AccordionQuality from "../../molecules/AccordionQuality/AccordionQuality";
import AccordionItemMaterialAndCare from "../../molecules/AccordionItemMaterialAndCare/AccordionItemMaterialAndCare";
import AccordionItemMadeIn from "../../molecules/AccordionItemMadeIn/AccordionItemMadeIn";

import "./MyAccordion.scss";

export default function MyAccordion({ children }: PropsWithChildren) {
  const test = Children.toArray(children);
  // console.log(test);

  // console.log(ProductDetails.material);

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem key={Math.random()}>
        <AccordionItemHeading>
          <AccordionItemButton>Product Details</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionItemProductDetail
            paragraphs={ProductDetails.paragraphs}
            bullets={ProductDetails.bullets}
          />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem key={Math.random()}>
        <AccordionItemHeading>
          <AccordionItemButton>Fit Form</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionItemFitForm
            passform={ProductDetails.fitData.passform}
            details={ProductDetails.fitData.details}
            referenceSize={ProductDetails.fitData.referenceSize}
          />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="my-acc accordion__item" key={Math.random()}>
        <AccordionItemHeading>
          <AccordionItemButton>Quallity</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionQuality items={ProductDetails.qualityItems} />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem key={Math.random()} className="my-acc accordion__item">
        <AccordionItemHeading>
          <AccordionItemButton>Material and Care</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Heading variante="h6" text={ProductDetails.material.header} />

          <AccordionItemMaterialAndCare
            materials={ProductDetails.material}
            care={ProductDetails.care.careLabelData}
          />

          <p>{ProductDetails.care.careInstruction}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem key={Math.random()} className="my-acc accordion__item">
        <AccordionItemHeading>
          <AccordionItemButton>Made in</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionItemMadeIn
            imageUrl={ProductDetails.madeIn.image.url}
            imageAltText={ProductDetails.madeIn.image.altText}
            content={ProductDetails.madeIn.content}
          />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

const ProductDetails = {
  paragraphs: [
    "Ein unverzichtbarer Allrounder: Das hochwertig verarbeitete Top aus mattem Crêpe-Jersey mit trockenem Griff. Solo oder in vielseitigen Kombis getragen macht das hautschmeichelnde Basic mit schmal eingefassten <a target='_blank' href='/herren/schuhe-und-accessoires/c/herren-schuhe-accessoires'>Trägern</a> stets eine gute Figur. Unsere liebste Naturfaser, die Bio-Baumwolle, garantiert überdies maximalen Tragekomfort.",
    "Leicht, saugfähig und atmungsaktiv lässt Bio-Baumwolle unseren Körper regenerieren. Frei von Pestiziden und anderen giftigen Rückständen, die in herkömmlicher <a target='_blank' href='/de/textillexikon/B/baumwolle'>Baumwolle</a> oft noch zu finden sind, lässt sie uns aufatmen und ihre sanfte Natürlichkeit einfach genießen.",
  ],
  bullets: [
    "Griffiger Crêpe-Jersey",
    "Matte Optik",
    "Atmungsaktiv und feuchtigkeitsregulierend",
    "Vielseitig kombinierbares Basic",
  ],
  fitData: {
    passform: ["Slim Fit"],
    details: [
      "Saumweite in Größe 27/32 ca. 31 cm.",
      "Innere Beinlänge in Größe 27/32 ca. 77 cm.",
      "Sitzt ca. 3 cm unterhalb Bauchnabel.",
    ],
    referenceSize: "Das Model ist xxx cm groß und trägt Größe xx.",
  },
  qualityItems: [
    {
      header: "Grüner Knopf",
      content:
        "Das staatlich überwachte Siegel kennzeichnet sozial und ökologisch nachhaltig hergestellte Textilien.",
      image: { url: "https://picsum.photos/1920/1080" },
    },
    {
      header: "HN geprüft",
      content:
        "Transparent in der Lieferkette: Nachhaltig hergestellt und geprüft entsprechend den hohen hessnatur Qualitätstandards.",
      image: { url: "https://picsum.photos/1920/1080" },
    },
    {
      header: "Leader Status in der FWF",
      content:
        "Die göchste Auszeichnung der Fair Wear Foundation steht für konkrete Verbessung der sozialen Standards in der textilen Lieferkette.",
      image: { url: "https://picsum.photos/1920/1080" },
    },
  ],
  material: {
    header: "pflege",
    materialDetailData: [
      {
        header: "98% baumwolle",
        content: "aus der Türkei, aus biologischem Anbau",
        image: { altText: "test", url: "https://picsum.photos/1920/1080" },
      },
      {
        header: "2% Elastan",
        content: "aus der Türkei, lt. hessnatur-Richtlinie",
        image: { altText: "test", url: "https://picsum.photos/1920/1080" },
      },
    ],
  },
  care: {
    careInstruction:
      "Diesen Artikel bitte noch feucht von der Wäsche wieder in Form ziehen.",
    careLabelData: [
      {
        name: "Normalwaschgang bei 40°C",
        imageUrl: "https://picsum.photos/1920/1080",
      },
      {
        name: "Nicht im Wäschetrockner trocknen",
        imageUrl: "https://picsum.photos/1920/1080",
      },
      {
        name: "Bügeln*** bei maximal 200°C",
        imageUrl: "https://picsum.photos/1920/1080",
      },
    ],
  },
  madeIn: {
    content: "Nachhaltig hergestellt in Tunesien.",
    image: { altText: "test", url: "https://picsum.photos/1920/1080" },
  },
};
