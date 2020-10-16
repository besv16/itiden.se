import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationData from '../../public/static/pongDataMobile.json';

export const LottieMobile = () => {
  return <Lottie config={{ animationData, autoplay: true, loop: true }} />;
};

export default LottieMobile;
