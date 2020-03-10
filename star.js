//問１
var star1 = 1;
while(star1 <= 5){
    document.write("★");
    star1++;
}

    document.write("<br>");
 document.write("<br>");

//問２
for(var star1 = 1; star1 < 3; star1++){
  for(var star2 = 1; star2 <= 3; star2++){
    document.write("★");
  }
    document.write("<br>");
}

    document.write("<br>");

//問３
for(var star1 = 1; star1 < 3; star1++){
  for(var star2 = 1; star2 <= 5; star2++){
    document.write("☆");
  }
    document.write("<br>");
}

    document.write("<br>");

//問４
for(var star1 = 1; star1 < 5; star1++){
  for(var star2 = 1; star2 <= 5; star2++){
    document.write("★");
  }
    document.write("<br>");
}

    document.write("<br>");

//問５
for(var star1 = 1; star1 < 5; star1++){
  for(var star2 = 1; star2 <= 3; star2++){
    document.write("★");
  }
    document.write("<br>");
}

     document.write("<br>");

//問６
for(var no1 = 0; no1 < 3; no1++){
    for(var no2 = 0; no2 <= 2; no2++){
        if(no2 % 2 ==0){
            document.write("★");}
        else{
            document.write("☆");}
    }
        document.write("<br>");
}

     document.write("<br>");

//問７
for(var no1 = 0; no1 < 4; no1++){
    for(var no2 = 0; no2 <= 4; no2++){
        if(no2 % 2 ==0){
            document.write("★");}
        else{
            document.write("☆");}
    }
        document.write("<br>");
}

     document.write("<br>");

//問８
for(var no1 = 1; no1 < 6; no1++){
    for(var no2 = 1; no2 <= no1; no2++){
            document.write("★");
    }
        document.write("<br>");
}


/*軌跡
for(var no1 = 0; no1 < 5; no1++){
  for(var no2 = 0; no2 < 5-(no1+1); no2++){
    document.write("★");
for(var no3 = 0; no3 < (no1+1)*2-1; no3++){
      document.write(" ");
}
}
document.write("<br>");
}
*/