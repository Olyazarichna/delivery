'use client';
import { useState } from 'react';

import styles from './Form.module.scss';

const Form=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [focusedInput, setFocusedInput] = useState('');

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

const handleSubmit=(event)=>{
    event.preventDefault();
    if (name.trim() === '' || email.trim === '') {
        alert('Name and email are required fields');
        return;
    }
    console.log('send');

}
const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
        case "name":
            setName(value);
            break;
        case "email":
            setEmail(value);
            break;
        case "phone":
            setPhone(value);
            break;
        case "address":
            setAddress(value);
            break;
        default:
            break;
    }
};

    return(
        <div className={styles.container}>
            <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.form_wrapper}>
                    <label htmlFor="name" className={`${styles.form_label} ${focusedInput === 'name' || name !== '' ? styles.focused : ''}`}>Name</label>  
                    <input type="text" value={name} name="name" id="name" className={styles.form_input} onChange={handleChange} onFocus={() => handleFocus('name')}/>
                </div>
                <div className={styles.form_wrapper}>
                    <label htmlFor="email" className={`${styles.form_label} ${focusedInput === 'email' || email !== '' ? styles.focused : ''}`}>Email</label>  
                    <input type="email" value={email} name="email" id="email" className={styles.form_input} onChange={handleChange} onFocus={() => handleFocus('email')}/>
                </div>
                <div className={styles.form_wrapper}>
                    <label htmlFor="phone" className={`${styles.form_label} ${focusedInput === 'phone' || phone !== '' ? styles.focused : ''}`}>Phone</label>  
                    <input type="tel" value={phone} name="phone" id="phone" className={styles.form_input} onChange={handleChange} onFocus={() => handleFocus('phone')}/>
                </div>
                <div className={styles.form_wrapper}>
                    <label htmlFor="address" className={`${styles.form_label} ${focusedInput === 'address' || address !== '' ? styles.focused : ''}`}>Address</label>  
                    <input type="text" value={address} name="address" id="address" className={styles.form_input} onChange={handleChange}  onFocus={() => handleFocus('address')}/>
                </div>
                <button type="submit" className={styles.form_btn}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;