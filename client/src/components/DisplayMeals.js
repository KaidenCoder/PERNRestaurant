import React, { useEffect, useState } from 'react'
import { Display, Star, RatingNumber, Price, SpaceBetweenTextPadding, SpaceBetweenText, LowOpacityText, SortBy, ButtonText, ResultText, MealItem } from '../styledcss/Elements';
import { FiStar, FiHeart } from "react-icons/fi"


const DisplayMeals = () => {
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

    // Display all the meals items 
    return (
        <>
            <Display>
                <ResultText>Results({meals.length})</ResultText>
                <hr />
                <SpaceBetweenTextPadding>
                    <span>
                        <ButtonText>5+ Ratings X</ButtonText>
                        <ButtonText>0 - $700 X</ButtonText>
                        <ButtonText>Non-vegetarian X</ButtonText>
                        <ButtonText>0-5 kms X</ButtonText>
                    </span>
                    <span className="mt-2">
                        <li className="dropdown" style={{ listStyleType: "none" }}>
                            <SortBy>Sort by:</SortBy>
                            <span className="mt-2 p-2 dropdown-toggle border" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Most Popular
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="">Highest rating</a></li>
                                <li><a className="dropdown-item" href="">Deals</a></li>
                            </ul>
                        </li>
                    </span>
                </SpaceBetweenTextPadding>
                <div className="container">
                    <div className="row">
                        {meals.map((v, i) => (
                            <div key={v.meal_id} className="col-sm mb-2 mt-2">
                                <MealItem>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={v.img} className="card-img-top" alt="image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{v.description[0].toUpperCase() + v.description.slice(1)}</h5>
                                            <p className="card-text">
                                                <Price>${v.price}/-</Price> <LowOpacityText>per head - 10 dishes</LowOpacityText>
                                            </p>
                                            <p className="card-text">
                                                <SpaceBetweenText>
                                                    <span>
                                                        {v.rating > 4.50 ?
                                                            <Star primary>
                                                                <FiStar /><RatingNumber>{v.rating}</RatingNumber>
                                                            </Star>
                                                            : v.rating > 3.90 && v.rating <= 4.50 ?
                                                                <Star secondary>
                                                                    <FiStar /><RatingNumber>{v.rating}</RatingNumber>
                                                                </Star> :
                                                                <Star>
                                                                    <FiStar /><RatingNumber>{v.rating}</RatingNumber>
                                                                </Star>}
                                                        <LowOpacityText>213 ratings</LowOpacityText>
                                                    </span>
                                                    <Price><FiHeart /></Price>
                                                </SpaceBetweenText>
                                            </p>
                                        </div>
                                    </div>
                                </MealItem>
                            </div>
                        ))}
                    </div>
                </div>
            </Display>

        </>
    )
}

export default DisplayMeals
