import { accountService} from '../services';
import router from '../router';
const token = JSON.parse(localStorage.getItem('token'));
const user = JSON.parse(localStorage.getItem('user'));
const state={
  status: token?{loggedIn:true}:{},
  user: user?user:{},
};
const mutations= {
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
    login({ dispatch, commit}, loginRequest) {
        commit("general/changeLoading",{type:true,title:"Iniciando Sesión"});
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
