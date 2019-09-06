import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = (
    {description = "", note = "", amount = 0, createdAt = 0} = {}
) => ({
    type: "ADD_EXPENSE",
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ( {id} = {} ) => ({
    type: "REMOVE_EXPENSE",
    id
});
// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
// TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
    type: "TEXT_EXPENSE",
    text
});
// SORT_AMOUNT_FILTER
const sortByAmount = () => ({
    type: "SORT_AMOUNT_FILTER"
});
// SORT_DATE_FILTER
const sortByDate = () => ({
    type: "SORT_DATE_FILTER"
});
// SET_START_DATE
const setStartDate = ( startDate ) => ({
    type: "SET_START_DATE",
    startDate
});
// SET_END_DATE
const setEndDate = ( endDate ) => ({
    type: "SET_END_DATE",
    endDate
});

// expense reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState ,action) => {
    switch(action.type){
        case "ADD_EXPENSE" :
           return [ ...state, action.expense ];
        case "REMOVE_EXPENSE" : 
            return state.filter( ( {id} ) => id!==action.id );
        case "EDIT_EXPENSE" : 
            return state.map( (expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            }); 
        default:
            return state;
    }
};

// filter reducer
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    lastDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action ) => {
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
// Get visible expenses
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes( text.toLowerCase() );

        return startDateMatch && endDateMatch && textMatch;
    }).sort( ( a, b ) => {
        if( sortBy === "date" ){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if( sortBy === "amount" ){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// create store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

// call the state
store.subscribe( () => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log( visibleExpense );
});
const expenseOne = store.dispatch( addExpense( {description: "rent", amount: 223, createdAt:1000} ));
const expenseTwo = store.dispatch( addExpense( {description: "cofee", amount: 823, createdAt:-1000} ));

// store.dispatch( removeExpense( { id: expenseOne.expense.id } ));
// store.dispatch( editExpense( expenseTwo.expense.id, { amount: 333 } ) );

// store.dispatch( setTextFilter("rent") );
// store.dispatch( setTextFilter() );

//  store.dispatch( sortByAmount() );
//  store.dispatch( sortByDate() );

// store.dispatch( setStartDate(125) );
// store.dispatch( setStartDate() );
// store.dispatch( setEndDate(455) );

const demoStore = {
    expenses : [{
        id: "sjgfgsfkjhsd",
        description: "octomber rent",
        note: "this is my final rent for this house.",
        amount: 2345,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        lastDate: undefined
    }
};
