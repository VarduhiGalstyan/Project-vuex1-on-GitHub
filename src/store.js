import { createStore } from "vuex"

const store = createStore({
    store(){
        return {
            count: 1
        }
    }
})

export default store;