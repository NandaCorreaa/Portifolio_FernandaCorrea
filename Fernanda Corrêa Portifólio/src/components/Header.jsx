import styled, {createGlobalStyle} from 'styled-components'

function Header(){
   
    return(
        <Cabeçalho>
            <GlobalStyle/>
            <h1>Fernanda Corrêa</h1>
            <Nav >
                <UL>
                    <Ancora href="#inicio">INÍCIO</Ancora>
                    <Ancora href="#sobre">SOBRE</Ancora>
                    <Ancora href="#projetos">PROJETOS</Ancora>
                </UL>
            </Nav>
        </Cabeçalho>
    )
}

export default Header


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Cabeçalho = styled.header`
height: 10vh;
background-color: #0D0D0D;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-around;
position: fixed;
width: 100%;
box-shadow:
0 0 1px #ffa500, 0 0 2px #E633FF, 0 0 3px #E633FF, 0 0 4px #E633FF, 0 0 8px #ff0000, 0 0 7px #E633FF, 0 0 8px #E633FF;

@media(max-width: 420px){
    flex-direction: column;
    justify-content: space-around;
}
`
const Nav = styled.nav`
display: flex;
width: 30vw;
@media(max-width: 420px){
   width: 100%;
   justify-content: space-around;
}
`

const UL = styled.ul`
display: flex;
justify-content: space-between;
width: 30vw;
@media(max-width: 420px){
   width: 100%;
   justify-content: space-around;
}
`
const Ancora = styled.a`
color: #FFFFFF;
text-decoration: none;
font-size: 1.2rem;
&:hover {
    transform: scale(108%);
}
@media(max-width: 420px){
  font-size: 0.85rem;
}
`