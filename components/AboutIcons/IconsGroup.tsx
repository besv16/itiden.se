import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { App, System, Webb } from '../AboutIcons';
import { H3, Content } from '../Layout';

const IconWrapper = styled.div`
  ${tw`ml-6 sm:ml-0`};
`;

const AppIcon = styled(App)`
  ${tw``};
`;
const SystemIcon = styled(System)`
  ${tw``};
  height: 87px;
`;
const WebbIcon = styled(Webb)`
  ${tw``};
  height: 87px;
`;

const TechBoxWrapper = styled.div`
  ${tw`flex flex-col md:(flex-row justify-between)`}
`;

const TechBox = styled.div`
  ${tw`items-start sm:items-center pb-24 flex flex-col lg:w-1/3`}
`;

const TechBoxMiddle = styled.div`
  ${tw`items-start sm:items-center pb-24 flex flex-col md:(w-1/3 mx-16 pb-32) lg:mx-20`}
`;

const TechHeading = styled(H3)`
  ${tw`mt-6 mb-3 md:(my-5)`}
`;

const TechInfo = styled.div`
  ${tw`text-left sm:text-center text-gray-300`}

  @media (min-width: 480px) and (max-width: 639px) {
    ${tw`w-4/5`}
  }

  @media (min-width: 640px) {
    max-width: 327px;
  }
`;

export const AboutIconsGroup = () => (
  <Content>
    <TechBoxWrapper>
      <TechBox>
        <IconWrapper>
          <AppIcon />
        </IconWrapper>
        <TechHeading>Apputveckling</TechHeading>
        <TechInfo>
          <p>
            Låt en app ta era tjänster till nästa nivå. Vi på Itiden är
            uppdaterade inom de senaste ramverken och utvecklar till alla
            plattformar.
          </p>
        </TechInfo>
      </TechBox>
      <TechBoxMiddle>
        <IconWrapper>
          <WebbIcon />
        </IconWrapper>
        <TechHeading>Webbutveckling</TechHeading>
        <TechInfo>
          <p>
            Rätt webblösning för varje behov. Vi hjälper till från grunden med
            design, UX och rätt teknikval för att skräddarsy just ditt projekt.
          </p>
        </TechInfo>
      </TechBoxMiddle>
      <TechBox>
        <IconWrapper>
          <SystemIcon />
        </IconWrapper>
        <TechHeading>Systemintegration</TechHeading>
        <TechInfo>
          <p>
            Backend, frontend, server, serverless och cloud. Databaser och api
            etc. Med stor teknisk kunskap hjälper vi dig med all integration.
          </p>
        </TechInfo>
      </TechBox>
    </TechBoxWrapper>
  </Content>
);
