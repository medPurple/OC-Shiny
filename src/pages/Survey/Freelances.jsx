import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const FreelanceStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 90px;
`

const FreelanceTitleStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;

`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <FreelanceStyles>
      <FreelanceTitleStyles>
        <Title>Trouvez votre prestataire</Title>
        <p> Chez Shiny nous reunissons les meilleurs profils pour vous</p>
      </FreelanceTitleStyles>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreelanceStyles>
  )
}

export default Freelances