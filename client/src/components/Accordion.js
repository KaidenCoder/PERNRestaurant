import React, { useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi"
import SliderRange from './SliderRange';
import { AccordionSection, Wrap, Dropdown, SpaceBetweenText, LowOpacityText } from '../styledcss/Elements';

const Accordion = () => {
    const [clicked, setClicked] = useState(true)
    const toggle = index => {
        if (clicked == index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    //Selecting and Filtering meal items
    return (
        <AccordionSection>
            <SpaceBetweenText>
                <h3>FILTERS</h3>
                <LowOpacityText>Reset all</LowOpacityText>
            </SpaceBetweenText>
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
    )
}

export default Accordion
