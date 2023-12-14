let alertshow = false;
setInterval(() => {
    document.title = 
    alertshow ? "welcome to this project"
    :"hope you like it";

    alertshow = !alertshow;
}, 1000);
let person = prompt("please enter your name", "username");
let text;
if (person == null || person == "") {
    text = "please enter your name";
} 
else {
    text = "welcome " + person + " to coders' world.....";
};
document.write("<h2>"+text+"</h2>")

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
