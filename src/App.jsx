import { useState } from 'react'
import './App.css'
import ButtonAppBar from './components/ButtonAppBar'
import ProductsTable from './components/ProductsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAppBar>

      </ButtonAppBar>
      <ProductsTable>
        
      </ProductsTable>
    </>
  )
}

export default App
