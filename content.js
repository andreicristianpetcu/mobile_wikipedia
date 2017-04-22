const colapsableBlock = document.querySelectorAll(".toc-mobile.view-border-box h2.collapsible-heading")[0];
if (colapsableBlock) {
    const click = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    colapsableBlock.dispatchEvent(click);
}
