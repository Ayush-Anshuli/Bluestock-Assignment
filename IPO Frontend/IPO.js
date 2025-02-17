document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      item.addEventListener("click", function () {
          this.classList.toggle("active");
          const icon = this.querySelector(".toggle-icon");
          icon.textContent = this.classList.contains("active") ? "-" : "+";
      });
  });
});
