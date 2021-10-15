import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export default function Legend(): null {
  const map = useMap();

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomleft' });

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = '<h4>This is the legend</h4>' + '<p>lorem lorem lorem</p>';
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}
