import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationData from '../../public/static/pongDataDesktop.json';

export const LottieDesktop = () => {
  return <Lottie config={{ animationData, autoplay: true, loop: true }} />;
};

export default LottieDesktop;
