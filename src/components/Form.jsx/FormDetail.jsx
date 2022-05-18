import React from 'react'
import styles from './Form.module.css';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { motion } from 'framer-motion';


export default function FormDetail({ name, email, phone, address, setName, setEmail, setPhone, setAddress, enviarOrder, handleClose }) {

    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ scale: 1 }}
                className={styles.container}>
                <form className={styles.formularioContainer} onSubmit={(e) => { e.preventDefault(); enviarOrder(); }}>
                    <h3>Purchase form</h3>
                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='name'>Name</InputLabel>
                        <Input required inputProps={{ inputMode: 'text', pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}" }} id='name' type='text' aria-describedby='name-helper' value={name}
                            onChange={(e) => {
                                setName(e.currentTarget.value);
                            }} />
                        <FormHelperText id='name-helper'>Full name</FormHelperText>
                    </FormControl>

                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input required inputProps={{ inputMode: 'email', pattern: "[^@\s]+@[^@\s]+\.[^@\s]+" }} id='email' type='email' aria-describedby='email-helper' value={email}
                            onChange={(e) => {
                                setEmail(e.currentTarget.value);
                            }} />
                        <FormHelperText id='email-helper'>email to send invoice</FormHelperText>
                    </FormControl>

                    <FormControl id={styles.formularioInput}>
                        <InputLabel htmlFor='phone'>Phone</InputLabel>
                        <Input required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id='phone' type='numeric' aria-describedby='phone-helper' value={phone}
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
            </motion.div >

        </>
    )
}
