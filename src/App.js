
import { useState } from 'react';
import './App.css';
import NavBar from './componants/NavBar';

function App() {
  const fetchQuran = ({ surah, start, end }) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8be0ded608msha1e3eed26306a0ep1db7bajsnddda6e14468f',
        'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
      }
    };

    fetch(`https://al-quran1.p.rapidapi.com/${surah}/${start}-${end}`, options)
      .then(response => response.json())
      .then(response => setAyats(response))
      .catch(err => console.error(err));
  }

  const [verse, setVerse] = useState({ surah: "", start: "1", end: "1" });
  const [ayats, setAyats] = useState([]);
  const [loading, setLoading] = useState(false);



  //handle input
  const onChange = (e) => {
    setVerse(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    fetchQuran(verse)
  }

  return (
    <div className="App">
      <NavBar />
      <form onSubmit={submitHandler}>
        <input type={'number'} onChange={onChange} name="surah" placeholder='Surah number' value={verse.surah} />
        <input type={'number'} onChange={onChange} name="start" placeholder='Surah start' value={verse.start} />
        <input type={'number'} onChange={onChange} name="end" placeholder='Surah end' value={verse.end} />

        <button type='submit'>Search</button>
        <div className='mt-4 font-quran text-lg'>
          {
            Object.entries(ayats).map(ayah => <div key={ayah[1].id}>{ayah[1].content}</div>
            )
          }
        </div>
      </form>
    </div>
  );
}

export default App;
