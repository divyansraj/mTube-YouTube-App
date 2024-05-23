import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: 'menu',
    initialState : {
        isMenuOpen : true, 
    },
    reducers:{
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        openMenu: (state) => {
            state.isMenuOpen=true;
        },
        closeMenu : (state) => {
            state.isMenuOpen= false;
        }
    },
});
export const {toggleMenu,closeMenu,openMenu} = MenuSlice.actions;
export default MenuSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const slice= createSlice({
//     name: "menu",
//     initialState: {
//         isopen : true,
//     },
//     reducers: {
//         toggelmenubar : (state) => {
//             state.isopen = !state.isopen;
//         },
//     },
// })
// export default slice.reducer;
// export const {toggelmenubar} = slice.actions;