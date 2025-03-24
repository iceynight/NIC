document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners for buttons
  document.getElementById('btn-increase').addEventListener('click', () => adjustFontSize(1));
  document.getElementById('btn-decrease').addEventListener('click', () => adjustFontSize(-1));
  document.getElementById('btn-increase-spacing').addEventListener('click', () => adjustLetterSpacing(0.5));
  document.getElementById('btn-decrease-spacing').addEventListener('click', () => adjustLetterSpacing(-0.5));

  // Fix: Ensure smooth scrolling & focus for "Skip to Content"
  document.getElementById('skip-to-content').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    const mainContent = document.getElementById('main-content');

    // Scroll smoothly
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Wait for scrolling to finish before focusing
    setTimeout(() => {
        mainContent.setAttribute('tabindex', '-1'); // Ensure focusability
        mainContent.focus();
    }, 500); // 500ms delay ensures scroll completes
});

  // Store initial font size and letter spacing
  const textElements = document.querySelectorAll('body *:not(script):not(style):not(meta)');
  textElements.forEach(element => {
      if (!element.dataset.originalFontSize) {
          element.dataset.originalFontSize = window.getComputedStyle(element).fontSize;
          element.dataset.originalLetterSpacing = window.getComputedStyle(element).letterSpacing || '0px';
      }
  });
});

function adjustFontSize(change) {
  document.querySelectorAll('body *:not(script):not(style):not(meta)').forEach(element => {
      const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
      if (!isNaN(currentSize)) {
          const newSize = Math.min(Math.max(currentSize + change, 12), 48);
          element.style.fontSize = `${newSize}px`;
      }
  });
}

function adjustLetterSpacing(change) {
  document.querySelectorAll('body *:not(script):not(style):not(meta)').forEach(element => {
      let currentSpacing = window.getComputedStyle(element).letterSpacing;
      currentSpacing = currentSpacing === 'normal' ? '0px' : currentSpacing; // Fix NaN issue
      const newSpacing = Math.min(Math.max(parseFloat(currentSpacing) + change, -1), 5);
      element.style.letterSpacing = `${newSpacing}px`;
  });
}







// Gallery Functions
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;
let autoScrollInterval;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
  resetAutoScroll();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
  resetAutoScroll();
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(nextImage, 5000);
}

document.querySelector('.gallery-nav.next').addEventListener('click', nextImage);
document.querySelector('.gallery-nav.prev').addEventListener('click', prevImage);

document.addEventListener('DOMContentLoaded', () => {
  autoScrollInterval = setInterval(nextImage, 5000);
});


// Function to create and append news items
// function createNewsItems() {
//   const newsItems = document.getElementById('newsContent');
  
//   // Loop through each news item and create the HTML structure
//   newsItems.forEach(news => {
//     const newsItem = document.createElement('a');
//     newsItem.href = news.link;
//     newsItem.className = 'news-item';
    
//     newsItem.innerHTML = `
       
//         <div>
//             <h2 class="news-title">${news.title}</h2>
//             <p class="news-year">${news.year}</p>
//         </div>
//     `;
    
//     // Append each news item to the container
//     newsContent.appendChild(newsItem);
//   });
// }

// Initialize when DOM is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   createNewsItems();
//   startNewsScrolling(); // Automatically start scrolling
//   ensureFirstItemVisible(); // Ensure the first item is initially visible
// });

// // Function to ensure the first news item is visible
// function ensureFirstItemVisible() {
//   const newsContainer = document.getElementById("newsContent");
//   newsContainer.style.transform = "translateY(0)"; // Ensure first item is visible initially
// }

// // Function to automatically start scrolling of news
// function startNewsScrolling() {
//   const newsContent = document.getElementById('newsContent');
  
//   // Start the scroll animation immediately
//   newsContent.style.animation = "scroll 20s linear infinite"; 
  
//   // Stop scrolling when hovered over (optional)
//   newsContent.addEventListener('mouseenter', () => {
//     newsContent.style.animationPlayState = 'paused';
//   });

//   // Resume scrolling when mouse leaves
//   newsContent.addEventListener('mouseleave', () => {
//     newsContent.style.animationPlayState = 'running';
//   });
// }
// Add any JavaScript functionality if needed
document.addEventListener('DOMContentLoaded', function() {
  // You can add any dynamic functionality here
});

// Initialize Swiper
const swiper = new Swiper('.reports-slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      // >= 768px
      768: {
          slidesPerView: 2,
      },
      // >= 1024px
      1024: {
          slidesPerView: 3,
      }
  }
});

// Function to open PDF in new window
function openPdf(url) {
  window.open(url, '_blank');
}


// Sample annual reports data
const annualReports = [
  {
    id: 1,
    title: "Annual Report 2023-2024 (28.4 MB)",
    thumbnail: "Annual Reports/2023-2024.png",
    pdfUrl: "Annual Reports/8 Annual Report MSCPCR 2023_2024.pdf"
},
{
    id: 2,
    title: "Annual Report 2021-2023 (42.8 MB)",
    thumbnail: "Annual Reports/2021-2023.png",
    pdfUrl: "Annual Reports/7 Annual Report MSCPCR 2021_2023.pdf"
},
{
    id: 3,
    title: "Annual Report 2020-2021 (40.9 MB)",
    thumbnail: "Annual Reports/2020-2021.png",
    pdfUrl: "Annual Reports/6 Annual Report MSCPCR 2020_2021.pdf"
},
{
  id: 4,
  title: "Annual Report 2018-2019 (62.6 MB)",
  thumbnail: "Annual Reports/2018-2019.png",
  pdfUrl: "Annual Reports/5 Annual Report MSCPCR 2018_2019.pdf"
},
{
  id: 5,
  title: "Annual Report 2017-2018 (15.4 MB)",
  thumbnail: "Annual Reports/2017-2018.png",
  pdfUrl: "Annual Reports/4 Annual Report MSCPCR 2017_2018.pdf"
},
{
  id: 6,
  title: "Annual Report 2016-2017 (4.4 MB)",
  thumbnail: "Annual Reports/2016-2017.png",
  pdfUrl: "Annual Reports/3 Annual Report MSCPCR 2016_2017.pdf"
},
{
  id: 7,
  title: "Annual Report 2015-2016 (1.4 MB)",
  thumbnail: "Annual Reports/2015-2016.png",
  pdfUrl: "Annual Reports/2 Annual Report MSCPCR 2015_2016.pdf"
},
{
  id: 8,
  title: "Annual Report 2014-2015 (1.6 MB)",
  thumbnail: "Annual Reports/2014-2015.png",
  pdfUrl: "Annual Reports/1 Annual Report MSCPCR 2014_2015.pdf"
},

];

document.addEventListener('DOMContentLoaded', function() {
  // Get container and buttons
  const container = document.getElementById('reportsContainer');
  // if (!container) {
  //     console.error('Reports container not found!');
  //     return;
  // }

  let scrollPosition = 0;

  // Render reports
  function renderReports() {
     
  }

  // Scroll function
  function scrollReports(direction) {
    const container = document.getElementById('reportsContainer');
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  // Update scroll buttons state
  function updateScrollButtons() {
      const leftButton = document.querySelector('.scroll-left');
      const rightButton = document.querySelector('.scroll-right');
      
      if (leftButton && rightButton) {
          leftButton.disabled = scrollPosition <= 0;
          rightButton.disabled = scrollPosition >= (annualReports.length - 3) * 320;
      }
  }

  // Make scrollReports function available globally
  window.scrollReports = scrollReports;

  // Initialize
  renderReports();
  updateScrollButtons();

  // // Add scroll event listener to update buttons
  // container.addEventListener('scroll', () => {
  //     scrollPosition = container.scrollLeft;
  //     updateScrollButtons();
  // });
});

// Acts Data
const acts = [
  { id: 1, title: "Convention On The Rights Of The Child (705 KB)", pdfUrl: "ACTS/1 CRC_ The Children's version.pdf", thumbnail: "ACTS/Act thumbnails/1 CRC_ The Children's version.PNG" },
  { id: 2, title: "The Juvenile Justice Act, 2015 (227 KB)", pdfUrl: "ACTS/2 JJ act 2015.pdf", thumbnail: "ACTS/Act thumbnails/2 JJ Act.jpg" },
  { id: 3, title: "User Handbook on Protection Of Children From Sexual Offences Act, 2012 (8.7 MB)", pdfUrl: "ACTS/3 USER HANDBOOK pocso.pdf", thumbnail: "ACTS/Act thumbnails/3 USER HANDBOOK pocso.PNG" },
  { id: 4, title: "Prohibition of Child Marriage Act, 2006 (241 KB)", pdfUrl: "ACTS/4 National Policy for Children.pdf", thumbnail: "ACTS/Act thumbnails/4 PROHIBITION-OF-CHILD-MARRIAGE-ACT-2006.png" },
  { id: 5, title: "Right To Education Act, 2009 (231 KB)", pdfUrl: "ACTS/5 Child Labour Act.pdf", thumbnail: "ACTS/Act thumbnails/5 RTEthumb.png" },
  { id: 6, title: "The Child Labour (Prohibition And Regulation) Act, 1986 (450 KB)", pdfUrl: "ACTS/6 The Child Labour (Prohibition and Regulation) Amendment Act, 2016.pdf", thumbnail: "ACTS/Act thumbnails/6 Labour.JPG" },
  { id: 7, title: "The Child Labour (Prohibition And Regulation) Act, 2016 (918 KB)", pdfUrl: "ACTS/7 THE CHILD LABOUR (PROHIBITION AND REGULATION) AMENDMENT ACT, 2016(1).pdf", thumbnail: "ACTS/Act thumbnails/7 Child labour.JPG"},
  
  // Add more acts here
];

// Function to create Act item HTML
function createActItem(act) {
  return `
    <div
    class="act-card">
      <div class="act-image">
        <img src="${act.thumbnail || '#'}" alt="${act.title}">
      </div>
      <div class="act-content">
        <h3 class="act-title">${act.title}</h3>
        <a href="${act.pdfUrl}" class="view-pdf-btn" target="_blank">View PDF</a>
      </div>
    </div>
  `;
}

// Inject Acts into container
document.getElementById('actsContainer').innerHTML = acts.map(createActItem).join('');


// Render Acts
function renderActs() {
  const container = document.getElementById('actsContainer');
  container.innerHTML = acts.map(createActItem).join('');
  //acts.forEach(act => renderPdfThumbnail(act.pdfUrl, `pdf-thumbnail-${act.id}`));
}

// Scroll function for Acts
function scrollActs(direction) {
  const container = document.getElementById('actsContainer');
  const scrollAmount = 300;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Initialize Acts
document.addEventListener('DOMContentLoaded', function() {
  renderActs();
});

// Scroll function for Annual Reports
function scrollAnnualReports(direction) {
  const container = document.getElementById('annualReportsContainer');
  const scrollAmount = 300;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Initialize Annual Reports
document.addEventListener('DOMContentLoaded', function() {
  renderAnnualReports();
});

// Function to create Annual Report item HTML
function createAnnualReportItem(report) {
  return `
    <div class="annual-report-card">
      <div class="annual-report-thumbnail">
        <img src="${report.thumbnail || '#'}" alt="${report.title}">
      </div>
      <div class="annual-report-content">
        <h3 class="annual-report-title">${report.title}</h3>
        <a href="${report.pdfUrl}" class="view-pdf-btn" target="_blank">View PDF</a>
      </div>
    </div>
  `;
}

// Render Annual Reports
function renderAnnualReports() {
  const container = document.getElementById('annualReportsContainer');
  container.innerHTML = annualReports.map(createAnnualReportItem).join('');
}

// Initialize Lucide icons
//lucide.createIcons();

// Function to create PDF item HTML
function createPdfItem(pdf) {
  return `
      <div class="pdf-item">
          <i class="lucide-file-text pdf-icon"></i>
          <div>
              <h4 class="h6 mb-1">${pdf.title}</h4>
              <small class="text-muted">${pdf.date}</small>
          </div>
      </div>
  `;
}

// Initialize PDF scroll content
function initializePdfScroll() {
  const container = document.querySelector('.pdf-scroll-content');
  if (!container) return;

  // Add original items
  let content = pdfs.map(createPdfItem).join('');
  // Duplicate items for continuous scroll
  content = content + content;
  
  container.innerHTML = content;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePdfScroll();
});

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("header.html")
//       .then(response => response.text())
//       .then(data => document.getElementById("header").innerHTML = data);

//   fetch("footer.html")
//       .then(response => response.text())
//       .then(data => document.getElementById("footer").innerHTML = data);
// });

function openVideo(videoId) {
  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

