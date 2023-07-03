import './App.css';
// Enable bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
// Enable Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './component/AddUser';

function App() {
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
