import React from 'react'
import BookingForm from '../../Components/BookingForm/BookingForm'
import styles from './Booking.module.scss'


const Booking = () => {
  return (
    <div className={styles.bookingContainer}>
      <h1 className={styles.bookingHeader}>Booking</h1>
      <h3 className={styles.bookingText}>Fill in our booking form</h3>
      <BookingForm />
      
    </div>
  )
}

export default Booking