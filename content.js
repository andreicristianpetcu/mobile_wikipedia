function expandContents(){
  // alert('damn it now it works');
  const colapsableBlock = document.querySelectorAll("h2.collapsible-heading")[0];
  // const colapsableBlock = document.querySelectorAll(".toc-mobile.view-border-box h2.collapsible-heading")[0];
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
window.onload = function(){
  window.setTimeout(expandContents, 500);
};
