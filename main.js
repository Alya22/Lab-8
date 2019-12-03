
add.addEventListener("click", function(){
    // var node = document.getElementsByClassName("row1")[0];

    // document.getElementsByClassName("wrap")[0].appendChild(node);
    var node = '<div class="row1"><form class="form-inline"> <div class="form-group mb-2"><label for="staticEmail2" class="sr-only">Email</label><input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"></div><div class="form-group mx-sm-3 mb-2"> <label for="inputPassword2" class="sr-only">Password</label> <input type="password" class="form-control" id="inputPassword2" placeholder="Password"> </div> <div class="form-group"> <label for="exampleFormControlFile1"></label> <input type="file" class="form-control-file" id="exampleFormControlFile1"> </div></form></div>';
    document.getElementsByClassName("wrap")[0].innerHTML =  document.getElementsByClassName("wrap")[0].innerHTML + node;
})


rem.addEventListener("click", function(){
    var node = document.getElementsByClassName("row1")[0];
    // var textnode = document.createTextNode("text");
    // node.appendChild(textnode);
    document.getElementsByClassName("wrap")[0].removeChild(node);
})


// clean.addEventListener("click", function(){
//     let y = document.getElementsByTagName("form");
//     for(var i = 0; i < y.length; i++){
//         y[i].value = '';
//     }
// })