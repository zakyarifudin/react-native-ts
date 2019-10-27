import { calculatorTypes } from "./types"

const actions = {

    incrementCount: () => ({
        type: calculatorTypes.INCREMENT
    }),

    decrementCount: () => ({
        type: calculatorTypes.DECREMENT
    }),

    resetCount: () => ({
        type: calculatorTypes.RESET
    })

}

export default actions
