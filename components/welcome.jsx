/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/welcome.module.scss'

const Welcome = () => {

  return(
    <div className={styles.welcome_component}>
      <h2 className={ styles.welcome_header}> welcome to <span className='text-primary'> tac africa </span></h2>
      <p className={ styles.welcome_text}><span> tac africa </span> was born out of an International Forum on Technologies, a high level meeting dedicated to Technology for a Safer world. the first two editions where held in Lyon, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL.</p>
    </div>
  )

}

export default Welcome;