import styled, {createGlobalStyle} from 'styled-components'
import FernandaCorrêa from './imgs/FernandaCorrêa.jpg'
import Github from './imgs/github.png'
import Linkedin from './imgs/linkedin.png'
import Instagram from './imgs/instagram.png'
import HtmlIcon from './imgs/html.png'
import cssIcon from './imgs/css.png'
import JsIcon from './imgs/JS.png'
import reactIcon from './imgs/react.png'
import StyledIcon from './imgs/styledComponents.png'


function SectionSobre(){
    return(
        <SegundaSessao id="sobre">
            <Section>
                <Figure>
                    <Img src={FernandaCorrêa} alt="Uma foto minha sorrindo" />
                    <Nav>
                        <a href="https://github.com/NandaCorreaa" target="_blank"> <Logo src={Github} alt="Ícone do Github" /> </a>
                        <a href="https://www.linkedin.com/in/fernanda-corr%C3%AAa-477926275/" target="_blank" > <Logo src={Linkedin} alt="Ícone do LinkedIn" /></a>
                        <a href="https://instagram.com/__nandacorrea?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" > <Logo src={Instagram} alt="Ícone do Instagram" /></a>

                    </Nav>
                </Figure>
                <Sobre>
                    <Div>
                        <Titulo>Sobre mim</Titulo>
                        <P>Apaixonada por programação, apesar da minha formação inicial ter sido como professora, minha paixão pela programação despertou no início de 2023, tornando-me uma constante aprendiz. </P>
                        <P>Mergulhei no ensino digital e atualmente estou cursando Desenvolvimento Front-End no Vai na Web. </P>
                        <P>Há três meses, ingressei na equipe da Vai na Web como facilitadora técnica do curso de Desenvolvimento Front-End.</P>
                        <P>Tenho uma habilidade natural para comunicação e estou empolgada para expandir meus horizontes, buscando sempre crescer nesta jornada.</P>
                    </Div>
                    <Div>
                    <Titulo>Minhas habilidades:</Titulo>
                    <DivIcons>
                        <Icons src={HtmlIcon} alt="Ícone do HTML5" />
                        <Icons src={cssIcon} alt="Ícone do CSS3" />
                        <Icons src={JsIcon} alt="Ícone do JavaScript" />
                        <Icons src={reactIcon} alt="Ícone do React" />
                        <Icons src={StyledIcon} alt="Ícone do Styled Components" />
                    </DivIcons>

                </Div>
                </Sobre>

            </Section>
        </SegundaSessao>
    )
}

export default SectionSobre

const SegundaSessao = styled.main`
background-color: #0D0D0D;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

@media(max-width: 420px){
    height: 105vh;
    align-items: center;
}
@media(max-width: 375px){
    height: 107vh;
    align-items: flex-start;
}
`
const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-evenly;

@media(max-width: 420px){
        flex-direction: column;
        width:95%;
        height: 95vh;
        justify-content: space-evenly;
}
@media(max-width: 375px){
    height: 100vh;
    justify-content: space-between;
}
`

const Figure = styled.section`
color:#FFFFFF;
width:40%;
height: 55vh;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between;

@media(max-width: 420px){
height: 18vh !important;
justify-content: space-between;
width:50%;
}
@media(max-width: 375px){
height: 20vh !important;
justify-content: space-evenly;
width:50%;
}
`

const Img = styled.img`
width: 20vw;
border-radius: 100%;

@media(max-width: 420px){
    width: 25vw;
}
`
const Sobre = styled.section`
color:#FFFFFF;
width:44%;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

@media(max-width: 420px){
    height: 70vh;
    justify-content: space-around;
}
`
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
line-height: 1.5rem;


@media(max-width: 420px){
line-height: none;
width: 90vw;
height: 80vh;
}
`

const Titulo = styled.h1`
font-size: 2.5rem;
text-align: center;
padding-bottom: 3rem;
text-shadow:
0 0 5px #ffa500, 0 0 15px #E633FF, 0 0 7px #E633FF, 0 0 10px #ff0000, 0 0 8px #E633FF, 0 0 10px #E633FF;

@media(max-width: 420px){
    font-size: 1.5rem;
    margin-top: 2.25rem;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
}
@media(max-width: 375px){
    font-size: 1.5rem;
    margin-top: 0.7rem;
    margin-bottom: 1.4rem;
    padding-bottom: 0;
}
`
const P = styled.p`
font-size: 1.5rem;
text-align: justify;
padding-bottom: 2rem;

@media(max-width: 420px){
    font-size: 1.1rem;
    padding-bottom: 1rem;
    width: 100%;
}
`

const Nav = styled.nav`
display:flex;
justify-content: space-between;
width: 12vw;
@media(max-width: 420px){
   width: 100%;
   justify-content: space-around;
}
`

const Logo = styled.img`
width: 3.5vw;
border-radius: 100%;

@media(max-width: 420px){
   width: 6vw;
}

&:hover {
    transform: scale(108%);
    box-shadow:0 0 2px #E633FF, 0 0 5px #E633FF, 0 0 10px #ff0000, 0 0 20px #E633FF, 0 0 30px #E633FF;
}
`

const Icons = styled.img`
width: 4vw;
&:hover {
    transform: scale(108%);
}
@media(max-width: 420px){
    width: 8vw;
}
`
const DivIcons = styled.div` 
width: 40vw;
display:flex;
justify-content: space-between;
margin-top: 1.6rem;
@media(max-width: 420px){
   align-items: center;
   width: 90vw;
   height: 10vh;
   justify-content: space-around;
}
`