<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" style="pointer-events: none">
      Nuxt Diary app
    </el-menu-item>
    <el-menu-item index="2" :route="{ path: '/posts' }">
      Post List
    </el-menu-item>

    <el-menu-item
      index="4"
      style="float: right"
      :route="{ path: `/users/${user.id}` }"
      v-if="user"
    >
      <span>{{ user.id }}</span>
    </el-menu-item>
    <el-menu-item index="4" style="float: right" :route="{ path: '/' }" v-else>
      <span>Login</span>
    </el-menu-item>
    <el-menu-item
      index="5"
      style="float: right"
      :route="{ path: '/posts/new' }"
    >
      New Post
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
