import React, { useState } from 'react'
import { IconContext } from "react-icons";
import styled from 'styled-components';
import { FiPlus, FiMinus } from "react-icons/fi"
import SliderRange from './SliderRange';

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    padding: 1em;
`
const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
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

const Accordion = () => {

    const [clicked, setClicked] = useState(true)
    const [clicked2, setClicked2] = useState(true)

    const toggle = index => {
        if (clicked == index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    const toggle2 = index => {
        if (clicked2 == index) {
            return setClicked2(null)
        }
        setClicked2(index)
    }

    return (
        <>

            <AccordionSection>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>FILTERS</h3>
                    <span style={{ opacity: "0.5" }}>Reset all</span>
                </div>
                <hr />
                <Wrap onClick={() => toggle(1)}>
                    <h4>Format</h4>
                    <span>{clicked === 1 ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked == 1 ? (
                    <Dropdown>
                        <label className="m-2"> <input type="checkbox" /> Buffet</label>
                        <label className="m-2"> <input type="checkbox" /> Mini Buffet</label>
                        <label className="m-2"> <input type="checkbox" /> Lunch Box</label>
                        <label className="m-2"> <input type="checkbox" /> Snack Box</label>
                        <label className="m-2"> <input type="checkbox" /> Live Counter</label>
                        <label className="m-2"> <input type="checkbox" /> Food Trucks</label>
                        <label className="m-2"> <input type="checkbox" /> Pop-Up</label>
                    </Dropdown>
                ) : null}

                <SliderRange min={0}
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />

                <Wrap onClick={() => toggle(2)}>
                    <h4>Occasion</h4>
                    <span>{clicked === 2 ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked == 2 ? (
                    <Dropdown>
                        <label className="m-2"> <input type="checkbox" /> Birthday Celebration</label>
                        <label className="m-2"> <input type="checkbox" /> Baby Shower</label>
                        <label className="m-2"> <input type="checkbox" /> House Warming</label>
                        <label className="m-2"> <input type="checkbox" /> House Party</label>
                        <label className="m-2"> <input type="checkbox" /> Society Event</label>
                    </Dropdown>
                ) : null}
            </AccordionSection>

        </>
    )
}

export default Accordion
