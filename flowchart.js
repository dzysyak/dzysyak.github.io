document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas');
  const addBlockButton = document.getElementById('add-block');
  const consoleElement = document.getElementById('console');
  const addEl1 = document.getElementById("add_element1");
  const addEl2 = document.getElementById("add_element2");

  addEl1.addEventListener("click", function(){

  });

  addEl2.addEventListener("click", function() {
    
  });

  window.alert('Flowchart loaded');
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
    });
  }
});
