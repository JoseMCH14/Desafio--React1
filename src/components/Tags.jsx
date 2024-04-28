import Badge from 'react-bootstrap/Badge';

const Boton = ({colorButton,textButton}) => {
    return (
    <>
    <Badge bg={colorButton}>{textButton}</Badge>
    </>
    );
    };
    export default Boton;