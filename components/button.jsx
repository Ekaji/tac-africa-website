import { Button, Badge } from 'react-bootstrap'
import styles from '../styles/component.styles/button.module.scss'

export default function Button_({ title, variant, pill }) {
  return(
      <Button variant={variant} key={ title } className={ pill ? styles.button_pill : ''} >{ title }</Button>
  )
}