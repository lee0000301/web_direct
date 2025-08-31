document.getElementById('deuPage').addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'index.html';
});

document.getElementById('aiEmoji').addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'aiSite.html';
});

document.getElementById('solvePage').addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'otherSite.html';
});