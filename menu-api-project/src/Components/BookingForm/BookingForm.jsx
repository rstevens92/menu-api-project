import React, { useState } from 'react';

import styles from './BookingForm.module.scss'

const BookingForm = () => {


  return (
    <div>
        <form>
            <label> Name </label>
            <input type="text"/>
            <label> Contact Email</label>
            <input type="email"/>
            <label> Date </label>
            <input type="datetime-local" />
            <label> Number of People </label>
            <input type="number" />
            <label> Contact Number </label>
            <input type="tel" />
        </form>
    </div>
  )
}

export default BookingForm