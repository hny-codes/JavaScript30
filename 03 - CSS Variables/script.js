const inputs = document.querySelectorAll('.controls input');
console.log(inputs);


inputs.forEach(input => {

    

    input.addEventListener('input', (e) => {
        
        const suffix = e.currentTarget.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${e.currentTarget.name}`, e.currentTarget.value + suffix)

    });
    
});