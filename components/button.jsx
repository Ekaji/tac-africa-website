/* eslint-disable react/jsx-key */
import { Button, Badge } from 'react-bootstrap'
import styles from '../styles/component.styles/button.module.scss'

export default function Button_({ title, variant, pill, disabled }) {
  return(
      <Button variant={variant}
              key={ title }
              disabled={disabled}
              className={ [styles.button_default, styles?.button_large, pill ? styles.button_pill : '' ].join(' ')} >
                { title }
      </Button>
  )
}