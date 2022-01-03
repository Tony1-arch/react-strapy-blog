import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/hooks/useFetch';
import styles from '../styles/reviewdetails.module.css'
export default function ReviewDetail() {
    const {id} = useParams(); 
    const {loading, error, data} = useFetch('http://localhost:1337/football-reviews/' + id)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
    console.log(data)
    return (
        <div className={styles.container}>
        <div className={styles.row}>
        <h1>FootBall Rating Reviews</h1>
        <div className={styles.card}>
        <div className={styles.rating}>
        <h2>{data.rating}</h2>
        <h3>{data.title}</h3>
        </div>
        <div className={styles.row}>
        </div>
        <div className={styles.content}> 
        <p>{data.body}</p>
        </div>
        </div>
        </div>
        </div>
    )
}
