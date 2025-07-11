<template>
  <div class="blog-detail-container">
    <div class="blog-header">
      <div class="blog-category">
        <i class="pi pi-tag"></i>
        <span>{{ blogData.category }}</span>
      </div>
      <h1 class="blog-title">{{ blogData.title }}</h1>
      <div class="blog-meta">
        <div class="meta-item">
          <i class="pi pi-calendar"></i>
          <span>{{ blogData.createdAt }}</span>
        </div>
        <div class="meta-item">
          <i class="pi pi-heart"></i>
          <span>{{ blogData.likes }}</span>
        </div>
        <div class="meta-item">
          <i class="pi pi-comment"></i>
          <span>{{ blogData.comments.length }}</span>
        </div>
      </div>
    </div>


    <div class="blog-content">
      <div class="content-text">
        <p>{{ blogData.content }}</p>
      </div>
    </div>

    <div class="blog-actions">
      <button class="action-btn like-btn" @click="handleLikes" >
        <i v-if="!blogData.isLiked" class="pi pi-heart"></i>
        <i v-if="blogData.isLiked" class="pi pi-heart-fill"></i>
        <span>Like</span>
      </button>
    </div>

    <div class="comments-section">
      <div class="comments-header">
        <h2>
          <i class="pi pi-comments"></i>
          Comments ({{ blogData.comments.length }})
        </h2>
      </div>

      <div class="comment-box">
        <div class="comment-form">
          <div class="user-avatar">
            <i class="pi pi-user"></i>
          </div>
          <div class="comment-input-container">
            <textarea 
              class="comment-input" 
              placeholder="Write a comment..."
              rows="3"
              required
              v-model="comment"
            ></textarea>
            <div class="comment-actions">

              <div class="comment-submit">
                
                <button :disabled=" comment == '' " class="submit-btn" @click="handleComments" >
                  <i class="pi pi-send"></i>
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="comments-list">
        <div class="comment-item" v-for="comment in blogData.comments" :key="comment.id">
          <div class="comment-avatar">
            <i class="pi pi-user"></i>
          </div>
          <div class="comment-content">
            <div class="comment-header">
              <span class="comment-author">{{ comment.user }}</span>
              <span class="comment-date">{{ comment.createdAt }}</span>
            </div>
            <div class="comment-text">
              {{ comment.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import getCurrentBlog from '@/data/Blogs';
import { ref ,computed} from 'vue';
import { useRoute } from 'vue-router';

const comment = ref("")

const route = useRoute()
const blogData = ref({})
blogData.value = getCurrentBlog(route.params.id)

const handleLikes = computed(() => {
  blogData.value.isLiked = !blogData.value.isLiked
  if(blogData.value.isLiked){
    blogData.value.likes++
  }else{
    blogData.value.likes--
  }
})

const handleComments = computed( () => {
  blogData.value.comments.push({ text : `${comment.value}` })
  comment.value = ''
} )
</script>


<style scoped>
.blog-detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  margin-top: 100px;
}


.blog-header {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
}

.blog-category {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.blog-category i {
  font-size: 0.875rem;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
}

.meta-item i {
  color: #3b82f6;
  font-size: 1rem;
}


.blog-content {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
}

.content-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #2d3748;
}

.content-text p {
  margin-bottom: 1.5rem;
}


.blog-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 12px;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.share-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  background: #eff6ff;
}

.bookmark-btn:hover {
  border-color: #f59e0b;
  color: #f59e0b;
  background: #fffbeb;
}

.comments-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.comments-header h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
}

.comments-header i {
  color: #3b82f6;
  font-size: 1.25rem;
}

.comment-box {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.comment-form {
  display: flex;
  gap: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.comment-input-container {
  flex: 1;
}

.comment-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.comment-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.comment-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.comment-options {
  display: flex;
  gap: 0.5rem;
}

.option-btn {
  width: 36px;
  height: 36px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-btn:hover {
  background: #f1f5f9;
  color: #3b82f6;
}

.comment-submit {
  display: flex;
  gap: 0.75rem;
}

.cancel-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: #f1f5f9;
}

.submit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.submit-btn:disabled {
  background: #d1d5db; 
  color: #9ca3af;     
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  opacity: 0.7;
}


.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.comment-item:hover {
  background: #f1f5f9;
  transform: translateX(4px);
}

.comment-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.comment-author {
  font-weight: 600;
  color: #1a202c;
}

.comment-date {
  color: #64748b;
  font-size: 0.875rem;
}

.comment-text {
  color: #2d3748;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.comment-actions-bar {
  display: flex;
  gap: 1rem;
}

.comment-action {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border: none;
  background: none;
  color: #64748b;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.comment-action:hover {
  background: #e2e8f0;
  color: #3b82f6;
}

.comment-action i {
  font-size: 0.875rem;
}


@media (max-width: 768px) {
  .blog-detail-container {
    padding: 1rem;
  }
  
  .blog-header,
  .blog-content,
  .comments-section {
    padding: 1.5rem;
  }
  
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .blog-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .comment-form {
    flex-direction: column;
    gap: 1rem;
  }
  
  .comment-actions {
    flex-direction: column;
    gap: 1rem;
  }
  
  .comment-submit {
    justify-content: flex-end;
  }
}
</style>