function AddStringToTextarea() {
var key0 = ['が馬場豊に対し激怒した理由に','がもこうに対して放った言葉に','が放った一言に','が激怒した理由に','が見せた気遣いに','がタモリに対して取った態度に','がLemonを食べている姿に','がビートたけしに驚きの一言で','が今のお気持ちを表明し','が謝罪後に松本人志の放った一言に','が沈黙を破った理由に','が引退時に放ったある言葉に'];
var key1 = ['、一同驚愕', '涙が止まらない', '感動の嵐！','世界中が絶賛！','称賛の嵐！','涙の嵐！','涙が止まらない！','「貴様、絶対に許さん」','「舐めてると潰すぞ」'];
var key2 = ['ビートたけしも','ダウンタウンも','タモリも','SMAP仲居も','木村拓哉も','北島三郎も','米津玄師も','馬場豊も','ヒカキンも','シャムも','たれぞうも','はじめしゃちょーも'];
var key3 = ['緊急参戦して','涙が溢れ出して','ブチキレて','乱闘が勃発して','チンパンジーと共に参戦して','笑顔を見せて','信じられない行動を起こして','頭を悩ませて','思わず本音を漏らして','擁護するコメントを出して','予想外な展開に','批判覚悟で','裏の顔を除かせて','タモリと共にブチキレて'];
var key4 = ['後戻りが出来ない！！','涙ナシでは語れない！！','取り返しがつかない状態になってしまう！！','裁判は避けれないか？','、一体何が起こったというのか？','日本はどうなってしまうのか？','この先、目が話せない！！','チンパンジーになってしまう'];
var random = key0[Math.floor(Math.random() * key0.length)];
var random1 = key1[Math.floor(Math.random() * key1.length)];
var random2 = key2[Math.floor(Math.random() * key2.length)];
var random3 = key3[Math.floor(Math.random() * key3.length)];
var random4 = key4[Math.floor(Math.random() * key4.length)];
var UserString = document.getElementById('sampleUserInput').value;
var UserString = UserString + random + random1 + random2 + random3 + random4;
   document.getElementById('sampleInputedList').value += UserString + "\n";
 
}


function clr(){
  var reset_target = document.getElementById("sampleInputedList");
            if(reset_target.value == ''){
            }else{
                reset_target.value = '';
            }
}
