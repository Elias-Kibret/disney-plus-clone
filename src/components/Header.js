import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import home from "../images/home-icon.svg"
 import original from "../images/original-icon.svg"
import search from "../images/search-icon.svg"
import watchlist from "../images/watchlist-icon.svg"
import movie from "../images/movie-icon.svg"
import series from "../images/series-icon.svg"
import user from "../images/IMG_leipuk.jpg"
function Header() {
    return (
        <Nav>
         <Logo src={logo}/>
         <NavMenu>
           <a>
            <div>
                <img src={home}/>
                </div>  
                <span>HOME</span>  
           </a>

           <a>
                <div>
                    <img src={search}/>
                    </div>  
                    <span>SEARCH</span>  
               </a>

               <a>
                <div>
                    <img src={watchlist}/>
                    </div>  
                    <span>WATCHLIST</span>  
               </a>

               <a>
                <div>
                    <img src={original}/>
                    </div>  
                    <span>ORIGINAL</span>  
               </a>

               <a>
                <div>
                    <img src={movie}/>
                    </div>  
                    <span>MOVIES</span>  
               </a>
               <a>
                <div>
                    <img src={series}/>
                    </div>  
                    <span>SERIES</span>  
               </a>
         </NavMenu>
         <UserImage src={user}/>
        </Nav>
    )
}

export default Header
 const Nav=styled.div`
    height:70px;
    background-color:#090b13;
    display: flex;
    align-items: center;
    padding:0px 36px;
    overflow-x: hidden;
 `
 const Logo=styled.img`
 width:80px;
 
 `
 const NavMenu=styled.div`
  display: flex;
  margin-left: 35px;
  flex:1;
 a{
    display: flex;
     align-items:center;
     padding: 0px 20px;
     cursor: pointer;
     div{
         height: 20px;;
         img{
             width:100%;
             height: 100%;
             object-fit: contain;
         }
     }
     span{
         font-size: 13px;
         letter-spacing:1.43px;
         position: relative;
         &:after{
             content: "";
             height:2px;
             background-color: white;
             position: absolute;
             left:0;
             right:0;
             bottom: -6px;
             opacity: 0;
             transform-origin: left center;
             transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
             transform: scaleX(0);
             
         }
     }
     &:hover{
         span:after{
             transform:scaleX(1) ;
             opacity: 1;
         }
     }
 }
 `
 const UserImage=styled.img`
 width:40px;
 height:40px;
 border-radius:50%;
   cursor: pointer;
 `