import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

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

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  color: #666;
  border: 1px solid #666;
  border-radius: 8px;
  width: 100%;
`

export const Botao = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  background-color: ${variaveis.azulEscuro};
  border: none;
  cursor: pointer;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default GlobalStyled
