// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector);
  if (element) return element
  throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Open menu pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

//Animate elements view on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => { observer.observe(el) });

//TextArea in Contect Form auto resizing effect
const textarea = document.getElementById("message");
textarea.addEventListener("keyup", e => {
  textarea.style.height = "103px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});