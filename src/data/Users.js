import { reactive } from "vue"


export const users = reactive([
  {
    id: 1,
    name: 'admin',
    email: 'admin@gmail.com',
    password: '1',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Ali Raza',
    email: 'ali@example.com',
    password: '1',
    role:"user"
  },
  {
    id: 3,
    name: 'John',
    email: 'John@example.com',
    password: '1',
    role:"user"
  },
  {
    id: 4,
    name: 'test',
    email: 'test@example.com',
    password: '1',
    role:"user"
  }
]);