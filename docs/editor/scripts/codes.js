var CODES = {
//hello
"Hello" : `/*
Be FarsiScript khosh amadid!
*/

chaap("Salam, Donya!")
`,
// var
"Variable": `// declare variable
motaghayer naam = "Emran"

// output to screen
chaap(naam)
`,

// foreach
"ForEach": `// variable
motaghayer list = ["Ahmad", "Sara", "Emran"]

// foreach loop. Iterate over 'list' array
baraye list k naam per{
  // output to screen
  chaap(naam)
}
`,

// if-else
"If-Else": `// declare variable
motaghayer naam = "Emran"

// if else
agar (naam){
  chaap("Salam, " + naam)
}
warna {
  chaap("Naam khali ast!")
}
`,

// prompt
"Prompt/GetLine": `//prompt: ask for input from user
motaghayer naam = darkhast("Naame khod ra vared konid")

// if else
agar (naam){
  chaap("Salam, " + naam)
}
warna {
  chaap("Naam khali ast!")
}
`,

// function
"Function": `// function is 'tabe'
tabe salaam(naam){
	agar (naam){
    chaap("Salam, " + naam)
  }
  warna {
    chaap("Naam khali ast!")
  }
}

// calling function
salaam("Emran")
`,

"While": `// declare a variable
motaghayer a = 10

// while is 'jabtak'
tavaghti( a>0 ){
	chaap(a)
	a--
}
`,
"Do-While":`// ask age until given
bokon{
  age = darkhast("Senne khod ra vared konid")
}
tavaghti(!age)
chaap("Senne shoma: " + age + " ast.")
`,
"Recursion(Fibonacci)": `// recursive function
tabe fibonacci(num) {
	// base case
  agar (num <= 1) bede 1;
	
	// recursion
  bede fibonacci(num - 1) + fibonacci(num - 2);
}

chaap(fibonacci(5))
`

}