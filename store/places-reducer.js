import { ADD_PLACE } from "./places-actions";
import Place from "../models/place";

const initialState = {
    Places:[]
}

export default (state=initialState,action) =>{
    switch(action.type){
        case ADD_PLACE:
            const newPlace = new Place(new Date().toString(),action.placeData.title,action.placeData.image);
            return {
                places:state.Places.concat(newPlace)
            };
            default:
                return state;
    }
}