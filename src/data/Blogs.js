import { reactive } from "vue"

export const blogs = reactive([
  {
    id: 1,
    title: 'Vue 3 Composition API Guide',
    content: 'Learn how to use Vue 3 with the Composition API in real apps.',
    authorId: 1,
    likes: 5,
    comments: [
      { id: 1, text: 'Great post!', userId: 2 },
      { id: 2, text: 'Very helpful, thanks!', userId: 2 }
    ],
    createdAt: '2025-07-08'
  },
  {
    id: 2,
    title: 'Getting Started with Vue Router',
    content: 'This blog explains how to setup routing in Vue apps.',
    authorId: 2,
    likes: 3,
    comments: [],
    createdAt: '2025-07-09'
  }
])
