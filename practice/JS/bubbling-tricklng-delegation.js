// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = () => {
//   console.log("Parent");
// };

// const onClickChild = () => {
//   console.log("Child");
// };

// -----------------------------------------------------------------------------------------------------------------------------------

// // Trickling down

// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = () => {
//   console.log("Parent");
// };

// const onClickChild = () => {
//   console.log("Child");
// };

// document
//   .getElementById("grandparent")
//   .addEventListener("click", onClickGrandparent, true);
// document
//   .getElementById("parent")
//   .addEventListener("click", onClickParent, true);
// document.getElementById("child").addEventListener("click", onClickChild, true);

// // Output
// // Grandparent
// // Parent
// // Child

// -----------------------------------------------------------------------------------------------------------------------------------

// // Bubbling up

// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = () => {
//   console.log("Parent");
// };

// const onClickChild = () => {
//   console.log("Child");
// };

// // By default useCapture flag is false
// document
//   .getElementById("grandparent")
//   .addEventListener("click", onClickGrandparent, false);
// document
//   .getElementById("parent")
//   .addEventListener("click", onClickParent, false);
// document.getElementById("child").addEventListener("click", onClickChild, false);

// // Output
// // Child
// // Parent
// // Grandparent

// -----------------------------------------------------------------------------------------------------------------------------------

// // Accoring to W3C, first trickling happens and then bubbling happens

// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = () => {
//   console.log("Parent");
// };

// const onClickChild = () => {
//   console.log("Child");
// };

// // By default useCapture flag is false
// document
//   .getElementById("grandparent")
//   .addEventListener("click", onClickGrandparent, true);
// document
//   .getElementById("parent")
//   .addEventListener("click", onClickParent, false);
// document.getElementById("child").addEventListener("click", onClickChild, true);

// // Output
// // Grandparent
// // Child
// // Parent

// -----------------------------------------------------------------------------------------------------------------------------------

// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = () => {
//   console.log("Parent");
// };

// const onClickChild = () => {
//   console.log("Child");
// };

// // By default useCapture flag is false
// document
//   .getElementById("grandparent")
//   .addEventListener("click", onClickGrandparent, false);
// document
//   .getElementById("parent")
//   .addEventListener("click", onClickParent, true);
// document.getElementById("child").addEventListener("click", onClickChild, false);

// // Output
// // Parent
// // Child
// // Grandparent

// -----------------------------------------------------------------------------------------------------------------------------------

// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = () => {
//   console.log("Parent");
// };

// const onClickChild = (event) => {
//   console.log("Child");
//   event.stopPropagation();
// };

// // By default useCapture flag is false
// document
//   .getElementById("grandparent")
//   .addEventListener("click", onClickGrandparent, false);
// document
//   .getElementById("parent")
//   .addEventListener("click", onClickParent, false);
// document.getElementById("child").addEventListener("click", onClickChild, false);

// // Output
// // Child

// -----------------------------------------------------------------------------------------------------------------------------------

// const onClickGrandparent = () => {
//   console.log("Grandparent");
// };

// const onClickParent = (event) => {
//   console.log("Parent");
//   event.stopPropagation();
// };

// const onClickChild = () => {
//   console.log("Child");
// };

// // By default useCapture flag is false
// document
//   .getElementById("grandparent")
//   .addEventListener("click", onClickGrandparent, true);
// document
//   .getElementById("parent")
//   .addEventListener("click", onClickParent, true);
// document.getElementById("child").addEventListener("click", onClickChild, true);

// // Output
// // Grandparent
// // Parent

// -----------------------------------------------------------------------------------------------------------------------------------

// Delegation

// document.getElementById("categories").addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log(event.target.textContent);
//   }
// });

// -----------------------------------------------------------------------------------------------------------------------------------

// Delegation

document.querySelector("#form").addEventListener("keyup", (event) => {
  if (event.target.dataset.uppercase !== undefined) {
    event.target.value = event.target.value.toUpperCase();
  }
});
