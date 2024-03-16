import { BsStopwatch } from "react-icons/bs";
import { SlFire } from "react-icons/sl";
import PropTypes from 'prop-types';

const SingleRecipe = ({ recipe, handleCookTable }) => {
    console.log(handleCookTable);
    const ingredientsCount = recipe.ingredients.length;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe.
                    recipe_image} alt="Shoes" className="rounded-xl w-96 h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <p className="text-[#878787]">{recipe.short_description}</p>
                <div className="border-y-2 border-black py-4">
                    <p>Ingredients: {ingredientsCount}</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-[#878787] my-2"> {ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-around">
                    <p className="flex gap-2 items-center"><span className="text-xl"><BsStopwatch /></span> {recipe.preparing_time}</p>
                    <p className="flex gap-2 items-center"><span className="text-xl"><SlFire /></span>{recipe.calories}</p>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleCookTable(recipe)} className="rounded-[30px] bg-green-400 py-3 px-5 mt-4 text-lg">Want to cook</button>
                </div>
            </div>




            {/* <div className="text-center">
                <h1 className='text-6xl font-bold'>Our Recipes</h1>
                <p className="my-6 text-lg">Savor our grilled salmon with citrus glaze, served on jasmine rice with seasonal vegetables. <br /> A culinary delight awaits at our restaurant.</p>
            </div> */}


            {/* container */}

            {/* <div className="grid grid-cols-5 gap-5 my-12"> */}


            {/* list container */}


            {/* <div className="card bg-base-100 shadow-xl col-span-2">
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
                            {recipes.map((recipe, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
            {/* </div> */}
        </div>
    );
};
SingleRecipe.propTypes ={
    recipe: PropTypes.object.isRequired,
    handleCookTable: PropTypes.func.isRequired
}
export default SingleRecipe;