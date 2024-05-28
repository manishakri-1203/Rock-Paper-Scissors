import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ImageButtons from '../ImageButtons'
import GameResultsView from '../GameResultsView'

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
    const opponentChoice = choicesList[number]

    if (
      (id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice,
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (id === opponentChoice.id) {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        opponentChoice,
        resultMessage: 'IT IS DRAW',
      })
    } else {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice,
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
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
