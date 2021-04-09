import styled, { ThemeContext, ThemeProvider } from "styled-components";
import MainPage from "./components/pages/MainPage";
import theme from './utils/theme'

const StyledApp = styled.div`
    background: ${props => props.theme.color.background.primary};
    height: 100vh;
    overflow: hidden;
    padding: 1rem;
    transition: background 0.25s ease-out;
`
const Container = () => {
    const themeContext = ThemeContext.useContainer()
  
    return (
        <ThemeProvider theme={themeContext.isDark ? theme.dark : theme.light}>
            <StyledApp>
                <Container/>
            </StyledApp>
        </ThemeProvider>
    )
}
function App() {
    return (
        <ThemeContext.Provider>
            <MainPage/>
        </ThemeContext.Provider>
    )
}

export default App;
