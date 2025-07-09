<template>
    <div class="comment-box">
      <textarea placeholder="Write a comment..." class="comment-input"></textarea>
      <button class="submit-btn">Post</button>
    </div>
  </template>
  
  <style scoped>
  .comment-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .comment-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    resize: vertical;
    min-height: 80px;
  }
  .submit-btn {
    align-self: flex-end;
    padding: 8px 16px;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  </style>
  