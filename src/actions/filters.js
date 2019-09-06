// TEXT_FILTER
export const setTextFilter = ( text = '' ) => ({
    type: "TEXT_EXPENSE",
    text
});
// SORT_AMOUNT_FILTER
export const sortByAmount = () => ({
    type: "SORT_AMOUNT_FILTER"
});
// SORT_DATE_FILTER
export const sortByDate = () => ({
    type: "SORT_DATE_FILTER"
});
// SET_START_DATE
export const setStartDate = ( startDate ) => ({
    type: "SET_START_DATE",
    startDate
});
// SET_END_DATE
export const setEndDate = ( endDate ) => ({
    type: "SET_END_DATE",
    endDate
});