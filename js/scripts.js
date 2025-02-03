// Untuk animasi loading saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function() {
	const container = document.querySelector('.container');
	container.style.opacity = 1;  // Menambahkan efek fade-in saat halaman dimuat
});

// Menambahkan animasi hover pada link navigasi
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
	link.addEventListener('mouseover', function() {
		link.style.transform = 'scale(1.1)';
		link.style.transition = 'all 0.3s ease-in-out';
	});

	link.addEventListener('mouseout', function() {
		link.style.transform = 'scale(1)';
	});
});

// Menambahkan efek klik pada tombol navigasi
const navBtn = document.querySelector('.nav-btn');
if (navBtn) {
	navBtn.addEventListener('click', function() {
		this.classList.toggle('active');
	});
}