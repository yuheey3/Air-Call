import './App.css';
import './styles/body.css';
import './styles/header.css';
import './styles/footer.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <Footer/>
    </div>
  );
};
export default App;
