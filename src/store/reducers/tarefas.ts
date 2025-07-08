import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefas'
import styled from 'styled-components'

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
      status: enums.status.CONCLUIDA
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
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExistente = state.itens.find(
        (item) =>
          item.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExistente) {
        alert('Já existe uma tarefa com esse nome!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? enums.status.CONCLUIDA
          : enums.status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer

export const Card = styled.div<{ $ativo: boolean }>`
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#1E90FF' : '#a1a1a1')};
  color: ${(props) => (props.$ativo ? '#1E90FF' : '#5e5e5e')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  padding: 8px;
  display: block;
  cursor: pointer;
`
