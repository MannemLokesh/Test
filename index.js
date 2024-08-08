document.getElementById('menu-title').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor action
    const javaContent = document.getElementById('java-content');
    if (javaContent.style.display === 'flex') {
        javaContent.style.display = 'none';
    } else {
        javaContent.style.display = 'flex';
    }
});
