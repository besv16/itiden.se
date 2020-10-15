import { GetStaticProps, NextComponentType } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CaseGrid } from '../components/Case';
import { Content, Header, Page } from '../components/Layout';
import { getCasesFromJson } from '../data/case';
import { Case } from '../models';

interface ErrorPageProps {
  cases: Case[];
}

const IntroText = styled(Content)`
  ${tw`text-lg md:text-2xl text-gray-500 tracking-wide`}

  & b {
    ${tw`font-bold text-gray-500`}
  }
  & a {
    ${tw`font-bold`}
  }
`;

const ErrorPage: NextComponentType<{}, {}, ErrorPageProps> = ({ cases }) => {
  return (
    <Page>
      <IndexHeader />
      <Header role="banner">
        <IntroText>
          <h3>Oooops!</h3>
          <h1>Sidan hittades inte</h1>
          <p>Du kanske letade efter något av våra case?</p>
        </IntroText>
      </Header>
      <CaseGrid cases={cases} />
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

const IndexHeader: React.FC<{}> = () => (
  <Head>
    <title>Itiden - Webbutveckling | Apputveckling | Göteborg</title>
    <meta
      name="Description"
      content="Itiden är en digital produktionsbyrå med ett team av webbutvecklare och apputvecklare i Göteborg. Vi jobbar tillsammans med produktbolag, startups och byråer och hjälper med utveckling av webbsidor, webbapplikation och mobilappar."
    />
    <meta
      name="title"
      property="og:title"
      content="Itiden - Webbutveckling | Apputveckling | Göteborg"
    />
    <meta name="image" property="og:image" content="/static/itiden-share.png" />
  </Head>
);
