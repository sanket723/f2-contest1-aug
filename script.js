let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log

  //Method-1 (using forEach method)
  // arr.forEach(element => {
  //   if(element.profession === 'developer')
  //   console.log(element);
  // });
  
  // Method-2 (simple loop)
  for(let i=0 ;i<arr.length; i++){
      let obj = arr[i];
      if(obj.profession === 'developer'){
        console.log(arr[i]);
      }
  }
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:'shalin', age: 40, profession: 'admin'});
  console.log(arr);
  
}

function removeAdmin() {
  //Write your code here, just console.log
  let n = arr.length;
  for(let i=n-1 ;i>=0; i--){     // the loop iterates from last index to first to ensure that removing an element doesn't affect the subsequent indexes.
      let obj = arr[i];
      if(obj.profession === 'admin'){
        arr.splice(i,1);
      } 
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    {id: 5, name: 'nimrit', age: 30, profession: 'lawyer'},
    {id: 6, name: 'gautam', age: 35, profession: 'dancer'},
    {id: 7, name: 'ayush', age: 25, profession: 'singer'}
  ];

  arr = arr.concat(newArray);
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
