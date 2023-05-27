import {reducer, StateType, TOGGLE_CONSTANT} from "./UnControlledAccordion";

test ('change value', () => {

        const state: StateType = {
            collapsed: false
        }


       const newState =  reducer(state, {type : TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(true)


    })