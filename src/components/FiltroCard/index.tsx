import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootState } from '../../store'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.prioridade | enums.status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootState) => state)

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  const verificarAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoValor && mesmoCriterio
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }
  const contador = contarTarefas()
  const ativo = verificarAtivo()
  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador> <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
