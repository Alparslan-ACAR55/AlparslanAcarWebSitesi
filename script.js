// Sayfa Yüklendiğinde Çalışan Fonksiyon (Madde 1.e.i)
document.addEventListener("DOMContentLoaded", function() {
    console.log("Web Sayfası Hazır!");
    
    // Basit bir dinamik işlem: Tarihi Footer'a veya konsola yazma
    var tarih = new Date().toLocaleDateString('tr-TR');
    console.log("Bugünün Tarihi: " + tarih);
});

// FORM KONTROL FONKSİYONU (Madde d.iii ve d.iv)
function formKontrol(event) {
    // Sayfanın yenilenmesini engelle (Form submit olmasın diye)
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