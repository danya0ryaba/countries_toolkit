import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    region: '',
}

const controlsSlice = createSlice({
    name: '@@controls',
    initialState,
    reducers: {
        setRegion: (state, action) => {
            state.region = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        clearControls: (state, action) => initialState,
    }
})

export const { setRegion, setSearch, clearControls } = controlsSlice.actions

export const controlReducer = controlsSlice.reducer

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
