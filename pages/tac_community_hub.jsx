/* eslint-disable react/jsx-key */
const TacCommunityHub = () => {

  return (
    <>
      <div
      className="h-[48rem] lg:h-96 flex mb-20 justify-center items-center bg-center bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage:" url('/community/community.jpg')"
      }}
    >
      </div>
      <div className="w-10/12 2xl:w-8/12 mx-auto font-semibold mb-12 ">
        <div>
          <div className='mb-4'>
            <em className="text-sweet_blue ">TAC Community Hub a.k.a. The School of Hard Knocks</em> is a
            {`cutting edge Co-creation Hub for Sports, Research and
            Community Development Activities for Kids of all age and
            adults of all works of life. It is a subscription based
            community and located within the suburb of the Federal
            Capital Territory, Abuja – Nigeria.`}
          </div>
          <h2 className="text-sweet_blue font-semibold text-2xl" >
            {`Our Motto is ‘Work’, ‘Play’ and Earn’. Our Objective is Networking and Co-Creation. And our mission is to replicate similar concept in as much community as possible within Nigeria using this as a pilot project.`}
          </h2>
          <h5 className="text-sweet_blue  text-xl mb-4 ">
            {`Our activities revolve around the underlisted five (5) pillars viz:-.`}
          </h5>

          <div className='mb-4'>
            <ol className='list-decimal'>
              <li>Sporting Activities</li>
              <li>Technology Clubs</li>
              <li>Mentoring and Coaching Services</li>	
              <li>Relaxation and Events</li>	
              <li>Office-on-the-go</li>	
            </ol>
          </div>
        </div>

        <ol className='list-decimal'>
          <li className='mb-4'>
            <h2 className="text-sweet_blue font-semibold text-2xl">
              Sporting Activities
            </h2>
            <p>
              TAC Community Hub provides a home
              for sport. We bring together sports clubs and key local
              partners who want to develop and grow the sporting
              offering in the community. We focus on sustainable,
              community-led approaches that get clubs working together
              to develop a welcoming, safe and fun environment for
              sports.
            </p>
          </li>

          <li className='mb-4'>
            <h2 className="text-sweet_blue font-semibold text-2xl">
              Technology Club <em> at the moment we have two (2) curation within this categories viz:-</em> 
            </h2>
            <ul className='mb-4'>
              <li>
                <h5 className="text-sweet_blue font-semibold text-2xl">Crypto club</h5>
                 {`focused on helping individuals understand the concept of blockchain and cryptocurrency. Cryptocurrency is becoming better-known and more popular throughout the entire world. However, being relatively new, you may not be familiar with it or why it’s even a big deal. We provide the services of learning how cryptocurrency will make the world a better place.Cryptocurrency may seem like a technology of the future. It has, and will, revolutionize the way we store money, pay for goods and services, and do business. We're concerned with Facilitating communal support and engagement.`}
              </li>

              <li>
                <h5 className="text-sweet_blue font-semibold text-2xl">Drone Club</h5>
                {`The hub is an affiliate of the Institute for Remotely Piloted Aircraft Systems a well-established industry leader in drone and counter-drone systems, that's an innovative and competent firm in the business of providing Consultancy Services & Solutions for Aviation Industries (Public & Private),Communities, and Nations. The focus is to ensure interested persons gain the appropriate knowledge on the proper usage of drones.`}
              </li>
            </ul>
          </li>

          <li className='mb-4'>
            <h2 className="text-sweet_blue font-semibold text-2xl">
              Mentoring and Coaching Services
            </h2>
            The hub provides an avenue where people can actually come and update their skills by learning from people with higher and more advanced skills in the area they are looking up to.  
          </li>

          <li className='mb-4'>
            <h2 className="text-sweet_blue font-semibold text-2xl">
              	Relaxation and Events
            </h2>
            The Hub provides a conducive space for relaxation.  It also provides and exceptional space for noteworthy events, ceremony, social gathering or celebration.
          </li>

          <li className='mb-4'>
          <h2 className="text-sweet_blue font-semibold text-2xl">
              Office on-the-go
            </h2>        
            `{`We provide a conducive office environment for anyone who wants to indulge in brainstorming. We offer them all the comforts of office space along with a cafe-like feel, as we believe in work-life integration. We help people feel at home even when they're at work, the feeling of well-being, and the excitement of being part of a vibrant and diverse community.`}
          </li>


         
        </ol>
      </div>
    </>
  );
};

export default TacCommunityHub;
