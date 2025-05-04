
document.querySelector('.hero img').addEventListener('mouseenter', () => {
    document.querySelector('.hero img').style.transform = 'scale(1.1)';
});
document.querySelector('.hero img').addEventListener('mouseleave', () => {
    document.querySelector('.hero img').style.transform = 'scale(1)';
});