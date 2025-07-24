import { Children } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Body>
        <Children />
      </Body>

      <Footer />
    </div>
  );
}

export default App;
