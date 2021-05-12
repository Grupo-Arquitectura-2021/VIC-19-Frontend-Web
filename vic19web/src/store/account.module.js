import { accountService} from '../services';
import router from '../router';
const token = JSON.parse(localStorage.getItem('token'));
const user = JSON.parse(localStorage.getItem('user'));
const state={
  status: token?{loggedIn:true}:{},
  user: user?user:{},
};
const mutations= {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
};
const actions={
    login({ dispatch, commit }, loginRequest) {
        commit('loginRequest', {email:loginRequest.email});
        accountService.login(loginRequest)
            .then(
                user => {

                    commit('loginSuccess', user);
                    router.push('/home');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
};


export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};
