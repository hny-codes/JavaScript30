const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('open');
        e.currentTarget.classList.toggle('open-active');
    });
    
})