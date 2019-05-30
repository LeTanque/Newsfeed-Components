// Using our reference to the domElement, toggle a class to expand or hide the article.
class Article {
  constructor(article) {
    this.domElement = article;
    this.expandButton = article.querySelector('.expandButton');
    this.expandButton.textContent = '▼';
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.domElement.addEventListener('click', () => this.closeArticle());
  }
  expandArticle() {
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent = '';
    event.stopPropagation(); 
    // this.domElement.slideDown(1000); // Tried using jQuery, need to read up more on it
  }
  closeArticle() { // This is better than a close button, IMO. user clicks/taps on article and it closes.
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent = '▼';
    event.stopPropagation(); 
  }
}

/* START HERE: 
- Select all classes named ".article" and assign that value to the articles variable.  
- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles 
  NodeList and create a new instance of Article by passing in each article as a parameter to the constructor. */
let articles = document.querySelectorAll('.article');
articles.forEach( article => {
  return new Article(article);
});

// slideDown slideUp
