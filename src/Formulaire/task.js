import './task.css';
import { Container, Row, Col } from 'react-bootstrap';


// paramètres de la fonction task. 
// (props est un paramètre interne de react)
// fonction principale. 
function Task(props) {


// dans le return, c'est le composant idiot. C'est ce qui sera affiché à l'écran quand on le rappelle dans le composant 
// APP.JS
    return (

        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>Tâches à faire</h2>
                        <div> {props.aFaire} </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>Tâches en cour</h2>
                        <div> {props.enCour} </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>Tâche terminée</h2>
                        <div> {props.fait} </div>
                    </div>
                </Col>
            </Row>

        </Container>
    );


}

export default Task;