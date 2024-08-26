import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const redIconUrl = 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png';
const markerShadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

const redIcon = new L.Icon({
  iconUrl: redIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent: React.FC = () => {
  const [interactive, setInteractive] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      const handleTouchStart = () => setInteractive(true);
      const handleTouchEnd = () => setInteractive(false);

      map.getContainer().addEventListener("touchstart", handleTouchStart);
      map.getContainer().addEventListener("touchend", handleTouchEnd);

      map.on('mousedown', () => setInteractive(true));
      map.on('mouseup', () => setInteractive(false));
      map.on('dragstart', () => setInteractive(true));
      map.on('dragend', () => setInteractive(false));

      return () => {
        map.getContainer().removeEventListener("touchstart", handleTouchStart);
        map.getContainer().removeEventListener("touchend", handleTouchEnd);
        map.off('mousedown');
        map.off('mouseup');
        map.off('dragstart');
        map.off('dragend');
      };
    }
  }, []);

  const defaultPosition = {
    lat: -11.841095,
    lng: -76.38147,
    zoom: 16,
  };

  const markerPosition = {
    lat: -11.841095,
    lng: -76.38147,
  };

  return (
    <MapContainer
      center={[defaultPosition.lat, defaultPosition.lng]}
      zoom={defaultPosition.zoom}
      style={{ height: "400px", width: "100%" }}
      dragging={interactive}
      touchZoom={interactive}
      doubleClickZoom={interactive}
      scrollWheelZoom={interactive}
      whenReady={() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
        }
      }}
      ref={(mapInstance) => {
        if (mapInstance) {
          mapRef.current = mapInstance;
        }
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[markerPosition.lat, markerPosition.lng]} icon={redIcon}>
        <Popup>
          Matucana 15556, Peru
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;