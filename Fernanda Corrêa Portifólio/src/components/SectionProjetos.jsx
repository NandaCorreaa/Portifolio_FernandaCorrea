import styled from 'styled-components';
import PropProjeto from './PropProjeto';
import Barbie from './imgs/Barbie.png'
import Calculadora from './imgs/CalculadoraReact.png'
import Guardioes from './imgs/Guardioes.png'
import SuperMario from './imgs/SuperMario.png'
import FundoTerceiraSessao from './imgs/FundoTerceiraSessao.png'


function SectionProjetos(){
    return(
        <TerceiraSessao id="projetos">
            <h1>Meus Projetos</h1>
            <Div>
                <PropProjeto img={Barbie} altImg="Captura de tela do meu site da Barbie" nomeDoProjeto="BARBIE" tecnologias="HTML - CSS" link="https://github.com/NandaCorreaa/BARBIE_Project" linkProjeto="https://nandacorreaa.github.io/BARBIE_Project/"/>
                <PropProjeto img={SuperMario} altImg="Captura de tela do meu jogo do Super Mario" nomeDoProjeto="SUPER MARIO MINIGAME" tecnologias="HTML - CSS - JAVASCRIPT" link="https://github.com/NandaCorreaa/SuperMario-MiniGame" linkProjeto="https://nandacorreaa.github.io/SuperMario-MiniGame/" />
                <PropProjeto img={Calculadora} altImg="Captura de tela do meu site da Calculadora" nomeDoProjeto="CALCULADORA REACT" tecnologias="HTML - REACT.JS - STYLED-COMPONENTS" link="https://github.com/NandaCorreaa/Calculadora_React" linkProjeto="https://calculadora-react-a55n-k1f2dfqlt-fernandas-projects-7fd83f4a.vercel.app/"/>
                <PropProjeto img={Guardioes} altImg="Captura de tela do meu site dos Guardiões da Galáxia" nomeDoProjeto="GUARDIÕES DA GALÁXIA" tecnologias="HTML - CSS" link="https://github.com/NandaCorreaa/Guardians_of_the_Galaxy-Project" linkProjeto="https://nandacorreaa.github.io/Guardians_of_the_Galaxy-Project/"/>

            </Div>
        </TerceiraSessao>
    )
}

export default SectionProjetos

const TerceiraSessao = styled.main`
background-image: url(${FundoTerceiraSessao});
background-size: cover;
background-position: top; 
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media(max-width: 420px){
   flex-direction: column;
   height: 160vh;
   justify-content: space-evenly;

}

h1{
    color: white;
    text-shadow:
0 0 5px #ffa500, 0 0 10px #E633FF, 0 0 15px #E633FF, 0 0 20px #E633FF, 0 0 20px #ff0000, 0 0 10px #E633FF, 0 0 15px #E633FF;
}


`
const Div = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-around;
width: 100%;
height: 65vh;

@media(max-width: 420px){
   flex-direction: column;
   height: 150vh;
   align-items: center;
}
`
