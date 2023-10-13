
let f=-625;
let len="len=5";
let word1="word";
let word2="Ne word";
let t=true;

//1

if (f>-1)
{
console.log("число положительное");
t=true;

}
else
{
console.log("число не положительное");
f=f*-1;
t=false
}

//2
console.log("дилна строки ("+len+") равна -"+len.length);
//3
console.log(len[len.length-1]);


//4

if(f%2==0)
{
console.log("число четное");
}
else
{
console.log("число не четное");
}


//5

if (word1[0]==word2[0])
{
    console.log("1t символы совподают");
}
else
{
    console.log("1t символы не совподают");
}


//6

let v=f.toString();

console.log(Number(v[0])+Number(v[v.length-1]));


//7

let sum=0;
for(let i=0;i<v.length;i++)
{
sum+=Number(v[i]);
}

console.log(sum);
