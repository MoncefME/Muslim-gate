import { useEffect, useState } from 'react';
import './App.css';

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
      .then(response => {
        setAyats(response);

      })
      .catch(err => console.error(err));
  }

  const [verse, setVerse] = useState({ surah: "", start: "1", end: "1" });
  const [ayats, setAyats] = useState([]);
  const [surahList, setSurahList] = useState([]);

  useEffect(
    () => {
      fetch('https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json')
        .then(response => response.json())
        .then(response => {
          //const surat = response.map(surah => {"surah":surah.titleAr);
          setSurahList(response);
        })
        .catch(errr => console.log('something went wrong fetching quran surahs'))

    }
    , []
  )

  //handle input
  const onChange = (e) => {
    setVerse(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    fetchQuran(verse)
  }

  const handleSurahChange = (e) => {
    e.preventDefault();
    setVerse(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(verse);
  }


  return (
    <div className="App">

      <form onSubmit={submitHandler} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center gap-x-5'>

        <div className=' flex justify-between text-center font-bold gap-10'>

          <input type={'number'} onChange={onChange} name="start" placeholder='Surah start' value={verse.start < 0 ? 0 : (verse.start >= verse.end ? verse.end : verse.start)}
            className='bg-red-50 text-center font-bold rounded outline-none border-cyan-800 border' />
          <input type={'number'} onChange={onChange} name="end" placeholder='Surah end' value={verse.end}
            className='bg-red-50 text-center font-bold rounded outline-none border-cyan-800 border shadow-sm' />

        </div>



        <label htmlFor="surahName" className='text-center'>Choose a Surah:</label>
        <select id='surahName' onChange={handleSurahChange} name='surah'>
          {
            surahList.map((surah, index) => <option value={index} name="surah">{surah.titleAr}</option>)
          }
        </select>

        <button type='submit' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Search</button>
      </form>


      <div className='mt-4 font-quran text-lg'>
        {
          Object.entries(ayats).map(ayah => <div key={ayah[1].id}>{ayah[1].content} ۝</div>
          )
        }
      </div>

    </div>
  );
}

export default App;
