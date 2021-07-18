async function InsertionSort(){
  Disable();
  let bars = document.querySelectorAll(".arrayBar");
  let key,j;
  bars[0].style.backgroundColor = "orange";
  for(let i=1; i<bars.length; ++i){
    key = parseInt(bars[i].style.height, 10);
    j=i-1;

    bars[i].style.backgroundColor = "#EF3F3F";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    while(j>=0 && parseInt(bars[j].style.height, 10) > key){
      bars[j].style.backgroundColor = "orange";
      let temp = bars[j+1].style.height;
      bars[j+1].style.height = bars[j].style.height;
      bars[j].style.height = temp;
      j = j-1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      for(let k=i; k>=0; --k){
        bars[k].style.backgroundColor = "#133748";
      }
    }
    bars[j+1].style.height = String(key)+"px";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  for(let i=bars.length-1; i>=0; --i){
    bars[i].style.backgroundColor = "#13C366";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  Enable();
}
