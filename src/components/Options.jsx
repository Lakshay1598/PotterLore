import React from 'react'
import styles from './options.module.css'

const Options = (props) => {
  const { selection, setSelection } = props;



  const questions = [
    'characters',
    'students',
    'staff',
    'house',
    'spells'
  ]

  console.log('Selection is >>> ', selection);


  return (
    <div className='bttn'>
      {questions.map((val, index) => {
        return (
          <button onClick={setSelection(val)} className={`${styles.button} ${val === selection ? styles.selectedBtn : styles.nonSel}`} key={index}>{val} </button>
        )
      })}
    </div>
  )
}

export default Options



// `$(styles.button) $(val === selection ? styles.selectedBtn : styles.nonSel)`