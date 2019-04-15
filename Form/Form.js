const form = document.body.querySelector('form');

form.querySelector('button')
  .addEventListener('click', (e) => {
    e.preventDefault();

    const submission = {
      title: form.querySelector('input').value,
      date: Date.now(),
      body: form.querySelector('textarea').value.split('\n').filter(e => e !== '')
    };
    
    form.querySelector('input').value = '';
    form.querySelector('textarea').value = '';

    console.log(submission);
  })



// Auto-resizing for the textarea
const tx = form.querySelector('textarea');

tx.setAttribute('style', `height: ${tx.scrollHeight}px; overflow-y: hidden;`);
tx.addEventListener("input", OnInput, false);

function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}
