var modal        = document.querySelector('.focus-modal');
var modalButton  = document.querySelector('.focus-modal-button');
var modalOverlay = document.querySelector('.focus-modal-overlay');
var cancelButton = document.querySelector('.focus-modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);

// Get a list of tabbable elements here:
// https://github.com/jkup/focusable


function getFocusableElements(node){
  let focusableElementsSelector =`a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]`,
     focusableElements = node.querySelectorAll(focusableElementsSelector);

  focusableElements = Array.prototype.slice.call(focusableElements, 0);

  return {
    firstElement: focusableElements[0],
    lastElement: focusableElements[focusableElements.length -1]
  };
}

function trap(e) {
  let focus = getFocusableElements(modal);
  if(e.keyCode === 9 && e.shiftKey) {
    if(document.activeElement === focus.firstElement) {
      e.preventDefault();
      focus.lastElement.focus();
    }
  } else if(e.keyCode === 9) {
    if(document.activeElement === focus.lastElement) {
      e.preventDefault();
      focus.firstElement.focus();
    }
  }  else if(e.keyCode === 27) {
    close();
  }

}

function open(e) {
  // Show the modal and overlay
  var previouslyFocus = document.activeElement;
  modal.addEventListener("keydown", trap);

  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
}

function close() {
  // Hide the modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
