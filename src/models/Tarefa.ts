import * as enums from '../utils/enums/Tarefas'

class Tarefa {
  titulo: string
  descricao: string
  prioridade: enums.prioridade
  status: enums.status
  id: number

  constructor(
    titulo: string,
    descricao: string,
    prioridade: enums.prioridade,
    status: enums.status,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.prioridade = prioridade
    this.status = status
    this.id = id
  }
}

export default Tarefa
