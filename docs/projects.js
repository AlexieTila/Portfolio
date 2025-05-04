function likeProject(button) {
    let countSpan = button.querySelector(".like-count");
    let currentLikes = parseInt(countSpan.textContent);
    let icon = button.querySelector("i");

    // Toggle like state with animation
    if (!button.classList.contains("liked")) {
        button.classList.add("liked");
        icon.classList.add("heart-bounce");
        countSpan.textContent = currentLikes + 1;
    } else {
        button.classList.remove("liked");
        icon.classList.remove("heart-bounce");
        countSpan.textContent = currentLikes - 1;
    }
}

function toggleDescription(button) {
    // Get the project card and its description
    const projectCard = button.closest('.project-card');
    const description = projectCard.querySelector('.extended-description');
    const projectTitle = projectCard.querySelector('.project-title').textContent;
    const projectDescription = projectCard.querySelector('.project-description').textContent;
    const projectImage = projectCard.querySelector('img').src;
    
    // Create and show modal
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalDescription = document.getElementById('modalProjectDescription');
    const modalTechList = document.getElementById('modalTechList');
    const carouselInner = document.getElementById('carouselInner');
    
    // Set modal content
    modalTitle.textContent = projectTitle;
    modalDescription.textContent = projectDescription;
    
    // Clone the tech list to the modal
    modalTechList.innerHTML = '';
    const techItems = description.querySelectorAll('.tech-list li');
    techItems.forEach(item => {
        const clonedItem = item.cloneNode(true);
        modalTechList.appendChild(clonedItem);
    });
    
    // Set up carousel images
    carouselInner.innerHTML = '';
    
    // Get additional images for carousel
    const projectImages = getProjectImages(projectTitle);
    
    // Add images to carousel
    projectImages.forEach((imgSrc, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = index === 0 ? 'carousel-item active' : 'carousel-item';
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'd-block w-100';
        img.alt = `${projectTitle} - Image ${index + 1}`;
        
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
    
    // Show the modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Function to get project images based on project title
function getProjectImages(projectTitle) {
    // Default images from the pictures folder
    const defaultImages = [
        'pictures/interactive_port_web.webp',
        'pictures/ui.png',
        'pictures/emoji.png',
        'pictures/carousel.jpg',
        'pictures/hover.png',
        'pictures/uiux.jpg',
        'pictures/web portfolio.webp',
        'pictures/webdev.jpg'
    ];
    
    // Map project titles to specific sets of images
    const projectImageMap = {
        'Interactive Portfolio': [
            'pictures/interactive_port_web.webp',
            'pictures/web portfolio.webp',
            'pictures/webdev.jpg'
        ],
        'Enhanced UI Components Library': [
            'pictures/ui.png',
            'pictures/components.webp',
            'pictures/hover.png'
        ],
        'Comment & Emoji Reaction System': [
            'pictures/emoji.png',
            'pictures/ui.png',
            'pictures/web app.jpg'
        ],
        'Modal & Carousel Integration': [
            'pictures/carousel.jpg',
            'pictures/ui.png',
            'pictures/interactive_port_web.webp'
        ],
        'Dynamic Hover Effects Collection': [
            'pictures/hover.png',
            'pictures/ui.png',
            'pictures/uiux.jpg'
        ],
        'UI/UX-Focused Web Layout Designs': [
            'pictures/uiux.jpg',
            'pictures/web portfolio.webp',
            'pictures/webdev.jpg'
        ]
    };
    
    // Return specific images for the project or default to the first 3 images
    return projectImageMap[projectTitle] || defaultImages.slice(0, 3);
}