const NomeContext =  React.createContext('nome');

function MeuComponente1(props) {
  return(
    <div className="componente-1" >
      <MeuComponente2 >
        <MeuComponente3 onClickIncreCompo3={props.onClickIncreCompo1}/>
      </MeuComponente2>
    </div>
  )
}

function MeuComponente2(props) {
  return (
    <div className="componente-2">
      <header>
        {props.children}
      </header>
    </div>
  )
}

function MeuComponente3(props) {

  const [telefone, setTelefone] = React.useState("11 0000000")
  setTimeout(function () {
    setTelefone("troquei de numero")
  }, 1000)


  return (
    <div className='componente-3'>
      <MeuComponente4 telefone={telefone} onClickIncreCompo4={props.onClickIncreCompo3}/>
    </div>
  )
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(30)

  setTimeout(function() {
    setIdade(31)
  }, 1000)

  return(
    <div className="componente-4">
      <p>
        componente 4 - {idade} - {props.telefone}
      </p>
      <button onClick={props.onClickIncreCompo4} >Incrementar</button>
    </div>
  )
}

function MeuComponente(props) {
  return(
    <div id="componentes">
      <MeuComponente1 onClickIncreCompo1={props.onClickIncrementar} />
    </div>
  )
}

function ComponenteIrmao(props){
  return(
    <div id='componente-irmao'>
        <ComponenteIrmao2 contador={props.contador} />
    </div>
  )
}

function ComponenteIrmao2(props) {

  React.useEffect(function (){
    localStorage.setItem('contador', props.contador)
  })

  return(
    <h2>Contador: {props.contador}</h2>
  )
}

function AppComponente(props) {
  const [contador, setContador] = React.useState(parseInt(localStorage.getItem('contador')) || 0);
  const click = function () {
    setContador(contador + 1)
  }

  return (
    <>
      <MeuComponente onClickIncrementar={click}/>
      <ComponenteIrmao contador={contador}/>
    </>
  )
}
ReactDOM.render(
  <AppComponente/>,
  document.getElementById('app')
)