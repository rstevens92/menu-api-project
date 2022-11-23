import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeHeader}>Welcome!</h1>
      <div className={styles.homeContentContainer}>
        <p className={styles.homeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum egestas ligula ac finibus. Donec ut volutpat ligula. Morbi dictum vel augue quis pellentesque. Ut sit amet elit neque. Suspendisse et lacus imperdiet, fringilla metus sit amet, luctus dui. Nullam ac est at purus bibendum lacinia. Aliquam scelerisque vitae arcu nec efficitur. Cras vitae orci pretium, interdum leo et, vulputate dolor.<br></br>

Aenean nec pulvinar tellus, eu aliquet diam. Ut volutpat ultrices metus, vel semper mi mattis a. Vivamus aliquet suscipit diam, non feugiat ante tincidunt at. Phasellus dapibus fringilla dui, et facilisis elit. In elementum, purus in sagittis rhoncus, leo felis finibus est, ac convallis ligula elit ut sapien. Ut sit amet libero ac nisl laoreet facilisis sed a urna. Ut commodo dapibus euismod. Suspendisse posuere metus a quam lobortis eleifend.<br></br>

Curabitur ultrices ultrices ex a condimentum. Sed placerat egestas neque. Donec vulputate pellentesque tincidunt. Nullam bibendum est quis felis sagittis, ac interdum enim euismod. Nunc at aliquam ligula, sed fringilla dolor. Sed placerat dui ut ipsum faucibus vehicula. Integer pulvinar sed augue nec gravida. Sed orci ante, varius ut cursus in, congue vel lectus.<br></br>

Nam facilisis odio ut magna ultrices, vel vestibulum velit condimentum. Vivamus condimentum et nunc et sollicitudin. In vitae sodales erat, non fringilla libero. Duis convallis augue in ex mollis aliquet. Pellentesque molestie metus a maximus luctus. Donec felis ex, placerat id efficitur in, dictum vitae lacus. Aenean ac mattis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus imperdiet, mi in bibendum luctus, velit lacus finibus urna, id auctor libero sapien et nisl. Quisque tincidunt pulvinar ultrices. Mauris ultricies dictum tristique. Morbi purus justo, viverra id elit vitae, feugiat vestibulum urna. Nulla finibus dolor pretium justo rhoncus luctus. Phasellus neque magna, mattis in feugiat in, ornare vitae lacus. Nam dignissim, nisl vel dignissim finibus, mi lorem pretium est, sit amet auctor lorem nisi quis libero.<br></br>

Praesent vitae orci quis nibh mollis mattis. Suspendisse quis est luctus, consequat libero in, ullamcorper magna. Suspendisse sodales placerat sagittis. Nulla a tristique diam, et tempor diam. Nam elementum interdum mauris, porttitor porta velit congue vitae. Etiam molestie magna lacinia, fringilla nisl quis, rutrum sem. Cras venenatis ipsum varius maximus luctus. Vivamus porttitor maximus pulvinar. Quisque ac dapibus diam.</p>
        <img className={styles.homeImage} src="https://images.unsplash.com/photo-1593940702988-5ab40a1913d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="Restaurant front picture" />
      </div>
        
    </div>
  )
}

export default Home