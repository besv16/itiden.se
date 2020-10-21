import { NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IndexHeader } from '../components/IndexHeader';
import { AboutIconsGroup } from '../components/AboutIcons';
import {
  Header,
  Page,
  Content,
  Paragraph,
  Hero,
  H3,
  Contact,
} from '../components/Layout';

const ContentWrapperMobile = styled.div`
  ${tw`md:hidden`};

  @media (max-width: 767px) {
    padding-top: 12.5rem;
  }
`;
const ContentWrapperDesktop = styled.div`
  ${tw`hidden md:block mt-20 pt-3`};
`;

const GrayBanner = styled(Hero)`
  ${tw`bg-gray-700 pt-16 pb-1 md:pt-32`}
`;

const QuarteredParagraph = styled(Paragraph)`
  ${tw`w-2/3 mb-3 mt-1`}
`;

const WideParagraph = styled(Paragraph)<{ primary?: boolean }>`
  @media (max-width: 767px) {
    ${tw`mt-0`}
    font-size: ${props => (props.primary ? '18px' : '16px')}
  }
`;

const KeywordsWrapperDesktop = styled.div`
  ${tw`hidden md:block mt-10 mb-24`}
`;

const KeywordsWrapperMobile = styled.div`
  ${tw`block md:hidden my-20`}
`;

const Keywords = styled.div`
  ${tw`w-full flex flex-row flex-wrap md:flex-no-wrap mt-1 sm:mt-3`}
  justify-content: space-between;
`;

const KeywordsGroup = styled.div`
  ${tw`w-1/2 sm:w-1/3 md:w-1/6`}
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
`;

const Keyword = styled.p`
  ${tw`text-base mb-1 pr-2`}
`;

const TechWrapper = styled.div`
  ${tw`bg-yellow py-10 sm:(py-24)`}

  & img {
    width: 100%;
  }
`;

const TechLarge = styled.div`
  ${tw`mx-auto hidden lg:block`}
  max-width: 712px;
`;

const TechMedium = styled.div`
  ${tw`mx-auto lg:hidden`}
  max-width: 546px;

  @media (max-width: 520px) {
    display: none;
  }

  @media (min-width: 520px) and (max-width: 1079px) {
    display: block;
  }
`;

const TechSmall = styled.div`
  ${tw`mx-auto hidden`}
  max-width: 320px;

  @media (max-width: 519px) {
    display: block;
  }
`;

const ItidenWrapperDesktop = styled.div`
  ${tw`hidden md:block mt-20 mb-24`}
`;

const ItidenWrapperMobile = styled.div`
  ${tw`block md:hidden mt-20 mb-0 sm:mb-24`}
`;

const A = styled.a`
  ${tw`text-base-links md:(text-xl font-semibold) text-teal-400 underline hover:(text-gray-100)`}
`;

const ImageWrapperMobile = styled.div`
  ${tw`block md:hidden`}

  & img {
    ${tw`w-full`}
  }
`;

const ImageWrapperDesktop = styled.div`
  ${tw`hidden md:block md:mt-20`}

  & img {
    ${tw`w-full`}
  }
`;

const ItidenImagesWrapper = styled.div`
  ${tw`flex flex-col mt-20 sm:(mb-32) md:(flex-row justify-between mt-24)`}
`;

const ImageWrapper = styled.div`
  ${tw`w-full mb-20 last:mb-0 md:mb-0`}

  @media (min-width: 768px) {
    width: 32.13%;
  }

  & img {
    ${tw`w-full`}
  }
`;

const Caption = styled.div`
  ${tw`bg-gray-600 flex items-center py-4 px-5`}
  min-height: 76px;
  
  & p {
    ${tw`m-0 text-image font-semibold`}
  }
`;

const IndexPage: NextComponentType<{}, {}> = () => {
  return (
    <Page>
      <IndexHeader title="Om" />
      <Header role="banner">
        <ContentWrapperMobile>
          <Content>
            <H3>Kunskap genom insikt och erfarenhet</H3>
            <WideParagraph primary>
              För att ett projekt – vare sig det gäller för appar, webb eller
              andra tekniska lösningar – skall bli så bra som möjligt krävs
              insikter. Därför tycker vi det är viktigt att vara med tidigt i
              processen, gärna redan vid idéstadiet. Genom insikt och förståelse
              för dina behov anpassar vi teknik och väg framåt. Vi utgår inte
              från mallar utan skräddarsyr varje ensklit projekt för att nå
              bästa möjliga resultat. Vi jobbar transparent och under projektets
              gång är du delaktig hela vägen i produktionen fram till färdig
              produkt. På detta vis kan vi ta snabba beslut om förutsättningar
              för projektet förändras och vi kan tillsammans nå önskat resultat.
            </WideParagraph>
          </Content>
        </ContentWrapperMobile>
      </Header>
      <GrayBanner>
        <AboutIconsGroup />
      </GrayBanner>
      <KeywordsWrapperMobile>
        
        <ImageWrapperMobile>
          <img src="/static/soffa-mobil.jpg" alt="Itidens kontor"></img>
        </ImageWrapperMobile>
        <Content>
          <H3
            css={`
              ${tw`mt-20 sm:(mt-24)`}
            `}
          >
            Varför
          </H3>
          <WideParagraph>
            Itiden startades för över 20 år sedan av nyfikna teknikentusiaster
            som brann för allt som har med webbutveckling och digitala tekniker
            att göra. Detta är än idag kärnan i vår verksamhet. Vi håller oss
            uppdaterade inom de senaste metoderna i en ständigt förändrande
            landskap och har som mål att alltid ligga i framkant samt ha god
            kännedom om rådande tekniska möjligheter.
          </WideParagraph>
          <WideParagraph>
            Vi värdesätter personlig utveckling och förutom kundprojekt arbetar
            vi därför med en del egna experiment eller produkter, ibland som
            fortbildning och ibland bara för att det är kul. Detta kallar vi{' '}
            <Link href={`/case/#lab`} passHref>
              <A>Itiden Lab och kan utforskas mer här</A>
            </Link>
            . Vi har genom åren också märkt att en trivsam miljö ofta leder till
            bättre resultat varför vi även har en liten musikstudio med olika
            instrument, tillgång till pingisbord samt kör löpande
            miniturneringar i tv-spel.
          </WideParagraph>
          
          <H3
            css={`
              ${tw`mt-10`}
            `}
          >
          Itiden förenklat
          </H3>
          <Keywords>
            <KeywordsGroup>
              <Keyword>Utveckling</Keyword>
              <Keyword>Integration</Keyword>
              <Keyword>Strategi</Keyword>
              <Keyword>Design</Keyword>
            </KeywordsGroup>
            <KeywordsGroup>
              <Keyword>Projektledning</Keyword>
              <Keyword>Research</Keyword>
              <Keyword>API</Keyword>
              <Keyword>SEO</Keyword>
            </KeywordsGroup>
            <KeywordsGroup>
              <Keyword>UX</Keyword>
              <Keyword>UI</Keyword>
              <Keyword>CMS</Keyword>
              <Keyword>Wordpress</Keyword>
            </KeywordsGroup>
            <KeywordsGroup>
              <Keyword>E-handel</Keyword>
              <Keyword>React</Keyword>
              <Keyword>React Native</Keyword>
              <Keyword>AR</Keyword>
            </KeywordsGroup>
            <KeywordsGroup>
              <Keyword>HTML</Keyword>
              <Keyword>CSS</Keyword>
              <Keyword>Arduino</Keyword>
              <Keyword>Prototyper</Keyword>
            </KeywordsGroup>
            <KeywordsGroup>
              <Keyword>Wireframes</Keyword>
              <Keyword>Responsivt</Keyword>
              <Keyword>Android</Keyword>
              <Keyword>iOS</Keyword>
            </KeywordsGroup>
          </Keywords>
        </Content>
      </KeywordsWrapperMobile>
      <ContentWrapperDesktop>
        <Content>
          <H3>Kunskap genom insikt och erfarenhet</H3>
          <QuarteredParagraph>
            För att ett projekt – vare sig det gäller för appar, webb eller
            andra tekniska lösningar – skall bli så bra som möjligt krävs
            insikter. Därför tycker vi det är viktigt att vara med tidigt i
            processen, gärna redan vid idéstadiet. Genom insikt och förståelse
            för dina behov anpassar vi teknik och väg framåt. Vi utgår inte från
            mallar utan skräddarsyr varje ensklit projekt för att nå bästa
            möjliga resultat. Vi jobbar transparent och under projektets gång är
            du delaktig hela vägen i produktionen fram till färdig produkt. På
            detta vis kan vi ta snabba beslut om förutsättningar för projektet
            förändras och vi kan tillsammans nå önskat resultat.
          </QuarteredParagraph>

          <ImageWrapperDesktop>
            <img src="/static/soffa-desktop.jpg" alt="Itidens kontor"></img>
          </ImageWrapperDesktop>
          <H3
            css={`
              ${tw`mt-16`}
            `}
          >
            Varför
          </H3>
          <QuarteredParagraph>
            Itiden startades för över 20 år sedan av nyfikna teknikentusiaster
            som brann för allt som har med webbutveckling och digitala tekniker
            att göra. Detta är än idag kärnan i vår verksamhet. Vi håller oss
            uppdaterade inom de senaste metoderna i en ständigt förändrande
            landskap och har som mål att alltid ligga i framkant samt ha god
            kännedom om rådande tekniska möjligheter.
          </QuarteredParagraph>
          <QuarteredParagraph>
            Vi värdesätter personlig utveckling och förutom kundprojekt arbetar
            vi därför med en del egna experiment eller produkter, ibland som
            fortbildning och ibland bara för att det är kul. Detta kallar vi{' '}
            <Link href={`/case/#lab`} passHref>
              <A>Itiden Lab och kan utforskas mer här</A>
            </Link>
            . Vi har genom åren också märkt att en trivsam miljö ofta leder till
            bättre resultat varför vi även har en liten musikstudio med olika
            instrument, tillgång till pingisbord samt kör löpande
            miniturneringar i tv-spel.
          </QuarteredParagraph>

          <KeywordsWrapperDesktop>
            <H3>Itiden förenklat</H3>
            <Keywords>
              <KeywordsGroup>
                <Keyword>Utveckling</Keyword>
                <Keyword>Integration</Keyword>
                <Keyword>Strategi</Keyword>
                <Keyword>Design</Keyword>
              </KeywordsGroup>
              <KeywordsGroup>
                <Keyword>Projektledning</Keyword>
                <Keyword>Research</Keyword>
                <Keyword>API</Keyword>
                <Keyword>SEO</Keyword>
              </KeywordsGroup>
              <KeywordsGroup>
                <Keyword>UX</Keyword>
                <Keyword>UI</Keyword>
                <Keyword>CMS</Keyword>
                <Keyword>Wordpress</Keyword>
              </KeywordsGroup>
              <KeywordsGroup>
                <Keyword>E-handel</Keyword>
                <Keyword>React</Keyword>
                <Keyword>React Native</Keyword>
                <Keyword>AR</Keyword>
              </KeywordsGroup>
              <KeywordsGroup>
                <Keyword>HTML</Keyword>
                <Keyword>CSS</Keyword>
                <Keyword>Arduino</Keyword>
                <Keyword>Prototyper</Keyword>
              </KeywordsGroup>
              <KeywordsGroup>
                <Keyword>Wireframes</Keyword>
                <Keyword>Responsivt</Keyword>
                <Keyword>Android</Keyword>
                <Keyword>iOS</Keyword>
              </KeywordsGroup>
            </Keywords>
          </KeywordsWrapperDesktop>
        </Content>
      </ContentWrapperDesktop>
      <TechWrapper>
        <Content>
          <TechLarge>
            <img src="/static/ikoner-svg-lg.png" alt="Tekniker" />
          </TechLarge>
          <TechMedium>
            <img src="/static/ikoner-svg-md.png" alt="Tekniker" />
          </TechMedium>
          <TechSmall>
            <img src="/static/ikoner-svg-sm.png" alt="Tekniker" />
          </TechSmall>
        </Content>
      </TechWrapper>
      <ItidenWrapperMobile>
        <Content>
          <H3
            css={`
              ${tw`mt-10`}
            `}
          >
            Itiden i framtiden
          </H3>
          <WideParagraph>
            Itiden är stolta över att vara med och forma framtiden i vår
            bransch. Med nästan tio års långt deltagande i ledningsgruppen för
            utbildningen Webbutvecklare på Yrgo och kurser inom React och React
            Native är vi med och stöttar och vägleder nya och avancerade
            utvecklare.
          </WideParagraph>

          <H3
            css={`
              ${tw`mt-10`}
            `}
          >
            Kom och hälsa på oss
          </H3>
          <WideParagraph>
            Vi sitter centralt beläget i Göteborg på{' '}
            <A href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
              Kungstorget 11–12
            </A>
            . Du är varm välkommen att komma in till oss på en kopp kaffe för
            att lära känna oss lite bättre. Det finns bra parkeringsmöjligheter
            precis utanför kontoret. Åker man med kollektivtrafiken går man av
            vid Kungsportsplatsen. Vi är alltid intresserade av intressanta
            sammarbeten och bra folk så hör gärna av dig vi{' '}
            <A href="tel:0709-597008">telefon</A> eller{' '}
            <A href="mailto:hej@itiden.se">mail</A>.
          </WideParagraph>
        </Content>
      </ItidenWrapperMobile>

      <ItidenWrapperDesktop>
        <Content>
          <H3
            css={`
              ${tw`mt-10`}
            `}
          >
            Itiden i framtiden
          </H3>
          <QuarteredParagraph>
            Itiden är stolta över att vara med och forma framtiden i vår
            bransch. Med nästan tio års långt deltagande i ledningsgruppen för
            utbildningen Webbutvecklare på Yrgo och kurser inom React och React
            Native är vi med och stöttar och vägleder nya och avancerade
            utvecklare.
          </QuarteredParagraph>

          <H3
            css={`
              ${tw`mt-10`}
            `}
          >
            Kom och hälsa på oss
          </H3>
          <QuarteredParagraph>
            Vi sitter centralt beläget i Göteborg på{' '}
            <A href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
              Kungstorget 11–12
            </A>
            . Du är varm välkommen att komma in till oss på en kopp kaffe för
            att lära känna oss lite bättre. Det finns bra parkeringsmöjligheter
            precis utanför kontoret. Åker man med kollektivtrafiken går man av
            vid Kungsportsplatsen. Vi är alltid intresserade av intressanta
            sammarbeten och bra folk så hör gärna av dig vi{' '}
            <A href="tel:0709-597008">telefon</A> eller{' '}
            <A href="mailto:hej@itiden.se">mail</A>.
          </QuarteredParagraph>
        </Content>
      </ItidenWrapperDesktop>
      <Content>
        <ItidenImagesWrapper>
          <ImageWrapper>
            <img src="/static/studio.jpg" alt="Itidens studio"></img>
            <Caption>
              <p>Vi har en liten musikstudio med sköna jammingsmöjligheter</p>
            </Caption>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/static/studio.jpg" alt="Itidens studio"></img>
            <Caption>
              <p>Vi har en liten musikstudio med sköna jammingsmöjligheter</p>
            </Caption>
          </ImageWrapper>
          <ImageWrapper>
            <img src="/static/studio.jpg" alt="Itidens studio"></img>
            <Caption>
              <p>Vi har en liten musikstudio med sköna jammingsmöjligheter</p>
            </Caption>
          </ImageWrapper>
        </ItidenImagesWrapper>
      </Content>
      <Contact blue />
    </Page>
  );
};

export default IndexPage;
