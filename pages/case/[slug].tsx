import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Content, Contact, Page, H2, H3 } from '../../components/Layout';
import { Tags } from '../../components/Tag';
import { Case } from '../../models/Case';
import { CaseGrid } from '../../components/Case';
import { getCasesFromJson } from '../../data/case';

interface CasePageProps {
  cases: Case[];
  selectedCase?: Case;
  router: NextRouter;
}

export const Header = styled.div`
  ${tw`md:pt-48`}
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5 lg:mx-0`}
  }
`;

const MediaWrapper = tw(Content)`mb-16 px-0 xs:px-6`;

type MediaWrapperProps = {
  image: string;
  aspectRatio: number;
};

const ResponsiveMediaWrapper = styled.div.attrs<MediaWrapperProps>(
  ({ image, aspectRatio }) => ({
    style: {
      backgroundImage: `url(${image})`,
      paddingTop: `${aspectRatio * 100}%`,
    },
  })
)`
  ${tw`bg-center bg-contain bg-no-repeat bg-100%`}
`;

const MediaDesktopWrapper = styled(ResponsiveMediaWrapper)<MediaWrapperProps>`
  padding-top: 56.25%;
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const MediaMobileWrapper = styled(ResponsiveMediaWrapper)<MediaWrapperProps>`
  @media all and (min-width: 480px) {
    display: none;
  }
`;

const Information = styled.div`
  ${tw`pb-20`}

  & p {
    ${tw`text-lg`}
  }

  & a {
    ${tw`text-teal-400 hover:text-gray-100`}
  }
`;

const CasePage = ({ selectedCase, cases }: CasePageProps) => {
  if (!selectedCase) {
    return null;
  }

  const {
    title,
    technologies,
    categories,
    description,
    url,
    desktopMedia,
    mobileMedia,
    partners,
  } = selectedCase;

  const [headerMobileMedia] = mobileMedia.slice(0, 1);
  const [headerDesktopMedia] = desktopMedia.slice(0, 1);

  return (
    <Page noLogoFnutt>
      <CaseHeader {...selectedCase} />
      <Header>
        <MediaWrapper>
          {headerDesktopMedia && (
            <MediaDesktopWrapper
              image={headerDesktopMedia.file.url}
              aspectRatio={
                headerDesktopMedia.file.details.image.height /
                headerDesktopMedia.file.details.image.width
              }
            />
          )}
          {headerMobileMedia && (
            <MediaMobileWrapper
              image={headerMobileMedia.file.url}
              aspectRatio={
                headerMobileMedia.file.details.image.height /
                headerMobileMedia.file.details.image.width
              }
            />
          )}
        </MediaWrapper>
        <Content role="main">
          <Information>
            <H2>{title}</H2>
            {documentToReactComponents(description)}
            {url && (
              <p>
                Länk: <a href={url}>{url}</a>
              </p>
            )}
            {partners.length > 0 && (
              <p>
                Partners: {partners.map(partner => partner.name).join(', ')}
              </p>
            )}
            <div
              css={`
                ${tw`mt-8`}
              `}
            >
              <Tags tags={technologies} />
            </div>
            <div
              css={`
                ${tw`mt-2`}
              `}
            >
              <Tags tags={categories} />
            </div>
          </Information>
        </Content>
      </Header>

      {mobileMedia.slice(1).map((media, index) => (
        <MediaWrapper key={index}>
          <MediaMobileWrapper
            image={media.file.url}
            aspectRatio={
              media.file.details.image.height / media.file.details.image.width
            }
          />
        </MediaWrapper>
      ))}

      {desktopMedia.slice(1).map((media, index) => (
        <MediaWrapper key={index}>
          <MediaDesktopWrapper
            image={media.file.url}
            aspectRatio={
              media.file.details.image.height / media.file.details.image.width
            }
          />
        </MediaWrapper>
      ))}

      <Contact green />
      <Content>
        <H3
          css={`
            ${tw`mt-32`}
          `}
        >
          Fler case
        </H3>
        <CaseGrid cases={cases.filter(c => !c.labs)} />
      </Content>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cases = getCasesFromJson();
  const paths: { params: { slug: string } }[] = [];

  cases.forEach(c => {
    paths.push({ params: { slug: c.slug } });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Omit<
  CasePageProps,
  'router'
>> = async context => {
  const cases = getCasesFromJson();
  return {
    props: {
      selectedCase: cases.find(c => c.slug === context?.params?.slug),
      cases,
    },
  };
};

export default withRouter(CasePage);

const CaseHeader: React.FC<Case> = ({
  title,
  description,
  desktopMedia,
  slug,
}) => {
  const imageUrl = desktopMedia[0] ? desktopMedia[0].file.url : '';
  const descriptionString: string = documentToPlainTextString(description);

  return (
    <Head>
      <title>Itiden - case - {title}</title>
      <meta name="Description" content={descriptionString} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itidengbg" />
      <meta name="twitter:title" content={`Itiden - case - ${title}`} />
      <meta name="twitter:description" content={descriptionString} />
      <meta name="twitter:creator" content="@itidengbg" />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:title" content={`Itiden - case - ${title}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://www.itiden.se/case/${slug}`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={descriptionString} />
      <meta property="og:site_name" content="https://www.itiden.se" />
    </Head>
  );
};
