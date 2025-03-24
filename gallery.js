// Photo data
const photos = [
    {
      id: 1,
      url: 'pics for web/Awareness on JJAct Early Marriage and Other Child Issues (3).jpg',
      caption: 'Awareness on JJAct Early Marriage and Other Child Issues',
      alt: ''
    },
    {
      id: 2,
      url: 'pics for web/Awareness on JJAct Early Marriage and Other Child Issues (21).jpg',
      caption: 'Awareness on JJAct Early Marriage and Other Child Issues',
      alt: ''
    },
    {
      id: 3,
      url: 'pics for web/Awareness on JJAct Early Marriage and Other Child Issues (23).jpg',
      caption: 'Awareness on JJAct Early Marriage and Other Child Issues',
      alt: ''
    },
    {
      id: 4,
      url: 'pics for web/Child Safety Week.jpg',
      caption: 'Child Safety Week',
      alt: ''
    },
    {
      id: 5,
      url: 'pics for web/Consultation workshop for ADC on Child Rights.jpg',
      caption: 'Consultation workshop for ADC on Child Rights',
      alt: 'Workshop session'
    },
    {
      id: 6,
      url: 'pics for web/Counselling workshop.jpg',
      caption: 'Counselling workshop',
      alt: ''
    },
    {
      id: 7,
      url: 'pics for web/Drug abuse.jpg',
      caption: 'International Day Against Drug Abuse & Illicit Trafficking',
      alt: ''
    },
    {
      id: 8,
      url: 'pics for web/Global Campaign protesting Violence against Women.jpg',
      caption: 'Global Campaign protesting Violence Against Women',
      alt: ''
    },
    {
      id: 9,
      url: 'pics for web/IMG-20220117-WA0033.jpg',
      caption: 'Impulse Model Partnership in Addressing Cross Border Human Trafficking with Bangladesh',
      alt: ''
    },
    {
      id: 10,
      url: 'pics for web/youtube launch.png',
      caption: 'Shri M S Rao, IAS Chief Secretary Govt of Meghalaya launching the YouTube channel',
      alt: ''
    },
    {
      id: 11,
      url: 'pics for web/International Childrens Day nov 2021 with Faith Foundation (13).jpg',
      caption: 'International Childrens Day nov 2021 with Faith Foundation',
      alt: ''
    },
    {
      id: 12,
      url: 'pics for web/International Day for Persons with Disabilities.jpg',
      caption: 'International Day for Persons with Disabilities',
      alt: ''
    },
    {
      id: 13,
      url: 'pics for web/Launch of CFC Shillong.jpg',
      caption: 'Launch of CFC Shillong',
      alt: ''
    },
    {
      id: 14,
      url: 'pics for web/NIFT Convocation with Shri Pyniaid Syiem MLA and Shri Das Director NIFT.jpg',
      caption: 'NIFT Convocation with Shri Pyniaid Syiem MLA and Shri Das Director NIFT',
      alt: ''
    },
    { 
      id: 15,
      url: 'pics for web/POCSO Act 2012 Training at KJP Assembly Centre IGP Shillong.jpg',
      caption: 'POCSO Act 2012 Training at KJP Assembly Centre IGP Shillong',
      alt: ''
    },
    {
      id: 16,
      url: 'pics for web/Project Sashes with Faith foundation.jpg',
      caption: 'Project Sashes with Faith foundation',
      alt: ''
    },
    {
      id: 17,
      url: 'pics for web/regional level or (9).jpg',
      caption: 'Reginal Level OR',
      alt: ''
    },
    {
      id: 18,
      url: 'pics for web/SAMVAAD.jpg',
      caption: 'SAMVAAD',
      alt: ''
    },
    {
      id: 19,
      url: 'pics for web/School Reachout at Bengalee Boys School Laban (1).jpg',
      caption: 'School Reachout at Bengalee Boys School Laban',
      alt: ''
    },
    {
      id: 20,
      url: 'pics for web/School Reachout at Bengalee Boys School Laban (2).jpg',
      caption: 'School Reachout at Bengale Boys School Laban',
      alt: ''
    },
    {
      id: 21,
      url: 'pics for web/State Level Review- Facilities & Status of Newborn Care (1).JPG',
      caption: 'State Level Review- Facilities & Status of Newborn Care',
      alt: ''
    },
    {
      id: 22,
      url: 'pics for web/State Level Review- Facilities & Status of Newborn Care (2).JPG',
      caption: 'State Level Review- Facilities & Status of Newborn Care',
      alt: ''
    },
    {
      id: 23,
      url: 'pics for web/State Level Review- Facilities & Status of Newborn Care.JPG',
      caption: 'State Level Review- Facilities & Status of Newborn Care',
      alt: ''
    },
    {
      id: 24,
      url: 'pics for web/State Level Workshop on Preventing Child Trafficking.JPG',
      caption: 'State Level Workshop on Preventing Child Trafficking',
      alt: ''
    },
    {
      id: 25,
      url: 'pics for web/State Womens Conference 2022.jpg',
      caption: 'State Womens Conference 2022',
      alt: ''
    },
    {
      id: 26,
      url: 'pics for web/Training for Para Legal Volunteers.jpg',
      caption: 'Training for Para Legal Volunteers',
      alt: ''
    },
    {
      id: 27,
      url: 'pics for web/Traning for Safe and Secure transport in collaboration with NCPCR.jpg',
      caption: 'Traning for Safe and Secure transport in collaboration with NCPCR',
      alt: ''
    },
    {
      id: 28,
      url: 'pics for web/Traning for School teachers.jpg',
      caption: 'Traning for School teachers',
      alt: ''
    },
    {
      id: 29,
      url: 'pics for web/Visit from NEDFi.jpg',
      caption: 'Visit from NEDFi',
      alt: ''
    },
    {
      id: 30,
      url: 'pics for web/Visit of Child Rights foundation Kolkotta.jpg',
      caption: 'Visit of Child Rights foundation Kolkata',
      alt: 'Workshop session'
    },
    {
      id: 31,
      url: 'pics for web/with Kong Hasin Kharbhih Founder Director Impulse NGO Network.jpg',
      caption: 'With Kong Hasin Kharbhih Founder Director Impulse NGO Network',
      alt: ''
    },
    {
      id: 32,
      url: 'pics for web/guest.png',
      caption: 'Guest At The ANVIL',
      alt: ''
    },
    
  ];
  
  // DOM Elements
  const gallery = document.querySelector('.photo-gallery');
  const modal = document.getElementById('fullscreen-modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeButton = document.querySelector('.modal-close');
  
  // Create gallery items
  function createGallery() {
    photos.forEach(photo => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      
      galleryItem.innerHTML = `
        <div class="gallery-item-inner">
          <img src="${photo.url}" alt="${photo.alt}">
        </div>
        <p class="gallery-caption">${photo.caption}</p>
      `;
  
      galleryItem.addEventListener('click', () => openModal(photo));
      gallery.appendChild(galleryItem);
    });
  }
  
  // Open modal
  function openModal(photo) {
    modalImage.src = photo.url;
    modalImage.alt = photo.alt;
    modalCaption.textContent = photo.caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Event listeners
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Initialize gallery
  createGallery();