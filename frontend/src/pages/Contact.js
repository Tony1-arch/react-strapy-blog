import React from 'react';
import { useForm } from 'react-hook-form';

import styles from '../styles/contact.module.css'

export default function Contact() {
    const {register , handleSubmit,formState: { errors }, reset, trigger,} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
      };
        return (
        <div  className={styles.container}>
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.content} >
        <h2 className={styles.heading}>  Contact Us</h2>
           <label className={styles.label}>Name</label>
           <input className={styles.input} type="text" placeholder="Name" name="name"  
            {...register("name", { required: "Name is Required" ,
             minLength: {
                value: 6,
                message: "Minimum Required length is 6",
              },
              maxLength: {
                value: 20,
                message: "Maximum allowed length is 20 ",
              }
            })}
             onKeyUp={() => {
            trigger("name");
             }}/>
           {errors.name && <p className={styles.errors}>{errors.name.message}</p>}

           <label className={styles.label}>Email</label>
           <input className={styles.input} type="text" placeholder="Email" name="email"
            {...register("email", { required: "Email is Required" ,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            }})}
            onKeyUp={() => {
              trigger("email");
            }}
           />
            {errors.email && <p className={styles.errors}>{errors.email.message}</p>}

           <label className={styles.label}>Phone</label>
           <input className={styles.input} type="text" placeholder="Phone" name="phone"
           {...register("phone", { required: "Phone is Required",
           pattern: {
             value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
             message: "Invalid phone no",
           },
          })}
          onKeyUp={() => {
           trigger("phone");
         }}/>
           {errors.phone && <p className={styles.errors}>{errors.phone.message}</p>}

           <label className={styles.label}>Message</label>
           <textarea className={styles.message} type="text" placeholder="Message" name="message"
            {...register("message", { required: "Message is Required",
            minLength: {
              value: 10,
              message: "Minimum Required length is 10",
            },
            maxLength: {
              value: 50,
              message: "Maximum allowed length is 50 ",
            }
           })}
           onKeyUp={() => {
            trigger("message");
          }}
           >
         {errors.message && <p className={styles.errors}>{errors.message.message}</p>}

           </textarea>
           <input  className={styles.btn} type="submit"
           
           />
        </form>
        </div>
    )
}
