import styled from 'styled-components'

import { Props } from '.'

type PropsSemContadorELegenda = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemContadorELegenda>`
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#1E90FF' : '#a1a1a1')};
  color: ${(props) => (props.$ativo ? '#1E90FF' : '#5e5e5e')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  padding: 8px;
  display: block;
`

export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
`

export const Label = styled.p`
  font-size: 14px;
`
