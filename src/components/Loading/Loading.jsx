import React from 'react'
import { CircularProgress } from '@mui/material';
import styles from './Loading.module.css'

function Loading() {




  return (
    <>
        <div id={styles.container}>
            <CircularProgress id={styles.elementos}/>
            <h2 id={styles.elementos} >Loading ...</h2>
        </div>

    </>
    
  )
}

export default Loading