function unique(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) == -1) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
  ];
  
  let uniqueStrings = unique(strings);
  alert(uniqueStrings); 
  