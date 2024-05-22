// Lucas Brinks
// 5/21/2024
// JS IF Statements

const credits=120;
const creditsNow = parseInt(prompt('Please enter your current credits'));
if(creditsNow >= credits){
    alert("you somehow did it");
} else if (creditsNow >= 90){
    alert("you're close");
} else {
    alert("you failed");
}
    
