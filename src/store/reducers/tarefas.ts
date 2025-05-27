import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefas'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao: 'Estudar javascript revendo exercício do modulo 7',
      prioridade: enums.prioridade.NORMAL,
      status: enums.status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Ler um livro',
      descricao: 'Ler pelo menos 30 páginas do livro atual',
      prioridade: enums.prioridade.IMPORTANTE,
      status: enums.status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Fazer caminhada',
      descricao: 'Caminhar 20 minutos no parque',
      prioridade: enums.prioridade.NORMAL,
      status: enums.status.PENDENTE
    },
    {
      id: 4,
      titulo: 'Organizar a mesa de trabalho',
      descricao: 'Limpar e organizar papéis e materiais',
      prioridade: enums.prioridade.URGENTE,
      status: enums.status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
