import React from 'react'
import Brand from './Brand'
import Container from './Container'
import GlobalStyle from './GlobalStyle'
import Card from './Card'

function Dashboard() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Brand />
                <Card height={400}>Chart goes here</Card>
                <Card height={400}>Table goes here</Card>
            </Container>
        </>
    )
}

export default Dashboard
