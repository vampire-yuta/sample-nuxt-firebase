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
          <el-button type="primary" @click="handleClickSubmit">{{
            buttonText
          }}</el-button>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cookies from "universal-cookie";

export default {
  asyncData({ redirect, store }) {
    if (store.getters["user"]) {
      redirect("/posts/");
    }
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
    ...mapGetters(["user"]),
  },
  methods: {
    async handleClickSubmit() {
      const cookies = new Cookies();
      if (this.isCreateMode) {
        try {
          await this.register({ ...this.formData });
          this.$notify({
            type: "success",
            title: "Crete Account Success",
            message: `Registerd ${this.formData.id}`,
            position: "buttom-right",
            duration: 1000,
          });
          cookies.set("user", JSON.stringify(this.user));
          this.$router.push("/posts/");
        } catch (error) {
          console.log(error);
          this.$notify.error({
            title: "Create Account Failed",
            message: "Already registerd or Injustice UserID.",
            position: "buttom-right",
            duration: 1000,
          });
        }
      } else {
        try {
          await this.login({ ...this.formData });
          console.log("new cookie");
          this.$notify({
            type: "success",
            title: "Login Success",
            message: `logined ${this.formData.id}`,
            position: "buttom-right",
            duration: 1000,
          });
          cookies.set("user", JSON.stringify(this.user));
          this.$router.push("/posts/");
        } catch (error) {
          console.log(error);
          this.$notify.error({
            title: "Login Failed",
            message: "Injustice UserID.",
            position: "buttom-right",
            duration: 1000,
          });
        }
      }
    },
    ...mapActions(["login", "register"]),
  },
};
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>
