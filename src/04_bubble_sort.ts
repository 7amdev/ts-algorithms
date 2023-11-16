function bubble_sort(data:number[]): void {

  for (let i = 0; i < data.length; ++i) {
    for (let j = 0; j < data.length - 1 - i; ++j) {      
      if (data[j] > data[j+1]) {
        const temp = data[j+1];
        data[j+1] = data[j];
        data[j] = temp;
      } 
    } 
  }  
}

const d:number[] = [12, 4, 22, 1, 4, 5, 90, 2, 3, 2, 7];
bubble_sort(d);
console.log(d);
