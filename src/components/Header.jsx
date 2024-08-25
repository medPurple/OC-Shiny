import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/color'
import light_logo from '../assets/light-logo.png'
import dark_logo from '../assets/dark-logo.png'
import StyledLink from '../utils/style/links'
import { func } from 'prop-types'


const StyledLogo = styled.img`
    width: 150px;
`

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-color: white;
`

function Header() {
    return (<StyledHeader>
             <Link to="/">
                <StyledLogo src={dark_logo} alt="logo" />
            </Link>
            <nav>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </nav>
        </StyledHeader>
    )
}

export default Header