import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account.module';
import { general } from './general.module';
import { viewAccounts } from './view.accounts.module';
import { viewHospitals } from './view.hospitals.module';
import { viewNewsList } from './view.news.module';
import { viewShelters } from './view.shelters.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        account,
        viewAccounts,
        viewNewsList,
        viewHospitals,
        viewShelters,
        general
    }
});