/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/component.styles/drive.module.scss'

const Drive = () => {
  return(
    <Container >
      <div className={ styles.drive_container_main } >

        <h2 className={ styles.drive_header }>about out <span className='text-primary '>drive</span></h2>
        <Row>
          <Col  md={6} >
            <div className={ styles.drive_cards_container_outer } >
              <div className={ styles.drive_cards_container_inner } >
                <div className={ styles.drive_card_image } >
                  <img src='/pexels-dids-3657268.jpg' alt='placeholder' />
                </div>
                <div className={ styles.drive_content} >
                  <h2 className={ styles.drive_header_inner }>what we do</h2>
                  <p className={ styles.drive_text } >We work on independent multi-disciplinary academic research and evidence-based policy making around emerging technologies. </p>
                </div>
              </div>

              <div className={ styles.drive_cards_container_inner }>
                <div className={ styles.drive_card_image }>
                  <img src='/pexels-shalom-de-león-6165167.jpg' alt='placeholder' />
                </div>
                <div className={ styles.drive_content } >
                  <h2 className={ styles.drive_header_inner } >How we work</h2>
                  <p className={ styles.drive_text } >We make them more technologically enabled. Besides this, we solve problems through policy advocacy, research, training, capacity building and volunteering. </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className={ styles.drive_details_container } >
            {/* <div className={ styles.drive_details } >
              <p className={ styles.drive_details_text } ></p>
            </div> */}

            <div className={ styles.drive_details }>
              <h2 className={ styles.drive_details_header } > years of experience</h2>
              <p className={ styles.drive_details_text } >We have always been an independent, open to all private & public companies and organizations related to future security-oriented technologies ranging from Artificial Intelligence, Big data security, innovative Aerial solutions & predictive intelligence. In that light, we have:</p>
              <ul>
                <li> Partnered up with United Nations Interregional Relations </li>
                <li> Held our first virtual conference with member nations in 2020 </li>
                {/* <li> TAC AFRICA was born out </li> */}
              </ul>
            </div>
          </Col>
        </Row>
      </div>

    </Container>

  )
}

export default Drive;