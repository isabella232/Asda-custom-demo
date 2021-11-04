const initState = {
    guidedNavigation: null
};

const getGuidedNav = (state = initState, action) => {
    switch (action.type) {
        case 'GUIDEDNAVIGATION':
            return {
                ...state,
                guidedNavigation: action.payload
            };
        default:
            return { ...state };
    }
};

export default getGuidedNav;
