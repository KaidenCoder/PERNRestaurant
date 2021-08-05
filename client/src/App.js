import React, { Fragment } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import CarouselMeals from './components/CarouselMeals';
import DisplayMeals from './components/DisplayMeals';
import SliderRange from './components/SliderRange';


function App() {
  return (
    <Fragment>

      <CarouselMeals />
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <Accordion />
        </div>

        <DisplayMeals />

      </div>

    </Fragment>
  );
}

export default App;
