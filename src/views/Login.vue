<template>
  <div class="container-login">
    <v-alert v-if="signUpSuccess" type="success">Sign Up Successful!</v-alert>
    <v-card class="login-card">
      <v-tabs v-model="tab" grow>
        <v-tab value="tab1">Login</v-tab>
        <v-tab value="tab2">Sign Up</v-tab>
      </v-tabs>
      <v-window class="tabs" v-model="tab">
        <v-window-item class="tab1" value="tab1">
          <v-form v-model="loginForm.valid">
            <div>
              <v-text-field
                variant="outlined"
                label="Email"
                v-model="loginForm.email"
                :rules="loginForm.emailRules"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                variant="outlined"
                label="Password"
                type="password"
                v-model="loginForm.password"
                :rules="loginForm.passwordRules"
              ></v-text-field>
            </div>
            <div class="login-btn" @click="login()">
              <v-btn color="primary" height="3rem" width="7rem">Login</v-btn>
            </div>
          </v-form>
        </v-window-item>

        <v-window-item class="tab2" value="tab2">
          <v-form v-model="signUpForm.valid">
            <div>
              <v-text-field
                variant="outlined"
                label="Email"
                v-model="signUpForm.email"
                :rules="signUpForm.emailRules"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                variant="outlined"
                label="Password"
                type="password"
                v-model="signUpForm.password"
                :rules="signUpForm.passwordRules"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                variant="outlined"
                label="Confirm Password"
                type="password"
                v-model="signUpForm.confirmPassword"
                :rules="signUpForm.passwordRules"
              ></v-text-field>
            </div>
            <div class="login-btn">
              <div v-if="signUpFailed">Sing Up Failed</div>
              <v-btn
                color="primary"
                height="3rem"
                width="7rem"
                @click="signUp()"
                >Sign Up</v-btn
              >
            </div>
          </v-form>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const tab = ref("tab1");
const loginFailed = ref(false);
const signUpFailed = ref(false);
const signUpSuccess = ref(false);

const loginForm = reactive({
  valid: false,
  email: "",
  emailRules: [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
  ],
  password: "",
  passwordRules: [
    (v: string) => !!v || "Password is required",
    (v: string) =>
      v.length > 8 || "Password needs to be longer than 8 characters",
  ],
});
const signUpForm = reactive({
  valid: false,
  email: "",
  emailRules: [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
  ],
  password: "",
  confirmPassword: "",
  passwordRules: [
    (v: string) => !!v || "Password is required",
    (v: string) =>
      v.length > 8 || "Password needs to be longer than 8 characters",
  ],
});
async function signUp() {
  const { email, password, confirmPassword } = signUpForm;

  try {
    await authStore.signUp({
      email,
      password,
      confirmPassword,
    });
    signUpFailed.value = false;
    signUpSuccess.value = true;
    tab.value = "tab1";
  } catch (error) {
    signUpFailed.value = true;
  }
}

/*

import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();



async function login() {
  try {
    await authStore.login({
      email: loginForm.email,
      password: loginForm.password,
    });
    loginFailed.value = false;
    router.push("/calendar");
  } catch (error) {
    loginFailed.value = true;
  }
}


 */
</script>
<style scoped lang="scss">
.container-login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--v-theme-primarybg)) !important;
}
.login-card {
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 30%;
}
.tab1,
.tab2 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
}
.tabs {
  height: 100%;
  width: 100%;
}
.login-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
