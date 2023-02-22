console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const body = document.querySelector('[data-js="body"]');

const newEntry = document.createElement("article");
newEntry.classList.add("post");
newEntry.innerHTML = `
<p class="post__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <footer class="post__footer">
        <span class="post__username">@username</span>
        <button type="button" class="post__button" data-js="like-button-new">
          ♥ Like
        </button>
      </footer>
      `;
const likeButtonNew = newEntry.querySelector('[data-js="like-button-new"]');
likeButtonNew.addEventListener("click", handleLikeButtonClick);
body.append(newEntry);
/* const likeButtonNew = document.querySelector('[data-js="like-button-new"]');
likeButtonNew.addEventListener("click", handleLikeButtonClick); */
/* <article class="post" data-js="card">
      
    </article> */
