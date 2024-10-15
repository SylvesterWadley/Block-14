const userInput=prompt(`please enter some numbers serperated by commas`, `1,2,3,4,5`);

const userInputArray= userInput.split(`,`);

const numbers= [];

for(Let i = 0; i < userInputArray.length; i++) {
const numbAsStr = userInputArray[i];
const convertedNum = Number(numbAsStr);
numbers.push(convertedNum);

}

const getLength = (nums) => {
const numsLength = nums.length;
return numsLength;
}


const getSum = (nums) => {
let total = 0;
for(let i = 0; i < nums.length; i++)
const number = nums[i];
total = total + number;
}
return total;
}