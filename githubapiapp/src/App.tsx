import { useState } from 'react'
import axios from 'axios';
import './App.css'

type Repository = {
  id: number;
  full_name: string;
  html_url: string;
};

function App() {
  const [ keyword, setKeyword ] = useState('');
  const [ repodata, setRepodata ] = useState<Repository[]>([]);

  const handleClick = () => {
    //REST API호출 로직 구현
  }


  return (
    <>
      <input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      /><br /> <br />
      <button onClick={handleClick}>Fetch</button>
    </>
  )
}

export default App
