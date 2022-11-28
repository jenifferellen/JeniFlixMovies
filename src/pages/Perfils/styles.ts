import styled from 'styled-components'

export const PerfilsContainer = styled.main`

height: 625px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;

   a {
      text-decoration: none;
   }

   div{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
   }

   
`
export const Question = styled.div`
   font-size: 36px;
   font-weight: bold;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   height: 100px;
`
export const Middle = styled.div`
   height: 190px;
   display: flex;
   gap: 25px;
   
`


export const Profiles = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   gap: 10px;
   
   
   :hover{
      img{
          border: 2px solid white;
      }
      cursor: pointer;
      p{
         color: white;
      }
   }

   img{
      height: 160px;
      width: 160px;
      border: 2px solid transparent;
      border-radius: 5px;

      //:hover{
      //   border: 2px solid white;
      //   cursor: pointer;
      //}
   }

   p{
      color: gray;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   }

  
`

export const ButtonG = styled.div`
   height: 150px;
   font-family: Arial, Helvetica, sans-serif;
   

   button{
      width: 170px;
      height: 36px;
      background: transparent;
      color: gray;
      border: 1px solid gray;

      :hover{
         color: white;
         border: 1px solid white;
         cursor: pointer;
      }
   }
`
