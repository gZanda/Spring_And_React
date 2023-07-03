import './App.css';
// Enable bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
// Enable Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';

function App() {

    // ROUTER - Engloba tudo
    // Routes - Tag que inidica Variação de Renderização
    // Route - Opção de Renderização
    // Exact Path = URL de acesso
    // Element = Componente a ser Renderizado
    return (
        <div className="App">

            <Router>

                <Navbar />

                    <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/addUser" element={<AddUser />} />

                    </Routes>

            </Router>

        </div>
    )
}

export default App;
