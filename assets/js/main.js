function intro() {
    a = 1 + 3;
    console.log("Hello World");
    console.log("1+3 = " + a);
}

intro();

// 

function intro2(paramName) {
    varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
}

intro2("Horst-Kevin");

// 

function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + "Jahre alt. Ich komme aus " + stadt + ".")
}

intro3("Horst - Kevin", "Castrop - Rauxel", "77");

// 

function math(a, b) {
    console.log(a + b);
    console.log(a / b);
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
