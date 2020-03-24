import React, { useReducer } from 'react';
import { Button, Text, View } from 'react-native';
import AdjustColorCmp from "../components/AdjustColorCmp";

const ColorScreen = () => {

    /* Constants */
    const COLOR_CHNG_AMT = 15;

    /* reducer state declaration */
    const [ { red, green, blue }, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <AdjustColorCmp
                colorName='Red'
                onIncrease={() => dispatch({ colorToChange: 'red', amountToChange: COLOR_CHNG_AMT})}
                onDecrease={() => dispatch({ colorToChange: 'red', amountToChange: -1 * COLOR_CHNG_AMT})}
            />
            <AdjustColorCmp
                colorName='Green'
                onIncrease={() => dispatch({ colorToChange: 'green', amountToChange: COLOR_CHNG_AMT})}
                onDecrease={() => dispatch({ colorToChange: 'green', amountToChange: -1 * COLOR_CHNG_AMT})}
            />
            <AdjustColorCmp
                colorName='Blue'
                onIncrease={() => dispatch({ colorToChange: 'blue', amountToChange: COLOR_CHNG_AMT})}
                onDecrease={() => dispatch({ colorToChange: 'blue', amountToChange: -1 * COLOR_CHNG_AMT})}
            />
            <View style={{
                    width: 100, 
                    height: 100,
                    alignItems: 'center',
                    marginBottom: 10,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
            <Button title='Reset' onPress={ () => dispatch({ colorToChange: 'reset' }) }/>
        </View>
    )
};

/* Reducer function */
const reducer = (state, action) => {
    
    let result = 0;

    switch (action.colorToChange) {
        case 'red':
            result = state.red + action.amountToChange;
            return (result > 255 || result < 0) ? state : { ...state, red: result };
        case 'green':
            result = state.green + action.amountToChange;
            return (result > 255 || result < 0) ? state : { ...state, green: result };
        case 'blue':
            result = state.blue + action.amountToChange;
            return (result > 255 || result < 0) ? state : { ...state, blue: result };
        case 'reset':
            return { red: 0, green: 0, blue: 0 };
        default:
            console.log('error: action.colorToChange must be red, green, or blue');
            return state;
    }
};

export default ColorScreen;