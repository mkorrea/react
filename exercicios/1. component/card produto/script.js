const enun = document.getElementById('enunciado').innerText = 'Crie um componente funcional chamado CardProduto que receba props para o nome, preço e uma imagem do produto. Renderize um card simples exibindo essas informações.'



const CardProduto = (prop) => {
  return (
    <div class="prod">
      <div class="nome">{prop.nome}</div>
      <img class="img" src={prop.img} alt={prop.nome}></img>
      <div class="preco">{prop.preco}</div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <CardProduto 
      nome="Logitech G435" 
      img="https://images.kabum.com.br/produtos/fotos/263077/headset-gamer-sem-fio-logitech-g435-lightspeed-e-bluetooth-dolby-atmos-usb-pc-ps4-ps5-mobile-drivers-40mm-preto-981-001049_1636554612_gg.jpg" 
      preco="R$ 449,99" />
      <CardProduto 
      nome="Fan Rise Mode Laser" 
      img="https://images.kabum.com.br/produtos/fotos/153646/cooler-fan-rise-mode-laser-3-unidades-120mm-argb-preto-rm-rgb-05-5v_1663767095_gg.jpg" 
      preco="R$ 89,99" />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);