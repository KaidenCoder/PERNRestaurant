import React, { useState, useEffect } from 'react'
import Carousel from "react-elastic-carousel";
import { SpaceBetweenText, ReorderText, LowOpacityText, RecentOrdertext } from '../styledcss/Elements';

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

    // Filtering items whose meal ratings are more than 4.5
    const filteredMeals = meals.filter(i => i.rating > 4.5)

    // // Recently order slideshow meal items
    return (
        <>
            <RecentOrdertext>Most Frequently Ordered</RecentOrdertext>
            <Carousel breakPoints={breakPoints}>
                {filteredMeals.map((v, i) => (
                    <div key={v.meal_id} className="col-sm mb-2 mt-2">
                        < div className="card" style={{ width: "18rem" }
                        }>
                            <img src={v.img} className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">{v.description[0].toUpperCase() + v.description.slice(1)}</h5>
                                <SpaceBetweenText><LowOpacityText>{v.occasion}</LowOpacityText><ReorderText>RE-ORDER</ReorderText></SpaceBetweenText>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    )
}

export default CarouselMeals
