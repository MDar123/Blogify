<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2 class="form-title">Sign Up</h2>

      <form class="auth-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="userData.name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="userData.email"
            placeholder="Enter your email"
            required
          />
          <p class="error-msg" v-if="checkEmail">Email already registered.Please Login</p>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="userData.password"
            placeholder="Create a password"
            required
          />
        </div>

        <button class="submit-btn" type="submit">Create Account</button>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import { users } from "@/data/Users";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const userData = reactive({
  id: Date.now(),
  name: "",
  email: "",
  password: "",
});


const checkEmail = ref(false);
const router = useRouter();



function handleSubmit() {
  if (users.some((user) => user.email == userData.email)) {
    checkEmail.value = true;
  } else {

    users.push(userData);
    localStorage.setItem("userId",String(userData.id))
    router.push('/login')
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 20px;
}

.auth-box {
  background-color: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  color: #1f2937;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-size: 0.95rem;
  color: #374151;
}

input {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f9fafb;
  transition: border-color 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #4f46e5;
  background-color: #fff;
}

.note-text {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: -10px;
}

.submit-btn {
  padding: 12px;
  background-color: #4f46e5;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #4338ca;
}

.error-msg {
  color: red;
  font-weight: bold;
}
</style>
