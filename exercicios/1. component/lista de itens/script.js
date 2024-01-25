const enun = document.getElementById('enunciado').innerText = 'Crie um componente funcional chamado ListaItens que receba uma propriedade itens (um array) e renderize uma lista não ordenada (<ul>) com itens (<li>) correspondentes aos elementos do array.'


const ListaItens = (prop) => {
  return (
    <div>
      <ul>
        {/* método .map para usar cada elemento do array */}
        {prop.jogos.map((jogo, index) => (
          <li key={index}>{jogo}</li>
        ))}
      </ul>
    </div>
  )
}

const App = () => {
  const jogosArray = ["Rocket", "CarX", "GTA", "COD"];
  return (
   <ListaItens jogos={jogosArray}/>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);