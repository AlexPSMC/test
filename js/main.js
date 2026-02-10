const menu = document.getElementById("menu");
document.getElementById("openMenu").onclick = () => menu.style.display = "flex";
document.getElementById("closeMenu").onclick = () => menu.style.display = "none";

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeImg = document.getElementById("closeImg");

document.querySelectorAll(".card img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});

closeImg.onclick = () => modal.style.display = "none";
modal.onclick = e => e.target === modal && (modal.style.display = "none");
