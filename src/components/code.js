function duplicateEncode(word){
    // ...
  let known = [];
  let output = "";
  for (const w of word) {
    if(known.includes(w)){
      output += ")";
    }
    else {
      known.push(w)
      output += "(";
    }
  }
  console.log(output);
}

duplicateEncode(din);