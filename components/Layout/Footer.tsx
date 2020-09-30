import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Logo } from '../Logo';
import { Facebook, LinkedIn, Instagram } from '../SocialMediaIcons';

const FooterContainer = styled.footer`
  ${tw`w-full bottom-0 mb-16 md:mb-0 bg-gray-200 md:bg-gray-900`}
`;

const Container = styled.div`
  ${tw`mx-auto flex flex-col justify-between text-gray-600 md:text-gray-350 px-6 pt-6 pb-5 md:px-5 lg:px-0`};
  max-width: 1080px;
`;

const ItidenContainer = styled.div`
  ${tw`flex-1`}
`;

const SocialMediaContainer = styled.div`
  ${tw``}
`;

const SocialMediaLink = styled.a`
  ${tw``}
`;

const FooterLogo = styled(Logo)`
  ${tw`h-8 mb-10 fill-current text-gray-600 md:hidden`};
`;

const FooterContent = styled.div.attrs({
  className: 'text-3xl text-teal-400',
})`
  ${tw`mb-3`};
`;

const ContactLink = styled.a`
  ${tw`self-start`};
`;

const ContactInfo = styled.h3`
  ${tw`font-bold text-gray-700 md:text-gray-300 hover:text-purple-700 hover:md:text-teal-400`};
`;

const Divider = styled.div`
  ${tw`bg-gray-350 md:bg-gray-500 w-full mt-6 mb-4`}
  height: 1px;
`;

const Wrapper = styled.div`
  ${tw`flex justify-between items-end`};
`;

const Address = styled.div`
  ${tw`text-xsfooter text-gray-600 md:text-gray-350 hover:text-purple-700 hover:md:text-teal-400`};
`;

const FacebookLogo = styled(Facebook)`
  ${tw`fill-current text-gray-500 md:text-gray-250 hover:text-purple-700 hover:md:text-teal-400`};
`;

const LinkedInLogo = styled(LinkedIn)`
  ${tw`fill-current text-gray-500 mx-4 md:text-gray-250 hover:text-purple-700 hover:md:text-teal-400`};
`;

const InstagramLogo = styled(Instagram)`
  ${tw`fill-current text-gray-500 md:text-gray-250 hover:text-purple-700 hover:md:text-teal-400`};
`;

export const Footer = () => (
  <FooterContainer>
    <Container>
      <ItidenContainer>
        <a href="/">
          <FooterLogo />
        </a>
      </ItidenContainer>
      <FooterContent>
        Kontakta oss och berätta om dig, <br /> dina behov eller din vision.
      </FooterContent>
      <ContactLink href="tel:0709-597008">
        <ContactInfo>0709-59 70 08</ContactInfo>
      </ContactLink>
      <ContactLink href="mailto:hej@itiden.se">
        <ContactInfo>hej@itiden.se</ContactInfo>
      </ContactLink>
      <Divider></Divider>
      <Wrapper>
        <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          <Address>
            Kungstorget 11–12 <br /> 411 41 Göteborg
          </Address>
        </ContactLink>
        <SocialMediaContainer>
          <SocialMediaLink href="https://www.facebook.com/itiden">
            <FacebookLogo />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/company/itiden">
            <LinkedInLogo />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.instagram.com/itidenab/">
            <InstagramLogo />
          </SocialMediaLink>
        </SocialMediaContainer>
      </Wrapper>
    </Container>
  </FooterContainer>
);
