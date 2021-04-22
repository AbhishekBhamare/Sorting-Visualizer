function getDelay() {
  var x = document.getElementById("myRange");
  return x.value;
}

async function BubbleSort(){
  let delay = getDelay();
  delay = 501-delay;
  let bars = document.querySelectorAll(".arrayBar");

  for(let i=0; i<bars.length-1; ++i){

    for(let j=0; j<bars.length-i-1; ++j){
      bars[j].style.backgroundColor = "orange";
      bars[j+1].style.backgroundColor = "#EF3F3F";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var val1 = parseInt(bars[j].style.height, 10);
      var val2 = parseInt(bars[j+1].style.height, 10);

      if(val1 > val2){
          let temp = bars[j].style.height;
          bars[j].style.height = bars[j+1].style.height;
          bars[j+1].style.height = temp;

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        bars[j].style.backgroundColor = "#BB8BB3";
        bars[j+1].style.backgroundColor = "#BB8BB3";
      }
        else{
          bars[j].style.backgroundColor = "#BB8BB3";
          bars[j+1].style.backgroundColor = "#BB8BB3";
        }
      }
      bars[bars.length-i-1].style.backgroundColor = "#13C366";
    }
    bars[0].style.backgroundColor = "#13C366";
}
