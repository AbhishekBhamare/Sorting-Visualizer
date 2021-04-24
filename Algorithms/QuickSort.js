async function QuickSort(){
  Disable();
  let bars = document.querySelectorAll(".arrayBar");
   Solve(bars, 0, bars.length-1,);
}

async function Solve(bars, low, high){
  if(low <= high){
    var pi = await partition(bars, low, high);
    await Solve(bars, low, pi-1,);
    await Solve(bars, pi+1, high,);
  }
  Enable();
}

async function partition(bars, low, high){
  let pivot = parseInt(bars[high].style.height, 10);
  let pIndex = low-1;

  bars[high].style.backgroundColor = "#EF3F3F";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    },delay)
  );

  for(let i=low; i<=high-1; ++i){
    bars[i].style.backgroundColor = "orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      },delay)
    );

    if(parseInt(bars[i].style.height, 10) < pivot){
      pIndex++;
      let temp1 = bars[i].style.height;
      bars[i].style.height = bars[pIndex].style.height;
      bars[pIndex].style.height = temp1;
      bars[i].style.backgroundColor = "#133748";
    }else{
      bars[i].style.backgroundColor = "#133748";
    }
  }
  let temp2 =  bars[pIndex+1].style.height;
  bars[pIndex+1].style.height = bars[high].style.height;
  bars[high].style.height = temp2;
  bars[pIndex+1].style.backgroundColor = "#13C366";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    },delay)
  );
  return pIndex+1;
}
