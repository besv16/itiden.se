import { NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IndexHeader } from '../components/IndexHeader';
import { AboutIconsGroup } from '../components/AboutIcons';
import { Header, Page, Content, Paragraph, Hero, H3 } from '../components/Layout';

const ContentWrapperMobile = styled.div`
  ${tw`md:hidden`};
  padding-top: ${(props: { paddingTop: string }) => props.paddingTop};
  padding-bottom: ${(props: { paddingBottom: string }) => props.paddingBottom};
`;
const ContentWrapperDesktop = styled.div`
  ${tw`hidden md:block mt-20 pt-3`};
`;

const GrayBanner = styled(Hero)`
  ${tw`bg-gray-700 pt-16 pb-1 md:pt-32`}
`;

const QuarteredParagraph = styled(Paragraph)`
  ${tw`w-2/3`}
`;

const KeywordsWrapperDesktop = styled.div`
  ${tw`hidden md:block mt-16 mb-20`}
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

const IndexPage: NextComponentType<{}, {}> = () => {
  return (
    <Page>
      <IndexHeader title="Om" />
      <Header role="banner">
        <ContentWrapperMobile>
          <Content>
            <H3>Kunskap genom insikt och erfarenhet</H3>
            <Paragraph>
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
            </Paragraph>
          </Content>
        </ContentWrapperMobile>
      </Header>
      <GrayBanner>
        <AboutIconsGroup />
      </GrayBanner>
      <KeywordsWrapperMobile>
        <Content>
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
    </Page>
  );
};

export default IndexPage;
