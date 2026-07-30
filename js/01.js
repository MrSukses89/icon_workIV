// Array berisi daftar URL gambar wallpaper
const wallpapers = [
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop', // Neon Cyberpunk
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', // Aesthetic Beach
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', // Mountain & Stars
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', // Abstract Dark Wave
    'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=800&auto=format&fit=crop'  // Purple Aurora
];

let currentIndex = 0;
const wallpaperEl = document.getElementById('wallpaper');
const btnWallpaper = document.getElementById('btnWallpaper');

// Fungsi untuk mengganti wallpaper dengan efek fade
function changeWallpaper() {
    wallpaperEl.style.opacity = '0.3';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % wallpapers.length;
        wallpaperEl.style.backgroundImage = `url('${wallpapers[currentIndex]}')`;
        wallpaperEl.style.opacity = '1';
    }, 300);
}

// Inisialisasi wallpaper pertama saat halaman dimuat
wallpaperEl.style.backgroundImage = `url('${wallpapers[0]}')`;

// Event listener untuk tombol manual ganti wallpaper
btnWallpaper.addEventListener('click', changeWallpaper);

// Berganti otomatis setiap 7 detik (7000ms)
setInterval(changeWallpaper, 7000);
