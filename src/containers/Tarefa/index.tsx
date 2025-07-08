import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as enums from '../../utils/enums/Tarefas'
import { alteraStatus, editar, remover } from '../../store/reducers/tarefas'
import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles/styles'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  descricao: descricaoOriginal,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
  }, [descricaoOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const alteraStatusTarefa = (evento: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Está editanto: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametros="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametros="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    descricao,
                    prioridade,
                    status,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao
              onClick={() => {
                setEstaEditando(true)
              }}
            >
              Editar
            </Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
