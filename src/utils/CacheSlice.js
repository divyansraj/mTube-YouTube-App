import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CacheSlice = createSlice({
    name: 'cache',
    initialState : {},
    reducers: {
        cacheResults: (state ,action) => {
            return { ...state, ...action.payload };
        }        
    }
})

export const {cacheResults} =CacheSlice.actions;
export default CacheSlice.reducer;