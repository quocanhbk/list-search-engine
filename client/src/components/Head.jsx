import React from 'react'
import styled from 'styled-components'
import ThemeContext from './ThemeContext'
import ThemeToggle from './ThemeToggle'

const StyledHead = styled.div`
    width: 100%;
    height: 4rem;
    background: ${props => props.theme.color.background.secondary};
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`
const StyledTitle = styled.h3`
    color: ${props => props.theme.color.fill.primary};
    font-size: calc(1rem + .6vw);
    font-weight: 500;
    cursor: pointer;
    user-select: none;
`
const Head = () => {
    let themeContext = ThemeContext.useContainer()
    return (
        <StyledHead>
            <StyledTitle>TTG List Search Engine</StyledTitle>
            <ThemeToggle value={themeContext.isDark} onSelect={() => themeContext.toggleTheme()}/>
        </StyledHead>
    )
}

export default Head