import StyledLink from "../../utils/style/links"
import homeimage from "../../assets/home-illustration.svg"
import styled from "styled-components"
import colors from "../../utils/style/color"

const Homestyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  border-radius: 20px;
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 150px;
  }
`

const StyledTitle = styled.h1`
  padding-bottom: 30px;
  max-width: 500px;
  line-height: 75px;
  font-size: 48px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <Homestyle>
      <Intro>
      <StyledTitle> Reperer vos besoins, on s'occupe du reste avec nos meilleurs talents</StyledTitle>
      <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
      </Intro>
      <Illustration src={homeimage} alt="home-illustration" />
      
    </Homestyle>
  )
}

export default Home