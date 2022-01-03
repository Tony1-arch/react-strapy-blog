import React from 'react'
import styles  from '../styles/about.module.css'

export default function About() {
    return (
        <div className={styles.container}>
          <div className={styles.title}>
               <h1>About Us</h1>
          </div>
        <div className={styles.content}>
            <div className={styles.article}>
                <h1>What we do  </h1>
                <p>
                Lorem Ipsum не е случајно избран и сложен текст, спротивно од верувањата. Неговите корени потекнуваат во дела на к
                ласичната Латинска книжевност од 45-та година пред новата ера, што го прави стар преку 2000 години. Richard McClintock, професор по Латински на колеџот Hampden-Sydney во Вирџинија побарал дефиниција
                 за малку чудните зборови "consectetur" од пасусите на Lorem Ipsum и додека ги анализирал деловите во класичната 
                книжевност открил автентичен извор. Lorem Ipsum доаѓа од поглавијата 1.10.32 и 1.10.33 од книгата "de Finibus Bonorum et Malorum" (Крајностите на доброто и злото) кои ги напишал Cicerо во 45-та година пред новата ера. Книгата говори за теоријата на етиката, која била многу популарна во текот на ренесансата
                . Првата реченица на Lorem Ipsum моделот "Lorem ipsum dolor sit amet..", доаѓа од реченицата во поглавјето 1.10.32
                Стандардниот дел на Lorem Ipsum кој се користел уште од 1500-та година е репродуциран според одредени потреби. Поглавјето 1.10.32 и 1.10.33 од книгата "de Finibus Bonorum et Malorum" која ја напишал Cicerо се исто така преработени во оригиналната форма заедно со англиската верзија на H. Rackham од 1914 година.
                </p>
                <a className={styles.btn} href="/">Read More</a>
                
            </div>
            <div className={styles.imge}>
                <img src="https://images.pexels.com/photos/3768236/pexels-photo-3768236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='laptop' />
                </div>
        </div>
        </div>
    )
}
