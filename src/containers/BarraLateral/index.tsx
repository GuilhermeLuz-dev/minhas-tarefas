import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={3} />
        <FiltroCard legenda="concluídas" contador={4} />
        <FiltroCard legenda="urgentes" contador={5} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={4} />
        <FiltroCard $ativo legenda="todas" contador={20} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
