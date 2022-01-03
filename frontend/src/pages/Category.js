import React from 'react'
import styles from '../styles/category.module.css'
import pl from '../images/pl.png'
import ligue from '../images/ligue.png'
import bun from '../images/bun.png'
import se from '../images/se.png'
import efl from '../images/efl.png'
import fa from '../images/fa.png'
export default function Category() {
    return (
        <div className={styles.container}>
        <div className={styles.heading}>
         <h1>EUROPEAN FOOTBALL LEAGUES</h1>
        </div>
        <div className={styles.card}>
        <div className={styles.media}>
        <div className={styles.image}>
        <img src={pl} alt='football'/>
        </div>
        </div>
        <h2>PREMIER LEAGUE</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="/">Read More</a>
        </div>
        <div className={styles.card}>
        <div className={styles.media}>
        <div className={styles.image}>
        <img src={efl} alt='football'/>
        </div>
        </div>
        <h2>Efl </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="/">Read More</a>
        </div>
        <div className={styles.card}>
        <div className={styles.media}>
        <div className={styles.image}>
        <img src={bun} alt='football'/>
        </div>
        </div>
        <h2>Bundesliga</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="/">Read More</a>
        </div>
        <div className={styles.card}>
        <div className={styles.media}>
        <div className={styles.image}>
        <img src={ligue} alt='football'/>
        </div>
        </div>
        <h2>Ligue</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
             a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
             Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="/">Read More</a>
        </div>
        <div className={styles.card}>
        <div className={styles.media}>
        <div className={styles.image}>
        <img src={fa} alt='football'/>
        </div>
        </div>
        <h2>FA Cup</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="/">Read More</a>
        </div>
        <div className={styles.card}>
        <div className={styles.media}>
        <div className={styles.image}>
        <img src={se} alt='football'/>
        </div>
        </div>
        <h2>Serie A</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
           software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="/">Read More</a>
        </div>
        </div>
    )
}
