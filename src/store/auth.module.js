import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  FEEDS
} from "./actions.type";
import {
  SET_AUTH,
  PURGE_AUTH,
  SET_ERROR
} from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("auth/signin", credentials)
        .then(({
          data
        }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({
          response
        }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("auth/signup", credentials)
        .then(({
          data
        }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({
          response
        }) => {
          context.commit(SET_ERROR, response.data);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("test/user")
        .then(({
          data
        }) => {
            data.user.accessToken = JwtService.getToken();
            context.commit(SET_AUTH, data.user);
          })
        .catch(({
          response
        }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  // [FEEDS](context) {
  //   if (JwtService.getToken()) {
  //     ApiService.setHeader();
  //     ApiService.get("test/posts")
  //       .then(function(data) {
  //           return data;
  //         })
  //       .catch(({
  //         response
  //       }) => {
  //         context.commit(SET_ERROR, response.data.errors);
  //       });
  //   }
  // }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.accessToken);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};