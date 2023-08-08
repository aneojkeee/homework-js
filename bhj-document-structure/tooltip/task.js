const allTips = Array.from(document.getElementsByClassName('has-tooltip'));
let lastElement

function toolTipsActive(e) {
    e.preventDefault();
    let deletableElement = document.getElementsByClassName("tooltip tooltip_active")[0];
    if (deletableElement) {
        deletableElement.remove();
    }
    let tipText = this.title;
    this.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${tipText}</div>`);
}



for (let i = 0; i < allTips.length; i++) {
    const element = allTips[i];
    element.addEventListener('click', toolTipsActive);
}