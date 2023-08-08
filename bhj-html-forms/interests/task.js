const allCheckBox = Array.from(document.querySelectorAll('.interest__check'));

function isChecked() {
    if (this.closest('ul.interests') === null & this.checked === true) {
        const checkAllBox = Array.from(this.closest('.interest').querySelectorAll('.interest__check'));
        for (let i = 0; i < checkAllBox.length; i++) {
            checkAllBox[i].checked = true;
        }
    } else if (this.closest('ul.interests') === null & this.checked === false) {
        const checkAllBox = Array.from(this.closest('.interest').querySelectorAll('.interest__check'));
        for (let i = 0; i < checkAllBox.length; i++) {
            checkAllBox[i].checked = false;
        }
    }
}

for (let i = 0; i < allCheckBox.length; i++) {
    const checkBoxElement = allCheckBox[i];
    checkBoxElement.onchange = isChecked;
}