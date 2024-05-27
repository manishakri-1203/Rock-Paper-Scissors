import {ButtonItem, ImageButton, ImageItem} from './styledComponents'

const ImageButtons = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }
  return (
    <ButtonItem
      type="button"
      data-testid={`${lowerCaseId}Button`}
      onClick={onClickButton}
    >
      <ImageButton>
        <ImageItem src={imageUrl} alt={id} />
      </ImageButton>
    </ButtonItem>
  )
}

export default ImageButtons
