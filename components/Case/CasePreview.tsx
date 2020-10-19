import React from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import { H4 } from '../Layout';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Case } from '../../models/Case';
import { Tag } from '../Tag';
import 'lazysizes';
import { Media } from '../../models';

interface CasePreviewProps extends Case {
  index: number;
}

const ImageContainer = styled(animated.div)`
  ${tw`rounded-sm overflow-hidden relative`}
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  will-change: transform;

  transform: scale(1);
  transition: all 0.5s;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.02);
    }
`;

const CaseWrapper = styled.div`
  ${tw`mb-16`}
  @media (min-width: 768px) {
    width: calc(50% - 0.5rem);
  }
`;

const TagsWrapper = styled.div`
  ${tw`md:flex flex-wrap items-end overflow-hidden flex-wrap`}

  @media (max-width: 767px) {
    max-height: 82px;
  }

  @media (min-width: 768px) {
    max-height: 41px;
  }
`;

const A = styled.a``;

export const CasePreview: React.FC<CasePreviewProps> = ({
  title,
  desktopMedia,
  slug,
  technologies,
}) => {
  const img = desktopMedia[0] || null;

  if (!img) {
    return null;
  }

  return (
    <CaseWrapper>
      <ImageContainer>
        <Link href={`/case/[slug]`} as={`/case/${slug}`} passHref>
          <A>
            <LazyImage media={img} />
          </A>
        </Link>
      </ImageContainer>
      <Link href={`/case/[slug]`} as={`/case/${slug}`} passHref>
        <A>
          <H4>{title}</H4>
        </A>
      </Link>
      <TagsWrapper>
        {technologies.map(tech => (
          <Tag
            key={tech}
            css={`
              ${tw`mr-4 whitespace-no-wrap text-gray-100`}
            `}
          >
            {tech}
          </Tag>
        ))}
      </TagsWrapper>
    </CaseWrapper>
  );
};

const LazyImage: React.FC<{
  media: Media;
}> = ({ media }) => {
  const url = media.file.url;
  return (
    <Image
      alt={media.title}
      data-src={`${url}?q=80&w=1404`}
      className="lazyload"
    />
  );
};
