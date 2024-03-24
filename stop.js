document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.key === 'F12' || event.keyCode === 123)) {
        window.close();
    } else if (event.ctrlKey && event.altKey && event.key === 'C') {
        window.close();
    } else if (event.keyCode === 123) {
        window.close();
    }
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});