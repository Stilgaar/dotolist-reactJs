
// imporations du css pour app
import './App.css';

// importation des composants differents. 
import Navbarre from "./Navbar/Navbar.js";
import Task from "./Formulaire/task.js";

// on lui dit quels USE on veut utiliser, sinon pour des raisons, react ne les utilise pas nativement ?
import { useState, useEffect } from "react";

// ça c'est les fonctions bootstrap, éventuellement, c'est pas mal
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  // variable d'état creation d'un tableau dans lequel on ajoute les élements
  // C'est pour ça qu'il est entre crochets
  const [toDoList, setToDoList] = useState([]);

  // variable d'état pour fabriquer les "todo". 
  // elle est entre accolade parce que nous en faisons un objet
  const [task, setTask] = useState({
    tache: "",
    etat: "A Faire",
  });

  // Constante pour aller chercher les données dans l'input
  function getTask(event) {
    setTask({
      ...task, tache: event.target.value
    });
  };

  // fonction pour le click et on rajoute dans le tableau
  const getClick = () => {
    console.log("bouton zero")
    setToDoList([...toDoList, task])
    console.log(toDoList)
  };

  // mise à jour automatique lorsque toDoList est utilisé
  // il anime la fonction
  // permet de ne pas lancer la fonction deux fois pour qu'elle soit validée
  // sans useeffect, dans ce cas, si on clique une seule fois, aucune valeur ne sera sauvgarder
  // du coup, la fonction flechée est dans le useeffects. C'est pour ça qu'on l'utilise plus tard dans le "onClick"
  useEffect(() => console.log(toDoList), [toDoList]
  );

  // fonction pour changer le status de colonne
  // switch est son paramètre
  // pour changer d'en cours à terminé
  const switchEnCourt = (taskSwitch) => {
    console.log("premier bouton")
    setToDoList((toDoList) =>
      toDoList.map((item) => // on rerentre dans le tableau, item nouveau paramètre
        item === taskSwitch ? { ...item, etat: "En Cours" } // le ? est un ternaire, sorte de if abrégé
        // au moment du "taskSwitch" on change l'état de "A faire" à "En Cours"
          : item
      )
    );
  };

  // changer de à terminé jusqu'a fini
  const switchTermine = (taskSwitch) => {
    console.log("deuxième bouton")
    setToDoList((toDoList) =>
      toDoList.map((item) =>
        item === taskSwitch ? { ...item, etat: "Supprime" } : item // pareil, on lui dit que quand on clique, on passe en "terminé"
        // après on peut remodifier ça dans un if dans la fonction du bouton
      )
    );
  };

  // afficher le tableau sur la page HTML dans la section "Tache à faire"
  // le 'list' est une valeur qu'on sort de la ToDoList (le tableau)
  // map permet de sortir une valeur du tableau (ToDoList)
  // il peut pas récuprer une donnée (de ToDoList) sans lui rappeller
  const handleAFaire = () => {
    return toDoList.map((liste) => {
      if (liste.etat === "A Faire") { // il check l'etat si c'est le bon état il l'écris ici
        return (
          <Container>
            <Row className="task">
              <Col>
                <p >{liste.tache}</p>
              </Col>
              <Col>
                <button onClick={() => switchEnCourt(liste)} // ici on réutilise la fonction flechée pour ne pas qu'elle tourne en boucle
                // c'est ce que je disais plus haut dans le "useeffects" (d'après ce que j'ai compris.)
                >{liste.etat}</button>
              </Col>
            </Row>
          </Container>
        );
      } else { // s'il l'etat n'est pas bon, il renvoie une div vide. 
        return <div></div>
      }
    });
  }

  // deuxième colonne pour les tâches en cours
  // Enfin on en était pas encore tout à fait là
  const handleEnCour = () => {
    return toDoList.map((insert) => {
      if (insert.etat === "En Cours") {
        return (
          <Container>
            <Row className="task">
              <Col>
                <p>{insert.tache}</p>
                {/* on appelle l'element insert et on l'affiche via la tache du useState là haut */}
              </Col>
              <Col>
                <button onClick={() => switchTermine(insert)}>{insert.etat}</button>
                {/* le bouton rappellant un  */}
              </Col>
            </Row>
          </Container>
        );
      } else {
        return <div></div>
      }
    });
  }

  // affichage dans la section FAIT
  const handleFait = () => {
    return toDoList.map((done) => {
      if (done.etat === "Supprime") {
        return (
          <div>
            <p className="task" >{done.tache}</p>
          </div>
        )
      }
    });
  }

  // Ce qui va se passer sur le HTML 
  // on utilise les "handle" par 'convention' pour les 'onChange' (là évidement j'ai écris un getTask)
  return (

    <div>
      <Navbarre />
      <div className="app">
        <input className="linput" type="text" placeholder="Qu'est ce qu'on fait aujourd'hui ?" onChange={getTask} />
        <button onClick={getClick}>Confirmer</button>
        <div className="lestableaux">
          <Task aFaire={handleAFaire()}
            enCour={handleEnCour()}
            fait={handleFait()} />
        </div>
      </div>
    </div>

  );
}

// Task est un composant
// mes aFaire, enCour et fait sont des props. Ils parlent entre parents et enfants.
// les props ne peuvent pas parler entre "frères et soeurs"

// onLick={getClick} = addEventListener ("click", getClick)
// onChange={getTask} = addEventListerner ("Change", getTask)

// pour l'export de l'APP (probablement sur le index.HTML)
export default App;
