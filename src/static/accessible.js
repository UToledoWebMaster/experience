     let keyCode;
     document.addEventListener('keydown', function (event) {
          console.log("keydown working");
          keyCode = (event.keyCode ? event.keyCode : event.which);
          if (keyCode === 9) {
               // add class to body tag
               // let body = document.getElementsByTagName('body')[0];
               document.body.classList.add("accessible");
          }
     });