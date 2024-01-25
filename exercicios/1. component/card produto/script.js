const enun = document.getElementById('enunciado').innerText = 'Crie um componente funcional chamado CardProduto que receba props para o nome, preço e uma imagem do produto. Renderize um card simples exibindo essas informações.'


const CardProduto = (prop) => {
  let newProd = document.createElement('div.prod')
  let newName = document;createElement('div.nome')
  return (
    novo
  )
}

const App = () => {
  return (
    <div>
      <CardProduto 
      nome="Logitech G435" 
      img="https://images.kabum.com.br/produtos/fotos/263077/headset-gamer-sem-fio-logitech-g435-lightspeed-e-bluetooth-dolby-atmos-usb-pc-ps4-ps5-mobile-drivers-40mm-preto-981-001049_1636554612_gg.jpg" 
      preco="R$449,99" />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);