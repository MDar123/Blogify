import { reactive } from "vue"


export const users = reactive([
  {
    id: 1,
    name: 'admin',
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Ali Raza',
    email: 'ali@example.com',
    password: 'ali123',
  }
]);