import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: "",
    token: null,
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, data) {
      state.status = "success";
      state.token = data.personId;
      state.user = data;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = null;
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8080/admin/login",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            // console.log(resp);
            const token = resp.data.personId;
            localStorage.setItem("token", token);
            // Add the following line:
            // axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", resp.data);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        resolve();
      });
    },
    tryAutoLogin({ commit }) {
      return new Promise((resolve) => {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        axios.get("/admin/login/" + token).then((resp) => {
          // console.log(resp);
          const user = resp.data;
          // Add the following line:
          // axios.defaults.headers.common["Authorization"] = token;
          commit("auth_success", user);
          resolve(resp);
        });
      });
    },
  },
  // modules: {
  // }
  getters: {
    isLoggedIn: (state) => {
      if (state.token || localStorage.getItem("token")) return true;
      else return false;
    },
    authStatus: (state) => state.status,
    getUser: (state) => state.user,
  }
})
