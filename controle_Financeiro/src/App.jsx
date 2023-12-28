import './App.css'
import { CardLoader } from './Components/Cards/CardLoader'
import { Header } from './Components/Header'

function App() {

  return (
   <>
    <Header/>
    <h1 id='tit'>Histórico de Transações</h1>
    <div className="grid">
      <CardLoader/>
    </div>
   </>
  )
}

export default App
