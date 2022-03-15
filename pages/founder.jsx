/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../styles/page.styles/aboutUs.module.scss'
import Image from 'next/image'

export default function Founder() {
  return(
    <div className='container' >
      <div className='row' style={{marginTop: '8em', width: '100%'}}>
        <div className='col-md-6' >
         <img src='/jerry.jpg' style={{width: '70%'}}alt='tac-ngo-africa.jpg' />
        </div>

        <div className='col-md-6' >
          <p>
          Jerry Innocent Akubo, National Technical Consultant, INTERPOL National Central Bureau, Abuja and also the CEO/Founder TAC NGO Africa. Actively engaged in Law Enforcement Technology Advisory domain for over two (2) decades now – in the following areas:-
          Project deployment officer – OASIS Africa Project deployed by INTERPOL to all the Saharan African Border.
          National Technical Consultant – In-Charge of Expanding INTERPOL I-24/7 databases to relevant Law Enforcement Agencies within Nigeria.
          Established a Digital Resource Center for the Research & Planning Department of the NPF
          Established an Intelligence Support System (ISS) for the Criminal Intelligence within the Police Force:
          Focal point – INTERPOL Cybercrime Expert Group
          Focal Point – INTERPOL Drone Expert Forum
          Focal Point – Computer Forensic Institute
          Country Representative/Authorized Training Partner – Institute for Drone Technology, Australia.
          Jerry Innocent Akubo is an International Security Consultant who is often found sharing his insights at global INTERPOL events on demystifying remote sensing apparatus, security assessment of Emerging technology platforms and initiatives geared towards encouraging the use of technology Against Crime.
          </p>
        </div>

      </div> 
      
  </div>
  )
}