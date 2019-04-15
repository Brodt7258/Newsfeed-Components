// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    this.closeButton = this.domElement.querySelector('.close');
    this.closeButton.addEventListener('click', () => this.deleteArticle());

    this.open = false;
    
  }

  
  
  expandArticle () {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    //this.domElement.classList.toggle('article-open');

    const article = this.domElement.querySelector('.article-content');
    if (!this.domElement.classList.contains("closed")) {
        TweenLite.to(article, 0.3, { height: 0, opacity: 0 });
        this.domElement.classList.add("closed");
        this.expandButton.textContent = 'Click to Expand';
    } else {
        TweenLite.set(article, { height: "auto", opacity: 1 });
        TweenLite.from(article, 0.5, { height: 0, opacity: 0 });
        this.domElement.classList.remove("closed");
        this.expandButton.textContent = 'Click to Close';
    }

    this.closeButton.style.cssText = "display: initial";
  }
    

  deleteArticle() {
    
    TweenLite.to(this.domElement, 0.3, 
      { 
        width: '25%',
        margin: 'auto',
        height: 0,
        padding: 0,
        opacity: 0,
        onComplete: () => {
          this.domElement.parentNode.removeChild(this.domElement);
        }, 
      });
  }
}



/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
document.body.querySelectorAll('.article')
  .forEach(e => new Article(e));
// let articles;

