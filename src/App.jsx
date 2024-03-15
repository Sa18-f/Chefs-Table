import './App.css'
import Header from './Components/Header/Header';
import Recipes from './Components/Main/Recipes';

function App() {
  return (
    <>
    <section className='mx-auto max-w-[1440px]'>
    <Header></Header>
    </section>
    <section className='mx-auto max-w-[1440px]'>
    <Recipes></Recipes>
    </section>
    </>
  )
}

export default App;
