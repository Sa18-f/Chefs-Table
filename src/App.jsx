import './App.css'
import Header from './Components/Header/Header';
import { useEffect, useState } from "react";
import SingleRecipe from './Components/Main/SingleRecipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);
  const handleCookTable = (r) => {
    const isExist = cart.find((recipe) => recipe.recipe_id === r.recipe_id);
    if (!isExist) {
      setCart([...cart, r]);
    }
    else {
      toast('This recipe is already exist');
    }
  }
  const handleDelete = (id) => {
    const itemToCook = cart.find(item => item.recipe_id === id);
    setCurrentlyCooking([...currentlyCooking, itemToCook]);
    const newCart = cart.filter(item => item.recipe_id !== id);
    setCart(newCart);
  }
  const calculateTotalPreparationTime = () => {
    let totalTime = 0;
    currentlyCooking.forEach(recipe => {
      const time = parseInt(recipe.preparing_time.split(" ")[0]);
      totalTime += time;
    });
    return totalTime;
  }

  const calculateTotalCalories = () => {
    let totalCalories = 0;
    currentlyCooking.forEach(recipe => {
      const calories = parseInt(recipe.calories.split(" ")[0]);
      totalCalories += calories;
    });
    return totalCalories;
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
            <h3 className="text-3xl font-medium text-center border-b-2 border-black py-3">Want to cook: 0{cart.length}</h3>
            <table>
              <thead>
                <tr className='text-xl'>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item, index) => (
                    <tr key={index} style={{ background: '#28282808' }}>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{index + 1}.</div>
                      </td>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{item.recipe_name}</div>
                      </td>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{item.preparing_time}</div>
                      </td>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{item.calories}</div>
                      </td>
                      <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                        <button onClick={() => handleDelete(item.recipe_id)} className='rounded-[30px] bg-green-400 py-2 px-5 mt-4'>Preparing</button>
                      </div>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            {/* currently cooking section */}
            <h3 className="text-3xl font-medium text-center border-b-2 border-black py-3">Currently Cooking: 0{currentlyCooking.length}</h3>
            <table>
              <thead>
                <tr className='text-xl'>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentlyCooking.map((item, index) => (
                    <tr key={index} style={{ background: '#28282808' }}>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{index + 1}.</div>
                      </td>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{item.recipe_name}</div>
                      </td>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{item.preparing_time}</div>
                      </td>
                      <td>
                        <div style={{ padding: '30px', paddingBottom: '30px' }}>{item.calories}</div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="text-end mt-2 p-2 border-t-2 border-black">
              <p className='text-lg font-medium'>Total Preparation Time = {calculateTotalPreparationTime()} minutes</p>
              <p className='text-lg font-medium my-2'>Total Calories = {calculateTotalCalories()} calories</p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default App;
