import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeHeader}>Welcome!</h1>
      <div className={styles.homeContentContainer}>
        <p className={styles.homeText}>We are a carb loving restaurant in the middle of Bristol. We opened in 1988 and have been thriving ever since.</p>
        <img className={styles.homeImage} src="https://images.unsplash.com/photo-1593940702988-5ab40a1913d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="Restaurant front picture" />
      </div>
        
    </div>
  )
}

export default Home