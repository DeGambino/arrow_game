import { createSlice } from "@reduxjs/toolkit"

import { ARR_ARROW_KEYS } from "../constants"
import type { IPlaygroundState } from "./types"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],

}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },

    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_KEYS.length)

      state.steps.push({
        currentValue: ARR_ARROW_KEYS[randomKeys],
      })
    },
  },
})

export const { setCurrentStep, setSteps } = playgroundSlice.actions
export default playgroundSlice.reducer
