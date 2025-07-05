(function autoScroll() {
    let direction = 1; // ganti sesuai, 1 scrool up -1 scrol down

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function scrollStep() {
        // Scroll sejumlah piksel acak (antara 100–400px)
        const scrollAmount = getRandom(100, 400) * direction;
        window.scrollBy({ top: scrollAmount, behavior: "smooth" });

        // Ganti arah scroll secara acak tiap 5–10 detik
        if (Math.random() < 0.1) { // 10% kemungkinan per langkah
            direction *= -1;
        }
        
        const delay = getRandom(300, 2000); // Acak delay antar langkah scroll (300–2000ms)

        // randomh stop biar kek keliatan nyari bahan/ baca
        const shouldPause = Math.random() < 0.2;
        const finalDelay = shouldPause ? delay + getRandom(1000, 3000) : delay;

        setTimeout(scrollStep, finalDelay);
    }

    scrollStep();
})();
