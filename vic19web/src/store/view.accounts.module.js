import Account from '../models/Account';
const state={
    dialogEditState:false,
    dialogDeleteState:false,
    account:new Account(),
    title:""
};
const mutations= {
    dialogEditOpen(state,data) {
        state.dialogEditState=true;
        state.account=data.account;
        state.title=data.title;
    },
    dialogEditClose(state) {
        state.dialogEditState=false;
        state.account=new Account();
        state.title="";
    },
    dialogDeleteChange(state,data) {
        state.dialogDeleteState=data.type;
        state.account=data.account;
    },
};
const actions={
    dialogEditOpen({ commit },data){
        commit('dialogEditOpen',data)
    },
    dialogEditClose({commit}){
        commit('dialogEditClose')
    },
    dialogDelete({ commit },data){
        commit('dialogDeleteChange',data)
    }
};


export const viewAccounts = {
    namespaced: true,
    state,
    actions,
    mutations
};
