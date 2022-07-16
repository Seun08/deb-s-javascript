alert('Welcome dearie!');
//alert('Welcome')
console.log('Hello World');
document.getElementById('Say Hi').onclick = SayHi;

function SayHi(){
    //console.log('Hi');
    //grt the name from the textbox
    let yourname = document.getElementById('yourname').value;
    console.log('yourname is ' + yourname);
    //display hello in h2
    document.getElementById('msg').textContent = "Hi " + yourname + '!';
}