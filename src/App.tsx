import React, {useState} from 'react';
import './App.css';
import ThreeColumns from './components/layout/ThreeColumns';
import CentralColumn from './components/CentralColumn';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

function App() {
    // Will define if the left column will be visible or not
    // LeftColumnIsOpen will change the css classname inside ThreeColumns
    const [location, setLocation] = useState('home');
    const [leftColumnIsOpen, setLeftColumnIsOpen] = useState(true);

    const locationHandler = (location: string, LeftColumnIsOpen: boolean) => {
        setLocation(location);
        setLeftColumnIsOpen(LeftColumnIsOpen);
    };

    return (
        <ThreeColumns leftColumnIsOpen={leftColumnIsOpen} left={<LeftColumn/>}
                      central={<CentralColumn location={location} leftColumnIsOpen={leftColumnIsOpen}
                                              onClickHandler={locationHandler}/>}
                      right={<RightColumn/>}></ThreeColumns>
    );
}

export default App;
