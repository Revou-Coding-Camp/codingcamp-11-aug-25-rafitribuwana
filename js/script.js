welcome();
/**
 * Menampilkan modal welcome untuk meminta nama user.
 * Mengosongkan input dan memfokuskan kursor ke input nama.
 */
function welcome() {
    document.getElementById('welcome-modal').classList.remove('hidden');
    document.getElementById('welcome-input').value = '';
    setTimeout(() => {
        document.getElementById('welcome-input').focus();
    }, 100);
}

/**
 * Mengambil nama dari input welcome.
 * Jika nama diisi, menampilkan nama pada elemen user-name dan menutup modal.
 * Jika kosong, memberi efek border merah pada input.
 */
function submitWelcome() {
    let name = document.getElementById('welcome-input').value.trim();
    if (name !== '') {
        document.getElementById('user-name').textContent = name;
        document.getElementById('welcome-modal').classList.add('hidden');
    } else {
        document.getElementById('welcome-input').classList.add('border-red-500');
        setTimeout(() => {
            document.getElementById('welcome-input').classList.remove('border-red-500');
        }, 1000);
    }
}

/**
 * Mengirim pesan dari textarea message.
 * Jika pesan diisi, menampilkan custom alert dengan pesan yang dikirim.
 * Jika kosong, menampilkan custom alert dengan pesan error.
 */
function sendMessage() {
    let message = document.getElementById('message').value;
    if (message != '') {
        showCustomAlert("Message sent: " + message);
    } else {
        showCustomAlert("Please enter a message before sending.");
    }
}

/**
 * Menampilkan custom alert dengan pesan tertentu.
 * @param {string} msg - Pesan yang akan ditampilkan pada custom alert.
 */
function showCustomAlert(msg) {
    document.getElementById('custom-alert-message').textContent = msg;
    document.getElementById('custom-alert').classList.remove('hidden');
}

/**
 * Menutup custom alert.
 */
function closeCustomAlert() {
    document.getElementById('custom-alert').classList.add('hidden');
}