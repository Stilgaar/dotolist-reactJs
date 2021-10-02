import './Article.css';

function Article(props) {


    const aAfficher = props.postIts
    const listePostIt = aAfficher.map((aAfficher, key) =>

        <div key={key} className="new1"> {aAfficher} 
        
        <button>X</button>
        
        </div>

    )

    return (

        <div className="boite"> 
        
        <div> {listePostIt}</div>

        </div>


    )

}

export default Article;