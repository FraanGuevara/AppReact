import React from 'react'
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import styles from './Form.module.css';


export default function FormDetail({ name, email, phone, address, setName, setEmail, setPhone, setAddress, enviarOrder, handleClose}) {
    

    return (
        <>
            <div className={styles.container}>
                <form className={styles.formularioContainer} onSubmit={(e) => { e.preventDefault(); enviarOrder();  }}>
                    <h3>Formulario de compra</h3>
                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='name'>Name</InputLabel>
                        <Input required id='name' type='text' aria-describedby='name-helper' value={name}
                            onChange={(e) => {
                                setName(e.currentTarget.value);
                            }} />
                        <FormHelperText id='name-helper'>Full name</FormHelperText>
                    </FormControl>

                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input required id='email' type='email' aria-describedby='email-helper' value={email}
                            onChange={(e) => {
                                setEmail(e.currentTarget.value);
                            }} />
                        <FormHelperText id='email-helper'>email to send invoice</FormHelperText>
                    </FormControl>

                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='phone'>Phone</InputLabel>
                        <Input required id='phone' type='phone' aria-describedby='phone-helper' value={phone}
                            onChange={(e) => {
                                setPhone(e.currentTarget.value);
                            }} />
                        <FormHelperText id='phone-helper'>Cell-Phone</FormHelperText>
                    </FormControl>

                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='address'>Address</InputLabel>
                        <Input required id='address' type='text' aria-describedby='address-helper' value={address}
                            onChange={(e) => {
                                setAddress(e.currentTarget.value);
                            }} />
                        <FormHelperText id='address-helper'>address for shipping</FormHelperText>
                    </FormControl>
                    <div className={styles.containerBoton}>
                    <Button type='button' onClick={handleClose}>Cerrar</Button>
                    <Button type='submit'>ENVIAR</Button>
                    </div>
                </form>
            </div>

        </>
    )
}
