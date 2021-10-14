import React from 'react'
import styled from 'styled-components'
function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Wrap>
              <img src={}/>
            </Wrap>
            <Wrap>
              <img src={}/>
            </Wrap>
            <Wrap>
              <img src={}/>
            </Wrap>
            <Wrap>
              <img src={}/>
            </Wrap>



            
        </Container>
    )
}

export default Movies
const Container=styled.div`
display: grid;
grid-template-columns: repeat(4 1fr);
`