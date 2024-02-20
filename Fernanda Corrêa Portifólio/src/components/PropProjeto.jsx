import styled from 'styled-components';
import Github from './imgs/github.png'


function PropProjeto({img, altImg, nomeDoProjeto, tecnologias, link, linkProjeto}){
    return(
        <Prop>
            <a target='_blank' href={linkProjeto}>
                <figure>
                    <Site src={img} alt={altImg}  />
                <Figcaption>{nomeDoProjeto}</Figcaption>
                </figure>
            </a>
            <H2>Tecnologias:</H2>
            <P>{tecnologias}</P>
            <a href={link} target='_blank'><Icon src={Github} alt="Ícone do Github" /></a>
        </Prop>
    )
}

export default PropProjeto

const Prop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 24%;
height: 55vh;
border: groove white;
border-radius: 10px;
color: white;
background-color: rgba(0, 0, 0, 0.345);
@media(max-width: 420px){
   height: 34vh;
   width: 90vw;
   padding: 0.3rem;
}
`
const Site = styled.img`
    width: 22vw;
    border-radius: 6px;
    
    &:hover{
    transition: 400ms linear;
    transform: scale(1.1);
}

    @media(max-width: 420px){
    width: 60vw;
} 

`
const Figcaption = styled.figcaption`
    height: 7vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.5rem;
    color: #ffffff;
    text-shadow:
0 0 5px #ffa500, 0 0 10px #E633FF, 0 0 15px #E633FF, 0 0 20px #E633FF, 0 0 20px #ff0000, 0 0 10px #E633FF, 0 0 30px #E633FF;
    @media(max-width: 420px){
        font-size: 1.2rem;
        align-items: center;
        height: 4.2vh;
} 
@media(min-width: 1024px){
    font-size: 1.05rem;
} 
`
const H2 = styled.h2`
@media(max-width: 420px){
    font-size: 1.2rem;
} 
 
`

const P = styled.p`
font-size: 1.09rem;
text-align: center;
@media(max-width: 420px){
    font-size: 1.08rem;
} 
`
const Icon = styled.img`
    width: 3vw;

    &:hover{
    transition: 400ms linear;
    transform: scale(1.1);
}

@media(max-width: 420px){
    width: 8vw;
} 
`