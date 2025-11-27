(function (){
    function func1(valuefrom10){
        console.log("function 1 received:", valuefrom10);
        return "Output of function 1";
    }
    function func2(valuefrom8){
        console.log("Function 2 received:", valuefrom8)
            return "Output of function 2";
        }
        function func3(valuefrom6){
            console.log("Function 3 received:", valuefrom6)
            return "Output of function 3"
        
         }
         function func4(valuefrom9){
            console.log("Function 4 received:", valuefrom9)
            return "Output of function 4"
         }
         function func5(valuefrom7){
            console.log("Function 7 received:", valuefrom7);
            return "Output of function 5"
         }
         function func6(valuefrom1){
            console.log("Function 6 received:", valuefrom1);
            return "Output of function 6"
         }
         function func7(valuefrom4){
            console.log("Function 7 received:", valuefrom4);
            return "Output of function 7"
         }
         function func8(valuefrom2){
            console.log("Function 8 received:", valuefrom2);
            return "Output of function 8"
         }
         function func9(valuefrom5){
            console.log("Function 9 received:", valuefrom5);
            return "Output of function 9";
         }
         function func10(valuefrom3){
        
            console.log("Function 10 received:", valuefrom3)
            return "Output of function 10"
         }

         var out1=func1();
         var out2=func2()
         var out3=func3()
         var out4=func4()
         var out5=func5()
         var out6=func6()
         var out7=func7()
         var out8=func8()
         var out9=func9()
         var out10=func10()

         func1(out10)
         func2(out8)
         func3(out6)
         func4(out9)
         func5(out7)
         func6(out1)
         func7(out4)
         func8(out2)
         func9(out3)
         func10(out5);
})()



