import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ArrowContainer = styled.div`
  ${tw`sm:hidden flex justify-center mb-6 pb-32`}
`;

export const Arrow = () => (
    <ArrowContainer>
        <img src="/static/arrow.svg" alt="Pil" />
    </ArrowContainer>
);
