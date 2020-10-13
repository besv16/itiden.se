import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import GoogleMapReact from 'google-map-react';
import { Pin } from './Pin';
import mapStyle from '../../public/static/mapStyle.json';

type LocationProps = {
  location: {
    lat: number;
    lng: number;
  };
  zoomLevel: number;
};

const MapContainer = styled.div`
  ${tw`flex justify-center w-full`}
  height: 475px;
`;

const Marker = styled(Pin)`
  ${tw`-translate-x-1/2 -translate-y-full`}
`;

function renderMarker(map, maps, location: object) {
  const marker = new maps.Marker({
    position: location,
    map,
  });
}

export const Map = ({ location, zoomLevel }: LocationProps) => {
  const center = { lat: 57.7025937, lng: 11.965612 };
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAPS_API_KEY as string,
        }}
        defaultCenter={center}
        defaultZoom={zoomLevel}
        options={{ styles: mapStyle }}
        onGoogleApiLoaded={({map, maps}) => renderMarker(map, maps, location)}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </MapContainer>
  );
};
