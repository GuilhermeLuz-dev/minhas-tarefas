import { Provider } from 'react-redux'

import GlobalStyled, { Container } from './styles/styles'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Container>
        <BarraLateral></BarraLateral>
        <ListaDeTarefas></ListaDeTarefas>
      </Container>
    </Provider>
  )
}

export default App
