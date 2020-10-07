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
const PhoneLiteIcon = styled(PhoneLite)`
  ${tw`stroke-current md:hidden text-gray-200 hover:text-teal-400`};
`;
const FindLiteIcon = styled(FindLite)`
  ${tw`stroke-current md:hidden text-gray-200 hover:text-teal-400`};
`;

const ContactBoxWrapper = styled.div`
  ${tw`flex flex-col md:(flex-row justify-between)`};
`;

const ContactBox = styled.div`
  ${tw`items-center flex flex-row md:flex-col pt-8`}
`;

const ContactLink = styled.a`
  ${tw`flex items-center md:flex-col text-gray-300 hover:text-teal-400`}
`;

const ContactInfo = styled.span`
  ${tw`pl-6 md:(block pl-0 pt-3 text-center)`}
`;

export const ContactsGroup = () => (
  <ContactBoxWrapper>
    <ContactBox>
      <ContactLink href="mailto:hej@itiden.se">
        <MailIcon />
        <MailLiteIcon />
        <ContactInfo>hej@itiden.se</ContactInfo>
      </ContactLink>
    </ContactBox>
    <ContactBox>
      <ContactLink href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
        <FindIcon />
        <FindLiteIcon />
        <ContactInfo>
          Kungstorget 11-12
          <br />
          411 41 Göteborg
        </ContactInfo>
      </ContactLink>
    </ContactBox>
    <ContactBox>
      <ContactLink href="tel:0709-597008">
        <PhoneIcon />
        <PhoneLiteIcon />
        <ContactInfo>0709-597008</ContactInfo>
      </ContactLink>
    </ContactBox>
  </ContactBoxWrapper>
);
