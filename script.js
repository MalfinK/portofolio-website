$('.page-scroll1').on('click', function(e) {
    // Cara ambil isi href
    var tujuan = $(this).attr('href');

    // Cara menangkap element ybs
    var elemenTujuan = $(tujuan);
    
    // Cara memindahkan scrollnya
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
})

$('.page-scroll2').on('click', function(e) {
    // Cara ambil isi href
    var tujuan = $(this).attr('href');

    // Cara menangkap element ybs
    var elemenTujuan = $(tujuan);
    
    // Cara memindahkan scrollnya
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top +35
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
})

$('.page-scroll3').on('click', function(e) {
    // Cara ambil isi href
    var tujuan = $(this).attr('href');

    // Cara menangkap element ybs
    var elemenTujuan = $(tujuan);
    
    // Cara memindahkan scrollnya
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -350
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
})

function scrollNav() {
    const nav = document.getElementById('nav')
    // When the scroll is greater than 100 viewport height, add the scroll-nav class to the nav tag
    if (this.scrollY >= 100) {
        nav.classList.add('bg-dark');
        nav.classList.remove('navbar-light');
        nav.classList.add('navbar-dark');
        nav.classList.remove('warna-tulisan');
    } else {
        nav.classList.remove('bg-dark');
        nav.classList.add('navbar-light');
        nav.classList.remove('navbar-dark');
        nav.classList.add('warna-tulisan');
    }
}
window.addEventListener('scroll', scrollNav)


const navItem = document.querySelectorAll('.nav-item');

function linkAction() {
    /*Active link*/
    navItem.forEach((n) => n.classList.remove("active")); // arrow function
    this.classList.add("active"); // this ini berguna untuk men select semua yang ada di function
}
navItem.forEach(el1 => {
    el1.addEventListener('click', linkAction)

    el1.addEventListener('mouseenter', function () {
        el1.style.fontFamily = 'Algerian';
        backgroundColor = 'lightblue';
    })

    el1.addEventListener('mouseleave', function () {
        el1.style.fontFamily = 'normal';
    })
});


const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('click', function () {
    navItem.forEach((n) => n.classList.remove("active")); // arrow function
})

function ucapan() {
    var h = (new Date()).getHours();
    if (h >= 1 && h < 11) document.writeln("Selamat Pagi,");
    if (h >= 11 && h < 15) document.writeln("Selamat Siang,");
    if (h >= 15 && h < 18) document.writeln("Selamat Sore,");
    if (h >= 18 || h < 1) document.writeln("Selamat Malam,");
}

const info = document.querySelector('.info');
const tambinfo = document.querySelectorAll('em.key');
// console.log(info);
info.addEventListener('mouseenter', function () {
    tambinfo.forEach(el2 => {
        // tambspace.insertBefore(el2);
        el2.style.display = 'inline-block';
        el2.style.backgroundColor = 'aqua';
        el2.style.borderRadius = '5px';
    });
});
info.addEventListener('mouseleave', function () {
    tambinfo.forEach(el2 => {
        el2.style.display = 'none';
    });
});

const info2 = document.querySelector('.info2');
const tambinfo2 = document.querySelectorAll('em.key2');
// console.log(info);
info2.addEventListener('mouseenter', function () {
    tambinfo2.forEach(el3 => {
        el3.style.display = 'inline-block';
        el3.style.backgroundColor = '#E99DCB';
        el3.style.borderRadius = '5px';
    });
});
info2.addEventListener('mouseleave', function () {
    tambinfo2.forEach(el3 => {
        el3.style.display = 'none';
    });
});

const info3 = document.querySelector('.info3');
const tambinfo3 = document.querySelectorAll('em.key3');
// console.log(info);
info3.addEventListener('mouseenter', function () {
    tambinfo3.forEach(el3 => {
        el3.style.display = 'inline-block';
        el3.style.backgroundColor = 'aqua';
        el3.style.borderRadius = '5px';
    });
});
info3.addEventListener('mouseleave', function () {
    tambinfo3.forEach(el3 => {
        el3.style.display = 'none';
    });
});

const info4 = document.querySelector('.info4');
const tambinfo4 = document.querySelectorAll('em.key4');
// console.log(info);
info4.addEventListener('mouseenter', function () {
    tambinfo4.forEach(el3 => {
        el3.style.display = 'inline-block';
        el3.style.backgroundColor = '#E99DCB';
        el3.style.borderRadius = '5px';
    });
});
info4.addEventListener('mouseleave', function () {
    tambinfo4.forEach(el3 => {
        el3.style.display = 'none';
    });
});

AOS.init();

// Untuk parallax di abaout
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});