import React, { useCallback, useEffect, useState, useRef } from 'react'
import "../vanillacss/SliderRange.css"

const SliderRange = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    const minValRef = useRef(min)
    const maxValRef = useRef(max)
    const range = useRef(null)

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100), [min, max]
    )

    useEffect(() => {
        const minPercent = getPercent(minVal)
        const maxPercent = getPercent(maxValRef.current)

        if (range.current) {
            range.current.style.left = `${minPercent}%`
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [minVal, getPercent])

    useEffect(() => {
        const minPercent = getPercent(minValRef.current)
        const maxPercent = getPercent(maxVal)

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [maxVal, getPercent])

    useEffect(() => {
        onChange({ min: minVal, max: maxVal })
    }, [minVal, maxVal, onChange])

    //Code for Slider price range with Vanilla CSS
    return (
        <>
            <hr />

            <h4 className="pricetitle">Price <span className="pricevalue">${minVal}-${maxVal}</span></h4>
            <div className="container2">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{ zIndex: minVal > max - 100 && "5" }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />

                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                    <div className="slider__left-value">{minVal}</div>
                    <div className="slider__right-value">{maxVal}</div>
                </div>
            </div>
            <hr />

        </>
    )
}

export default SliderRange
