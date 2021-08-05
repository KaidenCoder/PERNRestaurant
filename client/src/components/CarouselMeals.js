import React, { useState, useEffect } from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const CarouselMeals = () => {

    const [meals, setMeals] = useState([])

    const getMeals = async () => {
        try {
            const response = await fetch("http://localhost:5000/meals")
            const data = await response.json()
            setMeals(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getMeals()
    }, [])

    const filteredMeals = meals.filter(i => i.rating > 4.5)
    console.log("filteredMeals", filteredMeals)

    return (
        <Carousel breakPoints={breakPoints}>

            {filteredMeals.map((v, i) => (
                <div key={v.meal_id} className="col-sm mb-2 mt-2">
                    < div className="card" style={{ width: "18rem" }
                    }>
                        <img src={v.img} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">{v.description}</h5>
                            <p className="card-text">${v.price}{" "}{v.rating}</p>
                        </div>
                    </div>
                </div>

            ))}

        </Carousel>
    )
}

export default CarouselMeals
