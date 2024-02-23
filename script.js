const wordtext = document.querySelector(".word"),
    hinttext = document.querySelector(".hint span"),
    timetext = document.querySelector(".time b"),
    inputfield = document.querySelector("input"),
    refreshbtn = document.querySelector(".refresh-word"),
    checkbtn = document.querySelector(".check-word");
let correctword , timer;
const inittimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
      if(maxTime>0){
        maxTime--;
       return timetext.innerText = maxTime;
      }
      clearInterval(timer);
      alert(`Time off! ${correctword.toUpperCase()} was the correct word`);
      initgame();
    },1000);
}
const initgame = () => {
    inittimer(30);
    let randomobj = words[Math.floor(Math.random() * words.length)];
    let wordarray = randomobj.word.split("");
    for (let i = wordarray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordarray[i], wordarray[j]] = [wordarray[j], wordarray[i]];
    }
    wordtext.innerText = wordarray.join("");
    hinttext.innerText = randomobj.hint;
    correctword = randomobj.word.toLowerCase();
    inputfield.value = "";
    inputfield.setAttribute("maxlength", correctword.length);

    // console.log(randomobj);
}
initgame();

const checkword = () => {
    let userword = inputfield.value.toLocaleLowerCase();
    if (!userword) return alert("Please enter a word check");
    if (userword !== correctword) return alert(`Oops! ${userword} is not a correct word`);
    alert(`Congrats! ${userword.toUpperCase()} is a correct word`);
    initgame();
}

refreshbtn.addEventListener("click", initgame);
checkbtn.addEventListener("click", checkword);