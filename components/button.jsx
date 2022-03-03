import Button from 'react-bootstrap/Button'

export default function Button_({ title, variant }) {
  return(
    <Button variant={variant}>{title}</Button>
  )
}