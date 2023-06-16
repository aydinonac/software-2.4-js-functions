fizzBuzz();

function fizzBuzz() {
  let text35 = "";
  const testnums = [49, 55, 120, 9999]
  for (n of testnums) {
      let c;
      if (n%3 == 0 && n%5 == 0) {c=15}
          else if (n%3 == 0)    {c=3}
          else if (n%5 == 0)    {c=5}
      
      switch (c) {
        case 15:
          text35 += n + ": FizzBuzz: divisible by 15." + "<br>";
          break;
        case 3:
          text35 += n + ": Fizz: divisible by 3." + "<br>";
          break;
        case 5:
          text35 += n + ": Buzz: divisible by 5." + "<br>";
          break;
        default:
          text35 += n + ": Pop: not divisible by 3 or 5." + "<br>";
      }
  document.getElementById("div35").innerHTML = text35;
  }
}
