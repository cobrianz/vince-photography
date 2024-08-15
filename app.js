document.addEventListener('DOMContentLoaded', function() {
    const bars = document.getElementById('bars');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu');

    bars.addEventListener('click', function() {
        menu.style.display = 'flex';
        bars.style.display = 'none';
        close.style.display = 'inline';
    });

    close.addEventListener('click', function() {
        menu.style.display = 'none';
        bars.style.display = 'block';
        close.style.display = 'none';
    });
});
