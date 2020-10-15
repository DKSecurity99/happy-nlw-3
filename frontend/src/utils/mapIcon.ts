import L from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

const markerIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [160, 2]
});


export default markerIcon;
