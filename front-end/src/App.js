import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';


{/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"/>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"/> */}

function App() {
const [inputFrutas, setInputFrutas] = React.useState("");
const [inputTitulo, setInputTitulo] = React.useState(""); 
//Redux
   const frutas = useSelector((state) => state.reducer.frutas)
   const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
 
   
   const dispatch = useDispatch();
   
   function adicionarFruta(event) {
     event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }
    dispatch( {type: "ADICIONAR", value: objFruta});
   }
    function alterarTitulo(event) {
      setInputTitulo(event.target.value);
      dispatch({type: "ALTERAR", value:event.target.value});
    }

    return (
    <div>
    <Menu />
   <form>
    <label>Titulo</label>
    <input placeholder="Digite um título" value={inputTitulo}
    onChange={alterarTitulo}/>
    </form>
    <h1>{stateTitulo}</h1>  
      
      <form onSubmit={adicionarFruta}>
        <input placeholder="Digite uma fruta..." 
        value={inputFrutas}
         onChange={(event) => setInputFrutas(event.target.value)}
         />
        <button>
          Enviar
        </button>

      </form>
      {frutas.map((fruta, index) => {
        return (
          <li key={index}>{fruta.nome}</li>
        )
      })}
    </div>
  );
}

export default App;
