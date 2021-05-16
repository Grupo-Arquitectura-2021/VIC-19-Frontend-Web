import Hospital from '../models/Hospital';
import {hospitalService} from '../services/'
const state={
    dialogEditState:false,
    dialogDeleteState:false,
    account:new Hospital(),
    title:"",
    totalHospitals:0,
    status:{},
    hospitals:[]
};
const mutations= {
    dialogEditOpen(state,data) {
        state.dialogEditState=true;
        state.account=data.account;
        state.title=data.title;
    },
    dialogEditClose(state) {
        state.dialogEditState=false;
        state.account=new Hospital();
        state.title="";
    },
    dialogDeleteChange(state,data) {
        state.dialogDeleteState=data.type;
        state.account=data.account;
    },
    getHospitalsOk(state,data){
        state.status={gotHospitals:true}
        state.hospitals=data.hospitals
        state.totalHospitals=data.totalHospitals
    },
    getHospitalsFailed(state){
        state.status={}

    }

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
    },
    getHospitals({dispatch,commit},data){
        commit("general/changeLoading",{type:true,label:"Obteniendo Hospitales"},  { root: true });
        hospitalService.getHospitals(data.n,data.i)
        .then(
            data => {
                commit('getHospitalsOk', {hospitals:data.hospitals,totalHospitals:data.total});
                commit("general/changeLoading",{type:false,label:""},  { root: true });
            },
            error => {
                commit('getHospitalsFailed');
                dispatch('alert/error', error, { root: true });
            }
        );
    }
};


export const viewHospitals = {
    namespaced: true,
    state,
    actions,
    mutations
};
