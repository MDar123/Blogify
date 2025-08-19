<template>
    <aside class="filter-sidebar">
      <h2>Filter & Sort Blogs</h2>
  
      <!-- Sort Section -->
      <div class="section">
        <h3>Sort By</h3>
        <div class="radio-group">
          <label><input type="radio" name="sort" value="newest" /> Newest First</label>
          <label><input type="radio" name="sort" value="oldest" /> Oldest First</label>
          <label><input type="radio" name="sort" value="a-z" /> A → Z</label>
          <label><input type="radio" name="sort" value="z-a" /> Z → A</label>
        </div>
      </div>
  
      <!-- Filter Section -->
      <div class="section">
        <h3>Filter by Author</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" name="author" value="ali" /> Ali Raza</label>
          <label><input type="checkbox" name="author" value="admin" /> Admin</label>
          <label><input type="checkbox" name="author" value="guest" /> Guest Writer</label>
        </div>
      </div>
  
      <button class="apply-btn">Apply Filters</button>
    </aside>
  </template>
  
  <style scoped>
  .filter-sidebar {
    width: 250px;
    padding: 20px;
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    font-family: 'Segoe UI', sans-serif;
  }
  
  h2 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #1f2937;
  }
  
  .section {
    margin-bottom: 24px;
  }
  
  .section h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #374151;
  }
  
  .radio-group,
  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-size: 0.95rem;
    color: #4b5563;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  input[type="radio"],
  input[type="checkbox"] {
    accent-color: #4f46e5;
    cursor: pointer;
  }
  
  .apply-btn {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .apply-btn:hover {
    background: #4338ca;
  }
  </style>
  