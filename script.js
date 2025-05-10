document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const tamanhoOriginalElement = document.getElementById('tamanhoOriginal');
        const tamanhoComprimidoElement = document.getElementById('tamanhoComprimido');
        const downloadLink = document.getElementById('downloadLink');
        const previewCanvas = document.getElementById('previewCanvas');
        const ctx = previewCanvas.getContext('2d');

        // Limpar informações anteriores
        tamanhoOriginalElement.textContent = '';
        tamanhoComprimidoElement.textContent = '';
        downloadLink.style.display = 'none';
        previewCanvas.style.display = 'none';


        tamanhoOriginalElement.textContent = `Tamanho original: ${(file.size / 1024).toFixed(2)} KB`;

        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                // Define as dimensões do canvas para as dimensões da imagem
                // Limit maximum width/height for preview if needed, but original uses full size
                let displayWidth = img.width;
                let displayHeight = img.height;
                const maxWidth = previewCanvas.parentElement.clientWidth - 40; // Max width based on container padding

                if (img.width > maxWidth) {
                    displayWidth = maxWidth;
                    displayHeight = (img.height / img.width) * maxWidth;
                }
                
                previewCanvas.width = img.width; // Process at original resolution
                previewCanvas.height = img.height;

                // For display, respect aspect ratio and container width
                previewCanvas.style.width = `${displayWidth}px`;
                previewCanvas.style.height = `${displayHeight}px`;
                previewCanvas.style.display = 'block';

                ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height); // Clear previous image
                ctx.drawImage(img, 0, 0, img.width, img.height);

                // Comprime a imagem usando o canvas para JPEG com qualidade 0.7 (70%)
                // Você pode ajustar o valor de qualidade (entre 0 e 1) para mais ou menos compressão/qualidade
                const dataUrl = previewCanvas.toDataURL('image/jpeg', 0.7);

                // Converte Data URL para Blob para calcular o tamanho
                fetch(dataUrl)
                    .then(res => res.blob())
                    .then(blob => {
                        tamanhoComprimidoElement.textContent = `Tamanho comprimido: ${(blob.size / 1024).toFixed(2)} KB`;
                        downloadLink.href = dataUrl;
                        downloadLink.download = `comprimida_${file.name.split('.')[0]}.jpg`; // More descriptive filename
                        downloadLink.style.display = 'inline-block'; // Match button styling
                    });
            };
            img.onerror = function() {
                alert('Não foi possível carregar a imagem. Verifique se o arquivo é válido.');
                tamanhoOriginalElement.textContent = 'Erro ao carregar imagem.';
            };
            img.src = e.target.result;
        }

        reader.onerror = function() {
            alert('Erro ao ler o arquivo.');
            tamanhoOriginalElement.textContent = 'Erro ao ler arquivo.';
        };
        reader.readAsDataURL(file);
    }
});