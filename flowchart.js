document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('canvas');
  const addBlockButton = document.getElementById('add-block');

  if (!canvas) {
    return;
  }

  const flow = flowy(canvas, {
    drag: true,
    scale: true,
    translate: true,
  });

  if (addBlockButton) {
    addBlockButton.addEventListener('click', function () {
      const block = {
        type: 'add-block',
        title: 'New block',
      };

      flow.add(block);
    });
  }
});
