import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Content, Hero } from '../Layout';
import { ContactsGroup } from '../../components/ContactIcons/ContactsGroup';

interface ContactProps {
  blue?: boolean;
  purple?: boolean;
}

const ContactWrapper = styled.div`
  ${tw`hidden sm:block`}
`;

const PurpleBanner = styled(Hero)`
  ${tw`py-10 bg-purple-700 text-center`};
`;

const BlueBanner = styled(Hero)`
  ${tw`py-10 bg-teal-400 text-center`};
`;

const GrayBanner = styled(Hero)`
  ${tw`pt-8 pb-16 bg-gray-600 text-center`};
`;

export const Contact: React.FC<ContactProps> = props => {
return (
  <ContactWrapper>
      { props.purple &&
        <>
          <PurpleBanner
            css={`
              ${tw`mt-32`}
            `}
          >
            <Content>
              <p
                css={`
                  ${tw`text-gray-200`}
                `}
              >
                Kontakta oss och berätta mer om dig och dina behov.
              </p>
            </Content>
          </PurpleBanner>
        </>
      }
      { props.blue &&
        <>
          <BlueBanner>
            <Content>
              <p>Kontakta oss och berätta mer om dig och dina behov.</p>
            </Content>
          </BlueBanner>
        </>
      }
    <GrayBanner>
      <Content>
        <ContactsGroup mail phone />
      </Content>
    </GrayBanner>
  </ContactWrapper>
)};
