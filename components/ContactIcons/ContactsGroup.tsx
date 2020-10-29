import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Mail,
  MailLite,
  Find,
  FindLite,
  Phone,
  PhoneLite,
} from '../ContactIcons';

interface ContactsGroupProps {
  mail?: boolean;
  location?: boolean;
  phone?: boolean;
}

const MailIcon = styled(Mail)`
  ${tw`hidden md:block stroke-current text-gray-200 hover:text-teal-400`};
`;
const PhoneIcon = styled(Phone)`
  ${tw`hidden md:block stroke-current text-gray-200 hover:text-teal-400`};
`;
const FindIcon = styled(Find)`
  ${tw`hidden md:block stroke-current text-gray-200 hover:text-teal-400`};
`;
const MailLiteIcon = styled(MailLite)`
  ${tw`stroke-current md:hidden text-gray-200 hover:text-teal-400`};
`;
const IconWrapper = styled.div`
  ${tw`flex items-center`}
  height: 54px;
`;
const LiteIconWrapper = styled.div`
  ${tw`flex justify-center`}
  width: 44px;
`;

const PhoneLiteIcon = styled(PhoneLite)`
  ${tw`stroke-current md:hidden text-gray-200 hover:text-teal-400`};
`;
const FindLiteIcon = styled(FindLite)`
  ${tw`stroke-current md:hidden text-gray-200 hover:text-teal-400`};
`;

const ContactBoxWrapper = styled.div`
  ${tw`flex flex-col items-start`};
  @media (min-width: 768px) {
    min-width: 463px;
    max-width: 713px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ContactBox = styled.div`
  ${tw`items-center flex flex-row md:flex-col pt-8`}
  min-width: 168px;
`;

const ContactLink = styled.a`
  ${tw`flex items-center md:flex-col text-lg md:text-h3 md:font-bold md:underline text-gray-200 hover:text-teal-400`}
`;

const ContactInfo = styled.span`
  ${tw`pl-6 md:(block pl-0 pt-3 text-center)`}
`;

export const ContactsGroup: React.FC<ContactsGroupProps> = props => {
  return (
    <ContactBoxWrapper>
      { props.mail &&
        <>
          <ContactBox>
            <ContactLink href="mailto:hej@itiden.se">
              <IconWrapper>
                <MailIcon />
              </IconWrapper>
              <LiteIconWrapper>
                <MailLiteIcon />
              </LiteIconWrapper>
              <ContactInfo>hej@itiden.se</ContactInfo>
            </ContactLink>
          </ContactBox>
        </>
      }
      { props.location &&
        <>
          <ContactBox>
              <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
                <IconWrapper>
                  <FindIcon />
                </IconWrapper>
                <LiteIconWrapper>
                  <FindLiteIcon />
                </LiteIconWrapper>
                <ContactInfo>
                  Kungstorget 11–12,
                  <br />
                  411 41 Göteborg
                </ContactInfo>
              </ContactLink>
          </ContactBox>
        </>
      }
      { props.phone &&
        <>
          <ContactBox>
            <ContactLink href="tel:0709-597008">
              <IconWrapper>
                <PhoneIcon />
              </IconWrapper>
              <LiteIconWrapper>
                <PhoneLiteIcon />
              </LiteIconWrapper>
              <ContactInfo>0709-59 70 08</ContactInfo>
            </ContactLink>
          </ContactBox>
        </>
      }
    </ContactBoxWrapper>
  );
};
