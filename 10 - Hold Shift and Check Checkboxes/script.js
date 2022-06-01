const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  //console.log(e);
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if(checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween;
            console.log('check in between');
        }

        if(inBetween) {
            checkbox.checked = true;
        }
    })
  }

  lastChecked = this;
  console.log(this.checked);
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
