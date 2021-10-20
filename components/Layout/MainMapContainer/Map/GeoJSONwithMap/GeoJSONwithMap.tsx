import { useMap, GeoJSON, GeoJSONProps } from 'react-leaflet';
import { Layer, LeafletMouseEvent } from 'leaflet';
import { Feature } from 'geojson';
import { mapCountryToNumberOfCases } from '../Map.utils';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';
import theme from 'theme/theme';

interface GeoJSONwithMapProps extends GeoJSONProps {
  covidCasesData: CovidCasesDataForCountry[];
}

export default function GeoJSONwithMap({ data, style, covidCasesData }: GeoJSONwithMapProps) {
  const map = useMap();

  const highlightFeature = (e: LeafletMouseEvent) => {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      color: `${theme.darkTheme.background}`,
      dashArray: '',
      fillOpacity: 0.8,
    });
    layer.bringToFront();
  };

  const resetHighlight = (e: LeafletMouseEvent) => {
    if (typeof style === 'function') {
      e.target.setStyle(style(e.target.feature));
    }
  };

  const zoomToFeature = (e: LeafletMouseEvent) => {
    map.fitBounds(e.target.getBounds());
  };

  const createNumberOfCasesTooltip = (countryName: string) => {
    const numberOfCases = mapCountryToNumberOfCases(countryName, covidCasesData);
    return typeof numberOfCases === 'number'
      ? `${countryName}: ${Intl.NumberFormat('PL').format(numberOfCases)}`
      : `${countryName}: ${numberOfCases}`;
  };

  function onEachFeature(feature: Feature, layer: Layer) {
    layer.on({
      mouseover: (e: LeafletMouseEvent) => {
        highlightFeature(e);
        layer
          .bindTooltip(createNumberOfCasesTooltip(e.target.feature.properties.name))
          .openTooltip();
      },
      mouseout: (e: LeafletMouseEvent) => {
        layer.unbindTooltip();
        layer.closeTooltip();
        resetHighlight(e);
      },
      click: (e: LeafletMouseEvent) => {
        zoomToFeature(e);
      },
    });
  }

  return <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />;
}
