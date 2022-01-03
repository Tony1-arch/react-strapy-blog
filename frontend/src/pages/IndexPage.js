import React from 'react';
import styles from '../styles/index.module.css'
export default function IndexPage() {
    return (
        <div className={styles.container}>
         < div className={styles.hero}>
              <h1> Welcome To World Football <span>Reviews</span></h1>
              <h2> We dig deep into Fooball Clubs To give you the best reviews</h2>
              <a href="/reviews" className={styles.btn}> Get Started</a>
         </div>
        </div>
    )
}
