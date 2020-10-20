import { GetStaticProps, NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../components/Button';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { PongAnimation } from '../components/PongAnimation/PongAnimation';
import { Content, HeaderWide, Page, Arrow, H1, H3 } from '../components/Layout';
import { Tags } from '../components/Tag';
import { Case } from '../models';
import { getCasesFromJson } from '../data/case';

interface IndexPageProps {
  cases: Case[];
}

const ContentWrapperGray = styled.div`
  ${tw`bg-gray-600 pt-24 pb-16 md:py-24`}
`;

const ContentWrapperPurple = styled.div`
  ${tw`bg-purple-700 py-10`}
`;

const ContentCentered = styled.div`
  text-align: center;
  ${tw`lg:mx-48`}
  & a {
    ${tw`text-gray-100 text-lg sm:text-xl sm:font-semibold hover:(text-gray-100 no-underline)`}
  }
`;

const Paragraph = styled.p`
  ${tw`text-lg text-gray-300 mt-6 sm:text-2xl`}
`;

const ParagraphCentered = styled.p`
  ${tw`mb-0`}
  text-align: center;
`;

const TagsWrapper = styled.div`
  ${tw`w-full mt-1 mb-12 hidden sm:block`};
`;

const CaseWrapper = styled.div`
  ${tw`mt-24 md:mt-20`}
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <HeaderWide>
        <Content>
          <H1>
            Vi kan kod. Med lång erfarenhet av webb- &amp; apputveckling,
            strategi, ux och teknik hjälper vi på Itiden dig med rätt lösning.
          </H1>
          <TagsWrapper>
            <Tags
              tags={[
                'Digital byrå',
                'Webbutveckling',
                'Apputveckling',
                'UX',
                'Design',
                'Göteborg',
              ]}
            />
          </TagsWrapper>
          <Link href="/kontakt" passHref>
            <Button>Kontakta oss</Button>
          </Link>
          <Arrow />
        </Content>
      </HeaderWide>
      <PongAnimation />
      <ContentWrapperGray>
        <Content>
          <ContentCentered>
            <H3>Teknisk kreativitet</H3>
            <Paragraph>
              Kärnan i vår verksamhet kommer från vårt stora intresse för teknik
              och innovation. Vi jobbar med många olika språk och ramverk och
              håller oss ständigt uppdaterade i detta snabbt utvecklande
              landskap. För dig som kund innebär det att vi har insikten och
              kunskapen som krävs för att kunna välja rätt väg framåt för varje
              enskilt projekt.
            </Paragraph>
          </ContentCentered>
        </Content>
      </ContentWrapperGray>
      <ContentWrapperPurple>
        <Content>
          <ContentCentered>
            <Link href="/om" passHref>
              Läs mer om hur vi jobbar
            </Link>
          </ContentCentered>
        </Content>
      </ContentWrapperPurple>
      <CaseWrapper>
        <Content>
          <H3>Case</H3>
          <CaseGrid cases={cases} />
          <ParagraphCentered>
            <Link href="/case" passHref>
              <Button>Gå till Case</Button>
            </Link>
          </ParagraphCentered>
        </Content>
      </CaseWrapper>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Omit<
  IndexPageProps,
  'router'
>> = async () => {
  const cases = getCasesFromJson();
  return {
    props: {
      cases: cases.filter(c => c.showOnStartpage),
    },
  };
};

export default IndexPage;
