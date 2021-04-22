function generateArray() {
  removeAllChildNodes(container);
  array.length = 0;
  for (let i=0; i<size; i++) {
    const val = Math.floor(Math.random() * 90) + 1;
    array.push(val);
    const arrayBar = document.createElement("div");
    arrayBar.classList.add("arrayBar");
    arrayBar.style.height = `${val * 6}px`;
    arrayBar.style.width = `${1/size * 980}px`
    arrayBar.style.transform = `translateX(${i * 1/size * 1300}px)`;
    container.appendChild(arrayBar);
  }
}
generateArray();
function removeAllChildNodes(container) {
   while (container.firstChild) {
       container.removeChild(container.firstChild);
   }
 }
