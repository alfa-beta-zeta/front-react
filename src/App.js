
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Layout from './components/Layout';
import Loginpage from './pages/Loginpage';

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
