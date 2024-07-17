'use client'
import React, { useState } from 'react';
import styles from './ageCard.module.css';

export default function AgeCard() {
  const [age, setAge] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [result, setResult] = useState<string | undefined>(undefined);

  const updateAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value))
  }
  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }


  const calculateString = () => {
    if (name != undefined && age != undefined) {
      setResult(`${name} is ${age * 365} days old!`)

    }
  }


  return (
    <div className={styles.card}>
      <h2>Days in Age Calculator</h2>
      <div className={styles.result}>
        <p>{result}</p>
      </div>

      <div className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="string" id="name" placeholder="Enter your name" onChange={updateName} />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="Enter your age (in years...duh)" onChange={updateAge} />

        <button onClick={calculateString}>Calculate</button>
      </div>

    </div>
  )
}
