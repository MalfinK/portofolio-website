// Navbar fixed
window.onscroll = function () {
  // saat window di-scroll
  const header = document.querySelector("header");
  // Cara 1 (Sendiri)
  /* if (window.scrollY > 0) { // jika window di-scroll lebih dari 0
        header.classList.add('navbar-fixed'); // tambahkan class navbar-fixed
    } else { // jika tidak
        header.classList.remove('navbar-fixed'); // hapus class navbar-fixed
    } */

  // Cara 2 (Dari WPU)
  const fixedNav = header.offsetTop; // mendapatkan jarak dari atas ke header
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Untuk bagian hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Untuk bisa menghilangkan hamburger menu ketika klik diluar hamburger menu
window.addEventListener("click", function (e) {
  // Cara 1 (if Sendiri)
  //   if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
  // Cara 2 (if Dari WPU)
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  // Cara 1 (Sendiri)
  /* darkToggle.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark"); */
  // Cara 2 (Dari WPU)
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toogle sesuai mode (kalau kode di bawah dimatiin juga udah bisa sebenernya di firefox tapi untuk di edge itu belum, jadi untuk jaga-jaga di setiap browser kita tambahkan aja) => kalau mau coba-coba tinggal comment/uncomment => ini kodenya ambil dari https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually nah nnti tinggal ubah isi kondisinya aja
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
  // document.documentElement.classList.add("dark"); // di comment juga gpp karena udah dipanggil di index.html paling atas
} else {
  darkToggle.checked = false;
  // document.documentElement.classList.remove("dark"); // di comment juga gpp karena udah dipanggil di index.html paling atas
}

/*  
Note:
- Bisa add (menambahkan) class baru, remove (menghapus) class yang sudah ada, dan toggle (menambahkan jika belum ada, menghapus jika sudah ada) class yang sudah ada.
- window itu maksudnya adalah browser atau window atau elemen mana pun yang ada di dalam halaaman web.
*/
