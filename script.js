function showSuccess() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'flex';

    const currentTime = new Date().toLocaleString();
    document.getElementById('current-time').textContent = currentTime;
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'none';
}
