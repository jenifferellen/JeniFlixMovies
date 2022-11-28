import styled from "styled-components";

export const ContentBox = styled.div`
    height: auto;
    width: 100%;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    display: grid;
     grid: repeat(6, 280px) / auto-flow 175px;

    
`

export const Box = styled.div`
    height: 240px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    :hover{
        img{
            cursor: pointer;
            border: 1px solid white;
            box-shadow: 0 0 1em purple;
        }

        p{
            font-weight: bold;

        }
    }

    img{
        height: 210px;
        border-radius: 5px;
        border: 1px solid transparent;
    }

`
