import {Component} from 'react'
import Popup from 'reactjs-popup'
import ImageButtons from '../ImageButtons'
import GameResultsView from '../GameResultsView'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ScoreMainContainer,
  ScoreContainer,
  Heading,
  ScoreCardContainer,
  ScoreText,
  GameScore,
  ItemImagesContainer,
  PopupContainer,
  RulesImageContainer,
  PopupButton,
  CloseButton,
  RulesImage,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    return (
      <GameResultsView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)

    if (choicesList[number].id === 'ROCK' && 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[number].id === 'ROCK' && 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[number].id === 'PAPER' && 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        mychoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[number].id === 'PAPER' && 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (choicesList[number].id === 'SCISSORS' && 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (choicesList[number].id === 'SCISSORS' && 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props

    return (
      <ItemImagesContainer>
        {choicesList.map(eachImage => (
          <ImageButtons
            key={eachImage.id}
            buttonDetails={eachImage}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemImagesContainer>
    )
  }
  render() {
    const {score, showResult} = this.state
    return (
      <MainContainer>
        <ScoreMainContainer>
          <ScoreContainer>
            <Heading>
              ROCK <br /> PAPER <br /> SCISSORS
            </Heading>
            <ScoreCardContainer>
              <ScoreText>Score</ScoreText>
              <GameScore>{score}</GameScore>
            </ScoreCardContainer>
          </ScoreContainer>
        </ScoreMainContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopupContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <RulesImageContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default Game
