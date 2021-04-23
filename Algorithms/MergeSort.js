async function MergeSort(){
  Disable();
   let bars = document.querySelectorAll(".arrayBar");
   let delay = updateDelay();
   delay = 501-delay;
   await merge_partition(bars,0, bars.length-1,delay);
}

async function merge_sort(bars, start, mid, end,delay){
  let arr=[],i=start, j=mid+1,k=0;
  while(i<=mid && j<=end){
    bars[i].style.backgroundColor = "#EF3F3F";
    bars[j].style.backgroundColor = "#EF3F3F";
    await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
      console.log(delay);
      arr[k++] = parseInt(bars[i].style.height, 10);
      arr[k++] = parseInt(bars[j].style.height, 10);
      ++i;
      ++j;
  }
  while(i<=mid){
    bars[i].style.backgroundColor = "#EF3F3F";
    await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
    arr[k++] = parseInt(bars[i].style.height, 10);
    ++i;
  }
  while(j<=end){
    bars[j].style.backgroundColor = "#EF3F3F";
    await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        arr[k++] = parseInt(bars[j].style.height, 10);
        ++j;
  }
  arr.sort(function(a, b){return a - b});
  let p=start;
  for(let r=0; r<arr.length; ++r){
    let temp=String(arr[r])+"px";
    arr[r] = bars[p].clientHeight;
    bars[p].style.height = temp;
    bars[p].style.backgroundColor = "#13C366";
    ++p;
    await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
  }

}
async function merge_partition(bars, start, end, delay){
  if(start<end){
    let mid=Math.floor((start+end)/2);
    bars[mid].style.backgroundColor = "orange";
    await new Promise((resolve) =>
         setTimeout(() => {
           resolve();
         }, delay)
       );
    bars[mid].style.backgroundColor = "#BB8BB3";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    await merge_partition(bars, start, mid, delay);
     await merge_partition(bars, mid+1, end, delay);
    await merge_sort(bars, start, mid, end, delay);
  }
}
