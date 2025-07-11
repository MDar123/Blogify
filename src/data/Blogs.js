import { reactive } from 'vue';

export const blogs = reactive([

  {
    id: 101,
    title: 'Mastering Vue Directives',
    content: 'A deep dive into custom and built-in directives in Vue.',
    authorId: 1,
    likes: 5,
    isLiked : false,
    comments: [
      { text: 'Loved this explanation!' },
      { text: 'Very helpful, thanks!' }
    ],
    createdAt: '2025-07-01'
  },
  {
    id: 102,
    title: 'Vue 3 vs React: A Fair Comparison',
    content: 'Let’s compare Vue 3 Composition API with React Hooks.',
    authorId: 1,
    likes: 3,
    isLiked : false,
    comments: [],
    createdAt: '2025-07-02'
  },


  {
    id: 103,
    title: 'CSS Grid for Beginners',
    content: 'How to use CSS Grid Layout with real-world examples.',
    authorId: 2,
    likes: 6,
    isLiked : false,
    comments: [
      { text: 'Great article!' }
    ],
    createdAt: '2025-07-03'
  },
  {
    id: 104,
    title: 'Understanding Flexbox in 2025',
    content: 'Quick guide to mastering Flexbox layout techniques.',
    authorId: 2,
    likes: 4,
    isLiked : false,
    comments: [],
    createdAt: '2025-07-04'
  },


  {
    id: 105,
    title: 'JavaScript ES2025 Features',
    content: 'Explore what’s new in the latest version of JavaScript.',
    authorId: 3,
    likes: 7,
    isLiked : false,
    comments: [
      { text: 'Very useful content!' }
    ],
    createdAt: '2025-07-05'
  },
  {
    id: 106,
    title: 'Handling Forms in Vue 3',
    content: 'Learn form validation and v-model bindings.',
    authorId: 3,
    likes: 2,
    isLiked : false,
    comments: [],
    createdAt: '2025-07-06'
  },

  {
    id: 107,
    title: 'Deploying Vue Apps to Netlify',
    content: 'Step-by-step guide to deploying your Vue project.',
    authorId: 4,
    likes: 1,
    isLiked : false,
    comments: [],
    createdAt: '2025-07-07'
  },
  {
    id: 108,
    title: 'State Management Without Vuex',
    content: 'Using Pinia and Composition API for app-wide state.',
    authorId: 4,
    likes: 5,
    isLiked : false,
    comments: [
      { text: 'That’s exactly what I needed!' },
      { text: 'Thanks for sharing!' }
    ],
    createdAt: '2025-07-08'
  }
]);

export default function getCurrentBlog(id){
return blogs.filter( item => item.id == id)[0]
}