const elements = document.querySelectorAll('.animate'); 

function checkVisible() {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    
    // Kiểm tra nếu phần tử xuất hiện trong viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.add('visible'); // Thêm lớp visible
      element.classList.remove('animate'); // Bỏ lớp animate
    } else {
      element.classList.remove('visible'); // Bỏ lớp visible
      element.classList.add('animate'); // Thêm lại lớp animate nếu không visible
    }
  });
}

window.addEventListener('scroll', checkVisible);
window.addEventListener('load', checkVisible); // Kiểm tra khi tải trang