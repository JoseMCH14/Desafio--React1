import Card from 'react-bootstrap/Card';
import Boton from '../components/Tags';

const MyCard = ({image, title,descripcion,color,txt}) => {
    return (
    <>
        <Card style={{ width: "18rem" , height:"30rem"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Boton colorButton={color} textButton={txt} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        </Card>
    </>
    );
    };
    export default MyCard;