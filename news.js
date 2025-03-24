// const newsArticles = [
//   {
//     id: 1,
//     title: "MSCPCR awaits report on filicide",
//     year: 2022,
//     link: "https://theshillongtimes.com/2022/06/14/mscpcr-awaits-report-on-filicide/"
//   },
//   {
//     id: 2,
//     title: "MSCPCR urged for stringent action against MeECL",
//     year: 2022,
//     link: "https://themeghalayan.com/mscpcr-urged-for-stringent-action-against-meecl/"
//   },
//   {
//     id: 3,
//     title: "Meghalaya students got PM’s authored book entitled Exam Warriors ",
//     year: 2022,
//     link: "https://www.syllad.com/meghalaya-students-got-pms-authored-book-entitled-exam-warriors/"
//   },
//   {
//     id: 4,
//     title: "MSCPCR condemns gang rape on minors",
//     year: 2022,
//     link: "https://www.syllad.com/mscpcr-condemns-gang-rape-on-minors/"
//   },
//   {
//     id: 5,
//     title: "MSCPCR launches youtube channel",
//     year: 2022,
//     link: "https://meghalayanews24.com/mscpcr-launches-youtube-channel/"
//   },
//   {
//     id: 6,
//     title: "Meghalaya HC orders surprise checks on Army vehicles in light of allegations of drug transport ",
//     year: 2022,
//     link: "https://morungexpress.com/meghalaya-hc-orders-surprise-checks-on-army-vehicles-in-light-of-allegations-of-drug-transport"
//   },
//   {
//     id: 7,
//     title: "Meghalaya Assembly Committee on Empowerment of Women (MACEW) informed that the State Government has decided to provide an ex-gratia payment to the tune of Rs to the family",
//     year: 2022,
//     link: "https://helloshillong.in/meghalaya-assembly-committee-on-empowerment-of-women-macew-informed-that-the-state-government-has-decided-to-provide-an-ex-gratia-payment-to-the-tune-of-rs-to-the-family/"
//   }, {
//     id: 8,
//     title: "Shillong hosts workshop on child rights ",
//     year: 2022,
//     link: "https://www.thesangaiexpress.com/Encyc/2022/3/29/Newmai-News-NetworkShillong-Mar-29-The-National-Commission-for-Protection-of-Child-Rights-NCPCR.amp.html"
//   }, {
//     id: 9,
//     title: "NOTIFICATION ON MEDIA ETHICS CODE ",
//     year: 2022,
//     link: "https://meghalaya.gov.in/sites/default/files/circulars/Notification_ML_15_2014_Pt_232.pdf"
//   }, {
//     id: 10,
//     title: "NCPCR ORGANISES WORKSHOP ON CHILD RIGHTS FOR MEDIA PERSONNEL OF NE STATES IN SHILLONG ON 29.03.2022  ",
//     year: 2022,
//     link: "http://www.megipr.gov.in/pr.asp?dt=29-03-2022"
//   }, {
//     id: 11,
//     title: "Sikkim team attends workshop on child rights for journalists ",
//     year: 2022,
//     link: "https://www.summittimes.com/single-post/sikkim-team-attends-workshop-on-child-rights-for-journalists"
//   }, {
//     id: 12,
//     title: "Mother of minor children in Nongrah to get ex gratia of Rs 5 lakh ",
//     year: 2022,
//     link: "https://meghalayamonitor.com/mother-of-minor-children-in-nongrah-to-get-ex-gratia-of-rs-5-lakh/"
//   },
//   ];
  
//   let selectedArticleUrl = null;
//   const newsContainer = document.querySelector('.news-container');
//   const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
//   const continueButton = document.getElementById('continueButton');
  
//   // Create article elements
//   function createArticleElement(article) {
  
//     const articleElement = document.createElement('article');
//     articleElement.className = 'news-article';
//     articleElement.innerHTML = `
//       <div class="article-header">
//         <div>
//           <h2 class="article-title">${article.title}</h2>
//           <p class="article-date">${article.date}</p>
//         </div>
//         <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//           <polyline points="15 3 21 3 21 9"></polyline>
//           <line x1="10" y1="14" x2="21" y2="3"></line>
//         </svg>
//       </div>
//     `;
  
//     articleElement.addEventListener('click', () => {
//       selectedArticleUrl = article.url;
//       modal.show();
//     });
  
//     return articleElement;
//   }
  
//   // Render all articles
//   function renderArticles() {
//     newsContainer.innerHTML = '';
//     newsArticles.forEach(article => {
//       newsContainer.appendChild(createArticleElement(article));
//     });
//   }
  
//   // Handle continue button click
//   continueButton.addEventListener('click', () => {
//     if (selectedArticleUrl) {
//       window.open(selectedArticleUrl, '_blank');
//     }
//     modal.hide();
//   });
  
//   // Initialize the page
//   renderArticles();