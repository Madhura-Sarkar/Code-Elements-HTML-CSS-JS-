const gradientPreview = document.getElementById('gradientPreview');
        const startColor = document.getElementById('startColor');
        const midColor = document.getElementById('midColor');
        const endColor = document.getElementById('endColor');
        const direction = document.getElementById('direction');
        const cssCode = document.getElementById('cssCode');

        function updateGradient() {
            const gradient = `linear-gradient(${direction.value}, ${startColor.value}, ${midColor.value}, ${endColor.value})`;
            gradientPreview.style.background = gradient;
            cssCode.textContent = `background: ${gradient};`;
        }

        startColor.addEventListener('input', updateGradient);
        midColor.addEventListener('input', updateGradient);
        endColor.addEventListener('input', updateGradient);
        direction.addEventListener('change', updateGradient);

        // Initialize gradient preview
        updateGradient();