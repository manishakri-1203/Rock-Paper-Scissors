import {
  ShowResultContainer,
  ResultsImagesContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImage,
  PlayAgainBtnContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultsView = props => {
  const {myChoice, opponentChoice, playAgain, resultMessage} = props
  const {id, imageUrl} = opponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultsImagesContainer>
        <ResultTextImgContainer>
          <ResultText>YOU</ResultText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImage src={imageUrl} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultsImagesContainer>
      <ResultText>{resultMessage}</ResultText>
      <PlayAgainBtnContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          PLAY AGAIN
      </PlayAgainButton>
      </PlayAgainBtnContainer>
    </ShowResultContainer>
  )
}

export default GameResultsView
