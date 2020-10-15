import { GetStaticProps, NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Header, Page, Content, H2, H3 } from '../components/Layout';
import { getCasesFromJson } from '../data/case';
import { Case } from '../models';

interface IndexPageProps {
  cases: Case[];
}

const ContentWrapper = styled.div<{
  paddingTop: string;
  paddingBottom: string;
}>`
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
`;

const CaseGridWrapper = styled.div`
  ${tw`mt-16 md:mt-6`}
`;

const Paragraph = styled.p<{ paddingBottom?: string }>`
  ${tw`text-lg text-gray-300 mt-1 sm:text-xl w-full md:w-3/4 lg:w-3/5`}
  ${props =>
    props.paddingBottom != null && `padding-bottom: ${props.paddingBottom}`};

  @media (max-width: 767px) {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader title="Case" />
      <Header role="banner">
        <ContentWrapper paddingTop={'16rem'} paddingBottom={'0.5rem'}>
          <Content>
            <H2>Fin rubrik till case</H2>
            <Paragraph paddingBottom={'1.5rem'}>
              Vi kan Ux, Html, Css, Javascript, React, React Native, Php,
              Laravel, Android, iOS, Mobil, Desktop, App, Webb, Next.js, CMS,
              TypeScript, Frontend, Backend, AR, VR, Drupal, Wordpress och mer
              därtill. Utmana oss gärna.
            </Paragraph>
          </Content>
        </ContentWrapper>
      </Header>
      <Content>
        <CaseGrid cases={cases.filter(c => !c.labs)} />
      </Content>
      <ContentWrapper paddingTop={'6rem'} paddingBottom={'0.5rem'} id="lab">
        <Content>
          <H3>Itiden Lab</H3>
          <Paragraph>
            Det händer ibland att vi bygger egna produkter eller tjänster. Det
            kan vara för att utmana oss, lära oss nya tekniker eller helt enkelt
            för att vi tycker produkten behövs. Denna utveckling samlar vi under
            vad vi kallar Itiden Lab.
          </Paragraph>
        </Content>
      </ContentWrapper>
      <Content>
        <CaseGridWrapper>
          <CaseGrid cases={cases.filter(c => c.labs)} />
        </CaseGridWrapper>
      </Content>
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
      cases,
    },
  };
};

export default IndexPage;
