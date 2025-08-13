/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class", // or 'media' or 'class' => kalau ga disetting akan menggunakan si perangkatnya, kalau class akan menggunakan class dark atau saat nambahin dark di dalam class itu akan jalan, sedangkan kalau diisi media akan mengikuti settingan perangkatnya => di tailwind terbaru class diganti namanya menggunakan selector, penggunaan class terakhir pada Tailwind CSS v3.4.1, tapi menggunakan class juga masih bisa saat dicoba pada tailwind 3.4.4
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2dd4bf",
        secondary: "#64748b",
        dark: "#0f766e", // aturan pake text-slate-900 tapi ini pake text-teal-700
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

/*  
Note:
Kalau extend kan menambahkan dari fitur yang sudah dimiliki oleh tailwindcss, tapi kalau langsung di dalam theme, maka akan menggantikan fitur yang sudah ada (menimpa) di tailwindcss tersebut.
*/
