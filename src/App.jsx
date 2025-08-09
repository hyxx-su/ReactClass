import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function Children()
{
  return <h1>자식 컴포넌트 입니다.</h1>
}

function App() {
  return (
  <div className="">
    <Header />
    <Body>
      <Children />
    </Body>

    <Footer />

  </div>
  );
}

export default App;