<template>
    <div class="dashboard-container">
      <div class="sidebar">
        <SideBar />
      </div>
  
      <div class="main-content">
        <BlogList />
      </div>
    </div>
  </template>
  
  <script setup>
  import SideBar from '@/components/SideBar.vue'
  import BlogList from '@/components/BlogList.vue'
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    gap: 24px;
    padding: 30px 20px;
    background-color: #f3f4f6;
    min-height: 100vh;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  
  .sidebar {
    flex: 0 0 250px;
    max-width: 100%;
  }
  
  .main-content {
    flex: 1;
    min-width: 300px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .dashboard-container {
      flex-direction: column;
      padding: 20px;
    }
  
    .sidebar {
      width: 100%;
    }
  
    .main-content {
      width: 100%;
    }
  }
  </style>
  