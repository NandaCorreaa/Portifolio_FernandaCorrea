import styled, {createGlobalStyle} from 'styled-components'
import FundoPrimeiraSessao from './imgs/FundoPrimeiraSessao.png'

function SectionInicio(){
    return(
        <PrimeiraSessao id='inicio'>
          <Section>
              <div>
                  <H2>Olá, eu sou </H2>
                  <H2><Span>Fernanda Corrêa</Span></H2>
              </div>
                <H2>Desenvolvedora Front-End</H2>
              <div>
                  <P>Estou sempre em um constante aprendizado.</P>
                  <P>Seja bem-vindo(a) ao meu portifólio.</P>
              </div>
          </Section>
        </PrimeiraSessao>
    )
}

export default SectionInicio

const PrimeiraSessao = styled.section`
background-image: url(${FundoPrimeiraSessao});
background-size: cover;
background-position: top right; 
height: 100vh;
width: 100%;
display: flex;
align-items: center;

@media(max-width: 420px){
    height: 70vh;
    background-position: left; 
}
`
const Section = styled.section`
width: 60%;
height: 60%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
color: #FFFFFF;
padding-bottom: 8rem;

@media(max-width: 420px){
width: 100%;
padding-bottom: 0;
}
`
const H2 = styled.h2`
font-size: 3.5rem;
display: flex;
justify-content: center;
width: 110%;

@media(max-width: 420px){
font-size: 2rem;
width: 100%;
}
@media(max-width: 395px){
font-size: 1.8rem;
}
`
const P = styled.p`
font-size: 2rem;
display: flex;
justify-content: center;

@media(max-width: 420px){
font-size: 1.3rem;
}
@media(max-width: 395px){
font-size: 1.1rem;
}
`
const Span = styled.span`
text-shadow:
0 0 5px #ffa500, 0 0 15px #E633FF, 0 0 20px #E633FF, 0 0 40px #E633FF, 0 0 40px #ff0000, 0 0 10px #E633FF, 0 0 60px #E633FF;
`