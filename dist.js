const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncreCompo3: props.onClickIncreCompo1
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("header", null, props.children));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState("11 0000000");
  setTimeout(function () {
    setTelefone("troquei de numero");
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncreCompo4: props.onClickIncreCompo3
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(30);
  setTimeout(function () {
    setIdade(31);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "componente 4 - ", idade, " - ", props.telefone), /*#__PURE__*/React.createElement("button", {
    onClick: props.onClickIncreCompo4
  }, "Incrementar"));
}

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncreCompo1: props.onClickIncrementar
  }));
}

function ComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(ComponenteIrmao2, {
    contador: props.contador
  }));
}

function ComponenteIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem('contador', props.contador);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponente(props) {
  const [contador, setContador] = React.useState(parseInt(localStorage.getItem('contador')) || 0);

  const click = function () {
    setContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: click
  }), /*#__PURE__*/React.createElement(ComponenteIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
