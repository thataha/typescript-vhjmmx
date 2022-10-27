let MN1, MN2, MN3: Number;
MN1 = parseInt(prompt("pls enter 1st num"));
MN2 = parseInt(prompt("pls enter 2nd num"));
MN3 = MN1 * MN2;
console.log(MN3);
if (MN3 == 0){
  console.log("false");
} else if (MN3 > 0){
  console.log("pos.");
} else {
  console.log("neg.");
}
