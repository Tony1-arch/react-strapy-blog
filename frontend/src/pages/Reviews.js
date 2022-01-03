import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../components/hooks/useFetch';
import styles from '../styles/reviews.module.css'
export default function Reviews() {
    const { loading, error, data } = useFetch('http://localhost:1337/football-reviews')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
    console.log(data)
    return (
        <div className={styles.container}>
          <div className={styles.row}>
          <h1>FootBall Rating Reviews</h1>
          {data.map(review => (
          <div key={review.id} className={styles.card}>
          <div className={styles.rating}> <h2>{review.rating}</h2>
          <h3>{review.title}</h3>
          </div>
          <div className={styles.content}> 
          <small>console list</small>
          <p>{review.body.substring(0, 500)}...</p>
          <Link className={styles.linc}to={`/reviewdetail/${review.id}`}>Read more</Link>
          </div>
        </div>
        
      ))}
      </div>
      </div>
    )
}
