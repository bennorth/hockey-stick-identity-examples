(() => {
  const ordinals = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
  ];

  const giftKinds = [
    "a partridge in a pear tree",
    "2 turtle doves",
    "3 French hens",
    "4 calling birds",
    "5 gold rings",
    "6 geese a-laying",
    "7 swans a-swimming",
    "8 maids a-milking",
    "9 ladies dancing",
    "10 lords a-leaping",
    "11 pipers piping",
    "12 drummers drumming",
  ];

  const sliderOffset0 = 1;
  const sliderStride = 38;

  function divOfClass(cls) {
    let div = document.createElement("DIV");
    div.className = cls;
    return div;
  }

  function populateLabels(div) {
    for (let i = 0; i < 14; ++i) {
      let ordinalDiv = divOfClass("day-ordinal");
      if (i < 12) ordinalDiv.innerText = ordinals[11 - i];
      div.appendChild(ordinalDiv);

      let giftKindDiv = divOfClass("gift-kind");
      if (1 <= i && i < 13) giftKindDiv.innerText = giftKinds[12 - i];
      div.appendChild(giftKindDiv);

      let giftWhichDiv = divOfClass("gift-index");
      if (2 <= i) giftWhichDiv.innerText = 14 - i;
      div.appendChild(giftWhichDiv);
    }
  }

  const topDiv = document.getElementById("twelve-days");
  const labelsDiv = topDiv.querySelector(":scope #labels");
  populateLabels(labelsDiv);

  function sliderDown(evt) {
    const tgt = evt.currentTarget;
    tgt.setPointerCapture(evt.pointerId);
    tgt.classList.add("dragging");
    tgt.dataset.initialClientY = evt.clientY;
    tgt.dataset.initialTop = tgt.style.top;
  }

  function updateSlider(tgt, sliderPosn) {
    const sliderIdx = parseInt(tgt.dataset.sliderIdx);
    const posnMin = sliderPosns[sliderIdx - 1] + 1;
    const posnMax = sliderPosns[sliderIdx + 1] - 1;
    sliderPosn = Math.max(sliderPosn, posnMin);
    sliderPosn = Math.min(sliderPosn, posnMax);
    const oldCellIdx = sliderPosns[sliderIdx] * 3 + sliderIdx;
    sliderPosns[sliderIdx] = sliderPosn;
    const newCellIdx = sliderPosn * 3 + sliderIdx;
    labelsDiv.children[oldCellIdx].classList.remove("within-window");
    labelsDiv.children[newCellIdx].classList.add("within-window");
    const snappedY = sliderOffset0 + sliderPosn * sliderStride;
    tgt.style.top = `${snappedY}px`;
  }

  function sliderMove(evt) {
    const tgt = evt.currentTarget;
    if (tgt.hasPointerCapture(evt.pointerId)) {
      const rawY =
        parseFloat(tgt.dataset.initialTop) +
        evt.clientY -
        parseFloat(tgt.dataset.initialClientY);
      let sliderPosn = Math.round((rawY - sliderOffset0) / sliderStride);
      updateSlider(tgt, sliderPosn);
    }
  }

  function sliderUp(evt) {
    const tgt = evt.currentTarget;
    tgt.classList.remove("dragging");
  }

  function sliderKey(evt) {
    const tgt = evt.target;
    const sliderIdx = parseInt(tgt.dataset.sliderIdx);
    switch (evt.key) {
      case "ArrowUp":
        updateSlider(tgt, sliderPosns[sliderIdx] - 1);
	evt.preventDefault();
        break;
      case "ArrowDown":
        updateSlider(tgt, sliderPosns[sliderIdx] + 1);
	evt.preventDefault();
        break;
    }
  }

  document.querySelectorAll("#sliders > div").forEach((elt) => {
    elt.addEventListener("pointerdown", sliderDown);
    elt.addEventListener("pointermove", sliderMove);
    elt.addEventListener("pointerup", sliderUp);
    elt.addEventListener("keydown", sliderKey);
  });

  let sliderPosns = [11, 12, 13, 14];
  sliderPosns[-1] = -1;
  ["choose-day", "choose-kind", "choose-which"].forEach((eltId, idx) => {
    const topPx = sliderOffset0 + sliderPosns[idx] * sliderStride;
    document.getElementById(eltId).style.top = `${topPx}px`;
    const cellIdx = sliderPosns[idx] * 3 + idx;
    labelsDiv.children[cellIdx].classList.add("within-window");
  });
})();
