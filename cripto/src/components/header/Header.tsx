import { Link } from 'react-router-dom'

import styles from './header.module.css'

import logoImg from '../../assets/logo.svg'

const Header = () => {
  return (
    <>
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logoImg} alt="logo cripto" />
        </Link>
      </div>
    </header>
    </>
  )
}

export default Header