<script setup>
import SideBar from '@/components/SideBar.vue'
import BlogList from '@/components/BlogList.vue'
import SearchBar from '@/components/SearchBar.vue';
import { ref } from 'vue';

const isModalOpen = ref(false)
</script>

<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <SideBar />
    </div>

    <div class="main-content">

      <div class="content-header">
        <div class="header-left">
          <h1 class="page-title">
            <i class="pi pi-list"></i>
            All Blogs
          </h1>
        </div>
        <div class="header-right">
          <SearchBar />
          <button class="add-blog-btn" @click="isModalOpen = !isModalOpen" >
            <i class="pi pi-plus"></i>
            Add Blog
          </button>
        </div>
      </div>

      <BlogList />
    </div>

    <div class="modal-overlay" v-if="isModalOpen" >
      <div class="modal-container">
        <div class="modal-header">
          <h2>
            <i class="pi pi-plus-circle"></i>
            Add New Blog
          </h2>
          <button class="close-btn" @click="isModalOpen = false">
            <i class="pi pi-times"></i>
          </button>
        </div>
        
        <form class="modal-body">
          <div class="form-group">
            <label for="blog-title">
              <i class="pi pi-tag"></i>
              Blog Title
            </label>
            <input 
              type="text" 
              id="blog-title" 
              class="form-input" 
              placeholder="Enter your blog title..."
            />
          </div>
          
          <div class="form-group">
            <label for="blog-content">
              <i class="pi pi-file-edit"></i>
              Blog Content
            </label>
            <textarea 
              id="blog-content" 
              class="form-textarea" 
              placeholder="Write your blog content here..."
              rows="8"
            ></textarea>
          </div>
        </form>
        
        <div class="modal-footer">
          <button class="cancel-btn" @click="isModalOpen = false">
            <i class="pi pi-times"></i>
            Cancel
          </button>
          <button class="submit-btn">
            <i class="pi pi-check"></i>
            Create Blog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  gap: 24px;
  padding: 30px 20px;
  background-color: #f3f4f6;
  min-height: 100vh;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 50px;
}

.sidebar {
  flex: 0 0 250px;
  max-width: 100%;
}

.main-content {
  flex: 1;
  min-width: 300px;
}


.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.header-left .page-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.page-title i {
  color: #3b82f6;
  font-size: 1.5rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.add-blog-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.add-blog-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.add-blog-btn i {
  font-size: 1rem;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  transition: all 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.modal-overlay.active .modal-container {
  transform: scale(1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px 16px 0 0;
}

.modal-header h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.modal-header h2 i {
  color: #3b82f6;
  font-size: 1.25rem;
}

.close-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #e5e7eb;
  color: #374151;
}

.modal-body {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-group label i {
  color: #3b82f6;
  font-size: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.5;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 0 0 16px 16px;
}

.cancel-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 10px;
  color: #6b7280;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.submit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.cancel-btn i,
.submit-btn i {
  font-size: 0.875rem;
}


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

  .content-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .header-right {
    flex-direction: column;
    gap: 1rem;
  }

  .modal-container {
    margin: 1rem;
    max-width: none;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 1rem 1.5rem;
  }

  .modal-footer {
    flex-direction: column;
    gap: 0.75rem;
  }

  .cancel-btn,
  .submit-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .add-blog-btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .modal-header h2 {
    font-size: 1.25rem;
  }
}
</style>