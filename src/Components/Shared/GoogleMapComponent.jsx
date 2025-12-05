import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const GoogleMapComponent = ({ height = "400px", zoom = 13 }) => {
  const mapCenter = {
    lat: 52.5107,
    lng: -2.0866
  };

  const mapStyles = {
    height: height,
    width: "100%"
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={mapCenter}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

