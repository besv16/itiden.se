import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo';
import { SocialmediaGroupFooter } from '../SocialMediaIcons';

const FooterContainer = styled.footer`
  ${tw`w-full bottom-0 mb-16 mt-24 bg-gray-200 md:(bg-gray-900 mb-0 mt-32 border-solid border-0 border-t border-purple-700)`}

  & p {
    ${tw`mb-0`}
  }
`;

const Container = styled.div`
  ${tw`mx-auto flex flex-col justify-between text-gray-600 md:text-gray-350 px-6 md:px-5 pt-6 pb-5 md:(pt-16 pb-10)`};
  max-width: 1120px;

  @media (min-width: 1120px) {
    ${tw`px-0 m-auto`}
    max-width: 1080px;
  }
`;

const RowWrapper = styled.div`
  ${tw`md:flex md:flex-row md:justify-between`}
`;

const ItidenContainer = styled.div`
  ${tw``}
`;

const FooterLogo = styled(Logo)`
  ${tw`h-8 mb-10 fill-current text-gray-600 md:hidden`};
`;

const FooterContent = styled.div`
  ${tw`text-lg mb-3 md:w-1/2`};
`;

const ContactLink = styled.a`
  ${tw`self-start text-gray-700 md:text-gray-300 hover:text-purple-700 hover:md:text-teal-400`};
`;

const ContactInfo = styled.h3`
  ${tw`text-h3-links-light-bg font-bold md:(text-h3) text-gray-700 md:text-gray-300 hover:text-purple-700 hover:md:text-teal-400`};
`;

const ContactContainer = styled.div`
  ${tw`md:(w-1/2 flex justify-end self-end space-x-5)`};
`;

const Divider = styled.div`
  ${tw`bg-gray-350 w-full h-px mt-6 mb-4 md:(bg-gray-500 mt-10 mb-8)`};
`;

const Wrapper = styled.div`
  ${tw`flex justify-between items-end`};
`;

const Address = styled.div`
  ${tw`text-xs-footer text-gray-600 hover:text-purple-700 md:(text-gray-350 hover:text-teal-400)`};
`;

export const Footer = () => (
  <FooterContainer>
    <Container>
      <RowWrapper>
        <ItidenContainer>
          <a aria-label="Itiden hem" href="/">
            <FooterLogo />
          </a>
        </ItidenContainer>
        <FooterContent>
          <p>
          Kontakta oss och berätta om dig, <br /> dina behov eller din vision.
          </p>
        </FooterContent>
        <ContactContainer>
          <ContactLink href="tel:0709-597008">
            <ContactInfo>0709-59 70 08</ContactInfo>
          </ContactLink>
          <ContactLink href="mailto:hej@itiden.se">
            <ContactInfo>hej@itiden.se</ContactInfo>
          </ContactLink>
        </ContactContainer>
      </RowWrapper>
      <Divider />
      <Wrapper>
        <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          <Address>
            <p>
              Kungstorget 11–12 <br /> 411 41 Göteborg
            </p>
          </Address>
        </ContactLink>
        <SocialmediaGroupFooter />
      </Wrapper>
    </Container>
  </FooterContainer>
);
