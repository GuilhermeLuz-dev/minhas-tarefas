import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Tarefas'
import { Botao } from '../../styles/styles'

type TagProps = {
  prioridade?: enums.prioridade
  status?: enums.status
  parametros: 'status' | 'prioridade'
}

const retornarCorDaTag = (props: TagProps): string => {
  if (props.parametros === 'status') {
    if (props.status === enums.status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.status.CONCLUIDA) return variaveis.verde
  } else {
    if (props.prioridade === enums.prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.prioridade.IMPORTANTE)
      return variaveis.amareloEscuro
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.24);
  margin-bottom: 32px;
  label {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornarCorDaTag(props)};
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  font-size: 14px;
  font-family: 'Roboto Mono', sans-serif;
  line-height: 24px;
  color: #8b8b8b;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  bakcground-color: transparent;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid #eeeeee;
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
