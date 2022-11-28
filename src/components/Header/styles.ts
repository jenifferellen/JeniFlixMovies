import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 60px;
    background: black;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;

    a {
        color: gray;
        text-decoration: none;

        &:hover {
            color: white;
        }

       // &.banana {
       //     color: purple;
       // }
    }
`

export const LeftContent = styled.div`
    display: flex;
    gap: 50px;
    margin-left: 80px;
`

export const List = styled.div`
    display: flex;
    gap: 25px;
`

export const RightContent = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-right: 80px;

    input {
        border: transparent;
        color: gray;
        background: transparent;
        width: 1px;
        padding: 0 10px;
        outline: 0;
        transition: 0.5s;
    }
`
export const Search = styled.div`
    display: flex;

    button {
        background: transparent;
        color: gray;
        cursor: pointer;
    }

    &:hover {
        border-bottom: 2px solid purple;
        margin-top: 2px;

        input {
            transition: 0.4s;
            width: 200px;
        }

        button{
        color: purple;

        }

    }
`
