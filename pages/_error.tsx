import { GetStaticProps, NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CaseGrid } from '../components/Case';
import { IndexHeader } from '../components/IndexHeader';
import { Header, Page, Content, H1, H3 } from '../components/Layout';
import { getCasesFromJson } from '../data/case';
import { Case } from '../models';

interface ErrorPageProps {
  cases: Case[];
}

const ContentWrapper = styled.div<{
  paddingTop: string;
  paddingBottom: string;
  responsivePaddingTop?: boolean;
}>`
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};

  @media (max-width: 767px) {
    ${props =>
      props.responsivePaddingTop != null && `padding-top: 12.5rem`};
  }

  @media screen and (max-height: 480px) {
    ${tw`pt-16`}
  }
`;

const CaseGridLabWrapper = styled.div`
  ${tw`mt-16 md:mt-6`}

  @media (max-width: 639px) {
    & >div >div:last-of-type {
      ${tw`mb-0`}
    }
  }

  @media (min-width: 640px) and (max-width: 767px) {
    & >div >div:last-of-type {
      ${tw`-mb-4`}
    }
  }

  & div {
    ${tw`md:(mb-0)`}
  }
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

const ErrorPage: NextComponentType<{}, {}, ErrorPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader title="/404" />
      <Header role="banner">
        <ContentWrapper paddingTop={'16rem'} paddingBottom={'0.5rem'} responsivePaddingTop>
          <Content>
            <H1>404</H1>
            <Paragraph paddingBottom={'1.5rem'}>
              Sedärja, den sidan hittades tyvärr inte. Kanske letar du efter något av våra case, de finner du isf nedan.
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
        <CaseGridLabWrapper>
          <CaseGrid cases={cases.filter(c => c.labs)} />
        </CaseGridLabWrapper>
      </Content>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Omit<
  ErrorPageProps,
  'router'
>> = async () => {
  const cases = getCasesFromJson();
  return {
    props: {
      cases,
    },
  };
};

export default ErrorPage;
