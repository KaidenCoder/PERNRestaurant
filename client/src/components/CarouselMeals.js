import React, { useState, useEffect } from 'react'
import Carousel from "react-elastic-carousel";
import styled from 'styled-components';

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

    const SpaceText2 = styled.span`
    display: flex;
    justify-content: space-between;
`

    const ReorderText = styled.span`
    color: red;
`
    const LowOpacityText = styled.span`
        opacity: 0.5;
    `

    const CarouselBody = styled.span`
        background: rgba(255, 245, 241);
        padding: 2em;
    `

    return (
        <Carousel breakPoints={breakPoints}>

            {filteredMeals.map((v, i) => (
                <div key={v.meal_id} className="col-sm mb-2 mt-2">
                    < div className="card" style={{ width: "18rem" }
                    }>
                        <img src={v.img} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">{v.description[0].toUpperCase() + v.description.slice(1)}</h5>
                            <SpaceText2><LowOpacityText>{v.occasion}</LowOpacityText><ReorderText>RE-ORDER</ReorderText></SpaceText2>
                        </div>
                    </div>
                </div>

            ))}

        </Carousel>
    )
}

export default CarouselMeals
