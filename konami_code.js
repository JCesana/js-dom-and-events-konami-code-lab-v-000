const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

function init() {
  let index = 0;

  const konamiCode = function(e) {
    let key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      console.log(e);
      index++;

      if (index === code.length) {
        alert("Konami Code enabled!");

        index = 0;
      }
    } else {
      console.log(e);
      index = 0;
    }
  }

  document.body.addEventListener('keydown', konamiCode);
}

init();
