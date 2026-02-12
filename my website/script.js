// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeAnimations();
  initializeMobileMenu();
  initializeScrollAnimations();
  initialize3DCanvas();
  initializeContactForm();
  initializeButtonAnimations();
});

// ==================== 3D CANVAS SETUP ====================
let scene, camera, renderer, particles = [];

function initializeCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = null;

  // Camera setup
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    alpha: true, 
    antialias: true,
    precision: 'highp'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);

  // Create particles
  createParticles();
  
  // Add lights
  const light = new THREE.PointLight(0x6366f1, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  // Mouse movement interaction
  document.addEventListener('mousemove', onMouseMove);
  
  // Animate
  animateScene();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}

function createParticles() {
  const geometry = new THREE.BufferGeometry();
  const particleCount = 150;
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

    velocities[i * 3] = (Math.random() - 0.5) * 2;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 2;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 2;

    particles.push({
      x: positions[i * 3],
      y: positions[i * 3 + 1],
      z: positions[i * 3 + 2],
      vx: velocities[i * 3],
      vy: velocities[i * 3 + 1],
      vz: velocities[i * 3 + 2]
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x6366f1,
    size: 1.5,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);
  particleSystem.userData.geometry = geometry;
  particleSystem.userData.velocities = velocities;
  particleSystem.userData.positions = positions;
}

let mouseX = 0, mouseY = 0;

function onMouseMove(event) {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animateScene() {
  requestAnimationFrame(animateScene);

  if (scene.children.length > 0) {
    const particleSystem = scene.children[scene.children.length - 1];
    
    if (particleSystem.userData.geometry) {
      const positions = particleSystem.userData.geometry.attributes.position.array;
      const velocities = particleSystem.userData.velocities;

      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        particles[i].z += particles[i].vz;

        // Bounce off edges
        if (Math.abs(particles[i].x) > 100) particles[i].vx *= -1;
        if (Math.abs(particles[i].y) > 100) particles[i].vy *= -1;
        if (Math.abs(particles[i].z) > 100) particles[i].vz *= -1;

        positions[i * 3] = particles[i].x + mouseX * 50;
        positions[i * 3 + 1] = particles[i].y + mouseY * 50;
        positions[i * 3 + 2] = particles[i].z;
      }

      particleSystem.userData.geometry.attributes.position.needsUpdate = true;
      particleSystem.rotation.x += 0.0001;
      particleSystem.rotation.y += 0.0002;
    }
  }

  renderer.render(scene, camera);
}

function initialize3DCanvas() {
  // Wrap in requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(initializeCanvas);
}

// ==================== GSAP SCROLL ANIMATIONS ====================
function initializeScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // About section animation
  gsap.to('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      end: 'center center',
      scrub: 1,
      markers: false
    },
    opacity: 1,
    y: 0,
    duration: 1
  });

  // Project cards stagger animation
  gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.5,
        markers: false
      },
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      delay: index * 0.1
    });
  });

  // Skill cards animation
  gsap.utils.toArray('.skill-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 0.3,
        markers: false
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.08
    });
  });

  // Section headers animation
  gsap.utils.toArray('.section-header').forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 0.5,
        markers: false
      },
      opacity: 0,
      y: 40,
      duration: 0.8
    });
  });

  // Stat items animation
  gsap.utils.toArray('.stat-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.3,
        markers: false
      },
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 0.6,
      delay: index * 0.1
    });
  });
}

// ==================== MOBILE MENU ====================
function initializeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-container')) {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    }
  });
}

// ==================== ANIMATIONS ====================
function initializeAnimations() {
  // Navbar scroll animation
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.4)';
    } else {
      navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.2)';
    }
  });

  // CTA button ripple effect
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      gsap.to(ctaButton, {
        scale: 0.95,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      });
    });
  }
}

// ==================== BUTTON ANIMATIONS ====================
function initializeButtonAnimations() {
  document.querySelectorAll('.project-btn, .submit-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Skill card glow effect
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// ==================== CONTACT FORM ====================
function initializeContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);

      // Success animation
      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;

      gsap.to(submitBtn, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      });

      submitBtn.textContent = '✓ Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';

      setTimeout(() => {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)';
      }, 2000);
    });
  }
}

// ==================== SMOOTH SCROLL ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      gsap.to(window, {
        scrollTo: {
          y: target,
          autoKill: false
        },
        duration: 1,
        ease: 'power2.inOut'
      });
    }
  });
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
  }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Throttle scroll events for better performance
let ticking = false;
function requestTick() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      ticking = false;
    });
    ticking = true;
  }
}

// Intersection Observer for lazy animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card').forEach(el => {
  observer.observe(el);
});

// ==================== REDUCE MOTION SUPPORT ====================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = 'auto';
  gsap.globalTimeline.timeScale(0.6);
}
