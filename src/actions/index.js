export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 1,
    SHOW_COMPLETED: 0
}