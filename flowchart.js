document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas');
  const addBlockButton = document.getElementById('add-block');
  const consoleElement = document.getElementById('console');
  const addEl1 = document.getElementById("add_element1");
  const addEl2 = document.getElementById("add_element2");

  addEl1.addEventListener("click", function(){
    let el1 = document.createElement("div");

    el1.textContent = "Element 1";
    el1.classList.add("create-flowy");

    canvas.appendChild(el1);
  });

  addEl2.addEventListener("click", function() {
    let el2 = document.createElement("div");

    el2.textContent = "Element 2";
    el2.classList.add("create-flowy");

    canvas.appendChild(el2);
  });

  if (!canvas) {
    return;
  }

  const flow = flowy(canvas, {
    drag: true,
    scale: true,
    translate: true,
  });
  
  // write start string to the console element
  consoleElement.textContent = 'Flowchart started\n';
  if (addBlockButton) {
    addBlockButton.addEventListener('click', function () {
      const block = {
        type: 'add-block',
        title: 'New block',
      };

      // flow.add(block);
      window.alert('block added');

      consoleElement.textContent += 'Block added: ' + block.title + '\n';

      flow.add(block);
    });
  }
});
