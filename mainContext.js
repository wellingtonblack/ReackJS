const NomeContext =  React.createContext('nome');

function MeuComponente1() {
  const meuNome = "Black"
  return(
    <NomeContext.Provider value={meuNome}>
      <div className="componente-1">
        <MeuComponente2/>
      </div>
    </NomeContext.Provider>
  )
}

function MeuComponente2() {
  return (
    <div className="componente-2">
      <MeuComponente3/>
    </div>
  )
}

function MeuComponente3() {
  return (
    <div className='componente-3'>
      <MeuComponente4/>
    </div>
  )
}

function MeuComponente4() {
  return(
    <NomeContext.Consumer>
      {(nomeContext) => (
        <div className="componente-4">
          <p>
             {nomeContext}
          </p>
        </div>
      )}

    </NomeContext.Consumer>

  )
}

function MeuComponente() {
  return(
    <div id="componentes">
      <MeuComponente1/>
    </div>
  )
}

ReactDOM.render(
  <MeuComponente/>,
  document.getElementById('app')
)