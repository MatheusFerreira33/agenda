import { useState } from 'react'
import {RoutesMain} from './routes/index';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
     <RoutesMain />
    </>
  )
}

export default App
