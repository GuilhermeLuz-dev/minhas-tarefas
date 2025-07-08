import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Tarefas'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles/styles'
import { Campo } from '../../styles/styles'
import { Form, Opcoes, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        descricao,
        prioridade,
        status: enums.status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          as={'textarea'}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                name="prioridade"
                id={prioridade}
                defaultChecked={prioridade === enums.prioridade.NORMAL}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
