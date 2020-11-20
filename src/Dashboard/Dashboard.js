import React from 'react'
import Brand from './Brand'
import Container from './Container'
import GlobalStyle from './GlobalStyle'

function Dashboard() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Brand />
                <p>normal text</p>
            </Container>
        </>
    )
}

export default Dashboard
