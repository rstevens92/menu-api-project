import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './BookingForm.module.scss'

const BookingForm = () => {


  return (
    <div className={styles.bookingForm}>
        <form className={styles.bookingFormContainer}>
            <label className={styles.labelForm}> Name </label>
            <input className={styles.inputForm} type="text"/>
            <label className={styles.labelForm}> Contact Email</label>
            <input className={styles.inputForm} type="email"/>
            <label className={styles.labelForm}> Date </label>
            <input className={styles.inputForm} type="date" />
            <label className={styles.labelForm}> time </label>
            <input className={styles.inputForm} type="time" value="12.00"/>
            <label className={styles.labelForm}> Number of People </label>
            <input className={styles.inputForm} type="number" />
            <label className={styles.labelForm}> Contact Number </label>
            <input className={styles.inputForm} type="tel" />
        </form>            
            <Popup trigger={<button className={styles.button}>Book Now!</button>}>
              <div>Thank you for your booking, we look forward to seeing you soon!</div>
            </Popup>
    </div>
  )
}

export default BookingForm