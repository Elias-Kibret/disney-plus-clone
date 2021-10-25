import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {selectMovies} from "../features/movie/movieSlice"
import {useSelector} from "react-redux"
function Movies() {
  const movies=useSelector(selectMovies)
  console.log(movies)
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
{
movies &&movies.map((movie)=>
(
<Wrap key={movie.id}>
  <Link to={`/detail/${movie.id}`}>
  <img src={movie.cardImage}/>
  </Link>

</Wrap>

))
}
            </Content>



            
        </Container>
    )
}

export default Movies
const Container=styled.div`
h4{
  margin-bottom: 50px;
  font-size:30px;
}
`
const Content=styled.div`
margin:20px 0px 200px 0px;
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
justify-items: center;
align-items: center;
gap:30px;
`
const Wrap=styled.div`

img{
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
  width:100%;
  height: 100%;
  object-fit:fill;
  border-radius: 8px;
  border:3px solid rgba(249,249,249, 0.1);
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  &:hover{
      box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px , rgba(0 0 0 / 73%) 0px 30px 22px -10px;
      transform: scaleX(1.05);
      border-color: rgba(249,249,249,0.8);
  }
}

`