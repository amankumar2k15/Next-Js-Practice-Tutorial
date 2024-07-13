const { createSlice, nanoid } = require("@reduxjs/toolkit");

const userslice = createSlice({
    name: "user",
    initialState: {
        users: JSON.parse(localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")) : []
    },
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            localStorage.setItem("userData", JSON.stringify(state.users))
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((item) => item.id !== action.payload)
            localStorage.removeItem("userData")
        }
    }
})

export const { addUser, deleteUser } = userslice.actions
export default userslice.reducer;