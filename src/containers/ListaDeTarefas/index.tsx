import { useSelector } from 'react-redux'

import Tarefa from '../Tarefa'
import { Container } from './styles'

import { RootState } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootState) => state.tarefas)
  return (
    <Container>
      Duas tarefas marcadas com &quot;Todas&ldquo; e &quot;Termo&ldquo;
      <ul>
        {itens.map((t) => (
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
    </Container>
  )
}

export default ListaDeTarefas
