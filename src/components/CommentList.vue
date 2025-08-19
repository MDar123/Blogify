<template>
    <ul class="comment-list">
      <!-- Render each comment here -->
      <li class="comment-item">
        <p class="author">John Doe</p>
        <p class="text">Nice article!</p>
      </li>
    </ul>
  </template>
  
  <style scoped>
  .comment-list {
    list-style: none;
    padding: 0;
  }
  .comment-item {
    background: #f3f4f6;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
  }
  .author {
    font-weight: bold;
    margin-bottom: 4px;
  }
  .text {
    margin: 0;
  }
  </style>
  