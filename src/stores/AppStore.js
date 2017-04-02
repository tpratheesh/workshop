import { EventEmitter } from "events";
import dispatcher from "../dispatcher/AppDispatcher";

class CustomerInfoStore extends EventEmitter {
    constructor() {
        super()
        this.isLoading = true
    }

    getLoading() {
        return this.isLoading
    }

    handleActions(action) {
        switch (action.type) {

            case "SET_LOADING":
                console.log("update loading", action.isLoading)
                this.setLoading(action.isLoading)
                break;
        }
    }
}

const appStore = new AppStore
dispatcher.register(appStore.handleActions.bind(appStore))
export default appStore