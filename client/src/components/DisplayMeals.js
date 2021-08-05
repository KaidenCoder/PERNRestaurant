import React, { useEffect, useState } from 'react'
import { Display } from './Item'
import styled from 'styled-components';
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

    const Star = styled.span`
    background: ${props => props.primary ? "red" : props.secondary ? "green" : "blue"};
        color: white;
        padding: 0.3em 0.4em 0.4em 0.4em;
    `

    const RatingNumber = styled.span`
        padding: 0.2em 0 0 0.2em;
        font-size: 0.9em;
    `

    const Price = styled.span`
        color: #FF5349;
    `
    const LowOpacityText = styled.span`
        opacity: 0.5;
    `
    const SpaceText = styled.span`
        display: flex;
        justify-content: space-between;
    `
    return (
        <>
            <Display>

                <h3 style={{ padding: "1em 0 0 1em" }}>Results({meals.length})</h3>
                <hr />
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">5+ Ratings X</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">0 - $700 X</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Non-vegetarian X</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">0-5 kms X</a>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <li className="nav-item" style={{ listStyleType: "none" }}>
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sort by: </a>
                                </li>
                                <li className="nav-item dropdown" style={{ listStyleType: "none" }}>

                                    <p className="nav-link dropdown-toggle border" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Most Popular
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="">Highest rating</a></li>
                                        <li><a className="dropdown-item" href="">Deals</a></li>
                                    </ul>
                                </li>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">

                        {meals.map((v, i) => (
                            <div key={v.meal_id} className="col-sm mb-2 mt-2">
                                < div className="card" style={{ width: "18rem" }
                                }>
                                    <img src={v.img} className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.description[0].toUpperCase() + v.description.slice(1)}</h5>
                                        <p className="card-text"><Price>${v.price}/-</Price> <LowOpacityText>per head - 10 dishes</LowOpacityText></p>
                                        <p className="card-text"><SpaceText><span>{v.rating > 4.50 ? <Star primary><FiStar /><RatingNumber>{v.rating}</RatingNumber></Star> : v.rating > 3.90 && v.rating <= 4.50 ? <Star secondary><FiStar /><RatingNumber>{v.rating}</RatingNumber></Star> : <Star><FiStar /><RatingNumber>{v.rating}</RatingNumber></Star>} <LowOpacityText>213 ratings</LowOpacityText></span> <Price><FiHeart /></Price></SpaceText></p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </Display>

        </>
    )
}

export default DisplayMeals
