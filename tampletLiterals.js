const mesg = "this is my javascript code";

//lietrals:
//Object ={}
//Boolean = true, false
//String = '', ""
//ES6: Template Literals ---->Back Tick Chars --> ``
let name = 'Tom'
let product = function(){
    return 'apple';
}

const mailBody = `Hi ${name} ${4+6} ${product()},
this is rohit here!
Thanks for adding me in 'team list'

Regards,
Rohit Bhargava.
`

console.log(mailBody);