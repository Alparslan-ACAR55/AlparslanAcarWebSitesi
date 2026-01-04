// Sayfa Yüklendiğinde Çalışan Fonksiyon
document.addEventListener("DOMContentLoaded", function() {
    console.log("Web Sayfası Hazır!");
    
    // Konsola bugünün tarihini yazar (Kontrol amaçlı)
    var tarih = new Date().toLocaleDateString('tr-TR');
    console.log("Bugünün Tarihi: " + tarih);
});
+

// --- İLETİŞİM FORMU KONTROLÜ ---
function formKontrol(event) {
    // Sayfanın yenilenmesini engelle
    event.preventDefault();

    // 1. Değerleri Alalım
    var ad = document.getElementById("adSoyad").value;
    var email = document.getElementById("email").value;
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value;
    var kvkk = document.getElementById("kvkkOnay").checked;

    // 2. Boş Alan Kontrolü
    if (ad === "" || email === "" || konu === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz!");
        return false;
    }

    // 3. KVKK Kontrolü
    if (!kvkk) {
        alert("Lütfen KVKK metnini onaylayınız!");
        return false;
    }

    // 4. Her Şey Tamamsa Başarı Mesajı
    alert("Teşekkürler Sayın " + ad + "!\nMesajınız başarıyla gönderildi.");
    
    // Formu temizle
    document.getElementById("iletisimFormu").reset();
    return true;
}

// --- YUKARI ÇIK (SCROLL) MANTIĞI ---

// Sayfa kaydırıldığında çalışacak olay
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("scrollTopBtn");
    
    // Eğer sayfa 300px'den fazla aşağı kaydırıldıysa butonu göster
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add("show"); // CSS'teki .show sınıfını ekler (görünür yapar)
    } else {
        btn.classList.remove("show"); // Sınıfı siler (gizler)
    }
}

// Butona basınca yukarı çıkaran fonksiyon
