function expandContents(){
  const colapsableBlock = document.querySelectorAll("h2.collapsible-heading")[0];
  if (colapsableBlock) {
    const isNotExpanded = !colapsableBlock.classList.contains("open-block");
    if (isNotExpanded){
      const click = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      colapsableBlock.dispatchEvent(click);
    }
  }
};
window.addEventListener("load", function(event) {
   window.setTimeout(expandContents, 600);
});
