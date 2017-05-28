function main_part(form) {


    var m = form.n.value;
    var n = form.m.value;

    if ((m <= 5) && (m >= 2) && (n <= 6) && (n >= 2)) {

        var mas_a = Array(m);
        var mas_b = Array(n);
        var k = 0;

        var ab = parseInt(n) + 1;
        var am = parseInt(m) + 2;
        document.getElementById("demo").innerHTML = '';

        for (var z = 0 ; z < am ; z++) {
            if (z != 0 && z != am-1) { document.getElementById("demo").innerHTML += '<div class="window_b" >' + 'B' + z + '</div>'; }
            else if (z == 0) { document.getElementById("demo").innerHTML += '<div class="window_b" ></div>'; }
            else { document.getElementById("demo").innerHTML += '<div class="window_b" >' + 'min_A'  + '</div>'; }
        }
        document.getElementById("demo").innerHTML += '</br>';

        for (var i = 0; i < ab; i++) {

            need = parseInt(i) + 1;
            if (need != ab) {
                document.getElementById("demo").innerHTML += '<div class="window_b" >' + 'A' + need + '</div>';
            } else { document.getElementById("demo").innerHTML += '<div class="window_b" >' + 'max_B' + '</div>'; }

            for (var j = 0; j < m; j++) {

                if (i != n) {
                    var gen = 'game_' + k;
                    r = parseInt((Math.random() * 42) - 21);

                    // Player B max
                    if (i != 0) {
                        mas_b[j].val = Math.max(mas_b[j].val, r);
                        if (mas_b[j].val == r) {
                            mas_b[j].id = gen;
                        }

                    } else {
                        mas_b[j] = {
                            id: gen,
                            val: r
                        };
                    }
                    // Player A min
                    if (j != 0) {
                        mas_a[i].val = Math.min(mas_a[i].val, r);
                        if (mas_a[i].val == r) {
                            mas_a[i].id = gen;
                        }
                    } else {
                        mas_a[i] = {
                            id: gen,
                            val: r
                        };
                    }

                    document.getElementById("demo").innerHTML += '<div class="window" ' + 'id="' + gen + '"">' + r + '</div>';

                    k++;
                } else { document.getElementById("demo").innerHTML += '<div class="window_ans2" ' + 'id="' + gen + '"">' + mas_b[j].val + '</div>'; }
            }
            if (i != n) {
                document.getElementById("demo").innerHTML += '<div class="window_ans1" ' + 'id="' + gen + '"">' + mas_a[i].val + '</div>';
            }
            document.getElementById("demo").innerHTML += '</br>';
            
            
        }

        // Results for Players A and B
        var mas_a_max = {
            id: mas_a[0].id,
            id2: null,
            val: mas_a[0].val
        };
        var mas_b_min = {
            id: mas_b[0].id,
            id2: null,
            val: mas_b[0].val
        };

        var check = 0;

        for (var i = 1; i < n; i++) {


            if (mas_a_max.val == mas_a[i].val) {
                mas_a_max.id2 = mas_a_max.id;
                check = mas_a_max.val;
            }

            mas_a_max.val = Math.max(mas_a_max.val, mas_a[i].val);

            if (mas_a_max.val == mas_a[i].val) {
                mas_a_max.id = mas_a[i].id;

                if (check != mas_a_max.val) { mas_a_max.id2 = null; }

            }
        }

        for (var i = 1; i < m; i++) {

            if (mas_b_min.val == mas_b[i].val) {
                mas_b_min.id2 = mas_b_min.id;
                check = mas_b_min.val;
            }
            mas_b_min.val = Math.min(mas_b_min.val, mas_b[i].val);

            if (mas_b_min.val == mas_b[i].val) {
                mas_b_min.id = mas_b[i].id;

                if (check != mas_b_min.val) { mas_b_min.id2 = null; }
            }
        }



        if (mas_a_max.id != mas_b_min.id) {

            document.getElementById(mas_a_max.id).className = "wind_color1";
            if (mas_a_max.id2 != null) { document.getElementById(mas_a_max.id2).className = "wind_color1"; }

            if (mas_b_min.id2 != null) { document.getElementById(mas_b_min.id2).className = "wind_color2"; }
            document.getElementById(mas_b_min.id).className = "wind_color2";

            document.getElementById("demo").innerHTML += '<br/><div class="ans">' + '<p style="overflow-x:hidden;font-size: 20px;font-family: Impact;">Ответ A : &nbsp; ' + mas_a_max.val + '</p></div>';
            document.getElementById("demo").innerHTML += '<div class="ans">' + '<p style="overflow-x:hidden;font-size: 20px;font-family: Impact;">Ответ B:  &nbsp;  ' + mas_b_min.val + '</p></div>';
            
        } else {
            document.getElementById(mas_a_max.id).className = "wind_color3";
            document.getElementById("demo").innerHTML += '<br/><br/><div class="ans" >' + '<p style="overflow-x:hidden;font-size: 20px;font-family: Impact;">Ответ: ' + mas_a_max.val + '</p></div>';
        }

    } else {
        new_post()
        //alert("Values is incorrect ! Area is n");
    }
}

// --------------\


function new_post() {

    var div = document.createElement('div');
    div.className = "all_my";
    div.innerHTML = "<div class='modal_box'><img src='static/Att.png   ' alt='альтернативный текст'> <p style='overflow-x:hidden; font-size: 25px; font-family: Impact;' > Неверные данные</p>" + "<p style='overflow-x:hidden;font-size: 17px;font-family: Impact;'>Попробуйте &nbsp; 2&le; m &le; 5 &nbsp; и  &nbsp; 2&le; n &le; 6</p>"  + '<br/>' +
    "<input type='button' value='Ok' class='okey' onclick=remove_modalBox()></div>";

    document.body.appendChild(div);

}
function remove_modalBox() {
    document.body.removeChild(document.body.lastChild)
}
