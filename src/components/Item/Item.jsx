import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './ItemListContainer.module.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Item({ id, nombre, category, precio, imagen }) {

    return (
        <>
            <motion.div
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{
                    ease: 'easeInOut',
                    type: 'spring'
                }}>
                <Card elevation={24} key={id} sx={{ maxWidth: 345, color: '#f77f00' }}>
                    <CardHeader
                        title={nombre}
                        subheader={category}
                    />
                    <Link to={'/category/' + category + '/item/' + id}>
                        <CardMedia id={styles.imagenProducto}
                            component="img"
                            height="250"
                            image={imagen}
                        />
                    </Link>
                    <CardContent>
                        <Typography variant="subtitle2" color="text.primary">
                            Price US${precio}
                        </Typography>
                    </CardContent>
                    {/* Boton Ver detalle */}
                    <div id={styles.divButton}>
                        <Link style={{ textDecoration: 'none' }}
                            to={'/category/' + category + '/item/' + id}>
                            <Button id={styles.button} variant="text" > See detail</Button>
                        </Link>
                    </div>

                </Card>
            </motion.div>
        </>

    )
}
