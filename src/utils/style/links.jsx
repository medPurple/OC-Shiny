import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "./color"

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    margin-left: 10px;
    
    ${(props) => !props.$isFullLink && `&:hover { color: ${colors.primary}; }`}

    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}; border: 2px solid ${colors.primary};&:hover { background-color: white; color: ${colors.primary}; border: 2px solid ${colors.primary}; }`}
`

export default StyledLink