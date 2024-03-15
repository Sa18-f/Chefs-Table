import { useEffect, useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className='text-6xl font-bold'>Our Recipes</h1>
                <p className="my-6 text-lg">Savor our grilled salmon with citrus glaze, served on jasmine rice with seasonal vegetables. <br /> A culinary delight awaits at our restaurant.</p>
            </div>
            {/* container */}
            <div className="grid grid-cols-5 gap-5 my-12">
                {/* card container */}
                <div className="col-span-3">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
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
                            {recipes.map((recipe, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recipes;