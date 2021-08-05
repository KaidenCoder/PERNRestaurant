import React, { Fragment } from 'react';
import Accordion from './components/Accordion';
import CarouselMeals from './components/CarouselMeals';
import DisplayMeals from './components/DisplayMeals';
import { DisplayText, FilterText } from './styledcss/Elements';

const App = () => {

  return (
    <Fragment>
      <CarouselMeals />
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
