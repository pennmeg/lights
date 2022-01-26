function toggleLights() {
  // ---- Neon Sign
  const neonSign = document.getElementsByClassName("sign--text");
  // ---- Toggle
  const checkbox = document.getElementById("checkbox");
  const sliderBackround = document.getElementById("slider");
  // ---- Select Options
  const selectOptions = document.getElementById("colors--select");
  let color = determineColor(selectOptions);

  if (checkbox.checked) {
    for (let i = 0; i < neonSign.length; i++) {
      neonSign[
        i
      ].style.textShadow = `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #${color}, 0 0 82px #${color}, 0 0 92px #${color}, 0 0 102px #${color}, 0 0 151px #${color}`;
      neonSign[i].classList.remove("off");
    }

    sliderBackround.style.backgroundColor = `#${color}`;
  } else {
    for (let i = 0; i < neonSign.length; i++) {
      neonSign[i].style.textShadow = "none";
      neonSign[i].classList.add("off");
    }

    sliderBackround.style.backgroundColor = "#ccc"; // Back to default gray
  }
}

function determineColor(selectOptions) {
  let color = "7f00ff"; // Purple

  for (let i = 0; i < selectOptions.length; i++) {
    if (selectOptions[i].selected) {
      color = selectOptions[i].value;
    }
  }

  return color ?? "7f00ff";
}

function changeColor(color) {
  const selectOptions = document.getElementById("colors--select");

  for (let i = 0; i < selectOptions.length; i++) {
    if (selectOptions[i].value === color) {
      selectOptions[i].setAttribute("selected", true);
    } else {
      selectOptions[i].setAttribute("selected", false);
    }
  }

  toggleLights();
}
