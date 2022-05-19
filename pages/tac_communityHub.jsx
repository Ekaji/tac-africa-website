/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/communityHub.module.scss'

const TacCommunityHub = () => {
  return(
    <div className={['container', styles.container ].join(' ')}>
      {/* <h2 className={ styles.communityHub_header }>TAC Community Hub</h2> */}
      <div className={ styles.communityHub_content }>
        {/* <p>
        TAC Community hub is a cutting edge hub for sports, Research and development activities. It is located in the suburb of Abuja. The community hub compliments the TAC Headquarters in the Federal Capital Territory, Abuja Nigeria.
        </p> */}
        <h2 className={ styles.communityHub_header }>The Ideation</h2>
        <p> 
        <h2><em>COMMUNITY ENGAGEMENT AND SOCIAL MEDIA</em></h2>
        In the Internet age of the 21st century, it would be simply naïve for Law Enforcement Agencies to depend solely on traditional means of community engagement.
        While important, having a physical presence in the community is no longer sufficient to combat crime on it’s own.
        
        Instead, technology has made it vital for community policing efforts to take a step further by embracing social media and other technology-enabled forms of communication.
        </p>
        <p>
        This is compounded by the fact that cyber-enabled crimes have increasingly moved beyond regular cases from online fraud and sex exploitation towards facilitating terror attacks.
        By extending it’s virtual presence online, Law Enforcement Agents can increase their community engagement. This then presents even more opportunities to improve policing in today’s world through a myriad of ways.
        </p>
      </div>

      <div className={ styles.communityHub_content }>
        <h2><em>PUBLICIZE INITIATIVE, DEVELOP TRUST AND MAINTAIN AN ONGOING RELATIONSHIP WITH THE COMMUNITY</em></h2>
        <p>
        As part of it’s efforts to reduce crime rate, the Panama Police Force uses social media to maintain a direct and ongoing relationship with it’s community both online and offline.
        Other Police formations include California Alhambra Police Department, Arcadia Police Department and San Gabriel City Hall Police Department. These are examples of LEA that have adopted social media for this purpose.
        </p>
        <h2><em>PROVIDE CREDIBLE INFORMATION IN REAL TIME</em></h2>
        <p>
        Social media allows for Law Enforcement Agencies to be the direct source of news to the public, particularly during times of emergency. Evident in the Boston Marathon bombings that took place in April 2013,
        </p>
        <p>
        which saw the Boston Police Department bypassing traditional media outlet and immediately turning to social media to keep the public informed.
        Twitter was used to keep the public updated as it unfolded, the status of the investigation and the steps the police took to manage the crisis. This greatly reduced misinformation.
        </p>
      </div>

      {/* <div className={ styles.communityHub_content } >
        <h2><em>THE INSTITUTE FOR REMOTELY PILOTED AIRCRAFT SYSTEM</em></h2>
        <p>The Institute for Remotely Piloted Aircraft System (IRPAS) was established in March 2021as an online Learning infrastructure environment for Drone and Counter Drone training for Law Enforcement Agencies.</p>
        <h3><em>MISSION</em></h3>
        <p>Democratization of Drone Education for Law Enforcement Agencies in Africa.</p>
        <p>To forestall a 21st century Digital Skills training over the cloud.</p>
        <p>Ingestion of data for RPAS Education to include block chain, data, privacy and cyber security.</p>

        <h3><em>GRADUATE PROGRAMS</em></h3>
        <p>We are currently in talks with some institutions on strategic…</p>
      </div> */}

    </div>
  )
}

export default TacCommunityHub