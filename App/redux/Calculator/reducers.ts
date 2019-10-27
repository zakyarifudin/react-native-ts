import { calculatorState, calculatorTypes } from "./types"

const initState : calculatorState = {
    count: 0
}

export default function taxesReducer(state = initState, action: any) : calculatorState {
    switch(action.type){
        case calculatorTypes.INCREMENT: {
            return {
                ...state,
                count : state.count + 1
            }
        }
        case calculatorTypes.DECREMENT: {
            return {
                ...state,
                count : state.count - 1
            }
        }
        case calculatorTypes.RESET: {
            return {
                ...state,
                count : 0
            }
        }

        default: {
            return state
        }
    }
}