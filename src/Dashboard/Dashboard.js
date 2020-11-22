import React, { useState, createContext } from 'react'
import Brand from './Brand'
import Container from './Container'
import GlobalStyle from './GlobalStyle'
import Chart from './Chart'
import VirtualizedTable from './Table'
import DarkSwitch from './DarkSwitch'

export const ThemeContext = createContext();

function Dashboard() {
    const themeState = useState('light');
    const [theme, setTheme] = themeState;
    const dark = theme === 'dark';
    return (
        <ThemeContext.Provider value={themeState}>
            <GlobalStyle dark={dark} />
            <Container>
                <Brand />
                <DarkSwitch />
                <Chart />
                <VirtualizedTable />
            </Container>
        </ThemeContext.Provider>
    )
}

export default Dashboard
