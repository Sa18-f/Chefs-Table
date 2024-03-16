import './App.css'
import Header from './Components/Header/Header';
import { useEffect, useState } from "react";
import SingleRecipe from './Components/Main/SingleRecipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);
  const handleCookTable = (r) => {
    const isExist = cart.find((recipe) => recipe.id == r.id);
    if (!isExist) {
      setCart([...cart, r]);
    }
    else {
      toast('This recipe is already exist');
    }
  }
  return (
    <>
      <section className='mx-auto max-w-[1440px]'>
        <Header></Header>
      </section>
      <section className='mx-auto max-w-[1440px]'>
        <div className="text-center">
          <h1 className='text-6xl font-bold'>Our Recipes</h1>
          <p className="my-6 text-lg">Savor our grilled salmon with citrus glaze, served on jasmine rice with seasonal vegetables. <br /> A culinary delight awaits at our restaurant.</p>
        </div>
        <div className="grid grid-cols-5 gap-5 my-12">
          {/* card container */}
          <div className="col-span-3 grid grid-cols-2 gap-8">
            {
              recipes.map((recipe, index) => <SingleRecipe key={index} recipe={recipe} handleCookTable={handleCookTable}></SingleRecipe>)
            }
          </div>
          {/* list container */}
          <div className="card bg-base-100 shadow-xl col-span-2">
            <h3 className="text-3xl font-semibold text-center border-b-2 border-black py-3">Want to cook:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item, index) => (
                    <tr key={index}>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default App;
