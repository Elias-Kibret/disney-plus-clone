import React,{useEffect ,useState} from 'react'
import db from "../firebase"
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import playWhite from "../images/play-icon-white.png"
import playBlack   from "../images/play-icon-black.png"
import group from "../images/group-icon.png"

import { setMovies } from '../features/movie/movieSlice'
function Detail() {
    const {id}=useParams();
    const [movie , setMovie]=useState()
    console.log("check",movie);

    useEffect(()=>{
    //Grab the movie info fromDB
    db.collection("Movies")
    .doc(id)
    .get()
    .then((doc)=>{
        if(doc.exists){
            
             let check=doc.data();
            setMovie(check);
        }
        else{
            //direct to home page
        }
    })
    } ,[]);
    // 
    return (

        <Container>
            {movie && (
<>
<Background>
        <img src={movie.BackgroundImage}/>
    </Background>
            
       <ImageTitle>
                    
                                         
                                         
           <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
                
                                </ImageTitle>
                            <Control>
                             <PlayButton>
                               <img src={playBlack}/>
                               <span>PLAY</span>
                             </PlayButton>
                             <TrailerButton>
                             <img src={playWhite}/>
                                   <span>Trailer</span>
                             </TrailerButton>
                             <AddButton>
                               <span>+</span>
                             </AddButton>
                             <GroupWatchButton>
                              <img src={group}/>
                             </GroupWatchButton>
                            </Control>
                <SubTitle>
                    <span>

                    2018 - 7m - Family,Fantasy ,Kids ,Animation
                    </span>
                </SubTitle>
                <Description>
                    <span>
                        A Chibes mom who's sad when her grown son leaves home gets another
                        chance at motherhood when one of her dumplings springs to life.
                        But she finds that nothing stays cute and small forever
                    </span>
                </Description>
</>
            )}
            
                    
            
            
        </Container>
    )
}

export default Detail
const Container=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background=styled.div`
margin-top:70px;
width:100vw;
height: 100vh;
position: fixed;
left:0;
right: 0;
top:0;
bottom:0;
opacity: 0.8;
z-index:-1;
img{
    
    width:100%;
    height:100%;
    object-fit: cover;
}
`
const ImageTitle=styled.div`
height:30vh;
width:35vw;
margin-top:80px;
img{
    width:100%;
    height: 100%;
    object-fit: contain;

}
`
const Control=styled.div`
display: flex;
margin-bottom: 30px;
`
const PlayButton=styled.button`

border:1px solid white;
border-radius: 4px;
background-color: rgb(249,249,249);
font-size:15px;
padding:3px 25px;
margin:0px 10px;
display: flex;
align-items:center;
letter-spacing: 1.8px;
cursor: pointer;
text-transform: uppercase;
&:hover{
    background-color: rgb(198,196,198);
}

`
const TrailerButton=styled(PlayButton)`
background-color:rgba(0,0,0,0.3);
border:1px solid white;
color:white;
&:hover{
    background-color: rgb(198,196,198);
    color:black;
    border:1px solid black;
}
`
const AddButton=styled.button`
background-color:rgba(0,0,0,0.3);
border:1px solid white;
color:white;
width:50px;
height:50px;
border-radius: 50%;
display: flex;
align-items:center;
justify-content: center;
margin-right:20px;
span{
    font-size:35px;
}

`
const GroupWatchButton=styled(AddButton)`
background-color:black;
`
const SubTitle=styled.div`
margin-top:50px;
padding:4px;
text-align:center;
background-color:rgba(0,0,0,0.3);
width:40%;
span{

}
`
const Description=styled.div`
margin-top:20px;
width:50%;
span{

    line-height:1.6;
    font-size: 20px;
    font-weight:100;
}
`