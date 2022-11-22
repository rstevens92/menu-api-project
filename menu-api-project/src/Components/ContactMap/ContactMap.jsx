import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from './ContactMap.module.scss';


const ContactMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAy4IK4AHtjiH0vGnsfglYzRxssXk8MMdE",
 });

 if (!isLoaded) return <div>Loading...</div>;

//map doesn't load due to billing issue. As this is a personal project, I don't want to pay. Otherwise map should work.
 const Map = () => {
    return <GoogleMap zoom={15} center={{lat: 51.45174464584417,lng: -2.5964315409557304}} mapContainerClassName={styles.ContactMapContainer}></GoogleMap>;
 }

  return (
    <div> 
        <Map />;
    </div>
  )
}

export default ContactMap