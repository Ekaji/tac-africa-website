/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx';

const TechForSocialGood = () => {
  const backgroundImg = '/community/5.jpg';
  return (
    <>
      <HeroBanner
        text={'Drone And Counter Drone'}
        bannerOverlay
        activeLink={'Technology for social Good'}
        backgroundImg={backgroundImg}
      />
      <div className="bg-gray-100 font-sans leading-normal tracking-normal">
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div
            className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
            style={{ fontFamily: 'Georgia,serif' }}
          >
            <div className="font-sans">
              <h1 className="font-bold font-sans break-normal pt-6 pb-2 text-primary text-3xl md:text-4xl">
                Technology for social Good
              </h1>
              <p className="text-sm md:text-base font-bold text-primary">What we Do</p>
            </div>
            <div className="py-6 font-sans">
              {`
               We work on independent multi-disciplinary
              academic research and teach open and issue-oriented
              debate and evidence-based policymaking around new
              technologies like Cybersecurity, Artificial
              Intelligence, Drones, and Counter- Drone Industry.
              `}
              <br />
              {`
              How
              we work TAC Africa focuses on the study of and
              engagement with Africa, with our focus on how technology
              is being used against crime and for social good, We
              promote the visibility of Africa as a hub for technology
              and advocate for the use of technology to solve the
              issues that affect the society TAC promotes
              collaborative partnership and knowledge sharing between
              like-minded institutions, NGOs and private companies,
              and counterparts in Africa. 
              `}
              <br />
              {`
              Years of Experience
              Technology Against Crime Africa was incorporated on 23rd
              February 2016 with CAC/IT/No.84975 TAC aims to liaise
              and promote synergy with relevant academic research
              associations ok issues relating to avoiding being
              victims of crime To use modern technology and equipment
              to sensitize individuals groups on ways to prevent being
              victims and also educate them on ways to seek justice.
              Our Background TAC is a Non-governmental Organization
              connecting law enforcement, subject matter experts, and
              civil society to solve technological issues that affect
              society. 
              `}
              <br />
              {`
              We cooperate between the security sectors and
              various public enterprises, constant private-public
              dialogue, and awareness campaigns, and curate technology
              for social good. We consist of an Advisory board,
              management team, various member country representatives,
              A legal team, finance, and administration, project
              consultants, and human resource management. How we
              Integrate TAC Africa is committed to becoming a
              world-leading icon on this domain of utilizing emerging
              technologies, trainings and capacity building I-Big Data
              Expertise TAC Africa has come up with various means they
              tackle cybersecurity through various expertise such as
              skill development and awareness in cybersecurity in
              Africa, West Africa cybercrime startup culture and the
              African youth, law enforcement and legal landscape.
              `}
              <br />
              {`
              iI-Research and Development Cybercriminals in Africa use
              social engineering tactics to steal money and carryout
              other criminal activities online.TAC Africa and UNICRI
              in collaboration with key representatives from African
              countries seek to explore new and emerging threats
              associated with crimes as well as the possible role of
              Artificial Intelligence (AI) in crime prevention.
              iII-Industry Experts TAC Africa intends to use an
              anti-crawling mechanism to prevent surveillance by law
              enforcement and to safeguard servers resources from
              being abused by rival hackers community Ways to
              Volunteer -Explore creative recruitment of trained
              persons -Provide excellent induction and training on
              cybersecurity etc -Support campaigns , attend events etc
              -Participating in fundraising -Acknowledge contribution
              Dr. Jerry Akubo is the founder and also CEO of TAC NGO
              Africa.
              `}
              <br />
              {`
              He's a National Technical Consultant, INTERPOL
              National Central Burea Abuja. Actively engaged in law
              Enforcement Technology Advisory for over two decades and
              also the Country representative/Authorized Training
              Partner for Institute for Drone Technology, Australia.
              `}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechForSocialGood;
