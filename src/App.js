import './App.css';
import Header from './components/header/Header.tsx'
import Footer from './components/footer/Footer.tsx'
import List from './components/list/List.tsx'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <List/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
