import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <h1 className={styles.contactHeader}>Contact Us</h1>
        <h3 className={styles.contactInfo}>Phone 0117 111 11 11</h3>
        <h3 className={styles.contactInfo}>Email hello@houseofcarbs.co.uk</h3>
        <h3 className={styles.contactInfo}>123 Fake Street, Bristol, BS1 1AA</h3>
    </div>
  )
}

export default Contact;