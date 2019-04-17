class Article {
  constructor(domElement) {
    this.domElement = domElement;

    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Click to Expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());

    this.closeButton = this.domElement.querySelector('.close');
    this.closeButton.addEventListener('click', () => this.deleteArticle());

    this.open = false;
  }
  
  expandArticle () {
    // I first tried doing this as an IIFE with a toggle variable in the closure.  Kept losing its 'this' binding
    // Nothing I tried fixed that.  So I gave up and went with a class property.
    const article = this.domElement.querySelector('.article-content');
    if (this.open) {
        TweenLite.to(article, 0.3, { height: 0, opacity: 0 });
        this.expandButton.textContent = 'Click to Expand';
    } else {
        TweenLite.set(article, { height: "auto", opacity: 1 });   // Smooth transitions of dynamic height seem particularly difficult
        TweenLite.from(article, 0.5, { height: 0, opacity: 0 });  // This appears to get around the issue though.  Best option I found.
        this.expandButton.textContent = 'Click to Close';
    }
    this.open = !this.open;

    this.closeButton.style.cssText = "display: initial"; // The content has been viewed at least once?  Offer the delete button
  }    

  deleteArticle() {
    
    TweenLite.to(this.domElement, 0.3, { // Animate the article's removal from the page
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

document.body.querySelectorAll('.article')
  .forEach(e => new Article(e));
