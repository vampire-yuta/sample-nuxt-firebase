<template>
  <div>
    <el-row v-if="user">
      <el-col :span="6">
        <el-card class="text-center" style="margin-right: 16px">
          <div>
            <img
              src="https://placehold.it/150x150"
              style="width: 100%; margin-bottom: 16px; border-radius: 2px"
              alt=""
            />
          </div>
          <h2>
            <b>{{ user.id }}</b>
          </h2>
        </el-card>
      </el-col>
    </el-row>
    <el-col :span="18">
      <el-card>
        <div slot="header" class="clearfix">
          <span>{{ user.id }}'s posts</span>
        </div>
        <el-table :data="userPosts" style="width: 100%" class="table">
          <el-table-column prop="title" label="title"></el-table-column>
          <el-table-column
            prop="created_at"
            label="post_date"
            width="160"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import moment from "~/plugins/moment";
import { mapGetters } from "vuex";

export default {
  async asyncData({ store, route, error }) {
    console.log("---");
    console.log(store);
    console.log(route);
    console.log(route.params.id);
    console.log("---");
    const { id } = route.params;
    try {
      await store.dispatch("users/fetchUser", { id });
    } catch (e) {
      console.log("-----errror------");
      console.log(e);
      error({ statusCode: 404 });
    }
  },
  computed: {
    userPosts() {
      return Object.entries(this.user.posts).map(([id, post]) => {
        post.created_at = moment(post.created_at).format("YYYY/MM/DD HH:mm:ss");
        return { id, ...post };
      });
    },
    user() {
      const user = this.users.find((u) => u.id === this.$route.params.id);
      if (!user) return null;
      return Object.assign({ posts: [] }, user);
    },
    ...mapGetters("users", ["users"]),
  },
};
</script>
