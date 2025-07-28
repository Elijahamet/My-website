document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky navbar on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Typing animation for hero subtitle
  const typingElement = document.querySelector('.typing-animation');
  const professions = ['MERN Stack Developer', 'UI/UX Designer', 'Photographer', 'Creative Thinker'];
  let professionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentProfession.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentProfession.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentProfession.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      professionIndex = (professionIndex + 1) % professions.length;
      typingSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing animation after a short delay
  setTimeout(type, 1000);

  // Initialize GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  });

  // Animate skills items
  gsap.utils.toArray('.skill-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Skills data
  const skills = [
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fas fa-code', name: 'C#' },
    { icon: 'fas fa-paint-brush', name: 'Graphic Design' },
    { icon: 'fas fa-camera', name: 'Photography' },
    { icon: 'fab fa-figma', name: 'Figma' },
    { icon: 'fas fa-mobile-alt', name: 'UI/UX' },
    { icon: 'fas fa-server', name: 'REST APIs' }
  ];

  // Render skills
  const skillsGrid = document.querySelector('.skills-grid');
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
      <i class="${skill.icon}"></i>
      <span>${skill.name}</span>
    `;
    skillsGrid.appendChild(skillItem);
  });

  // Project filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full MERN stack e-commerce solution with payment gateway integration, user authentication, and admin dashboard.',
      tags: ['mern', 'react', 'node'],
      category: 'mern',
      image: 'assets/images/project1.jpg',
      github: 'https://github.com/Elijahamet',
      live: 'https://e-commerce2e.netlify.app/'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React application with drag-and-drop functionality, real-time updates, and Firebase backend.',
      tags: ['react', 'firebase'],
      category: 'react',
      image: 'assets/images/project2.jpg',
      github: 'https://github.com/Elijahamet',
      live: 'https://todolist678r.netlify.app/'
    },
    {
      id: 3,
      title: 'Portfolio Design',
      description: 'Modern portfolio design created in Figma and implemented with React and GSAP animations.',
      tags: ['design', 'react', 'figma'],
      category: 'design',
      image: 'assets/images/project3.jpg',
      github: 'https://github.com/Elijahamet',
      live: 'https://porfoliour.netlify.app/'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and reporting.',
      tags: ['mern', 'react', 'charts'],
      category: 'mern',
      image: 'assets/images/project4.jpg',
      github: 'https://github.com/Elijahamet',
      live: 'https://socialnetworkprototype.netlify.app/'
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'Weather app with location detection, 5-day forecast, and interactive weather maps.',
      tags: ['react', 'api', 'geolocation'],
      category: 'react',
      image: 'assets/images/project5.jpg',
      github: 'https://github.com/Elijahamet',
      live: 'https://weatherapp4r.netlify.app/'
    },
    {
      id: 6,
      title: 'Coffee App Design',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      tags: ['design', 'branding'],
      category: 'design',
      image: 'assets/images/project6.jpg',
      github: 'https://github.com/Elijahamet',
      live: 'https://coffeecafepage.netlify.app/'
    }
  ];

  // Render projects
  const projectsGrid = document.querySelector('.projects-grid');
  
  function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.tags.includes(filter));
    
    filteredProjects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.setAttribute('data-category', project.category);
      
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank"><i class="fab fa-github"></i> Code</a>
            <a href="${project.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
          </div>
        </div>
      `;
      
      // Add animation delay based on index
      gsap.from(projectCard, {
        scrollTrigger: {
          trigger: projectCard,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      });
      
      projectsGrid.appendChild(projectCard);
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      // Render filtered projects
      renderProjects(filterValue);
    });
  });

  // Initialize projects
  renderProjects();

  // Design gallery functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const designWork = [
    {
      id: 1,
      title: 'Logo Design',
      category: 'graphic',
      image: 'assets/images/design1.jpg'
    },
    {
      id: 2,
      title: 'UI Kit',
      category: 'graphic',
      image: 'assets/images/design2.jpg'
    },
    {
      id: 3,
      title: 'Landscape Photo',
      category: 'photo',
      image: 'assets/images/photo1.jpg'
    },
    {
      id: 4,
      title: 'Brand Guidelines',
      category: 'graphic',
      image: 'assets/images/design3.jpg'
    },
    {
      id: 5,
      title: 'Portrait Photo',
      category: 'photo',
      image: 'assets/images/photo2.jpg'
    },
    {
      id: 6,
      title: 'Mobile App Design',
      category: 'graphic',
      image: 'assets/images/design4.jpg'
    }
  ];

  // Render design gallery
  const designGallery = document.querySelector('.design-gallery');
  
  function renderDesignGallery(tab = 'graphic') {
    designGallery.innerHTML = '';
    const filteredItems = designWork.filter(item => item.category === tab);
    
    filteredItems.forEach((item, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.setAttribute('data-tab', item.category);
      
      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-overlay">
          <i class="fas fa-search-plus"></i>
        </div>
      `;
      
      // Add animation delay based on index
      gsap.from(galleryItem, {
        scrollTrigger: {
          trigger: galleryItem,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      });
      
      designGallery.appendChild(galleryItem);
    });
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const tabValue = this.getAttribute('data-tab');
      
      // Render filtered gallery items
      renderDesignGallery(tabValue);
    });
  });

  // Initialize design gallery
  renderDesignGallery();

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formValues);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
  });

  // Initialize lightbox for design gallery
  // This would require a lightbox library like fancybox or lightbox2
  // Here's a simple implementation that would need to be expanded
  document.addEventListener('click', function(e) {
    if (e.target.closest('.gallery-overlay') || e.target.classList.contains('gallery-overlay')) {
      const imgSrc = e.target.closest('.gallery-item').querySelector('img').src;
      // In a real implementation, you would open a lightbox with the image
      console.log('Opening lightbox for:', imgSrc);
    }
  });

  // Add hover effect to social links
  const socialLinks = document.querySelectorAll('.social-links a');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const icon = this.querySelector('i');
      gsap.to(icon, {
        duration: 0.3,
        y: -5,
        ease: 'power2.out'
      });
    });
    
    link.addEventListener('mouseleave', function() {
      const icon = this.querySelector('i');
      gsap.to(icon, {
        duration: 0.3,
        y: 0,
        ease: 'power2.out'
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  // Load saved theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
const educationData = [
  {
    school: "Bishop Herman College",
    degree: "High School Diploma",
    years: "2019 - 2022",
    details: "studied Business, graduated with honors.",
    image: "assets/images/springfield-high.jpg" // update path as needed
  },
  {
    school: "University of Ghana",
    degree: "Bachelor of Science in Computer Science",
    years: "2024 - 2027",
    details: "Majored in  computer science .",
    image: "assets/images/state-university.jpg" // update path as needed
  }
];

const educationList = document.querySelector('.education-list');
educationData.forEach(item => {
  const eduDiv = document.createElement('div');
  eduDiv.className = 'education-item';
  eduDiv.innerHTML = `
    <img src="${item.image}" alt="${item.school}" class="education-img" />
    <div class="education-text">
      <h3>${item.school}</h3>
      <p><strong>${item.degree}</strong></p>
      <p>${item.years}</p>
      <p>${item.details}</p>
    </div>
  `;
  educationList.appendChild(eduDiv);
});
