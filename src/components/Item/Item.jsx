import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ItemListContainer.module.css'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export default function Item({ id, nombre, category, precio, imagen, descripcion, cantidad }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        <Card elevation={24} key={id} sx={{ maxWidth: 345}}>
            <CardHeader
                title={nombre}
                subheader={category}
            />
            <Link to={'/category/'+ category +'/item/'+id}>
            <CardMedia id={styles.imagenProducto}
                component="img"
                height="400"
                image={imagen}
            />
            </Link>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Price ${precio}
                </Typography>
            </CardContent>
            {/* Boton Ver detalle */}
            <div id={styles.divButton}>
            <Link style={{textDecoration:'none'} }/* to={'item/'+id} */
            to={'/category/'+ category +'/item/'+id}>
                <Button id={styles.button} variant="outlined"  > Ver detalle</Button>
            </Link>
            </div>

        </Card>
        </>
        
    )
}
