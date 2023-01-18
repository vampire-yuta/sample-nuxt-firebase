<template>
  <section class="container">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>Login</span>
      </div>
      <form>
        <div class="from-content">
          <span>User</span>
          <el-input placeholer="" v-model="formData.id" />
        </div>
        <div class="form-content">
          <el-checkbox v-model="isCreateMode">Create Account</el-checkbox>
        </div>
        <div class="text-right">
          <el-button type="primary">{{ buttonText }}</el-button>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      isCreateMode: false,
      formData: {
        id: "",
      },
    };
  },
  computed: {
    buttonText() {
      return this.isCreateMode ? "NewCreate" : "Login";
    },
  },
};
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>
