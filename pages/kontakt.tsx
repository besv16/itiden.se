import { GetStaticProps, NextComponentType } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IndexHeader } from '../components/IndexHeader';
import { Page, Hero, H3 } from '../components/Layout';
import { ProfileCard } from '../components/ProfileCard';
import { Employee } from '../models/Employee';
import { SocialmediaGroupLarge } from '../components/SocialMediaIcons/SocialmediaGroupLarge';
import { ContactsGroup } from '../components/ContactIcons/ContactsGroup';
import { Map } from '../components/Map/Map';
import { getEmployeesFromJson } from '../data/employee';

interface IndexPageProps {
  employees: Employee[];
}

const EmployeesWrapper = styled.div`
  ${tw`flex flex flex-wrap mt-10 -mb-8 md:(mb-0)`};
`;
const TopContentWrapper = styled.div`
  ${tw`flex max-w-screen-xl px-6 items-center md:(min-h-screen mt-0 px-5) xl:(max-w-screen-lg px-0 mx-auto)`}
  @media (min-width: 768px) {
    margin-bottom: -104px;
  }
`;
const ContentWrapper = styled.div`
  ${tw`max-w-screen-xl px-6 mx-auto items-center md:(mt-0 px-5) xl:(max-w-screen-lg px-0 mx-auto)`}
`;
const QuarteredContent = styled.div`
  ${tw`flex flex-col pt-56 md:(w-3/4 pt-0)`}

  @media screen and (max-height: 580px) {
    ${tw`pt-40 pb-32`}
  }
`;
const GrayBanner = styled(Hero)`
  ${tw`mt-16 py-10 bg-gray-600`}
`;
const GreenBanner = styled(Hero)`
  ${tw`py-10 bg-green text-center mb-24`};
`;
const WhiteBanner = styled(Hero)`
  ${tw`hidden py-10 bg-white text-center mt-12 md:block`};
`;
const ContactLink = styled.a`
  ${tw`text-gray-700 text-xl font-semibold cursor-pointer hover:text-purple-700`}
`;
const AdressNarrow = styled.a`
  ${tw`md:hidden text-gray-600 text-xl font-semibold cursor-pointer hover:text-purple-700`}
`;
const Adresswide = styled.a`
  ${tw`hidden md:inline text-gray-600 text-xl font-semibold cursor-pointer hover:text-purple-700`}
`;
const Divider = styled.div`
  ${tw`w-full h-px bg-gray-600 mb-8 last:hidden md:hidden`};
`;

const location = {
  lat: 57.70348,
  lng: 11.9675,
};

const zoomLevel = 15;

const IndexPage: NextComponentType<{}, {}, IndexPageProps> = ({
  employees,
}) => {
  return (
    <Page>
      <IndexHeader title="/kontakt" />
      <TopContentWrapper>
        <QuarteredContent>
          <h1>Vi ser fram emot att höra från dig.</h1>
          <ContactsGroup mail location phone />
        </QuarteredContent>
      </TopContentWrapper>
      <GrayBanner>
        <SocialmediaGroupLarge />
      </GrayBanner>
      <Map {...{ location, zoomLevel }} />
      <GreenBanner>
        <AdressNarrow href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          Kungstorget 11–12, <br /> 411 41 Göteborg
        </AdressNarrow>
        <Adresswide href="https://goo.gl/maps/Dqa7A3jFhuyatxjC8">
          Kungstorget 11–12, 411 41 Göteborg
        </Adresswide>
      </GreenBanner>
      <ContentWrapper>
        <H3>Medarbetare</H3>
        <EmployeesWrapper>
          {employees.map(employee => (
            <React.Fragment key={employee.id}>
              <ProfileCard
                name={employee.name}
                title={employee.title}
                email={employee.email}
                phone={employee.phone}
                avatarFileUrl={employee.avatar?.file.url}
              />
              <Divider />
            </React.Fragment>
          ))}
        </EmployeesWrapper>
      </ContentWrapper>
      <WhiteBanner>
        <ContactLink href="mailto:hej@itiden.se?subject=Ny medarbetare?">
          Hör av dig, vi är alltid intresserade av duktiga och drivna
          medarbetare!
        </ContactLink>
      </WhiteBanner>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Omit<
  IndexPageProps,
  'router'
>> = async () => {
  const employees = getEmployeesFromJson();
  return {
    props: {
      employees: employees.sort((a, b) => a.order - b.order),
    },
  };
};

export default IndexPage;
