import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Options from './Options';
import useFetchData from '../hooks/useFetchData';
import Characters from './Characters';
import Spells from './Spells';
import House from './House';
import Loader from './Loader';

const DashBoard = () => {

  const [selection, setSelection] = useState(null);
  const { data, loading, error } = useFetchData(selection);


  const onClickHandler = (clickedButton) => {
    return () => {
      setSelection(clickedButton);
    }
  }

  const dataRender = {
    'characters': <Characters selection={selection} />,
    'students': <Characters selection={selection} />,
    'staff': <Characters selection={selection} />,
    'house': <House />,
    'spells': <Spells />
  }

  return (
    <div className={styles.dashBoard} >

      <div className={styles.layout}>
        <div className={styles.ptrmore}>
          <h1>PotterLore</h1>
        </div>
        <Options selection={selection} setSelection={onClickHandler} />

        {loading && (
          <Loader />

        )}

        {(data && !loading) && (
          dataRender[selection]
        )}
      </div>


    </div>
  )
}

export default DashBoard;