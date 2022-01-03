import React from 'react'
import styles from '../styles/backer.module.css';
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {BiPhone} from 'react-icons/bi'
import {BsPhone} from 'react-icons/bs'
export default function Backer() {
    return (
        <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
             <div className={styles.colum}>
                <h4>Company</h4>
                 <ul>
                  <li><a href="/">about us</a></li>
                  <li><a href="/">our services</a></li>
                  <li><a href="/">products</a></li>
                  <li><a href="/">blog</a></li>
                  </ul>
             </div>
             <div className={styles.colum}>
                <h4>Contacts</h4>
                 <ul>
                 <li > <a href="/"><p className={styles.icon}>Gmail</p><FiMail/></a></li>
                  <li><a href="/"><p className={styles.icon}>Yahoo</p><FiMail/></a></li>
                  <li><a href="/"><p className={styles.icon}>landline</p><BiPhone/></a></li>
                  <li><a href="/"><p className={styles.icon}>Mobile</p><BsPhone/></a></li>
                  </ul>
                </div>
             <div className={styles.colum}>
                <h4>follow us</h4>
                
                <div className={styles.socialmedia}>
                  
                 <a href="/"><BsFacebook/></a>
                 <a href="/"><BsWhatsapp/></a>
                 <a href="/"><BsInstagram/></a>
                 
                </div>
             </div>
           
            </div>

        </div>
        </div>
    )
}
