import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default GlobalStyled
