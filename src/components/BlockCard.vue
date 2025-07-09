<template>
    <div class="block-card">
      <h3 class="title">Blog Title</h3>
      <p class="excerpt">Short excerpt of the blog post...</p>
      <div class="meta">
        <span class="author">By Author</span>
        <span class="date">Jul 9, 2025</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .block-card {
    background: #fff;
    border-radius: 10px;
    padding: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
  }
  .block-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .excerpt {
    margin-top: 8px;
    color: #555;
  }
  .meta {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    font-size: 0.9rem;
    color: #888;
  }
  </style>
  