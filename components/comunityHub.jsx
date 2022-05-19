/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/communityHub.module.scss'
import Button_ from '../components/button'
import Link from 'next/link'

export const CommunityHub = () => {
  return(
    <div className={['container', styles.container ].join(' ')}>
      <h2 className={ styles.communityHub_header }>TAC Community Hub</h2>
      <div className={ styles.communityHub_content }>
        <p>
        TAC Community hub is a cutting edge hub for sports, Research and development activities. It is located in the suburb of Abuja. The community hub compliments the TAC Headquarters in the Federal Capital Territory, Abuja Nigeria.
        </p>
        <div>
          <Link href={'/tac_communityHub'}>
            <a>
              <Button_ title={'read more'} />
            </a>
          </Link>
        </div>
      </div>

    </div>
  )
}