
const form = document.body.querySelector('form');

form.querySelector('button')
  .addEventListener('click', (e) => {
    e.preventDefault();

    const submission = { //get the relevant info from the page
      title: form.querySelector('input').value,
      date: new Date(),
      body: form.querySelector('textarea').value.split('\n').filter(e => e !== '')
    };

    form.querySelector('input').value = ''; //reset the user inputs
    form.querySelector('textarea').value = '';

    const article = document.createElement('div'); //build out the new article to be added
    article.classList.add('article');
    article.innerHTML = `
      <div class="article-header">
        <h2>${submission.title}</h2>
        <p class="date">
          ${submission.date.toString().substring(4, 15) /* Vanilla JS dates are kind of awful, and I refuse to format any further */}
        </p>
        <i class="far fa-times-circle close"></i>
      </div>
      <div class="article-content">
        ${submission.body.map(e => `<p>${e}</p>`).join('')}
      </div>
      <span class='expandButton'></span>
    `; // Were this 'real', it would need to be sanitised of potentially malicious inputs.
       // I'm not a security expert, better to use a canned module for that

    document.body.querySelector('.articles')
      .appendChild(article); //add it to the dom

    TweenLite.from(article, 0.3, //animate its appearance on screen.  Literally the deletion animation, played in reverse
      { 
        width: '25%',
        margin: 'auto',
        height: 0,
        padding: 0,
        opacity: 0,
        onComplete: () => {
          article.style.cssText = ''; //eliminate some residual inline styles from tweening that would cause problems
        }
      });
    

    new Article(article); //decorate it with the pre-built functions of the Article class
  });
  //So, this got somewhat messy.  On a larger project, I'd try to split more of this up.
  //Or just use React, since it's basically built for making this stuff super easy.


// Auto-resizing for the textarea
const tx = form.querySelector('textarea');

tx.setAttribute('style', `height: ${tx.scrollHeight}px; overflow-y: hidden;`);
tx.addEventListener("input", OnInput, false);

function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}
