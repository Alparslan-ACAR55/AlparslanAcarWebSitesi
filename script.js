// ==========================================
// SAYFA YÜKLENDİĞİNDE ÇALIŞACAK KODLAR
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    console.log("Sayfa başarıyla yüklendi.");

    // 1. Hoşgeldiniz Mesajı (Yarım saniye gecikmeli)
    setTimeout(function() {
        alert("Alparslan Acar - Kişisel Web Sayfasına - Hoşgeldiniz");
    }, 500);

    // 2. Konsol Kontrolü (Bugünün tarihi)
    var bugun = new Date();
    console.log("Giriş Tarihi: " + bugun.toLocaleDateString("tr-TR"));
});


// ==========================================
// İLETİŞİM FORMU KONTROLÜ
// ==========================================
function formKontrol(event) {
    // Sayfa yenilenmesini engelle
    event.preventDefault();

    // 1. Verileri Al
    var adSoyad = document.getElementById("adSoyad").value;
    var email = document.getElementById("email").value;
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value;
    var kvkk = document.getElementById("kvkkOnay").checked;

    // 2. Boş Alan Kontrolü
    if (adSoyad == "" || email == "" || konu == "" || mesaj == "") {
        alert("Lütfen tüm alanları eksiksiz doldurunuz!");
        return false;
    }

    // 3. KVKK Onayı
    if (kvkk == false) {
        alert("Lütfen KVKK metnini onaylayınız!");
        return false;
    }

    // 4. Başarılı
    alert("Teşekkürler Sayın " + adSoyad + "!\nMesajınız başarıyla alındı.");
    document.getElementById("iletisimFormu").reset();
    return true;
}