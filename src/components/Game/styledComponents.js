import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #223a5f;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`

export const ScoreMainContainer = styled.div`
    display: flex;
    justify-content: center;
    
`

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #ffffff;
    margin-top: 30px;
    padding: 24px;
    border-radius: 16px;
    height: 150px;
    width: 95%;
    @media screen and (min-width: 768px){
        width: 80%;
    }
`

export const Heading = styled.h1`
    font-family: "Bree Serif";
    color: #ffffff;
    font-weight: 500;
    font-size: 24px;
`

export const ScoreCardContainer = styled.div`
    background-color: #ffffff;
     width: 120px;
     height: 110px;
     text-align: center;
     border-radius: 12px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin-top: 20px;
     margin-bottom: 20px;
     @media screen and (min-width: 768px){
        width: 150px;
     }
`

export const ScoreText = styled.p`
    color: #223a5f;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 23px;
    margin-bottom: 0;
   
`

export const GameScore = styled.p`
    color: #223a5f;
    font-family: ""Roboto"";
    font-weight: 600;
    font-size: 32px;
    margin-top: 0;
`
export const ItemImagesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    width: 100%;
    height: 50%;
    margin-top: 96px;
`

export const PopupContainer = styled.div`
    display: flex;
    align-self: flex-end;
    margin: 20px;
`
export const PopupButton = styled.button`
    background-color: #ffffff;
    border: none;
    color: #223a5f;
    padding: 8px 14px 8px 14px;
    border-radius: 4px;
    font-family: "Bree Serif";
    font-weight: 500;
    font-size: 14px;
    outline: none;
    cursor: pointer;
`

export const RulesImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 500px;
    height: 400px;
`

export const CloseButton = styled.button`
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 10px;
    border: none;
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
`

export const RulesImage = styled.img`
    width: 85%;
    height: 80%;
`
