const setToLocalStorage = (key, data) => {
  const stringedData = JSON.stringify(data);
  localStorage.setItem(key, stringedData);
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);
  return parsedData;
};

const getComment = (
  id,
  fullName,
  description,
  parent,
  children,
  likes,
  dislikes
) => {
  return {
    id,
    fullName,
    description,
    parent,
    children,
    likes,
    dislikes,
  };
};

let commentsStore = [],
  idCount = 0;

if (getFromLocalStorage("comments") !== null) {
  commentsStore = getFromLocalStorage("comments");
}

if (getFromLocalStorage("idCount") !== null) {
  idCount = getFromLocalStorage("idCount");
}

const mainName = document.getElementById("main-name");
const comment = document.getElementById("main-comment");

const renderComment = (comment) => {
  const { id, fullName, description, children, likes, dislikes } = comment;
  console.log("id", id);
  let listElem = `
			      <li id="comment-${id}">
          <div>
            <hr />
            <span>${fullName}</span><br />
            <span>${description}</span>
            <div>
              <span id="likes-${id}" class="pointer">Likes :- ${likes}</span>
              <span id="dislikes-${id}" class="pointer">Dislikes :- ${dislikes}</span>
            </div>
            <div>
            <button type="button" id="reply-${id}">Reply</button>
            <button type="button" id="delete-${id}">Delete</button>
            </div>
          </div>
        `;
  if (children.length) {
    listElem += `<ul id="childlist-${id}">`;
    children.forEach((commentId) => {
      const foundIndex = commentsStore.findIndex(
        (comm) => comm.id === commentId
      );
      listElem += renderComment(commentsStore[foundIndex]);
    });
    listElem += "</ul>";
  }
  listElem += "</li>";
  return listElem;
};

// Pass parent comment from rootComments to renderComment
const renderComments = () => {
  const rootComments = [];
  console.log("renderComments", commentsStore);
  commentsStore.forEach((comment) => {
    if (comment.parent === null) {
      rootComments.push(comment);
    }
  });
  let commentList = "";
  console.log("rootComments", rootComments);
  rootComments.forEach((comment) => {
    console.log("comment", comment);
    commentList += renderComment(comment);
  });
  document.getElementById("commentsList").innerHTML = commentList;
};

const addComment = (name, description, parent) => {
  const newId = getFromLocalStorage("idCount") ?? 0;
  const newComment = getComment(newId, name, description, parent, [], 0, 0);
  commentsStore.push(newComment);
  if (parent != null) {
    const parentIndex = commentsStore.findIndex(
      (comment) => comment.id === parseInt(parent)
    );
    commentsStore[parentIndex].children.push(newId);
  }
  setToLocalStorage("idCount", newId + 1);
  setToLocalStorage("comments", commentsStore);
  renderComments();
};

const getNestedChildren = (children) => {
  let k = [];
  function nest(children) {
    for (c of children) {
      const ind = commentsStore.findIndex((i) => i.id === c);
      if (commentsStore[ind].children.length === 0) k.push(c);
      else {
        k.push(c);
        nest(commentsStore[ind].children);
      }
    }
  }
  nest(children);
  return k;
};

const deleteComment = (id) => {
  const foundIndex = commentsStore.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  const parent = commentsStore[foundIndex].parent;
  if (parent != null) {
    const parentIndex = commentsStore.findIndex(
      (comment) => comment.id === parseInt(parent)
    );
    commentsStore[parentIndex].children = commentsStore[parent].children.filter(
      (child) => child !== parseInt(id)
    );
  }
  const toBeDeleted = getNestedChildren(commentsStore[foundIndex].children);
  toBeDeleted.push(parseInt(id));
  commentsStore = commentsStore.filter(
    (comment) => !toBeDeleted.includes(comment.id)
  );
  setToLocalStorage("comments", commentsStore);
  renderComments();
};

// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
const main = () => {
  if (commentsStore.length) renderComments();
  document.getElementById("add-main-comment").addEventListener("click", () => {
    addComment(mainName.value, comment.value, null);
    console.log(commentsStore);
  });

  const commentsList = document.getElementById("commentsList");
  commentsList.addEventListener(
    "click",
    (event) => {
      if (
        event.target.nodeName === "SPAN" ||
        event.target.nodeName === "BUTTON"
      ) {
        console.log("kk", event.target.id);
        let parts = event.target.id.split("-");
        let type = parts[0];
        let id = parts[parts.length - 1];
        let abc = event.target.id.split("reply-")[1];
        if (type == "reply") {
          let inputElem = `
					<li id="input-${abc}">
					<div class="comment-input-row">
						<div>
							<input type="text" placeholder="Name" id="name-${abc}" class="name-handle" />
						</div>
					</div>
					<div>
						<textarea rows="5" id="content-${abc}" class="comment-box" placeholder="Your reply...."></textarea>
						<div>
							<button id="addreply-${abc}" class="add-btn">Submit</button>
						</div>
					</div>
					</li>
					`;

          let childListElemId = `childlist-${
            event.target.id.split("reply-")[1]
          }`;
          let childListElem = document.getElementById(childListElemId);

          if (childListElem == null) {
            childListElem = `<ul id="childlist-${
              event.target.id.split("reply-")[1]
            }"> ${inputElem} </ul>`;
            document.getElementById(`comment-${abc}`).innerHTML +=
              childListElem;
          } else {
            childListElem.innerHTML = inputElem + childListElem.innerHTML;
          }
        } else if (type == "addreply") {
          let content = document.getElementById(`content-${abc}`).value;
          let name = document.getElementById(`name-${abc}`).value;
          addComment(name, content, id);
        } else if (type == "likes" || type == "dislikes") {
          const foundIndex = commentsStore.findIndex(
            (comment) => comment.id == id
          );
          console.log(foundIndex);
          commentsStore[foundIndex][type]++;
          setToLocalStorage("comments", commentsStore);
          renderComments();
        } else if (type == "delete") {
          deleteComment(id);
        }
      }
    },
    false
  );
};
//   },
//   false
// );
main();
