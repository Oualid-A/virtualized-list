import './App.css';
import Virtualized from './components/Virtualized';

function App() {

    const items = Array.from({ length: 2000000 }, (_, index) => ({
      id: index,
      content: `Item ${index}`,
    }));
  
    return <Virtualized items={items} itemHeight={50} containerHeight={500} />;
  
}

export default App;
