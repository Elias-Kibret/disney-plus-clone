import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {auth,provider} from "../firebase"
import { selectUserName,selectUserPhoto,setUserLogin,setSignOut } from '../features/user/userSlice'
import {useDispatch,useSelector}  from "react-redux"
import logo from '../images/logo.svg'
import home from "../images/home-icon.svg"
 import original from "../images/original-icon.svg"
import search from "../images/search-icon.svg"
import watchlist from "../images/watchlist-icon.svg"
import movie from "../images/movie-icon.svg"
import series from "../images/series-icon.svg"
import user from "../images/IMG_leipuk.jpg"
function Header() {
    const dispatch=useDispatch();
    const history=useHistory()
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name : user.displayName,
                    email : user.email,
                    photo :user.photoURL
                }));
                history.push("/")    
            }
        })
    },[])
    const signIn = () =>{
        auth.signInWithPopup(provider).then((result)=>{
            let user=result.user
        dispatch(setUserLogin({
            name : user.displayName,
            email : user.email,
            photo :user.photoURL
        }));
        history.push("/")
        }).catch(()=>{
            console.log("error")
        })
    }
const signOut = ()=>{
    auth.signOut().then(()=>{
        dispatch(setSignOut());
        history.push("/Login")
    }).catch(()=>{
    console.log("error")
    })
}
    console.log(userName);
    console.log(userPhoto)
    return (
        <Nav>
         <Logo src={logo}/>
          {!userName ? (
          <LoginContainer>
            <Login onClick={signIn}>Login</Login>
          </LoginContainer>
           ):
          (<>
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
             <UserImage onClick={signOut} src={userPhoto}/>
          </>)
              
          }

        </Nav>
    )
}

export default Header
 const Nav=styled.div`
 z-index:6;
    height:70px;
    background-color:#090b13;
    display: flex;
    align-items: center;
    padding:0px 36px;
    overflow-x: hidden;
    position: fixed;
    top:0;
    right:0;
    left:0;
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
 const LoginContainer=styled.div`
 display: flex;
 flex:1;
 justify-content: flex-end;
 `
const Login =styled.div`
border:1px  solid #f9f9f9;
padding: 8px 16px;
border-radius:4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
transition:all 0.2s ease 0s;
cursor: pointer;
&:hover{
    background-color: #f9f9f9;
    color:#000;
    border-color:transparent;

}
`
