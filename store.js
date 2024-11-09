// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundColor: '#ffffff',
    count: 0,
};

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeColor: (state) => {
            state.backgroundColor = randomColor();
        },
        increment: (state) => {
            state.count += 1;
        },
    },
});

const store = configureStore({
    reducer: appSlice.reducer,
});

export const { changeColor, increment } = appSlice.actions;
export default store;
