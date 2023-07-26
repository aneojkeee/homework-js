const allDropDownList = document.getElementsByClassName('dropdown__value');
const dropDownList = Array.from(allDropDownList);
const dropDownItem = Array.from(document.getElementsByClassName('dropdown__link'));

function dropDown() {
    let clDrop = Array.from(document.getElementsByClassName('dropdown__list'));
    if (clDrop[0].className === "dropdown__list") {
        clDrop[0].className = "dropdown__list dropdown__list_active";
    } else {
        clDrop[0].className = "dropdown__list";
    }
    return false;
}

function clickItem(event) {
    let topItem = Array.from(document.getElementsByClassName('dropdown__value'));
    topItem[0].textContent = this.textContent;
    event.preventDefault();
    dropDown();
}

dropDownList[0].addEventListener('click', dropDown);

for (let i = 0; i < dropDownItem.length; i++) {
    dropDownItem[i].addEventListener('click', clickItem);
}