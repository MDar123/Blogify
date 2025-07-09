<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1>Human <br /> stories & ideas</h1>
        <p class="subtitle">A place to read, write, and deepen your understanding</p>
        <button class="cta-btn">Start reading</button>
      </div>
      <div class="hero-image">
        <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="Hero Illustration" />
      </div>
    </section>
  </template>
  
<style scoped>
  .hero-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 60px 40px;
    background-color: #fdfaf6;
    font-family: 'Georgia', serif;
  }
  
  .hero-content {
    max-width: 600px;
  }
  
  .hero-content h1 {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 500;
    color: #191919;
    margin-bottom: 20px;
  }
  
  .subtitle {
    font-size: 1.125rem;
    color: #333;
    margin-bottom: 30px;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .cta-btn {
    background-color: #191919;
    color: white;
    padding: 12px 24px;
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-btn:hover {
    background-color: #333;
  }
  
  .hero-image {
    flex: 1 1 400px;
    text-align: right;
    margin-top: 30px;
  }
  
  .hero-image img {
    max-width: 100%;
    height: 400px;
    object-fit: contain;
  }
  
  /* Responsive adjustments */
  @media (max-width: 960px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
      padding: 40px 20px;
      margin-top: 70px;
      height: auto;
    }
  
    .hero-content {
      max-width: 100%;
    }
  
    .hero-image {
      display: none;
    }
  
    .hero-content h1 {
      font-size: 2.5rem;
    }
  }
</style>
  