import React from 'react';
import { Media as MediaInterface } from '../../models/Media';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface MediaProps {
  media: MediaInterface;
}

const Wrapper = styled.div`
  ${tw`mb-8 mx-auto`}
`;

const Image = styled.img`
  ${tw`block mx-auto`}
`;

const Caption = styled.figcaption`
  ${tw`font-mono text-sm text-gray-700 mx-auto block text-center p-2`}
`;

function isImage(type: string): boolean {
  return type.includes('image/');
}

export const Media: React.FC<MediaProps> = ({ media }) => {
  const { title, description, file } = media;

  if (isImage(media.file.contentType)) {
    const { width, height } = file.details.image;
    return (
      <Wrapper style={{ width }}>
        <figure>
          <Image
            alt={title}
            src={media.file.url}
            width={width}
            height={height}
          />
          {description && <Caption>{description}</Caption>}
        </figure>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <video controls muted width="100%" src={file.url} />
    </Wrapper>
  );
};
