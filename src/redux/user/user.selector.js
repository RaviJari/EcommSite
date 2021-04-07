import {createSelector} from 'reselect';

export const SelectUser = state => state.user;

export const SelectCurrentUser = createSelector(
    [SelectUser],
    (user) => user.currentUser
)