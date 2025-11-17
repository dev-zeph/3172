document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const imageGrid = document.getElementById('imageGrid');
    const memeEditor = document.getElementById('memeEditor');
    const selectedImage = document.getElementById('selectedImage');
    const topText = document.getElementById('topText');
    const bottomText = document.getElementById('bottomText');
    const generateBtn = document.getElementById('generateBtn');
    const memePreview = document.getElementById('memePreview');
    let memeCanvas;

    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => searchImages(e.target.value), 500);
    });

    async function searchImages(query) {
        try {
            const response = await fetch(`/.netlify/functions/unsplash?query=${query}`);
            const data = await response.json();
            // If data is an array, use it directly, otherwise assume it's a single image
            const images = Array.isArray(data) ? data : [data];
            displayImages(images);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function displayImages(images) {
        imageGrid.innerHTML = '';
        images.forEach(image => {
            const img = document.createElement('img');
            img.crossOrigin = 'anonymous';
            img.src = image.urls.small;
            img.alt = image.alt_description;
            img.className = 'w-full h-48 object-cover cursor-pointer rounded';
            img.addEventListener('click', () => selectImage(image.urls.regular));
            imageGrid.appendChild(img);
        });
    }

    function selectImage(url) {
        selectedImage.crossOrigin = 'anonymous';
        selectedImage.src = url;
        memeEditor.classList.remove('hidden');
        selectedImage.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = selectedImage.naturalWidth;
            canvas.height = selectedImage.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(selectedImage, 0, 0);
        };
    }

    function updateMemePreview() {
        const canvas = document.createElement('canvas');
        const img = selectedImage;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.font = '48px Impact';
        ctx.textAlign = 'center';
        
        if (topText.value) {
            ctx.fillText(topText.value.toUpperCase(), canvas.width/2, 60);
            ctx.strokeText(topText.value.toUpperCase(), canvas.width/2, 60);
        }
        
        if (bottomText.value) {
            ctx.fillText(bottomText.value.toUpperCase(), canvas.width/2, canvas.height - 20);
            ctx.strokeText(bottomText.value.toUpperCase(), canvas.width/2, canvas.height - 20);
        }

        memeCanvas = canvas;
        selectedImage.src = canvas.toDataURL();
    }

    generateBtn.addEventListener('click', () => {
        if (memeCanvas) {
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = memeCanvas.toDataURL();
            link.click();
        }
    });

    topText.addEventListener('input', updateMemePreview);
    bottomText.addEventListener('input', updateMemePreview);

    searchImages('funny');
});