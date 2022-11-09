const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', e => {
    e.preventDefault();

    fetch(`http://localhost:3000/movies/${e.target.children[1].value}`)
    .then(r => r.json())
    .then(d => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = d.title;
        summary.innerText = d.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);