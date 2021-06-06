window.onload = function(){
    var submit = document.getElementById("submit");
    window.type = "NULL";

    document.getElementById("inp1").style.display = 'inline';
    document.getElementById("inp11").style.display = 'inline';
    document.getElementById("CT").style.display = 'inline';
    

    function updateType(){
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
        }

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
        }

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
        }

        else if(window.type == "VOATP"){
            document.getElementById("inp2").style.display = 'inline';
            document.getElementById("inp22").style.display = 'inline';
            document.getElementById("inp3").style.display = 'inline';
            document.getElementById("inp33").style.display = 'inline';
    
            document.getElementById("inp11").innerHTML = "It's";
            document.getElementById("inp22").innerText = "4:24";
            document.getElementById("inp33").innerText = "AM";
    
            document.getElementById("123").innerHTML = "Output: " + "Send help.";
        }
    }

    setInterval(updateType, 100);
}