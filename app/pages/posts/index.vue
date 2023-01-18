<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>New Posts</span>
      </div>
      <el-table :data="showPosts" style="width: 100%" class="table">
        <el-table-column prop="title" label="Title"> </el-table-column>
        <el-table-column prop="user.id" label="Poster" width="180">
        </el-table-column>
        <el-table-column prop="create_at" label="PostDate" width="240">
        </el-table-column>
      </el-table>
    </el-card>
  </section>
</template>

<script>
export default {
  computed: {
    showPosts() {
      return [
        {
          id: "001",
          title: "How to development Nuxt.js Application",
          body: "Lorem ipsum dolor sit amet, consectetru adipiss....",
          create_at: "2018/11/11 12:00:00",
          user: {
            id: "yuta",
          },
        },
        {
          id: "002",
          title: "Deployment Nuxt.js Application to Heroku",
          body: "Lorem ipsum dolor sit amet, consectetru adipiss....",
          create_at: "2022/11/11 12:00:00",
          user: {
            id: "yuta",
          },
        },
      ];
    },
  },
};
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>
