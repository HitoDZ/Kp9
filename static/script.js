function myFunction(form) {

  var m = form.n.value;
  var n = form.m.value;

  if ((m <= 5) && (m >= 2) && (n <= 6) && (n >= 2)) {

    var mas_a = Array(m);
    var mas_b = Array(n);
    var k = 0;

    for (var i = 0; i < n; i++) {



      if (i != 0) {
        document.getElementById("demo").innerHTML += '</br>';
      } else {
        document.getElementById("demo").innerHTML = '';
      }

      for (var j = 0; j < m; j++) {
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
      }
    }
    // Results for Players A and B
    var mas_a_max = {
      id: mas_a[0].id,
      val: mas_a[0].val
    };
    var mas_b_min = {
      id: mas_b[0].id,
      val: mas_b[0].val
    };

    for (var i = 1; i < n; i++) {

      mas_a_max.val = Math.max(mas_a_max.val, mas_a[i].val);

      if (mas_a_max.val == mas_a[i].val) {
        mas_a_max.id = mas_a[i].id;
      }
    }

    for (var i = 1; i < m; i++) {

      mas_b_min.val = Math.min(mas_b_min.val, mas_b[i].val);

      if (mas_b_min.val == mas_b[i].val) {
        mas_b_min.id = mas_b[i].id;
      }
    }

    //document.getElementById("demo").innerHTML += '<div class="window">' + mas_a_max.val + '</div>';
    //document.getElementById("demo").innerHTML += '<div class="window">' + mas_b_min.val + '</div>';

    if (mas_a_max.id != mas_b_min.id) {
      document.getElementById(mas_a_max.id).className = "wind_color1";
      document.getElementById(mas_b_min.id).className = "wind_color2";
    } else {
      document.getElementById(mas_a_max.id).className = "wind_color3";
    }

  } else {
    alert("Values is incorrect ! Area is n");
  }
}
