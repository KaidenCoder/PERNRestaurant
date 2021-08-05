import React, { Fragment } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import CarouselMeals from './components/CarouselMeals';
import DisplayMeals from './components/DisplayMeals';
import styled from 'styled-components';


const App = () => {

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
  return (
    <Fragment>

      <CarouselMeals />
      {/* <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <Accordion />
        </div>

        <DisplayMeals />

      </div> */}
      <DisplayText>
        <FilterText>
          <Accordion />
        </FilterText>
        <DisplayMeals />
      </DisplayText>

    </Fragment>
  );
}

export default App;
