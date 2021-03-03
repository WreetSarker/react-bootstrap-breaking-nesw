import { Button, Card } from 'react-bootstrap'
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  const names = ['Wreet', 'Mridul', 'Pritam'];
  return (
    <div >
      <Header></Header>
      <Button variant="secondary">Secondary</Button>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
