import Vue from 'vue';
import Vuex from 'vuex';
import {getUserFromCookie, getAuthFromCookie, saveAuthToCookie, saveUserToCookie} from '@/utils/cookies'
import {loginUser} from '@/api/auth'
import {createPost} from "@/api/posts";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters: {
        isLogin(state) {
            return state.username !== ''
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        clearToken(state) {
            state.token = '';
        },
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        async LOGIN({commit}, userData) {
            const {data} = await loginUser(userData);
            commit('setToken', data.token);
            commit('setUsername', data.user.username);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);
            return data;
        },
        async POST({commit}, postData) {
            const {data} = await createPost(postData);
            commit('title', data.posts.title)
            commit('contents', data.posts.contents)

        }
    }
})