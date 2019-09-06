import moment from "moment";

// filter reducer
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    lastDate: moment().endOf("month")
};

export default ( state = filterReducerDefaultState, action ) => {
    switch(action.type){
        case "TEXT_EXPENSE":
            return {
                ...state, 
                text: action.text
            }
        case "SORT_AMOUNT_FILTER":
            return{
                ...state,
                sortBy: "amount"
            }
        case "SORT_DATE_FILTER":
            return{
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE":
            return{
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return{
                ...state,
               endDate: action.endDate
            }
        default: 
            return state;
    }
};