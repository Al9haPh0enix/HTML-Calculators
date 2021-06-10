window.onload = function(){
    var submit = document.getElementById("submit");
    window.type = "NULL";

    document.getElementById("inp1").style.display = 'inline';
    document.getElementById("inp11").style.display = 'inline';
    document.getElementById("CT").style.display = 'inline';

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    let r = 0;
    let g = 100;
    let b = 200;
    let goingBack = false;

    function Update(){
        e = document.getElementById("CT");
        window.type = e.options[e.selectedIndex].value;

        if(window.type == "VOAS"){

            document.getElementById("inp11").innerHTML = "Radius:"

            document.getElementById("inp2").style.display = 'none';
            document.getElementById("inp22").style.display = 'none';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';

            submit.onclick = function(){
    
                var radius = document.getElementById("inp1").value;
            
                var out = volume = (4/3) * 3.14 * Math.pow(radius, 3);
    
                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "VOAC"){

            document.getElementById("inp11").innerHTML = "Radius:"
            document.getElementById("inp22").innerText = "Height:"

            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';

            submit.onclick = function(){
                var out;

                var r = document.getElementById("inp1").value;
                var h = document.getElementById("inp2").value;

                out = 3.14 * (Math.pow(r, 2) * h)

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "VOAP"){

            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'inline';
            document.getElementById("inp33").style.display = 'inline';

            document.getElementById("inp11").innerHTML = "Length:"
            document.getElementById("inp22").innerText = "Width:"
            document.getElementById("inp33").innerText = "Height:"

            console.log("e");

            submit.onclick = function(){
                var out;

                var l = document.getElementById("inp1").value;
                var w = document.getElementById("inp2").value;
                var h = document.getElementById("inp3").value;

                out = (l*w*h)/3

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "VOATP"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'inline';
            document.getElementById("inp33").style.display = 'inline';
    
            document.getElementById("inp11").innerHTML = "Length:";
            document.getElementById("inp22").innerText = "Width:";
            document.getElementById("inp33").innerText = "Height:";

            submit.onclick = function(){
                l = document.getElementById("inp1").value;
                w = document.getElementById("inp2").value;
                h = document.getElementById("inp3").value;
                var out = (l * w * h) / 2

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "MULTIPLY"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Multiplication Number 1:";
            document.getElementById("inp22").innerText = "Multiplication Number 2:";

            submit.onclick = function(){
            var out = document.getElementById("inp1").value * document.getElementById("inp2").value;

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "DIVIDE"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Division Number 1:";
            document.getElementById("inp22").innerText = "Division Number 2:";

            submit.onclick = function(){
            var out = document.getElementById("inp1").value / document.getElementById("inp2").value;

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "ADD"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Addition Number 1:";
            document.getElementById("inp22").innerText = "Addition Number 2:";

            submit.onclick = function(){
            var out = +document.getElementById("inp1").value + +document.getElementById("inp2").value;

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "SUBTRACT"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Subtraction Number 1:";
            document.getElementById("inp22").innerText = "Subtraction Number 2:";

            submit.onclick = function(){
            var out = document.getElementById("inp1").value - document.getElementById("inp2").value;

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "POWER"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Exponent Number 1:";
            document.getElementById("inp22").innerText = "Exponent Number 2:";

            submit.onclick = function(){
                var out = Math.pow(document.getElementById("inp1").value, document.getElementById("inp2").value);

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "MODULUS"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Modulus Number 1:";
            document.getElementById("inp22").innerText = "Modulus Number 2:";

            submit.onclick = function(){
                var out = document.getElementById("inp1").value % document.getElementById("inp2").value;

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "SQROOT"){
            document.getElementById("inp2").style.display = 'none';
            document.getElementById("inp22").style.display = 'none';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Square Root Number:";

            submit.onclick = function(){
            var out = Math.sqrt(document.getElementById("inp1").value);

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        else if(window.type == "CUBEROOT"){
            document.getElementById("inp2").style.display = 'none';
            document.getElementById("inp22").style.display = 'none';
            document.getElementById("inp3").style.display = 'none';
            document.getElementById("inp33").style.display = 'none';
    
            document.getElementById("inp11").innerHTML = "Cube Root Number:";

            submit.onclick = function(){
            var out = Math.cbrt(document.getElementById("inp1").value);

                document.getElementById("123").innerHTML = "Output: " + out;
            }
        } //Working

        document.body.style.backgroundColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    setInterval(Update, 100);
}