async function SelectionSort() {
  Disable();
  let bars = document.querySelectorAll(".arrayBar");
   for (var i=0; i<bars.length; i++) {

    bars[i].style.backgroundColor = "orange";
    for (var j=i+1; j<bars.length; j++) {

      bars[j].style.backgroundColor = "#EF3F3F";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var val1 = parseInt(bars[i].style.height, 10);
      var val2 = parseInt(bars[j].style.height, 10);

      if(val1 > val2){
        var temp = bars[i].style.height;
        bars[i].style.height = bars[j].style.height;
        bars[j].style.height = temp;

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        bars[j].style.backgroundColor = "#133748";
      }else{
        bars[j].style.backgroundColor = "#133748";
      }
    }
    bars[i].style.backgroundColor = "#13C366";
  }
  Enable();
}
