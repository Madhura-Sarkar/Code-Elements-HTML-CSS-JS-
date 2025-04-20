function showToast(message, type = 'info', duration = 4000) {
    const container = document.getElementById('toast-container');
  
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
  
    const icon = document.createElement('span');
    icon.classList.add('icon');
  
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };
  
    icon.innerText = icons[type] || 'ℹ️';
  
    const text = document.createElement('span');
    text.classList.add('message');
    text.innerText = message;
  
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => dismissToast(toast);
  
    toast.append(icon, text, closeBtn);
    container.appendChild(toast);
  
    // Auto-dismiss
    setTimeout(() => dismissToast(toast), duration);
  }
  
  function dismissToast(toast) {
    toast.style.animation = 'fadeOut 0.5s ease forwards';
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }
  
  function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  }
  