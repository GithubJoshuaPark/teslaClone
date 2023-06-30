import React from 'react'
import styled from 'styled-components'

const Section = ({title, desc, bgimg, leftBtnText, rightBtnText}) => {
  return (
    <Wrap bgimg={bgimg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{desc}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText &&
            <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>

    </Wrap>
  )
}

export default Section

// Styled Components
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  place-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  opacity: 0.85;

  text-transform: uppercase;
  font-size: 12px;

  cursor: pointer;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`
