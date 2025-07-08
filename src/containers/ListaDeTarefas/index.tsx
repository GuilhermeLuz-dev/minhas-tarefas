import { useSelector } from 'react-redux'

import Tarefa from '../Tarefa'
import { MainContainer, Titulo } from '../../styles/styles'
import { RootState } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootState) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootState) => state.filtro
  )

  const filtrarTarefas = () => {
    let itensFiltrados = itens
    if (termo !== undefined) {
      itensFiltrados = itensFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio == 'prioridade') {
        itensFiltrados = itensFiltrados.filter(
          (item) => item.prioridade == valor
        )
      } else if (criterio == 'status') {
        itensFiltrados = itensFiltrados.filter((item) => item.status == valor)
      }

      return itensFiltrados
    } else {
      return itens
    }
  }

  const exibirResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento = `${
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''
    }`
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio} = ${
        valor ? valor : ''
      }" ${complemento}`
    }

    return mensagem
  }

  const tarefas = filtrarTarefas()
  const mensagem = exibirResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo>{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
