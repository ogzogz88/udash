import styled, { createGlobalStyle } from "styled-components"

const darkGrey = "#515263";
const lightGrey = "#f7f7f7";

const GlobalStyle = createGlobalStyle`
body{
    color:${darkGrey};
    background-color:${lightGrey};
    font-family:"Blinker",sans-serif;
}
`

export default GlobalStyle