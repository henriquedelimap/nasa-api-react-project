import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultPage } from './Page/DefaultPage'
import { Home } from './Page/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
