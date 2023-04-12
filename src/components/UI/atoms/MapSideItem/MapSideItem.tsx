import "./MapSideItem.scss";

import Heading from "../Heading/Heading";

const MapSideItem = () => {
  return (
    <div className="map-side-item">
      <div className="map-side-item__heading-infos">
        <div className="map-side-item__heading-infos__type">
          <p className="red">Fachhandel</p>
          <p>Vans Partner</p>
        </div>
        <p className="map-side-item__heading-infos__distance">2.66km</p>
      </div>
      <div className="map-side-item__heading">
        <Heading text="Pohlig GmbH" variante="h5" />
        <Heading text="Orthopadie- und Reha-Technik" variante="h5" />
      </div>
      <div className="map-side-item__address">
        <p>Bayernwaldstr. 11</p>
        <p>81737 Munchen</p>
      </div>
    </div>
  );
};

export default MapSideItem;
