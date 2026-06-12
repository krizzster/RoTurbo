document.getElementById('previewBtn').addEventListener('click', () => {
    const name = document.getElementById('devName').value;
    const bio = document.getElementById('devBio').value;
    const link = document.getElementById('gameLink').value;

    document.getElementById('display-name').innerText = name || 'Developer Name';
    document.getElementById('display-bio').innerText = bio || 'Your bio here.';
    document.getElementById('display-link').href = link || '#';
});
