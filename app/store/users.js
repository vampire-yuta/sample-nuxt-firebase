export const state = () => ({
  users: [],
});

export const getters = {
  users: (state) => state.users,
};

export const mutations = {
  addUser(state, { user }) {
    state.users.push(user);
  },
  addUserPost(state, { user, post }) {
    state.userPosts[user.id].push(post);
  },
  clearUserPosts(state, { user }) {
    state.userPosts[user.id] = [];
  },
};

export const actions = {
  async fetchUser({ commit }, { id }) {
    console.log("fetchUser")
    console.log(id)
    const user = await this.$axios.$get(`/users/${id}.json`);
    console.log(user)
    commit("addUser", { user });
  },
};
