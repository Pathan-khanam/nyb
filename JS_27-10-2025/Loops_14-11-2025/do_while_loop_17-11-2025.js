//code executes first 
//condition checks nxt
//syntax:-do{//code to run }while (condition);

//loop runs atleat once (even if condition is false)

var x=10;
do{
    console.log("this runs once")//code executes first
}while(x<5);//false butthe do block still runs one tym after that loop stops


//condition is checked after executing the block

var n=1
do{
    console.log("Inside loop:",n)//executes first
    n++;
}while(n<=3);//true ->repeats

//keep asking until user enters valid number 
//<0 loop stops on 0 and positive values loop repeats on negative values 

var number;
do{
    number=0;//assume user input
    console.log("Checking input:",number)
}while(number <0);

var i=1;
do{
    console.log("heading:",i)
    i++;
}while(i<=3);



var x=10;
do{
    console.log("hello")

}while(x<5);

