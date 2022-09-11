const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.getElementById("posts");
const postHtml = posts
  .map((post) => {
    return `
        <div class="post">
            <div class="user__details">
              <img class="avatar" src="${post.avatar}" alt="" />
              <div>
                <p class="bold name">${post.name}</p>
                <p class="location">${post.location}</p>
              </div>
            </div>

            <img class="post__image" src="${post.post}" alt="" />
            <div class="utils">
              <img class="icon" src="./images/icon-heart.png" alt="" />
              <img class="icon" src="./images/icon-comment.png" alt="" />
              <img class="icon" src="./images/icon-dm.png" alt="" />
            </div>

            <p class="bold likes">${post.likes} likes</p>
            <p class="comments"><span class="bold">${post.username}</span> ${post.comment}</p>
        </div>
      `;
  })
  .join("");

postContainer.innerHTML = postHtml;
