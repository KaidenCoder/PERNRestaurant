import styled from "styled-components";

//App.js
const DisplayText = styled.div`
        display: flex;
        flex-direction: row;
        padding: 2em; 
        @media only screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
        }
    `
const FilterText = styled.div`
        width: 30%;
        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    `

//Accordion.js
const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    padding: 1em;
`
const Wrap = styled.div`
    background: rgba(243,243,243,0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    width: 100%;
    text-align:center;
`

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:1em;
    width: 100%;
`
const SpaceBetweenText = styled.div`
    display: flex;
    justify-content: space-between;
`

const LowOpacityText = styled.span`
opacity: 0.5;
`

// CarouselMeals.js
const ReorderText = styled.span`
        color: red;
`
// DisplayMeals.js


const Display = styled.div`
    display: flex;
    flex-direction: column;
`

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

const SpaceBetweenTextPadding = styled.span`
        display: flex;
        justify-content: space-between;
        padding: 2em; 
    `


const SortBy = styled.span`
        padding: 0.5em;
        @media (max-width: 1000px){
           display: none;
        }
    `
const ButtonText = styled.button`
        background: rgba(243, 243, 243);
        opacity: 0.8;
        padding: 0.5em;
        margin: 0.2em;
        border: none;
    `

const ResultText = styled.h3`
    padding: 0.55em 0 0 0.55em;
    `

const MealItem = styled.div` 
        @media only screen and (max-width: 800px) {
            margin-left: auto;
            margin-right: auto;
        }
    `



export {
    DisplayText, FilterText,
    AccordionSection, Wrap, Dropdown, SpaceBetweenText, LowOpacityText,
    ReorderText,
    Display, Star, RatingNumber, Price, SpaceBetweenTextPadding, SortBy, ButtonText, ResultText, MealItem
}