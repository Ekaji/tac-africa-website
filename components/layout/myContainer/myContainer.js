import styles from '../../../styles/layout/myContainer.module.scss'

export const MyContainer = ({children}) => {

  return(
    <>
     <main className={['flex mx-auto', styles.myContainer ].join(' ')}>
       {children}
     </main>
    
    </>
  )
}