var myMap,m;

brest=0;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {

        center:[50.90, 34.78],
        //controls:['rulerControl'],
        zoom:14
    });
// Размещяем оптический коммутатор на карте


//myMap.controls.add('searchControl', {

//float:'right',

//});

var colorButton = new ymaps.control.Button({
    data:  {
    content:"Показать все делители"

    },

    options: {

   maxWidth: [28,200,178]
   }

});


myMap.controls.add(colorButton);

isPlaying = false;

colorButton.events.add('click',function() {

var $this=$(this);
 if(isPlaying)

{
isPlaying = false;
//Барановка первый порт

placemark2.options.set("visible",true);
placemark3.options.set("visible",true);
placemark4.options.set("visible",true);
placemark5.options.set("visible",true);
placemark6.options.set("visible",true);
placemark7.options.set("visible",true);
placemark8.options.set("visible",true);
placemark9.options.set("visible",true);
placemark10.options.set("visible",true);
placemark11.options.set("visible",true);
placemark12.options.set("visible",true);
placemark13.options.set("visible",true);
placemark14.options.set("visible",true);
placemark15.options.set("visible",true);
placemark16.options.set("visible",true);
placemark17.options.set("visible",true);
placemark18.options.set("visible",true);

//Первый порт Тополянская 10.79.254.240

placemark80.options.set("visible",true);
placemark81.options.set("visible",true);
placemark82.options.set("visible",true);
placemark83.options.set("visible",true);
placemark84.options.set("visible",true);
placemark85.options.set("visible",true);
placemark86.options.set("visible",true);
placemark87.options.set("visible",true);

//Первый порт Тополянская 10.79.254.244

placemark580.options.set("visible",true);
placemark581.options.set("visible",true);
placemark582.options.set("visible",true);
placemark583.options.set("visible",true);
placemark584.options.set("visible",true);
placemark585.options.set("visible",true);
placemark586.options.set("visible",true);

//Первый порт Басы 10.79.254.231

placemark511.options.set("visible",true);
placemark512.options.set("visible",true);
placemark513.options.set("visible",true);
placemark514.options.set("visible",true);
placemark515.options.set("visible",true);
placemark516.options.set("visible",true);
placemark517.options.set("visible",true);

//Первый порт Басы 10.79.254.229

placemark541.options.set("visible",true);
placemark542.options.set("visible",true);
placemark543.options.set("visible",true);
placemark544.options.set("visible",true);
placemark545.options.set("visible",true);
placemark546.options.set("visible",true);
placemark547.options.set("visible",true);

//Второй порт Барановки

placemark39.options.set("visible",true);
placemark40.options.set("visible",true);
placemark41.options.set("visible",true);
placemark42.options.set("visible",true);
placemark43.options.set("visible",true);
placemark44.options.set("visible",true);
placemark45.options.set("visible",true);
placemark46.options.set("visible",true);
placemark47.options.set("visible",true);
placemark48.options.set("visible",true);

//Второй порт Тополянская 10.79.254.240

placemark88.options.set("visible",true);
placemark89.options.set("visible",true);
placemark90.options.set("visible",true);
placemark91.options.set("visible",true);
placemark92.options.set("visible",true);

//Второй порт Тополянская 10.79.254.244

placemark590.options.set("visible",true);
placemark591.options.set("visible",true);
placemark592.options.set("visible",true);
placemark593.options.set("visible",true);
placemark594.options.set("visible",true);
placemark595.options.set("visible",true);
placemark596.options.set("visible",true);
placemark597.options.set("visible",true);
//Второй порт Басы 10.79.254.231

placemark519.options.set("visible",true);
placemark520.options.set("visible",true);
placemark521.options.set("visible",true);
placemark522.options.set("visible",true);
placemark523.options.set("visible",true);
placemark524.options.set("visible",true);
placemark525.options.set("visible",true);
placemark526.options.set("visible",true);

//Второй порт Басы 10.79.254.229

placemark550.options.set("visible",true);
placemark551.options.set("visible",true);
placemark552.options.set("visible",true);
placemark553.options.set("visible",true);

//Третий порт Барановки

placemark55.options.set("visible",true);
placemark56.options.set("visible",true);
placemark57.options.set("visible",true);
placemark58.options.set("visible",true);
placemark59.options.set("visible",true);
placemark60.options.set("visible",true);
placemark61.options.set("visible",true);
placemark58.options.set("visible",true);
placemark59.options.set("visible",true);
placemark60.options.set("visible",true);
placemark61.options.set("visible",true);
placemark62.options.set("visible",true);
placemark63.options.set("visible",true);
placemark64.options.set("visible",true);
placemark65.options.set("visible",true);
placemark66.options.set("visible",true);
placemark67.options.set("visible",true);
placemark68.options.set("visible",true);

//Третий порт Тополянская 10.79.254.240

placemark93.options.set("visible",true);
placemark94.options.set("visible",true);
placemark95.options.set("visible",true);
placemark96.options.set("visible",true);
placemark107.options.set("visible",true);
placemark108.options.set("visible",true);
placemark109.options.set("visible",true);

//Третий порт Тополянская 10.79.254.244

placemark400.options.set("visible",true);
placemark401.options.set("visible",true);

//Четвертый порт Тополянская 10.79.254.240

placemark97.options.set("visible",true);
placemark98.options.set("visible",true);
placemark99.options.set("visible",true);
placemark100.options.set("visible",true);
placemark101.options.set("visible",true);
placemark102.options.set("visible",true);
placemark103.options.set("visible",true);
placemark104.options.set("visible",true);


//Четвертый порт Басы 10.79.254.231

placemark535.options.set("visible",true);
placemark536.options.set("visible",true);
placemark537.options.set("visible",true);
placemark538.options.set("visible",true);
placemark539.options.set("visible",true);
placemark540.options.set("visible",true);
placemark554.options.set("visible",true);

//Четвертый порт Басы 10.79.254.229

placemark570.options.set("visible",true);
placemark571.options.set("visible",true);
placemark572.options.set("visible",true);
placemark573.options.set("visible",true);

}else{
isPlaying=true;

//Барановка первый порт

placemark2.options.set("visible",false);
placemark3.options.set("visible",false);
placemark4.options.set("visible",false);
placemark5.options.set("visible",false);
placemark6.options.set("visible",false);
placemark7.options.set("visible",false);
placemark8.options.set("visible",false);
placemark9.options.set("visible",false);
placemark10.options.set("visible",false);
placemark11.options.set("visible",false);
placemark12.options.set("visible",false);
placemark13.options.set("visible",false);
placemark14.options.set("visible",false);
placemark15.options.set("visible",false);
placemark16.options.set("visible",false);
placemark17.options.set("visible",false);
placemark18.options.set("visible",false);

//Первый порт Тополянская 10.79.254.240

placemark80.options.set("visible",false);
placemark81.options.set("visible",false);
placemark82.options.set("visible",false);
placemark83.options.set("visible",false);
placemark84.options.set("visible",false);
placemark85.options.set("visible",false);
placemark86.options.set("visible",false);
placemark87.options.set("visible",false);

//Первый порт Тополянская 10.79.254.244

placemark580.options.set("visible",false);
placemark581.options.set("visible",false);
placemark582.options.set("visible",false);
placemark583.options.set("visible",false);
placemark584.options.set("visible",false);
placemark585.options.set("visible",false);
placemark586.options.set("visible",false);
//Первый порт Басы 10.79.254.231

placemark511.options.set("visible",false);
placemark512.options.set("visible",false);
placemark513.options.set("visible",false);
placemark514.options.set("visible",false);
placemark515.options.set("visible",false);
placemark516.options.set("visible",false);
placemark517.options.set("visible",false);

//Первый порт Басы 10.79.254.229

placemark541.options.set("visible",false);
placemark542.options.set("visible",false);
placemark543.options.set("visible",false);
placemark544.options.set("visible",false);
placemark545.options.set("visible",false);
placemark546.options.set("visible",false);
placemark547.options.set("visible",false);

//Второй порт Барановки

placemark39.options.set("visible",false);
placemark40.options.set("visible",false);
placemark41.options.set("visible",false);
placemark42.options.set("visible",false);
placemark43.options.set("visible",false);
placemark44.options.set("visible",false);
placemark45.options.set("visible",false);
placemark46.options.set("visible",false);
placemark47.options.set("visible",false);
placemark48.options.set("visible",false);

//Второй порт Тополянская 10.79.254.240

placemark88.options.set("visible",false);
placemark89.options.set("visible",false);
placemark90.options.set("visible",false);
placemark91.options.set("visible",false);
placemark92.options.set("visible",false);

//Второй порт Тополянская 10.79.254.244

placemark590.options.set("visible",false);
placemark591.options.set("visible",false);
placemark592.options.set("visible",false);
placemark593.options.set("visible",false);
placemark594.options.set("visible",false);
placemark595.options.set("visible",false);
placemark596.options.set("visible",false);
placemark597.options.set("visible",false);
//Второй порт Басы 10.79.254.231

placemark519.options.set("visible",false);
placemark520.options.set("visible",false);
placemark521.options.set("visible",false);
placemark522.options.set("visible",false);
placemark523.options.set("visible",false);
placemark524.options.set("visible",false);
placemark525.options.set("visible",false);
placemark526.options.set("visible",false);

//Второй порт Басы 10.79.254.229

placemark550.options.set("visible",false);
placemark551.options.set("visible",false);
placemark552.options.set("visible",false);
placemark553.options.set("visible",false);

//Третий порт Барановки

placemark55.options.set("visible",false);
placemark56.options.set("visible",false);
placemark57.options.set("visible",false);
placemark58.options.set("visible",false);
placemark59.options.set("visible",false);
placemark60.options.set("visible",false);
placemark61.options.set("visible",false);
placemark58.options.set("visible",false);
placemark59.options.set("visible",false);
placemark60.options.set("visible",false);
placemark61.options.set("visible",false);
placemark62.options.set("visible",false);
placemark63.options.set("visible",false);
placemark64.options.set("visible",false);
placemark65.options.set("visible",false);
placemark66.options.set("visible",false);
placemark67.options.set("visible",false);
placemark68.options.set("visible",false);

//Третий порт Тополянская 10.79.254.240

placemark93.options.set("visible",false);
placemark94.options.set("visible",false);
placemark95.options.set("visible",false);
placemark96.options.set("visible",false);
placemark107.options.set("visible",false);
placemark108.options.set("visible",false);
placemark109.options.set("visible",false);
//Третий порт Тополянская 10.79.254.244

placemark400.options.set("visible",false);
placemark401.options.set("visible",false);

//Четвертый порт Тополянская 10.79.254.240

placemark97.options.set("visible",false);
placemark98.options.set("visible",false);
placemark99.options.set("visible",false);
placemark100.options.set("visible",false);
placemark101.options.set("visible",false);
placemark102.options.set("visible",false);
placemark103.options.set("visible",false);
placemark104.options.set("visible",false);


//Четвертый порт Басы 10.79.254.231

placemark535.options.set("visible",false);
placemark536.options.set("visible",false);
placemark537.options.set("visible",false);
placemark538.options.set("visible",false);
placemark539.options.set("visible",false);
placemark540.options.set("visible",false);
placemark554.options.set("visible",false);

//Четвертый порт Басы 10.79.254.229

placemark570.options.set("visible",false);
placemark571.options.set("visible",false);
placemark572.options.set("visible",false);
placemark573.options.set("visible",false);

}


});


//отображение делителей по портам на олте

var isPlaying22 = false;
var isPlaying2 = false;
var isPlaying3 = false;
var isPlaying4 = false;
var isPlaying5 = false;
var isPlaying6 = false;
var isPlaying7 = false;
var isPlaying8 = false;
var isPlaying9 = false;
var isPlaying10 = false;


$('button#first').click(function(){

$dataPhp=$('.data-php').attr('data-attr');
var $this = $(this)

if((($dataPhp=="bar"))&&(isPlaying22))

{

$('#on1').show();
$('#off1').hide();
isPlaying22 = false;
//Барановка первый порт

placemark2.options.set("visible",true);
placemark3.options.set("visible",true);
placemark4.options.set("visible",true);
placemark5.options.set("visible",true);
placemark6.options.set("visible",true);
placemark7.options.set("visible",true);
placemark8.options.set("visible",true);
placemark9.options.set("visible",true);
placemark10.options.set("visible",true);
placemark11.options.set("visible",true);
placemark12.options.set("visible",true);
placemark13.options.set("visible",true);
placemark14.options.set("visible",true);
placemark15.options.set("visible",true);
placemark16.options.set("visible",true);
placemark17.options.set("visible",true);
placemark18.options.set("visible",true);
}else{
$('#on1').hide();
$('#off1').show();
isPlaying22 = true;

placemark2.options.set("visible",false);
placemark3.options.set("visible",false);
placemark4.options.set("visible",false);
placemark5.options.set("visible",false);
placemark6.options.set("visible",false);
placemark7.options.set("visible",false);
placemark8.options.set("visible",false);
placemark9.options.set("visible",false);
placemark10.options.set("visible",false);
placemark11.options.set("visible",false);
placemark12.options.set("visible",false);
placemark13.options.set("visible",false);
placemark14.options.set("visible",false);
placemark15.options.set("visible",false);
placemark16.options.set("visible",false);
placemark17.options.set("visible",false);
placemark18.options.set("visible",false);

}

if((($dataPhp=="top40"))&&(isPlaying2))

{
$('#on1').show();
//$('#off1').hide();


isPlaying2 = false;

//Первый порт Тополянская 10.79.254.240

placemark80.options.set("visible",true);
placemark81.options.set("visible",true);
placemark82.options.set("visible",true);
placemark83.options.set("visible",true);
placemark84.options.set("visible",true);
placemark85.options.set("visible",true);
placemark86.options.set("visible",true);
placemark87.options.set("visible",true);
}else{
//$('#on1').hide();
$('#off1').show();

isPlaying2 = true;
//Первый порт Тополянская 10.79.254.240

placemark80.options.set("visible",false);
placemark81.options.set("visible",false);
placemark82.options.set("visible",false);
placemark83.options.set("visible",false);
placemark84.options.set("visible",false);
placemark85.options.set("visible",false);
placemark86.options.set("visible",false);
placemark87.options.set("visible",false);
}
if((($dataPhp=="top44"))&&(isPlaying3))
{
$('#on1').show();
//$('#off1').hide();


isPlaying3= false;
//Первый порт Тополянская 10.79.254.244

placemark580.options.set("visible",true);
placemark581.options.set("visible",true);
placemark582.options.set("visible",true);
placemark583.options.set("visible",true);
placemark584.options.set("visible",true);
placemark585.options.set("visible",true);
placemark586.options.set("visible",true);
}else{
//$('#on1').hide();
$('#off1').show();


isPlaying3 = true;
placemark580.options.set("visible",false);
placemark581.options.set("visible",false);
placemark582.options.set("visible",false);
placemark583.options.set("visible",false);
placemark584.options.set("visible",false);
placemark585.options.set("visible",false);
placemark586.options.set("visible",false);
}
if((($dataPhp=="bas31"))&&(isPlaying4))
{
$('#on1').show();
//$('#off1').hide();


isPlaying4 = false;

//Первый порт Басы 10.79.254.231

placemark511.options.set("visible",true);
placemark512.options.set("visible",true);
placemark513.options.set("visible",true);
placemark514.options.set("visible",true);
placemark515.options.set("visible",true);
placemark516.options.set("visible",true);
placemark517.options.set("visible",true);
}else{
//$('#on1').hide();
$('#off1').show();

isPlaying4 = true;
placemark511.options.set("visible",false);
placemark512.options.set("visible",false);
placemark513.options.set("visible",false);
placemark514.options.set("visible",false);
placemark515.options.set("visible",false);
placemark516.options.set("visible",false);
placemark517.options.set("visible",false);

}

if((($dataPhp=="bas29"))&&(isPlaying5))
{
$('#on1').show();
//$('#off1').hide();


isPlaying5 = false;
//Первый порт Басы 10.79.254.229
placemark541.options.set("visible",true);
placemark542.options.set("visible",true);
placemark543.options.set("visible",true);
placemark544.options.set("visible",true);
placemark545.options.set("visible",true);
placemark546.options.set("visible",true);
placemark547.options.set("visible",true);
}else{
//$('#on1').hide();
$('#off1').show();

isPlaying5 = true;
placemark541.options.set("visible",false);
placemark542.options.set("visible",false);
placemark543.options.set("visible",false);
placemark544.options.set("visible",false);
placemark545.options.set("visible",false);
placemark546.options.set("visible",false);
placemark547.options.set("visible",false);
}


});

isPlaying6 = false; 

//Второй порт

$('button#second').click(function () {
var $this=$(this);

if((($dataPhp=="bar"))&&(isPlaying6))
{
isPlaying6 = false;
//Второй порт Барановки
$('#on2').show();
$('#off2').hide();

placemark39.options.set("visible",true);
placemark40.options.set("visible",true);
placemark41.options.set("visible",true);
placemark42.options.set("visible",true);
placemark43.options.set("visible",true);
placemark44.options.set("visible",true);
placemark45.options.set("visible",true);
placemark46.options.set("visible",true);
placemark47.options.set("visible",true);
placemark48.options.set("visible",true);
}else{
$('#on2').hide();
$('#off2').show();

//Второй порт Барановки
isPlaying6 = true;

placemark39.options.set("visible",false);
placemark40.options.set("visible",false);
placemark41.options.set("visible",false);
placemark42.options.set("visible",false);
placemark43.options.set("visible",false);
placemark44.options.set("visible",false);
placemark45.options.set("visible",false);
placemark46.options.set("visible",false);
placemark47.options.set("visible",false);
placemark48.options.set("visible",false);
}
if((($dataPhp=="top40"))&&(isPlaying7))
{
$('#on2').show();
//$('#off2').hide();


isPlaying7 = false;
//Второй порт Тополянская 10.79.254.240

placemark88.options.set("visible",true);
placemark89.options.set("visible",true);
placemark90.options.set("visible",true);
placemark91.options.set("visible",true);
placemark92.options.set("visible",true);
}else{
//$('#on2').hide();
$('#off2').show();

isPlaying7 = true;
//Второй порт Тополянская 10.79.254.240

placemark88.options.set("visible",false);
placemark89.options.set("visible",false);
placemark90.options.set("visible",false);
placemark91.options.set("visible",false);
placemark92.options.set("visible",false);
}
if((($dataPhp=="top44"))&&(isPlaying8))
{
$('#on2').show();
//$('#off2').hide();


isPlaying8 = false;

//Второй порт Тополянская 10.79.254.244

placemark590.options.set("visible",true);
placemark591.options.set("visible",true);
placemark592.options.set("visible",true);
placemark593.options.set("visible",true);
placemark594.options.set("visible",true);
placemark595.options.set("visible",true);
placemark596.options.set("visible",true);
placemark597.options.set("visible",true);
}else{
//$('#on2').hide();
$('#off2').show();


isPlaying8 = true;
//Второй порт Тополянская 10.79.254.244
placemark590.options.set("visible",false);
placemark591.options.set("visible",false);
placemark592.options.set("visible",false);
placemark593.options.set("visible",false);
placemark594.options.set("visible",false);
placemark595.options.set("visible",false);
placemark596.options.set("visible",false);
placemark597.options.set("visible",false);
}
if((($dataPhp=="bas31"))&&(isPlaying9))
{
$('#on2').show();
//$('#off2').hide();


isPlaying9 = false;
//Второй порт Басы 10.79.254.231

placemark519.options.set("visible",true);
placemark520.options.set("visible",true);
placemark521.options.set("visible",true);
placemark522.options.set("visible",true);
placemark523.options.set("visible",true);
placemark524.options.set("visible",true);
placemark525.options.set("visible",true);
placemark526.options.set("visible",true);
}else{
//$('#on2').hide();
$('#off2').show();


//Второй порт Басы 10.79.254.231
isPlaying9 = true;
placemark519.options.set("visible",false);
placemark520.options.set("visible",false);
placemark521.options.set("visible",false);
placemark522.options.set("visible",false);
placemark523.options.set("visible",false);
placemark524.options.set("visible",false);
placemark525.options.set("visible",false);
placemark526.options.set("visible",false);

}
if((($dataPhp=="bas29"))&&(isPlaying10))
{
$('#on2').show();
//$('#off2').hide();


isPlaying10 = false;
//Второй порт Басы 10.79.254.229

placemark550.options.set("visible",true);
placemark551.options.set("visible",true);
placemark552.options.set("visible",true);
placemark553.options.set("visible",true);
}else{
//$('#on2').hide();
$('#off2').show();


isPlaying10 = true;
//Второй порт Басы 10.79.254.229

placemark550.options.set("visible",false);
placemark551.options.set("visible",false);
placemark552.options.set("visible",false);
placemark553.options.set("visible",false);

}

});

isPlaying11 = false;
isPlaying12 =false;
isPlaying13 = false;
isPlaying14 = false;
isPlaying15 = false;
isPlaying16 = false;
isPlaying27 = false;
isPlaying18 = false;

$('button#three').click(function () {

var $this=$(this);

if((($dataPhp=="bar"))&&(isPlaying11))

{
$('#on3').show();
$('#off3').hide();

//Третий порт Барановки
isPlaying11 = false;
placemark55.options.set("visible",true);
placemark56.options.set("visible",true);
placemark57.options.set("visible",true);
placemark58.options.set("visible",true);
placemark59.options.set("visible",true);
placemark60.options.set("visible",true);
placemark61.options.set("visible",true);
placemark58.options.set("visible",true);
placemark59.options.set("visible",true);
placemark60.options.set("visible",true);
placemark61.options.set("visible",true);
placemark62.options.set("visible",true);
placemark63.options.set("visible",true);
placemark64.options.set("visible",true);
placemark65.options.set("visible",true);
placemark66.options.set("visible",true);
placemark67.options.set("visible",true);
placemark68.options.set("visible",true);
}else{
$('#on3').hide();
$('#off3').show();

isPlaying11 = true;
//Третий порт Барановки

placemark55.options.set("visible",false);
placemark56.options.set("visible",false);
placemark57.options.set("visible",false);
placemark58.options.set("visible",false);
placemark59.options.set("visible",false);
placemark60.options.set("visible",false);
placemark61.options.set("visible",false);
placemark58.options.set("visible",false);
placemark59.options.set("visible",false);
placemark60.options.set("visible",false);
placemark61.options.set("visible",false);
placemark62.options.set("visible",false);
placemark63.options.set("visible",false);
placemark64.options.set("visible",false);
placemark65.options.set("visible",false);
placemark66.options.set("visible",false);
placemark67.options.set("visible",false);
placemark68.options.set("visible",false);

}
if((($dataPhp=="top40"))&&(isPlaying12))
{
$('#on3').show();
//$('#off3').hide();

isPlaying12 = false;
//Третий порт Тополянская 10.79.254.240

placemark93.options.set("visible",true);
placemark94.options.set("visible",true);
placemark95.options.set("visible",true);
placemark96.options.set("visible",true);
placemark107.options.set("visible",true);
placemark108.options.set("visible",true);
placemark109.options.set("visible",true);
}else{
//$('#on3').hide();
$('#off3').show();

isPlaying12= true;
//Третий порт Тополянская 10.79.254.240

placemark93.options.set("visible",false);
placemark94.options.set("visible",false);
placemark95.options.set("visible",false);
placemark96.options.set("visible",false);
placemark107.options.set("visible",false);
placemark108.options.set("visible",false);
placemark109.options.set("visible",false);
}
if((($dataPhp=="top44"))&&(isPlaying13))
{
$('#on3').show();
//$('#off3').hide();

isPlaying13 = false;
//Третий порт Тополянская 10.79.254.244

placemark400.options.set("visible",true);
placemark401.options.set("visible",true);
}else{
//$('#on3').hide();
$('#off3').show();


isPlaying13= true;
//Третий порт Тополянская 10.79.254.244

placemark400.options.set("visible",false);
placemark401.options.set("visible",false);
}
if((($dataPhp=="bas31"))&&(isPlaying14))

{
$('#on3').show();
//$('#off3').hide();

isPlaying14 = false;
//Третий порт Басы 10.79.254.231

placemark527.options.set("visible",true);
placemark528.options.set("visible",true);
placemark529.options.set("visible",true);
placemark530.options.set("visible",true);
placemark531.options.set("visible",true);
placemark532.options.set("visible",true);
placemark533.options.set("visible",true);
placemark534.options.set("visible",true);
}else{
//$('#on3').hide();
$('#off3').show();

isPlaying14 = true;
//Третий порт Басы 10.79.254.231

placemark527.options.set("visible",false);
placemark528.options.set("visible",false);
placemark529.options.set("visible",false);
placemark530.options.set("visible",false);
placemark531.options.set("visible",false);
placemark532.options.set("visible",false);
placemark533.options.set("visible",false);
placemark534.options.set("visible",false);
}
if((($dataPhp=="bas29"))&&(isPlaying15))
{
$('#on3').show();
//$('#off3').hide();


isPlaying15 = false;
//Третий порт Басы 10.79.254.229

placemark560.options.set("visible",true);
placemark561.options.set("visible",true);
placemark562.options.set("visible",true);
placemark563.options.set("visible",true);
placemark564.options.set("visible",true);
placemark565.options.set("visible",true);
placemark566.options.set("visible",true);
placemark567.options.set("visible",true);
placemark568.options.set("visible",true);
}else{
//$('#on3').hide();
$('#off3').show();

isPlaying15 = true;
placemark560.options.set("visible",false);
placemark561.options.set("visible",false);
placemark562.options.set("visible",false);
placemark563.options.set("visible",false);
placemark564.options.set("visible",false);
placemark565.options.set("visible",false);
placemark566.options.set("visible",false);
placemark567.options.set("visible",false);
placemark568.options.set("visible",false);

}

});

isPlaying16=false;

//Четвертый порт-----------------------------------------------------------

$('button#four').click(function () {
var $this=$(this);
if((($dataPhp=="top40"))&&(isPlaying16))
{

$('#on4').show();
//$('#off4').hide();

isPlaying16 = false;
//Четвертый порт Тополянская 10.79.254.240

placemark97.options.set("visible",true);
placemark98.options.set("visible",true);
placemark99.options.set("visible",true);
placemark100.options.set("visible",true);
placemark101.options.set("visible",true);
placemark102.options.set("visible",true);
placemark103.options.set("visible",true);
placemark104.options.set("visible",true);
}else{
//$('#on4').hide();
$('#off4').show();

isPlaying16 = true;
//Четвертый порт Тополянская 10.79.254.240

placemark97.options.set("visible",false);
placemark98.options.set("visible",false);
placemark99.options.set("visible",false);
placemark100.options.set("visible",false);
placemark101.options.set("visible",false);
placemark102.options.set("visible",false);
placemark103.options.set("visible",false);
placemark104.options.set("visible",false);

}
if((($dataPhp=="bas31"))&&(isPlaying27))
{
//$('#on4').show();
//$('#off4').hide();


isPlaying27 = false;
//Четвертый порт Басы 10.79.254.231

placemark535.options.set("visible",true);
placemark536.options.set("visible",true);
placemark537.options.set("visible",true);
placemark538.options.set("visible",true);
placemark539.options.set("visible",true);
placemark540.options.set("visible",true);
placemark554.options.set("visible",true);
}else{
//$('#on4').hide();
//$('#off4').show();
isPlaying27 = true;
//Четвертый порт Басы 10.79.254.231

placemark535.options.set("visible",false);
placemark536.options.set("visible",false);
placemark537.options.set("visible",false);
placemark538.options.set("visible",false);
placemark539.options.set("visible",false);
placemark540.options.set("visible",false);
placemark554.options.set("visible",false);
}
if((($dataPhp=="bas29"))&&(isPlaying18))
{
//$('#on4').show();
//$('#off4').hide();



isPlaying18 = false;
//Четвертый порт Басы 10.79.254.229

placemark570.options.set("visible",true);
placemark571.options.set("visible",true);
placemark572.options.set("visible",true);
placemark573.options.set("visible",true);
}else{
//$('#on4').hide();
//$('#off4').show();

isPlaying18 = true; 
//Четвертый порт Басы 10.79.254.229

placemark570.options.set("visible",false);
placemark571.options.set("visible",false);
placemark572.options.set("visible",false);
placemark573.options.set("visible",false);
}
});

// Показать тролейбусные опоры


var trolButton = new ymaps.control.Button({
    data: {
    content:"Тролейбусные опоры"

    },
   options: {

   maxWidth: [28,200,178]

   }
});

myMap.controls.add(trolButton);

float:'right',

trolButton.events.add('click',function mag () {

alert("Тролейбусные опоры");

});


//----------------------------------------------------

//Инструмент для определения координат

var kordButton = new ymaps.control.Button({
    data: {
    content:"Определить координаты"

    },
   options: {

   maxWidth: [28,200,178]

   }
});

myMap.controls.add(kordButton);

float:'right',

kordButton.events.add('click',function mag () {


myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentHeader:'Событие!',
                contentBody:'<p>.Кто щелкнул.</p>' +
                    '<p>Координаты: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Щелкни▒~Bе е▒~Iе ▒~@аз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });

    // ▒~^б▒~@або▒~Bка ▒~Aоб▒~K▒~Bи▒~O, возника▒~N▒~Iего п▒~@и ▒~Iел▒~Gке
    // п▒~@авой кнопки м▒~K▒~Hи в л▒~Nбой ▒~Bо▒~Gке ка▒~@▒~B▒~K.
    // ▒~_▒~@и возникновении ▒~Bакого ▒~Aоб▒~K▒~Bи▒~O покажем в▒~Aпл▒~Kва▒~N▒~I▒~C▒~N под▒~Aказк▒~C
    // в ▒~Bо▒~Gке ▒~Iел▒~Gка.
    myMap.events.add('contextmenu', function (e) {
        myMap.hint.open(e.get('coords'), '▒~Z▒~Bо-▒~Bо ▒~Iелкн▒~Cл п▒~@авой кнопкой');
    });

    // Ск▒~@▒~Kваем ▒~Eин▒~B п▒~@и о▒~Bк▒~@▒~K▒~Bии бал▒~Cна.
    myMap.events.add('balloonopen', function (e) {
        myMap.hint.close();
    });

});

//Работа с клиентами работающих по системе 

var eserButton = new ymaps.control.Button({
    data:  {
    content:"Клиенты подключенные по Ethernet"

    },

    options: {

   maxWidth: [28,250,300]

   }

});

myMap.controls.add(eserButton);



eserButton.events.add('click',function() {

$("div#edge").show();
$("div#edge").draggable();

$("div#edge").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('pl.php',{},function(data) {
                $('#edge_data').html(data);
                });
                });

});



//---------------------------------------------------------------------------------------------------------------------------

//Занятые опоры----------------

var oporaButton = new ymaps.control.Button({
    data:  {
    content:"Показать электроопоры"

    },

    options: {

   maxWidth: [28,180,178]
   }

});

myMap.controls.add(oporaButton);

//isPlaying = false;

oporaButton.events.add('click',function() {

//Ящики на опорах Басовская

var placemark150= new ymaps.Placemark([ 50.888529, 34.815343],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark150);

var placemark151= new ymaps.Placemark([ 50.887526, 34.815761],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark151);

var placemark152= new ymaps.Placemark([50.8865, 34.8162],{
     hintContent: 'Опора №13',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/13b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark152);

var placemark153= new ymaps.Placemark([50.8858, 34.8166],{
     hintContent: 'Опора №15',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/15b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark153);

var placemark154= new ymaps.Placemark ([50.8852, 34.8169],{
     hintContent: 'Опора №17',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/17b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark154);

var placemark155= new ymaps.Placemark([50.8843, 34.8173],{
     hintContent: 'Опора №21',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark155);

var placemark156= new ymaps.Placemark([50.8830, 34.8180],{
     hintContent: 'Опора №25',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/25b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark156);

var placemark157 = new ymaps.Placemark([50.8820, 34.8188],{
     hintContent: 'Опора №30',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/30b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark157);

var placemark158= new ymaps.Placemark([50.8813, 34.8194],{
     hintContent: 'Опора №32',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/32b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark158);

var placemark159= new ymaps.Placemark([50.8804,34.8198],{
     hintContent: 'Опора №35',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/35b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark159);

var placemark160 = new ymaps.Placemark([50.8789, 34.8209],{
     hintContent: 'Опора №39',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/39b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark160);

//----------------------------------------------------------------------------------------------

// Опоры Водная

var placemark161 = new ymaps.Placemark([50.8804, 34.8220],{
     hintContent: 'Опора №31',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/31m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark161);

var placemark162 = new ymaps.Placemark([50.8830, 34.8204],{
     hintContent: 'Опора №22',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/22b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark162);

var placemark163 = new ymaps.Placemark([50.8847, 34.8196],{
     hintContent: 'Опора №15',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/15m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark163);

var placemark164 = new ymaps.Placemark([50.8863, 34.8188],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark164);

var placemark165 = new ymaps.Placemark([50.8874,34.8183],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark165);

var placemark166 = new ymaps.Placemark([50.8887, 34.8176],{
     hintContent: 'Опора №1a',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/1b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark166);

//---------------------------------------------------------------------------------------------------------

// Опоры ул.Урожайная---------------------------------------------

var placemark167 = new ymaps.Placemark([50.8886, 34.8166],{
     hintContent: 'Опора №5',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark167);

var placemark168 = new ymaps.Placemark([50.8858, 34.8179],{
     hintContent: 'Опора №11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/11b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark168);

var placemark169 = new ymaps.Placemark([50.8834, 34.8192],{
     hintContent: 'Опора №20',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/20b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark169);

var placemark170 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark170);

//-----------------------------------------------------

//Опоры Дундича------------------------------

var placemark171 = new ymaps.Placemark([50.8739, 34.8268],{
     hintContent: 'Опора №13',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/13b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark171);

var placemark172 = new ymaps.Placemark([50.8748, 34.8234],{
     hintContent: 'Опора №21',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark172);

var placemark173 = new ymaps.Placemark([50.8754, 34.8234],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark173);

//Опоры ул.Карбышева

var placemark174 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark174);

var placemark175 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark175);

var placemark176 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark176);

var placemark177 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/opora/u24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark177);

var placemark178 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/opora/u24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark178);

var placemark179 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/opora/u24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark179);

//пер.Парижской Комуны

var placemark180 = new ymaps.Placemark([50.8880, 34.8116],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark180);

var placemark181 = new ymaps.Placemark([50.8861, 34.8128],{
     hintContent: 'Опора №10',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark181);

var placemark182 = new ymaps.Placemark([50.8824, 34.8138],{
     hintContent: 'Опора №22',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/22b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark182);

var placemark183 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark183);

//Опоры ул.Парижской Комуны

var placemark184 = new ymaps.Placemark([50.8927, 34.8204],{
     hintContent: 'Опора №42',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/42b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark184);

//Опоры ул.Войкова

var placemark185 = new ymaps.Placemark([50.8911, 34.8154],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark185);

var placemark186 = new ymaps.Placemark([50.8910, 34.8141],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark186);

var placemark187 = new ymaps.Placemark([50.8911, 34.8130],{
     hintContent: 'Опора №11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/11b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark187);

var placemark188 = new ymaps.Placemark([50.8909, 34.8105],{
     hintContent: 'Опора №19',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/19b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark188);

var placemark189 = new ymaps.Placemark([50.8906, 34.8086],{
     hintContent: 'Опора №25',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/25b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark189);

// ул.Низовская

var placemark190 = new ymaps.Placemark([50.8729, 34.8344],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark190);

var placemark191 = new ymaps.Placemark([50.8730, 34.8361],{
     hintContent: 'Опора №7',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark191);

var placemark192 = new ymaps.Placemark([50.8731, 34.8371],{
     hintContent: 'Опора №9',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark192);

var placemark193 = new ymaps.Placemark([50.8733, 34.8392],{
     hintContent: 'Опора №14',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/14b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark193);

//Опоры ул.Юбилейная

var placemark194 = new ymaps.Placemark([50.8745, 34.8194],{
     hintContent: 'Опора №2',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark194);

var placemark195 = new ymaps.Placemark([50.8746, 34.8198],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark195);

var placemark196 = new ymaps.Placemark([50.8737, 34.8219],{
     hintContent: 'Опора №13',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/13b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark196);

var placemark197 = new ymaps.Placemark([50.8728, 34.8241],{
     hintContent: 'Опора №27б',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/27b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark197);

var placemark198 = new ymaps.Placemark([50.8738, 34.8219],{
     hintContent: 'Опора №14',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/14b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark198);

var placemark199 = new ymaps.Placemark([50.8729, 34.8254],{
     hintContent: 'Опора №30',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/30m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark199);

var placemark200 = new ymaps.Placemark([50.8728,34.8259],{
     hintContent: 'Опора №32',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/32b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark200);

var placemark201 = new ymaps.Placemark([50.8725,34.8292],{
     hintContent: 'Опора №41',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/41b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark201);

var placemark202 = new ymaps.Placemark([50.8729, 34.8305],{
     hintContent: 'Опора №44',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/44b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark202);

var placemark203 = new ymaps.Placemark([50.8735, 34.8335],{
     hintContent: 'Опора №50',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/50b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark203);

var placemark204 = new ymaps.Placemark([50.8738, 34.8358],{
     hintContent: 'Опора №54',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/54b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark204);

var placemark205 = new ymaps.Placemark([50.8741, 34.8371],{
     hintContent: 'Опора №58',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/58m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark205);

var placemark206 = new ymaps.Placemark([50.8741, 34.8371],{
     hintContent: 'Опора №61',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/61b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark206);

var placemark207 = new ymaps.Placemark([50.8740, 34.8400],{
     hintContent: 'Опора №65',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/65b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark207);

var placemark208 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark208);

var placemark209 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №24',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/24m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark209);

//Опоры ул.Куприна


var placemark210 = new ymaps.Placemark([50.8861, 34.8138],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark210);

var placemark211 = new ymaps.Placemark([50.8837,34.8144],{
     hintContent: 'Опора №17',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/17b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark211);

var placemark212 = new ymaps.Placemark([50.8824, 34.8151],{
     hintContent: 'Опора №22',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/22b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark212);

var placemark213 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №30',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/30b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark213);

var placemark214 = new ymaps.Placemark([50.8806, 34.8162],{
     hintContent: 'Опора №31',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/31b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark214);

var placemark215 = new ymaps.Placemark([50.8797, 34.8167],{
     hintContent: 'Опора №33',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/33b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark215);

//Опоры ул.Молодежная

var placemark216 = new ymaps.Placemark([50.8843, 34.8166],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark216);

var placemark217 = new ymaps.Placemark([50.8838, 34.8167],{
     hintContent: 'Опора №6',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark217);

var placemark218 = new ymaps.Placemark([50.8824, 34.8173],{
     hintContent: 'Опора №11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/11b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark218);

var placemark219 = new ymaps.Placemark([50.8809, 34.8182],{
     hintContent: 'Опора №16',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/16b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark219);

var placemark220 = new ymaps.Placemark([50.8791, 34.8193],{
     hintContent: 'Опора №23',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/23b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark220);


//Опоры ул.Фурманова

var placemark221 = new ymaps.Placemark([50.8901, 34.8122],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark221);

var placemark222 = new ymaps.Placemark([50.8899, 34.8106],{
     hintContent: 'Опора №12',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark222);

//Опоры пер.Карбышева

var placemark223 = new ymaps.Placemark([50.8782, 34.8259],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark223);

var placemark224 = new ymaps.Placemark([50.8771, 34.8289],{
     hintContent: 'Опора №12',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark224);

var placemark225 = new ymaps.Placemark([50.8766, 34.8305],{
     hintContent: 'Опора №16',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/16b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark225);

var placemark226 = new ymaps.Placemark([50.8766, 34.8284],{
     hintContent: 'Опора №27',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/27b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark226);

var placemark227 = new ymaps.Placemark([50.8783, 34.8297],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark227);

//Опоры ул.1-ая Красносельская

var placemark228 = new ymaps.Placemark([50.8725, 34.8260],{
     hintContent: 'Опора №1',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/1b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark228);

var placemark229 = new ymaps.Placemark([50.8717,34.8270],{
     hintContent: 'Опора №6',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark229);

var placemark230 = new ymaps.Placemark([50.8700, 34.8301],{
     hintContent: 'Опора №14',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/14b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark230);

var placemark231 = new ymaps.Placemark([50.8695, 34.8313],{
     hintContent: 'Опора №21',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark231);

//Опоры ул.2-ая Красносельская

var placemark232 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark232);

var placemark233 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark233);

var placemark234 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №17',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/17b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark234);

var placemark235 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №19',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/19b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark235);

var placemark236 = new ymaps.Placemark([50.8822, 34.8200],{
     hintContent: 'Опора №25',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/25m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark236);


// Опоры Краснопольская

var placemark237 = new ymaps.Placemark([50.8888,34.8138],{
     hintContent: 'Опора №2',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark237);

var placemark238 = new ymaps.Placemark([50.8874, 34.8146],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark238);

var placemark239 = new ymaps.Placemark([50.8869, 34.8148],{
     hintContent: 'Опора №6',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark239);

var placemark240 = new ymaps.Placemark([50.8862, 34.8151],{
     hintContent: 'Опора №8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark240);

var placemark241 = new ymaps.Placemark([50.8845, 34.8155],{
     hintContent: 'Опора №14',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/14b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark241);

var placemark242 = new ymaps.Placemark([50.8823, 34.8165],{
     hintContent: 'Опора №22',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/22b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark242);

var placemark243 = new ymaps.Placemark([50.8798, 34.8179],{
     hintContent: 'Опора №30',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/30b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark243);

var placemark244 = new ymaps.Placemark([50.8788, 34.8184],{
     hintContent: 'Опора №34',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/34m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark244);

var placemark245 = new ymaps.Placemark([50.8807, 34.8173],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark245);

//Опоры ул.Глинки

var placemark246 = new ymaps.Placemark([50.8898, 34.8224],{
     hintContent: 'ул.Глинки,1(3 ящика)',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/box.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark246);

var placemark247 = new ymaps.Placemark([50.8897, 34.8222],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark247);

var placemark248 = new ymaps.Placemark([50.8889, 34.8225],{
     hintContent: 'Опора №9',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark248);

//Опоры ул.Майская,5


var placemark249 = new ymaps.Placemark([50.8906, 34.8195],{
     hintContent: 'Опора №5',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark249);

// Опоры ул.Боровая

var placemark250 = new ymaps.Placemark([50.8807, 34.8173],{
     hintContent: 'Опора №3',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark250);

// Опоры ул.Дубровского

var placemark251 = new ymaps.Placemark([50.8843, 34.8222],{
     hintContent: 'Опора № (3 ящика)',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark251);

//Опоры пер.Санаторный

var placemark252 = new ymaps.Placemark([50.8807, 34.8173],{
     hintContent: 'Опора №6',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark252);

//Опоры Карбышева Библиотека

var placemark253 = new ymaps.Placemark([50.8771, 34.8217],{
     hintContent: 'Опора №68',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/68b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark253);



//Опоры Тополянская ________________________________________________________________________________

//ул.Новоселовская

var placemark254 = new ymaps.Placemark([50.9526, 34.7954],{
     hintContent: 'Опора №5',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark254);

var placemark255 = new ymaps.Placemark([50.9508, 34.7960],{
     hintContent: 'Опора №11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/11b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark255);

var placemark256 = new ymaps.Placemark([50.9498, 34.7970],{
     hintContent: 'Опора №18',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/18b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark256);

var placemark257 = new ymaps.Placemark([50.9483, 34.7991],{
     hintContent: 'Опора №19',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/19b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark257);


//ул.Яровая

var placemark258 = new ymaps.Placemark([50.9477, 34.8025],{
     hintContent: 'Опора №5',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark258);

var placemark259 = new ymaps.Placemark([50.9465, 34.8036],{
     hintContent: 'Опора №12',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-12],
     });
     myMap.geoObjects.add(placemark259);


//ул.Строителей-----------------------------------------------------


var placemark260 = new ymaps.Placemark([50.9362, 34.8063],{
     hintContent: 'Опора №1',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/1m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark260);

var placemark261 = new ymaps.Placemark([50.9368, 34.8060],{
     hintContent: 'Опора №3',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark261);

var placemark262 = new ymaps.Placemark([50.9372, 34.8058],{
     hintContent: 'Опора №4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark262);


var placemark263 = new ymaps.Placemark([50.9376, 34.8056],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark263);

var placemark264 = new ymaps.Placemark([50.9387, 34.8049],{
     hintContent: 'Опора №9',
     balloonContent:'ddddd',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark264);

var placemark265 = new ymaps.Placemark([50.9394, 34.8044],{
     hintContent: 'Опора №12',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark265);

//Опоры пер.Строителей

var placemark266 = new ymaps.Placemark([50.9384, 34.8059],{
     hintContent: 'Опора №2',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark266);

var placemark267 = new ymaps.Placemark([50.9382, 34.8060],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark267);

//Опоры ул.Патона

var placemark268 = new ymaps.Placemark([50.9394, 34.8035],{
     hintContent: 'Опора №2',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark268);

var placemark269 = new ymaps.Placemark([50.9376, 34.8047],{
     hintContent: 'Опора №9',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark269);

//Опоры ул.Ползунова

var placemark270 = new ymaps.Placemark([50.9387, 34.8029],{
     hintContent: 'Опора №5',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark270);

var placemark271 = new ymaps.Placemark([50.9372, 34.8038],{
     hintContent: 'Опора №10',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark271);

// Опоры ул.Скрябина

var placemark272 = new ymaps.Placemark([50.9386, 34.8018],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark272);

var placemark273 = new ymaps.Placemark([50.9372, 34.8027],{
     hintContent: 'Опора №10',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark273);

//Опоры ул.Космическая

var placemark274 = new ymaps.Placemark([50.9404, 34.8038],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark274);

var placemark275 = new ymaps.Placemark([50.9399, 34.8021],{
     hintContent: 'Опора №8',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark275);

//Опоры ул.Шахтерская

var placemark276 = new ymaps.Placemark([50.9415, 34.8041],{
     hintContent: 'Опора №3',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark276);

var placemark277 = new ymaps.Placemark([50.9412, 34.8030],{
     hintContent: 'Опора №7',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark277);

var placemark278 = new ymaps.Placemark([50.9408, 34.8016],{
     hintContent: 'Опора №13',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/13b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark278);

var placemark279 = new ymaps.Placemark([50.9404, 34.8004],{
     hintContent: 'Опора №19',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/19m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark279);

//ул.Героическая

var placemark280 = new ymaps.Placemark([50.9419, 34.8023],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark280);

var placemark281 = new ymaps.Placemark([50.9416, 34.8009],{
     hintContent: 'Опора №7',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark281);

var placemark282 = new ymaps.Placemark([50.9425, 34.8014],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark282);

//Опоры ул.Довженко

var placemark283 = new ymaps.Placemark([50.9421, 34.8042],{
     hintContent: 'Опора №2',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark283);

var placemark284 = new ymaps.Placemark([50.9431, 34.8028],{
     hintContent: 'Опора №7',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark284);

var placemark285 = new ymaps.Placemark([50.9440, 34.8020],{
     hintContent: 'Опора №12',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark285);


//опоры пр-д Довженко

var placemark286 = new ymaps.Placemark([50.9446, 34.8027],{
     hintContent: 'Опора №8',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark286);

//Опоры ул.Весення

var placemark287 = new ymaps.Placemark([50.9409, 34.8103],{
     hintContent: 'Опора №10',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark287);


var placemark288 = new ymaps.Placemark([50.9411, 34.8087],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark288);


//Опоры пр-Горовой


var placemark289 = new ymaps.Placemark([50.9405, 34.8064],{
     hintContent: 'Опора №2',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark289);


var placemark290 = new ymaps.Placemark([50.9394, 34.8075],{
     hintContent: 'Опора №5',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark290);


//Опоры ул.Горовая


var placemark291 = new ymaps.Placemark([50.9391, 34.8087],{
     hintContent: 'Опора №11',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/11m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark291);

var placemark292 = new ymaps.Placemark([50.9398, 34.8081],{
     hintContent: 'Опора №15',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/15b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark292);

var placemark293 = new ymaps.Placemark([50.9408, 34.8072],{
     hintContent: 'Опора №19',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/19b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark293);

//Опоры ул.Мусорского

var placemark294 = new ymaps.Placemark([50.9470, 34.8012],{
     hintContent: 'Опора №2',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark294);


var placemark295 = new ymaps.Placemark([50.9481, 34.7992],{
     hintContent: 'Опора №7a',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7ab.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark295);

var placemark296 = new ymaps.Placemark([50.9478, 34.8000],{
     hintContent: 'Опора №5',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark296);

var placemark297 = new ymaps.Placemark([50.9495, 34.7985],{
     hintContent: 'Опора №12',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark297);

var placemark298 = new ymaps.Placemark([50.9509, 34.7975],{
     hintContent: 'Опора №18',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/18b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark298);

var placemark299 = new ymaps.Placemark([50.9515, 34.7971],{
     hintContent: 'Опора №21',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark299);


var placemark300 = new ymaps.Placemark([50.9521, 34.7966],{
     hintContent: 'Опора №23',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/23b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark300);

//Опоры ул.Тополянская

var placemark301 = new ymaps.Placemark([50.9382, 34.8070],{
     hintContent: 'Опора №5',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark301);

var placemark302 = new ymaps.Placemark([50.9399, 34.8059],{
     hintContent: 'Опора №17',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/17b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark302);

var placemark303 = new ymaps.Placemark([50.9406, 34.8054],{
     hintContent: 'Опора №21',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark303);

var placemark304 = new ymaps.Placemark([50.9413, 34.8052],{
     hintContent: 'Опора №22',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/22b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark304);

var placemark305 = new ymaps.Placemark([50.9416, 34.8049],{
     hintContent: 'Опора №10',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark305);

var placemark306 = new ymaps.Placemark([50.9424, 34.8050],{
     hintContent: 'Опора №27',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/27b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark306);

var placemark307 = new ymaps.Placemark([50.9426, 34.8051],{
     hintContent: 'Опора №28a',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/28ab.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark307);

var placemark308 = new ymaps.Placemark([50.9453, 34.8037],{
     hintContent: 'Опора №45',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/45m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark308);

var placemark309 = new ymaps.Placemark([50.9459, 34.8034],{
     hintContent: 'Опора №50',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/50b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark309);

var placemark310 = new ymaps.Placemark([50.9467, 34.8026],{
     hintContent: 'Опора №55',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/55b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark310);

var placemark311 = new ymaps.Placemark([50.9471, 34.8021],{
     hintContent: 'Опора №57',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/57m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark311);

var placemark312 = new ymaps.Placemark([50.9484, 34.8016],{
     hintContent: 'Опора №62',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/62b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark312);

var placemark313 = new ymaps.Placemark([50.9496, 34.8006],{
     hintContent: 'Опора №66',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/66b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark313);

var placemark314 = new ymaps.Placemark([50.9499, 34.8003],{
     hintContent: 'Опора №67',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/67b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark314);

var placemark315 = new ymaps.Placemark([50.9516, 34.7989],{
     hintContent: 'Опора №73',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/73b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark315);

var placemark316 = new ymaps.Placemark([50.9531, 34.7975],{
     hintContent: 'Опора №78',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/78b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark316);

var placemark317 = new ymaps.Placemark([50.9539, 34.7972],{
     hintContent: 'Опора №81',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/81b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark317);

var placemark318 = new ymaps.Placemark([50.9550, 34.7967],{
     hintContent: 'Опора №84',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/84b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark318);

var placemark319 = new ymaps.Placemark([50.9559, 34.7963],{
     hintContent: 'Опора №88',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/88b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark319);

var placemark320 = new ymaps.Placemark([50.9567, 34.7960],{
     hintContent: 'Опора №90',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/90b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark320);

var placemark321 = new ymaps.Placemark([50.9568, 34.7960],{
     hintContent: 'Опора №90',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/90m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark321);

var placemark322 = new ymaps.Placemark([50.9578, 34.7955],{
     hintContent: 'Опора №94',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/94b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark322);

var placemark323 = new ymaps.Placemark([50.9585, 34.7953],{
     hintContent: 'Опора №97',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/97b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark323);

var placemark324 = new ymaps.Placemark([50.9515, 34.7996],{
     hintContent: 'Опора Дача',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark324);

var placemark325 = new ymaps.Placemark([50.9515, 34.7996],{
     hintContent: 'Опора Дача',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark325);

var placemark326 = new ymaps.Placemark([50.9515, 34.7996],{
     hintContent: 'Опора Дача',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/9b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);


//Опоры начало ул.Тополянской

//2-й Заводской переулок (возле 5 дома)

var placemark350 = new ymaps.Placemark([50.9309, 34.8017],{
     hintContent: 'Опора №18',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/18b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark350);


//--- ул.Ветрова

var placemark351 = new ymaps.Placemark([50.9337, 34.8033],{
     hintContent: 'Опора №21',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark351);

var placemark352 = new ymaps.Placemark([50.9329, 34.8155],{
     hintContent: 'Ящик Метлом ',
     balloonContent:'Расположен на стене возле вагончика',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/box.png',
     iconImageSize:[40,40],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark352);

//Опора возле Тедиса

var  placemark353 = new ymaps.Placemark([50.9323, 34.8024],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark353);

// 3-ая Заводская 18 столб

var  placemark354 = new ymaps.Placemark([50.9314, 34.8012],{
     hintContent: 'Опора №18',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/18b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark354);


var  placemark355 = new ymaps.Placemark([50.9341, 34.8098],{
     hintContent: 'Опора №30',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/30b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark355);

var  placemark356 = new ymaps.Placemark([50.9343, 34.8097],{
     hintContent: 'Опора №32',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/32b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark356);

var  placemark357 = new ymaps.Placemark([50.9313, 34.8117],{
     hintContent: 'Опора №15',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/15b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark357);
















//Опоры Барановка-------------------------------------------------

//Опоры ул.Пугачева

var placemark327 = new ymaps.Placemark([50.9293,34.8376],{
     hintContent: 'Опора №5',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark327);

var placemark328 = new ymaps.Placemark([50.9310, 34.8363],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark328);

var placemark329 = new ymaps.Placemark([50.9301, 34.8371],{
     hintContent: 'Опора №10',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark329);


// Опора ул.Чехова

var placemark330 = new ymaps.Placemark([50.9341, 34.8292],{
     hintContent: 'Опора №46',
     balloonContent:'возле библиотеки',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/46b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark330);

var placemark331 = new ymaps.Placemark([50.9308, 34.8276],{
     hintContent: 'Опора №7',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark331);

var placemark332 = new ymaps.Placemark([50.9351, 34.8294],{
     hintContent: 'Опора №54',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/54b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark332);


//Опоры ул.Мухиной


var placemark333 = new ymaps.Placemark([50.9356, 34.8325],{
     hintContent: 'Опора №2',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/2b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark333);


// Опоры ул.Мичурина

var placemark334 = new ymaps.Placemark([50.9317, 34.8349],{
     hintContent: 'Опора №42 ',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/42m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark334);


//Опоры 2-а Севастопольская


var placemark335 = new ymaps.Placemark([50.9437, 34.8414],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark335);

//Опоры 1-ая Севастопольская


var placemark336 = new ymaps.Placemark([50.9432, 34.8402],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark336);


//Опоры пер.Линтваревых

var placemark337 = new ymaps.Placemark([50.9515, 34.7996],{
     hintContent: 'Опора №5',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/5b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark337);

var placemark338 = new ymaps.Placemark([50.9515, 34.7996],{
     hintContent: 'Опора №8',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark338);

var placemark339 = new ymaps.Placemark([50.9515, 34.7996],{
     hintContent: 'Опора №13',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/13b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark339);


//Опоры ул.Барановская

var placemark340 = new ymaps.Placemark([50.9412, 34.8396],{
     hintContent: 'Опора №17',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/17b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark340);


var placemark326 = new ymaps.Placemark([50.9418, 34.8410],{
     hintContent: 'Опора №21',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/21b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

var placemark326 = new ymaps.Placemark([50.9422, 34.8437],{
     hintContent: 'Опора №27',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/27b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

var placemark326 = new ymaps.Placemark([50.9425, 34.8449],{
     hintContent: 'Опора №30',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/30b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

var placemark326 = new ymaps.Placemark([50.9436, 34.8482],{
     hintContent: 'Опора №37',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/37m.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

var placemark326 = new ymaps.Placemark([50.9439, 34.8504],{
     hintContent: 'Опора №43',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/43b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

//Опоры ул.и Франко


var placemark326 = new ymaps.Placemark([50.9351, 34.8349],{
     hintContent: 'Опора №12',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/12b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

//Опоры пер.Доватора

var placemark326 = new ymaps.Placemark([50.9420, 34.8329],{
     hintContent: 'Опора №7',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

//Опоры ул.Линтваревых

var placemark326 = new ymaps.Placemark([50.9307, 34.8322],{
     hintContent: 'Опора №34',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/34b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

//Опоры С.Русовой

var placemark326 = new ymaps.Placemark([50.9413, 34.8428],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

//Опоры ул.М.Приймаченко

var placemark326 = new ymaps.Placemark([50.9409, 34.8446],{
     hintContent: 'Опора №4',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/4b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

var placemark326 = new ymaps.Placemark([50.9415, 34.8485],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

//Опоры ул.Хвойная

var placemark326 = new ymaps.Placemark([50.9476, 34.8432],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark326);

var placemark327 = new ymaps.Placemark([50.9455, 34.8420],{
     hintContent: 'Опора №15',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/15b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark327);

//Опоры ул.Братская

var placemark328 = new ymaps.Placemark([50.9317, 34.8369],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark328);

var placemark329 = new ymaps.Placemark([50.9312, 34.8373],{
     hintContent: 'Опора №8',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark329);

var placemark330 = new ymaps.Placemark([50.9476, 34.8432],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark330);

//Опоры ул.Л.Толстого

var placemark331 = new ymaps.Placemark([50.9344, 34.8369],{
     hintContent: 'Опора №3',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/3b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark331);

var placemark332 = new ymaps.Placemark([50.9328, 34.8359],{
     hintContent: 'Опора №10',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/10b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark332);

//Опоры ул.Линтваревых

var placemark333 = new ymaps.Placemark([50.9325, 34.8346],{
     hintContent: 'Опора №7',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/7b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark333);

//Опоры ул.И.Франко

var placemark334 = new ymaps.Placemark([50.9349, 34.8368],{
     hintContent: 'Опора №18',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/18b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark334);

//Опоры ул.Мирного

var placemark335 = new ymaps.Placemark([50.9417, 34.8454],{
     hintContent: 'Опора №8',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark335);

//Опоры ул.Народная

var placemark336 = new ymaps.Placemark([50.9419, 34.8302],{
     hintContent: 'Опора №1',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/1b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark336);

var placemark337 = new ymaps.Placemark([50.9428, 34.8308],{
     hintContent: 'Опора №6',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/6b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark337);

var placemark338 = new ymaps.Placemark([50.9432, 34.8306],{
     hintContent: 'Ящик на доме',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/box.png',
     iconImageSize:[40,40],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark338);

var placemark339 = new ymaps.Placemark([50.9451, 34.8321],{
     hintContent: 'Опора №14',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/14b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark339);

//Опоры пер.Народный

var placemark340 = new ymaps.Placemark([50.9457, 34.8314],{
     hintContent: 'Опора №8',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/8b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark340);

//Опоры пер.Пищанский

var placemark341 = new ymaps.Placemark([50.9416, 34.8351],{
     hintContent: 'Опора №1',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/1b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark341);

// Опоры ул.Битицкая

var placemark342 = new ymaps.Placemark([50.9405, 34.8360],{
     hintContent: 'Опора №1',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/1b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark342);

//Опоры ул.Миропольская

var placemark343 = new ymaps.Placemark([50.9404, 34.8421],{
     hintContent: 'Опора №32',
     balloonContent:'',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/32b.png',
     iconImageSize:[50,70],
     iconImageoffset:[-14,-14],
     });
     myMap.geoObjects.add(placemark343);


//----------------

});


//-----------------------------------------------------------------------------------------------------


//Отрисовка оптического коммутатора Барановка


var placemark1 = new ymaps.Placemark([50.9393,34.8342],{
         hintContent: '(BDCOM3310C)ул.Доватора,1(10.79.254.245)',
     }, {

      iconLayout:'default#image',
      iconImageHref:'/image/bdcom.png',
      iconImageSize: [70,50],
      iconImageoffset: [-16,-16],
      });

   myMap.geoObjects.add(placemark1);
 

//olt basi31

var placemark501 = new ymaps.Placemark([50.8899,34.8224],{
         hintContent: '(BDCOM3310C)10.79.254.231)',
     }, {

      iconLayout:'default#image',
      iconImageHref:'/image/bdcom.png',
      iconImageSize: [70,50],
      iconImageoffset: [-16,-16],
      });

   myMap.geoObjects.add(placemark501);


//olt basi29


var placemark502 = new ymaps.Placemark([50.8897,34.8225],{
         hintContent: '(BDCOM3310C)(10.79.254.229)',
     }, {

      iconLayout:'default#image',
      iconImageHref:'/image/bdcom.png',
      iconImageSize: [70,50],
      iconImageoffset: [-16,-16],
      });

   myMap.geoObjects.add(placemark502);



   
//Размещение делителей на Барановке

//Первый порт

var placemark2 = new ymaps.Placemark([50.9350,34.8341],{
      hintContent:'пер.И.Франко,24',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar4(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark2);

var placemark3 = new ymaps.Placemark([50.9349,34.8341],{
      hintContent:'ул.И.Франко,24',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar4(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark3);

   var placemark4 = new ymaps.Placemark([50.9348,34.8372],{
      hintContent: 'ул.И.Франко,44',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar4(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark4);

var placemark5 = new ymaps.Placemark([50.9330,34.8359],{
      hintContent:'ул.Л.Толстого,7',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark5);

   var placemark6 = new ymaps.Placemark([50.9312,34.8372],{
      hintContent:'ул.Братская,9',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark6);

   var placemark7 = new ymaps.Placemark([50.9311,34.8374],{
      hintContent:'ул.Братская,9',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark7);

   var placemark8 = new ymaps.Placemark([50.9312,34.8375],{
      hintContent:'ул.Братская,9',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark8);

   var placemark9 = new ymaps.Placemark([50.9312,34.8375],{
      hintContent:'ул.Братская,9',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark9);

   var placemark10 = new ymaps.Placemark([50.9311,34.8373],{
      hintContent:'ул.Братская,9',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark10);


var placemark11 = new ymaps.Placemark([50.9300,34.8371],{
      hintContent: 'ул.Пугачева,23',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark11);

var placemark12 = new ymaps.Placemark([50.9304,34.8391],{
      hintContent:'пер.И.Франко,18/1',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark12);

   var placemark13= new ymaps.Placemark([50.9291,34.8394],{
      hintContent:'пер.И.Франко,34',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark13);


var placemark14= new ymaps.Placemark([50.9356,34.8331],{
      hintContent:'ул.Мухиной,3',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark14);

 var placemark15= new ymaps.Placemark([50.9327,34.8333],{
      hintContent:'пер.Линтваревых,13',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark15);

   var placemark16= new ymaps.Placemark([50.9337,34.8333],{
      hintContent:'пер.Линтваревых,29',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark16);
   
   
   var placemark17= new ymaps.Placemark([50.9318,34.8334],{
      hintContent:'пер.Линтваревых,3',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark17);
  
   
   var placemark18= new ymaps.Placemark([50.9272,34.8415],{
      hintContent:'кооп Энергетик',
    }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del4(bar1).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
    });
   myMap.geoObjects.add(placemark18);


    
//порт второй Барановка размещение делителей
   
var placemark39 = new ymaps.Placemark([50.9479,34.8550],{
     hintContent: 'ул.Сосновая,8',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark39);

var placemark40 = new ymaps.Placemark([50.9394,34.8341],{
     hintContent: 'ул.Доватора,1',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar4(2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark40);

var placemark41= new ymaps.Placemark([50.9419,34.8302],{
     hintContent: 'ул.Курортная,2',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark41);

var placemark42= new ymaps.Placemark([50.9429,34.8308],{
     hintContent: 'ул.Народная,12',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark42);

var placemark43= new ymaps.Placemark([50.9432,34.8276],{
     hintContent: 'ул.Доватора,48',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del16(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark43);

var placemark44= new ymaps.Placemark([50.9284,34.8243],{
     hintContent: 'ул.Чехова,4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark44);


var placemark45= new ymaps.Placemark([50.9283,34.8243],{
     hintContent: 'ул.Чехова,4',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark45);
     
var placemark46= new ymaps.Placemark([50.9340,34.8292],{
     hintContent: 'ул.Чехова,77',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark46);

var placemark47= new ymaps.Placemark([50.9419,34.8302],{
     hintContent: 'ул.Курортная,2',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark47);

var placemark48= new ymaps.Placemark([50.9404,34.8421],{
     hintContent: 'ул.Миропольская,32',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar2).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark48);

//port3

var placemark55= new ymaps.Placemark([50.9403,34.8342],{
     hintContent: 'ул.Песчанская,11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark55);

var placemark56= new ymaps.Placemark([50.9404,34.8344],{
     hintContent: 'ул.Песчанская,11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark56);
     
var placemark57= new ymaps.Placemark([50.9402,34.8341],{
     hintContent: 'ул.Песчанская,11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark57);

var placemark58= new ymaps.Placemark([50.9424,34.8449],{
     hintContent: 'ул.Барановская,87',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar4(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark58);
     
var placemark59= new ymaps.Placemark([50.9425,34.8449],{
     hintContent: 'Барановская,87',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark59);

var placemark60= new ymaps.Placemark([50.9410,34.8444],{
     hintContent: 'ул.Запотоцкого,11',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark60);
     
var placemark61= new ymaps.Placemark([50.9432,34.8403],{
     hintContent: 'ул.1-ая Севастопольская,13',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark61);
     
var placemark62= new ymaps.Placemark([50.9436,34.8415],{
     hintContent: 'ул.2-ая Севастопольская,7',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark62);
     
var placemark63= new ymaps.Placemark([50.9411,34.8396],{
     hintContent: 'ул.Барановская,41',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark63);
     
var placemark64= new ymaps.Placemark([50.9412,34.8396],{
     hintContent: 'ул.Барановская,41',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark64);
     
var placemark65= new ymaps.Placemark([50.9393,34.8342],{
     hintContent: 'ул.Доватора,1',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/del8(bar3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark65);
     
var placemark66= new ymaps.Placemark([50.9393,34.8341],{
     hintContent: 'ул.Доватора,1',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark66);


var placemark67= new ymaps.Placemark([50.9422,34.8331],{
     hintContent: 'пер.Доватора,14',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar2(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark67);


var placemark68= new ymaps.Placemark([50.9423,34.8331],{
     hintContent: 'пер.Доватора,14',
     }, {
     iconLayout:'default#image',
     iconImageHref:'/image/bar4kl(3).png',
     iconImageSize:[40,40],
     iconImageoffset:[-16,-16],
     });
     myMap.geoObjects.add(placemark68);


//Скрывать все делители на портах Барановка


if ((brest != 1)) {


//Первый порт Барановки

placemark2.options.set("visible",false);
placemark3.options.set("visible",false);
placemark4.options.set("visible",false);
placemark5.options.set("visible",false);
placemark6.options.set("visible",false);
placemark7.options.set("visible",false);
placemark8.options.set("visible",false);
placemark9.options.set("visible",false);
placemark10.options.set("visible",false);
placemark11.options.set("visible",false);
placemark12.options.set("visible",false);
placemark13.options.set("visible",false);
placemark14.options.set("visible",false);
placemark15.options.set("visible",false);
placemark16.options.set("visible",false);
placemark17.options.set("visible",false);
placemark18.options.set("visible",false);

//Второй порт Барановки

placemark39.options.set("visible",false);
placemark40.options.set("visible",false);
placemark41.options.set("visible",false);
placemark42.options.set("visible",false);
placemark43.options.set("visible",false);
placemark44.options.set("visible",false);
placemark45.options.set("visible",false);
placemark46.options.set("visible",false);
placemark47.options.set("visible",false);
placemark48.options.set("visible",false);

//Третий порт Барановки

placemark55.options.set("visible",false);
placemark56.options.set("visible",false);
placemark57.options.set("visible",false);
placemark58.options.set("visible",false);
placemark59.options.set("visible",false);
placemark60.options.set("visible",false);
placemark61.options.set("visible",false);
placemark58.options.set("visible",false);
placemark59.options.set("visible",false);
placemark60.options.set("visible",false);
placemark61.options.set("visible",false);
placemark62.options.set("visible",false);
placemark63.options.set("visible",false);
placemark64.options.set("visible",false);
placemark65.options.set("visible",false);
placemark66.options.set("visible",false);
placemark67.options.set("visible",false);
placemark68.options.set("visible",false);

}

//Тополянская 10.79.254.240

//topola 1 port 1

var placemark80 = new ymaps.Placemark([50.9415,34.8040], {
    hintContent:'ул.Шахтерская,4',

    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize: [40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark80);

var placemark81 = new ymaps.Placemark([50.9416,34.8008], {
    hintContent:'ул.Героическая,20',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark81);



var placemark82 = new ymaps.Placemark([50.9418,34.8023], {
    hintContent:'ул.Героическая,8',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark82);
 
var placemark83 = new ymaps.Placemark([50.9408,34.8014], {
    hintContent:'ул.Шахтерская,22',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark83);

var placemark84 = new ymaps.Placemark([50.9384,34.8067], {
    hintContent:'ул.Тополянская,35',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark84);

var placemark85 = new ymaps.Placemark([50.9380,34.8063], {
    hintContent:'пер.Строителей,5',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark85);

var placemark86 = new ymaps.Placemark([50.9368,34.8059], {
    hintContent:'ул.Строителей,7',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark86);

var placemark87 = new ymaps.Placemark([50.9378,34.8054], {
    hintContent:'ул.Строителей,8',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(040).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark87);


//topola 1 port 2


var placemark88 = new ymaps.Placemark([50.9430,34.8026], {
    hintContent:'ул.Довженко,21',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(041).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark88);

var placemark89 = new ymaps.Placemark([50.9439,34.8021], {
    hintContent:'ул.Довженко,30',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(041).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark89);

var placemark90 = new ymaps.Placemark([50.9404,34.8055], {
    hintContent:'ул.Тополянская,57',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(041).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark90);

var placemark91 = new ymaps.Placemark([50.9398,34.8059], {
    hintContent:'ул.Тополянская,47',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(041).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark91);

var placemark92 = new ymaps.Placemark([50.9422,34.8048], {
    hintContent:'ул.Тополянская,73',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del16(401).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark92);


//topol 1 port 3


var placemark93 = new ymaps.Placemark([50.9397,34.8082], {
    hintContent:'ул.Горовая,9/1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark93);

var placemark94 = new ymaps.Placemark([50.9409,34.8103], {
    hintContent:'ул.Подгорная,12',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark94);

var placemark95 = new ymaps.Placemark([50.9407,34.8072], {
    hintContent:'ул.Горовая,21',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark95);

var placemark96 = new ymaps.Placemark([50.9393,34.8075], {
    hintContent:'пр.Горовой,10',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark96);


var placemark107 = new ymaps.Placemark([50.9495,34.8006], {
    hintContent:'ул.Тополянская,129',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark107);

var placemark108 = new ymaps.Placemark([50.9531,34.7975], {
    hintContent:'ул.Тополянская,159а',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark108);

var placemark109 = new ymaps.Placemark([50.9509,34.7976], {
    hintContent:'ул.Мусорского,50',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del4(042).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark109);


//Тополянская 10.79.254.240 4 порт


var placemark97 = new ymaps.Placemark([50.9393,34.8034], {
    hintContent:'ул.Патона,5',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(043).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark97);

var placemark98 = new ymaps.Placemark([50.9370,34.8028], {
    hintContent:'ул.Скрябина,10',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(043).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark98);

var placemark99 = new ymaps.Placemark([50.9386,34.8017], {
    hintContent:'ул.Скрябина,28',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(043).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark99);

var placemark100 = new ymaps.Placemark([50.9386,34.8029], {
    hintContent:'ул.Ползунова,15/2',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(043).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark100);

var placemark101 = new ymaps.Placemark([50.9397,34.8021], {
    hintContent:'ул.Ползунова,1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(043).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark101);

var placemark102 = new ymaps.Placemark([50.9376,34.8046], {
    hintContent:'ул.Патона,23',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(043).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark102);

var placemark103 = new ymaps.Placemark([50.9403,34.8037], {
    hintContent:'ул.Космическая,8',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del16(403).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark103);

var placemark104 = new ymaps.Placemark([50.9370,34.8039], {
    hintContent:'ул.Ползунова,31',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del16(403).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark104);

//Скрывать все делители на портах 10.79.254.240 

//Первый порт Тополянская 10.79.254.240

placemark80.options.set("visible",false);
placemark81.options.set("visible",false);
placemark82.options.set("visible",false);
placemark83.options.set("visible",false);
placemark84.options.set("visible",false);
placemark85.options.set("visible",false);
placemark86.options.set("visible",false);
placemark87.options.set("visible",false);

//Второй порт Тополянская 10.79.254.240

placemark88.options.set("visible",false);
placemark89.options.set("visible",false);
placemark90.options.set("visible",false);
placemark91.options.set("visible",false);
placemark92.options.set("visible",false);

//Третий порт Тополянская 10.79.254.240

placemark93.options.set("visible",false);
placemark94.options.set("visible",false);
placemark95.options.set("visible",false);
placemark96.options.set("visible",false);
placemark107.options.set("visible",false);
placemark108.options.set("visible",false);
placemark109.options.set("visible",false);

//Четвертый порт Тополянская 10.79.254.240

placemark97.options.set("visible",false);
placemark98.options.set("visible",false);
placemark99.options.set("visible",false);
placemark100.options.set("visible",false);
placemark101.options.set("visible",false);
placemark102.options.set("visible",false);
placemark103.options.set("visible",false);
placemark104.options.set("visible",false);


//-----Басы 10.79.254.231--------------------

//basi31---1----------------

var placemark511 = new ymaps.Placemark([50.8875,34.8152], {
    hintContent:'ул.Басовская,20',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark511);

var placemark512 = new ymaps.Placemark([50.8864,34.8153], {
    hintContent:'ул.Басовская,32/3',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark512);

var placemark513 = new ymaps.Placemark([50.8877,34.8169], {
    hintContent:'ул.Урожайная,14',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark513);

var placemark514 = new ymaps.Placemark([50.8886,34.8131], {
    hintContent:'ул.Спортивная,7',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark514);

var placemark515 = new ymaps.Placemark([50.8905,34.8197], {
    hintContent:'ул.Майская,17',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark515);

var placemark516 = new ymaps.Placemark([50.8877,34.8146], {
    hintContent:'ул.Краснопольская,9',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark516);

var placemark517 = new ymaps.Placemark([50.8889,34.8174], {
    hintContent:'ул.Водная,4',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(bas311).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark517);

//basi31---2----------------

var placemark519 = new ymaps.Placemark([50.8833,34.8192], {
    hintContent:'ул.Урожайная,65',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark519);


var placemark520 = new ymaps.Placemark([50.8835,34.8133], {
    hintContent:'ул.М.Чурай-Р.Корсакова',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(4).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark520);

var placemark521 = new ymaps.Placemark([50.8853,34.8227], {
    hintContent:'ул.Боровая,54',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark521);

var placemark522 = new ymaps.Placemark([50.8841,34.8195], {
    hintContent:'ул.Водная,62',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark522);

var placemark523 = new ymaps.Placemark([50.8841,34.8195], {
    hintContent:'ул.Водная,62',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark523);

var placemark524 = new ymaps.Placemark([50.8860,34.8140], {
    hintContent:'ул.Куприна,29',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(4).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark524);

var placemark525 = new ymaps.Placemark([50.8834,34.8147], {
    hintContent:'ул.Куприна,59',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark525);

var placemark526 = new ymaps.Placemark([50.8822,34.8174], {
    hintContent:'ул.Молодежная,32',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas312(4).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark526);


//basi31---3----------------

var placemark527 = new ymaps.Placemark([50.8766,34.8304], {
    hintContent:'пер.Карбышева,40',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark527);

var placemark528 = new ymaps.Placemark([50.8777,34.8293], {
    hintContent:'пер.Карбышева,25',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark528);

var placemark529 = new ymaps.Placemark([50.8774,34.8223], {
    hintContent:'ул.Карбышева,34',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark529);

var placemark530 = new ymaps.Placemark([50.8780,34.8260], {
    hintContent:'пер.Карбышева,6',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(4).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark530);

var placemark531 = new ymaps.Placemark([50.8783,34.8235], {
    hintContent:'ул.Карбышева,64',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark531);

var placemark532 = new ymaps.Placemark([50.8731,34.8373], {
    hintContent:'ул.Низовская,44',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark532);

var placemark533 = new ymaps.Placemark([50.8766,34.8283], {
    hintContent:'пер.Карбышева,78',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark533);


var placemark534 = new ymaps.Placemark([50.8750,34.8283], {
    hintContent:'пер.Юбилейный,25',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas313(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark534);




//basi31---4---------------

var placemark535= new ymaps.Placemark([50.8733,34.8393], {
    hintContent:'ул.Низовская,62',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark535);

var placemark536 = new ymaps.Placemark([50.8740,34.8269], {
    hintContent:'ул.Нарбута,22',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark536);

var placemark537= new ymaps.Placemark([50.8733,34.8393], {
    hintContent:'ул.Низовская,62',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark537);

var placemark538= new ymaps.Placemark([50.8747,34.8234], {
    hintContent:'ул.Нарбута,50',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark538);

var placemark539= new ymaps.Placemark([50.8734,34.8334], {
    hintContent:'ул.Юбилейная,124',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark539);

var placemark540= new ymaps.Placemark([50.8741,34.8384], {
    hintContent:'ул.Юбилейная,156',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark540);

var placemark554= new ymaps.Placemark([50.8728,34.8306], {
    hintContent:'ул.Юбилейная,106',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas314(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark554);

//Скрыть все делители на олте 10.79.254.231

if ((brest!=1))

{

//Первый порт Басы 10.79.254.231

placemark511.options.set("visible",false);
placemark512.options.set("visible",false);
placemark513.options.set("visible",false);
placemark514.options.set("visible",false);
placemark515.options.set("visible",false);
placemark516.options.set("visible",false);
placemark517.options.set("visible",false);

//Второй порт Басы 10.79.254.231

placemark519.options.set("visible",false);
placemark520.options.set("visible",false);
placemark521.options.set("visible",false);
placemark522.options.set("visible",false);
placemark523.options.set("visible",false);
placemark524.options.set("visible",false);
placemark525.options.set("visible",false);
placemark526.options.set("visible",false);


//Третий порт Басы 10.79.254.231

placemark527.options.set("visible",false);
placemark528.options.set("visible",false);
placemark529.options.set("visible",false);
placemark530.options.set("visible",false);
placemark531.options.set("visible",false);
placemark532.options.set("visible",false);
placemark533.options.set("visible",false);
placemark534.options.set("visible",false);

//Четвертый порт Басы 10.79.254.231

placemark535.options.set("visible",false);
placemark536.options.set("visible",false);
placemark537.options.set("visible",false);
placemark538.options.set("visible",false);
placemark539.options.set("visible",false);
placemark540.options.set("visible",false);
placemark554.options.set("visible",false);

}


//Басы 10.79.254.229

//basi 29 1 port


var placemark541= new ymaps.Placemark([50.8870,34.8148], {
    hintContent:'ул.Краснопольская,17',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark541);

var placemark542= new ymaps.Placemark([50.8822,34.8164], {
    hintContent:'ул.Краснопольская,74',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark542);

var placemark543= new ymaps.Placemark([50.8808,34.8172], {
    hintContent:'ул.Краснопольская,90',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark543);

var placemark544= new ymaps.Placemark([50.8797,34.8178], {
    hintContent:'ул.Краснопольская,102',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark544);

var placemark545= new ymaps.Placemark([50.8741,34.8192], {
    hintContent:'ул.Юбилейная,4',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark545);

var placemark546= new ymaps.Placemark([50.8748,34.8197], {
    hintContent:'ул.Юбилейная,1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark546);

var placemark547= new ymaps.Placemark([50.8738,34.8223], {
    hintContent:'ул.Юбилейная,21',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas291(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark547);

//2port 29 olt

var placemark550= new ymaps.Placemark([50.8718, 34.8268], {
    hintContent:'ул.1-ая Красносельская,4',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2292(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark550);

var placemark551= new ymaps.Placemark([50.8693,34.8316], {
    hintContent:'ул.1-ая Красносельская,40',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2292(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark551);

var placemark552= new ymaps.Placemark([50.8703, 34.8263], {
    hintContent:'ул.2-ая Красносельская,20',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2292(16).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark552);

var placemark553= new ymaps.Placemark([50.8692,34.8283], {
    hintContent:'ул.2-ая Красносельская,42',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2292(16).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark553);


//port3 29olt

var placemark560= new ymaps.Placemark([50.8823,34.8152], {
    hintContent:'ул.Куприна,71',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark560);

var placemark561= new ymaps.Placemark([50.8802,34.8165], {
    hintContent:'ул.Куприна,87',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark561);

var placemark562= new ymaps.Placemark([50.8771,34.8196], {
    hintContent:'пер.Санаторный,1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark562);

var placemark563= new ymaps.Placemark([50.8779,34.8178], {
    hintContent:'пер.Санаторный,15',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark563);

var placemark564= new ymaps.Placemark([50.8831,34.8181], {
    hintContent:'ул.Басовская,59',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark564);

var placemark565= new ymaps.Placemark([50.8815,34.8193], {
    hintContent:'ул.Басовская,79',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark565);

var placemark566= new ymaps.Placemark([50.8791,34.8208], {
    hintContent:'ул.Басовская,101',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark566);

var placemark567= new ymaps.Placemark([50.8809,34.8182], {
    hintContent:'ул.Молодежная,48',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark567);

var placemark568= new ymaps.Placemark([50.8860,34.8128], {
    hintContent:'пер.М.Чурай,27',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2293(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark568);

//4 port 29 olt

var placemark570= new ymaps.Placemark([50.8911,34.8128], {
    hintContent:'ул.Михновського,4',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2294(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark570);

var placemark571= new ymaps.Placemark([50.8906,34.8087], {
    hintContent:'ул.Михновського,53',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2294(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark571);

var placemark572= new ymaps.Placemark([50.8912, 34.8131], {
    hintContent:'ул.Михновського,2',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2294(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark572);

var placemark573= new ymaps.Placemark([50.8899,34.8107], {
    hintContent:'ул.г.чупринки,34',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/bas2294(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark573);

//Скрыть все делители на олте 10.79.254.229


if ((brest!=1))

{

//Первый порт Басы 10.79.254.229

placemark541.options.set("visible",false);
placemark542.options.set("visible",false);
placemark543.options.set("visible",false);
placemark544.options.set("visible",false);
placemark545.options.set("visible",false);
placemark546.options.set("visible",false);
placemark547.options.set("visible",false);

//Второй порт Басы 10.79.254.229

placemark550.options.set("visible",false);
placemark551.options.set("visible",false);
placemark552.options.set("visible",false);
placemark553.options.set("visible",false);


//Третий порт Басы 10.79.254.229

placemark560.options.set("visible",false);
placemark561.options.set("visible",false);
placemark562.options.set("visible",false);
placemark563.options.set("visible",false);
placemark564.options.set("visible",false);
placemark565.options.set("visible",false);
placemark566.options.set("visible",false);
placemark567.options.set("visible",false);
placemark568.options.set("visible",false);

//Четвертый порт Басы 10.79.254.229

placemark570.options.set("visible",false);
placemark571.options.set("visible",false);
placemark572.options.set("visible",false);
placemark573.options.set("visible",false);


}


//Коммутотатор 10.79.254.244
// port 1

var placemark580= new ymaps.Placemark([50.9484,34.7990], {
    hintContent:'ул.Мусорского,1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark580);

var placemark581= new ymaps.Placemark([50.9495,34.7986], {
    hintContent:'ул.Мусорского,32',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark581);

var placemark582= new ymaps.Placemark([50.9498,34.7970], {
    hintContent:'ул.Новоселовская,35',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark582);

var placemark583= new ymaps.Placemark([50.9522,34.7967], {
    hintContent:'ул.Мусорского,62',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark583);

var placemark584= new ymaps.Placemark([50.9477,34.8001], {
    hintContent:'ул.Мусорского,10',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark584);

var placemark585= new ymaps.Placemark([50.9508,34.7960], {
    hintContent:'ул.Новоселовская,19',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark585);

var placemark586= new ymaps.Placemark([50.9526,34.7954], {
    hintContent:'ул.Новоселовская,8',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top1(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark586);


//port 2

var placemark590= new ymaps.Placemark([50.9483,34.8016], {
    hintContent:'ул.Тополянская,115',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark590);

var placemark591= new ymaps.Placemark([50.9470,34.8022], {
    hintContent:'ул.Тополянская,105',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark591);

var placemark592= new ymaps.Placemark([50.9496,34.8005], {
    hintContent:'ул.Тополянская,131А',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark592);

var placemark593= new ymaps.Placemark([50.9539,34.7972], {
    hintContent:'ул.Тополянская,132',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark593);

var placemark594= new ymaps.Placemark([50.9517,34.7986], {
    hintContent:'ул.Тополянская,145',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark594);

var placemark595= new ymaps.Placemark([50.9558,34.7964], {
    hintContent:'ул.Тополянская,152',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark595);

var placemark596= new ymaps.Placemark([50.9586,34.7953], {
    hintContent:'ул.Тополянская,186',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark596);

var placemark597= new ymaps.Placemark([50.9465,34.8036], {
    hintContent:'ул.Яровая,2',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/top2(8).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark597);


//Третий порт Тополянская,10.79.254.244

var placemark400= new ymaps.Placemark([50.9329,34.8154], {
    hintContent:'ул.Тополянская,18',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(443).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark400);

var placemark401= new ymaps.Placemark([50.9323,34.8023], {
    hintContent:'пер.1-й-Заводской,7',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/del8(443).png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark401);



//Убрать все делители с портов Тополянская 10.79.254.244

if ((brest!=1))

{

//Первый порт Басы 10.79.254.244

placemark580.options.set("visible",false);
placemark581.options.set("visible",false);
placemark582.options.set("visible",false);
placemark583.options.set("visible",false);
placemark584.options.set("visible",false);
placemark585.options.set("visible",false);
placemark586.options.set("visible",false);

//Второй порт Басы 10.79.254.244

placemark590.options.set("visible",false);
placemark591.options.set("visible",false);
placemark592.options.set("visible",false);
placemark593.options.set("visible",false);
placemark594.options.set("visible",false);
placemark595.options.set("visible",false);
placemark596.options.set("visible",false);
placemark597.options.set("visible",false);


//Третий порт Басы 10.79.254.244

placemark400.options.set("visible",false);
placemark401.options.set("visible",false);


}



//---------------------------------

//olt topola 1

var placemark105 = new ymaps.Placemark([50.9320,34.8029],{
         hintContent: '(BDCOM3310C)пер.1-й Заводской,2(10.79.254.240)',
     }, {

      iconLayout:'default#image',
      iconImageHref:'/image/bdcom.png',
      iconImageSize: [70,50],
      iconImageoffset: [-16,-16],
      });

   myMap.geoObjects.add(placemark105);

//olt topola 2

var placemark106 = new ymaps.Placemark([50.9316,34.8032],{
         hintContent: '(BDCOM3310C)пер.1-й Заводской,2(10.79.254.244)',
     }, {

      iconLayout:'default#image',
      iconImageHref:'/image/bdcom.png',
      iconImageSize: [70,50],
      iconImageoffset: [-16,-16],
      });

   myMap.geoObjects.add(placemark106);



//Kommbox------------------------




var placemark510 = new ymaps.Placemark([50.9214,34.8095], {
    hintContent:'Главный офис ул.Рыбалко,1',
    balloonContent:'Биллинговая система, NAS Cisco ASR1002',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/server.png',
    iconImageSize:[60,50],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark510);


//fotodel

var t, a;
function example(e){
clearTimeout(t);
var w = e.width;
if (a) {
t = setInterval(function () {
if (w <= 450) clearTimeout(t); // Стили на уменьшение
e.style.cursor = 'zoom-in';
e.style.borderRadius = '1px';
e.style.boxShadow = '2px 2px 5px #fff'
e.width = w--;
}, 5);
}
else {
t = setInterval(function () {
if (w >= 650) clearTimeout(t);
// Стили на увеличение
e.style.cursor = 'zoom-out';
e.style.borderRadius = '5px';
e.style.boxShadow = '2px 2px 5px #888'
e.width = w++;
}, 5);
}
a = !a;
}



//-----------------------------------------------------------------------------


// active

// Вызываем окно обслуживания коммутатора


//bdcom baranovka upravlenie--------------------------------------

placemark1.events.add('click',function () {

$("div#olt").show();
$("div#olt").draggable();
$("div#info_port").show();
$('#bara45').show();

$('#off1').show();
$('#off2').show();
$('#off3').show();
$('#off4').show();

kl=5;
ret=5;


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logoolt.php',{ipolt:"10.79.254.245",ad:"ул.Доватора,1",rn:"Барановка"},function(data) {
                $('#logoolt_data').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('countonu.php',{ipolt:"10.79.254.245"},function(data) {
                $('#info_port').html(data);
                });
                });

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('oleg.php',{ipolt:"10.79.254.245"},function(data) {
                $('#oltik').html(data);
                });
                });

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('zab.php',{ipolt:"10.79.254.245",ol:"bar"},function(data) {
                $('#grafo_data').html(data);
                });
                });




$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});

});

//Закрытие окна


$(function() {
    $("#skill_input").autocomplete({
        source:"search.php",
    });
});



//Добавление клиентов на делителя

$('#vib').click(function() {
$("div#editor").show();
$("div#editor_data").show();
$("div#insert_data").show();

let input = document.querySelector('input#skill_input');
poisk=(input.value);
//$dataPhp=$('.data-php').attr('data-attr');
//alert($dataPhp);
//$dataPhp2=$('.data-php2').attr('data-attr');
//alert($dataPhp2);


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ed.php',{poisk:poisk},function(data) {
                $('#editor_data').html(data);
                });
                });

});

//Вставка данных на делитель

$('#ins').click(function() {
document.getElementById("skill_input").value="";
$ostal = $('.data-php15').attr('data-attr');

if($ostal == 0)
{
alert('Вы уже заполнили все порты этого делителя');
}
else
{

//Переменная логин
$dataPhp4=$('.data-php4').attr('data-attr');
//Переменная номер делителя
$dataPhp21=$('.data-php21').attr('data-attr');
//Переменная адрес делителя
$dataPhp12=$('.data-php12').attr('data-attr');
//Переменная порт делителя
$dataPhp44=$('.data-php44').attr('data-attr');
//Переменная ип коммутатора к которому привязывается делитель
$dataPhp24=$('.data-php11').attr('data-attr');
//Количество портов на делителе
$dataPhp27=$('.data-php14').attr('data-attr');


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('indel.php',{login:$dataPhp4,del:$dataPhp21,adres:$dataPhp12,port:$dataPhp44,tip:$dataPhp27,oltip:$dataPhp24},function(data) {
                $('#insert_data').html(data);
                });
                });

//Метка в базе на исключения пользователя из выборки

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('upd.php',{login:$dataPhp4},function(data) {
                $('#insert_data').html(data);
                });
                });


$("div#del").show();
$("div#user_data").show();
//Номер делителя
$dataPhp84=$('.data-php21').attr('data-attr');
//Общее кол-во портов на делителе
$dataPhp85=$('.data-php14').attr('data-attr');

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:$dataPhp84,d:$dataPhp85},function(data) {
                $('#user_data').html(data);
                });
                });

var txt;
if (confirm("ПРИВЯЗКА ОСУЩЕСТВЛЕНА.ПРОДОЛЖИТЬ ?")) {
txt = "You pressed OK!";
} else {
$("div#editor").hide();
$("div#insert_data").hide();
}

}


                });

$('#cledit').click(function() {
$("div#editor").hide();
$("div#editor_data").hide();
$("div#insert_data").hide();


});


//Отображение клиентских магистралей по портам

$('input#vse').click(function() {

document.getElementById('port1').checked=true;
document.getElementById('port2').checked=true;
document.getElementById('port3').checked=true;
document.getElementById('port4').checked=true;

});

$('#pok').click(function(){
var chbox1,chbox2,chbox3,chbox4,chbox5;
chbox1=document.getElementById('port1');
chbox2=document.getElementById('port2');
chbox3=document.getElementById('port3');
chbox4=document.getElementById('port4');
chbox5=document.getElementById('vse');

if (chbox1.checked&&kl==3)  {

var myGeoObject = new ymaps.GeoObject({
            // ?~^???~A?~K???? ??????~B?~@??~N ??????~J???~B?.
            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [

                    [50.9321, 34.8029],
                    [50.9321, 34.8027],
                    [50.9335, 34.8021],
                    [50.9353, 34.8091],
                    [50.9357, 34.8087],
                    [50.9415, 34.8050],
                    [50.9414, 34.8042],
                    [50.9415, 34.8041],
                    [50.9414, 34.8042],
                    [50.9407, 34.8016],
                    [50.9408, 34.8015],
                    [50.9407, 34.8016],
                    [50.9414, 34.8042],
                    [50.9415, 34.8041],
                    [50.9414, 34.8042],
                    [50.9415, 34.8050],
                    [50.9417, 34.8049],
                    [50.9422, 34.8041],
                    [50.9418, 34.8023],
                    [50.9415, 34.8009],
                    [50.9416, 34.8009],
                    [50.9415, 34.8009],
                    [50.9418, 34.8023],
                    [50.9422, 34.8041],
                    [50.9417, 34.8049],
                    [50.9415, 34.8050],
                    [50.9387, 34.8068],
                    [50.9383, 34.8050],
                    [50.9378, 34.8053],
                    [50.9378, 34.8055],
                    [50.9378, 34.8053],
                    [50.9368, 34.8060],
                    [50.9378, 34.8053],
                    [50.9378, 34.8053],
                    [50.9383, 34.8050],
                    [50.9385, 34.8059],
                    [50.9380, 34.8062],
                    [50.9380, 34.8064]
                                        

            ]
            },
            // ?~^???~A?~K???? ?~A????~A?~B?? ??????~J???~B?.
            properties:{
                // ?????~@????? ?~E???~B?.
                hintContent: "Магистраль на клиентские делители от оптического коммутатора Тополянская (1 порт) (10.79.254.240)",
                // ?????~@????? ????~C??.
                balloonContent: "Данные о оптических магистралях"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#40eb34",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);


var placemark604 = new ymaps.Placemark([50.9365,34.8083], {
    hintContent:'Ящик №1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark604);

var placemark605 = new ymaps.Placemark([50.9415,34.8049], {
    hintContent:'ул.Тополянская,67',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark605);


var placemark606 = new ymaps.Placemark([50.9385,34.8068], {
    hintContent:'ул.Тополянская,35',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark606);

}
if (chbox2.checked&&kl==3) {

var myGeoObject = new ymaps.GeoObject({
            // ?~^???~A?~K???? ??????~B?~@??~N ??????~J???~B?.
            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [

                    [50.9321, 34.8029],
                    [50.9321, 34.8027],
                    [50.9335, 34.8021],
                    [50.9353, 34.8091],
                    [50.9357, 34.8087],
                    [50.9415, 34.8050]

            ]
            },
            // ?~^???~A?~K???? ?~A????~A?~B?? ??????~J???~B?.
            properties:{
                // ?????~@????? ?~E???~B?.
                hintContent: "Магистраль на клиентские делители от оптического коммутатора Тополянская (2 порт) (10.79.254.240)               ",
                // ?????~@????? ????~C??.
                balloonContent: "Данные по оптическим магистралям"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#349DD5",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);


var placemark604 = new ymaps.Placemark([50.9365,34.8083], {
    hintContent:'Ящик №1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark604);

var placemark605 = new ymaps.Placemark([50.9415,34.8049], {
    hintContent:'ул.Тополянская,67',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark605);

}
if (chbox3.checked) {
alert('port3');

var myGeoObject = new ymaps.GeoObject({
            // ?~^???~A?~K???? ??????~B?~@??~N ??????~J???~B?.
            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [

                    [50.9321, 34.8029],
                    [50.9321, 34.8027],
                    [50.9335, 34.8021],
                    [50.9353, 34.8091],
                    [50.9357, 34.8087],
                    [50.9415, 34.8050]

            ]
            },
            // ?~^???~A?~K???? ?~A????~A?~B?? ??????~J???~B?.
            properties:{
                // ?????~@????? ?~E???~B?.
                hintContent: "Магистраль на клиентские делители от оптического коммутатора Тополянская (2 порт) (10.79.254.240)               ",
                // ?????~@????? ????~C??.
                balloonContent: "Данные по оптическим магистралям"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#349DD5",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);



}
if (chbox4.checked) {
alert('port4');

var myGeoObject = new ymaps.GeoObject({
            // ?~^???~A?~K???? ??????~B?~@??~N ??????~J???~B?.
            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [

                    [50.9321, 34.8029],
                    [50.9321, 34.8027],
                    [50.9335, 34.8021],
                    [50.9353, 34.8091],
                    [50.9357, 34.8087],
                    [50.9415, 34.8050]

            ]
            },
            // ?~^???~A?~K???? ?~A????~A?~B?? ??????~J???~B?.
            properties:{
                // ?????~@????? ?~E???~B?.
                hintContent: "Магистраль на клиентские делители от оптического коммутатора Тополянская (2 порт) (10.79.254.240)               ",
                // ?????~@????? ????~C??.
                balloonContent: "Данные по оптическим магистралям"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#349DD5",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);




}
if (chbox5.cheked) {

alert('все');

}






















});


//----------------------------------------------------------------------------------------------------------------------------------------------------------



$('button#close').click(function() {
$("div#olt").hide();
$("div#graf").hide();
$("div#logoolt_data").hide();
$("div#info_port").hide();

});

//-------------------------------------------------------------------
//ПОказать графики

$('#gr').click(function(gra) {

$dataPhp=$('.data-php').attr('data-attr');


if (($dataPhp=="bar"))
{

$('div#grafbar').show();
$('div#grafbar').draggable();

$('button#opow').click(function() {

$('div#grafbar').hide();
});
}

if (($dataPhp=="top40"))
{

$('div#graftop40').show();
$('div#graftop40').draggable();

$('button#opow').click(function() {

$('div#graftop40').hide();
});
}
if (($dataPhp=="top44"))
{

$('div#graftop44').show();
$('div#graftop44').draggable();

$('button#opow').click(function() {

$('div#graftop44').hide();
});
}

if (($dataPhp=="bas31"))
{

$('div#grafbas31').show();
$('div#grafbas31').draggable();

$('button#opow').click(function() {

$('div#grafbas31').hide();
});

}
if (($dataPhp=="bas29"))
{
$('div#grafbas29').show();
$('div#grafbas29').draggable();
$('button#opow').click(function() {
$('div#grafbas29').hide();
});

}

});

//--------------------------------------------------------------------



//-------первый порт Барановки появляется при клике

$('#1150').click(function() {

$("div#b1150").show();

});

$('#q1150').click(function() { 

$("div#b1150").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------

//-------второй порт Барановки появляется при клике

$('#1151').click(function() {

$("div#b1151").show();

});

$('#q1151').click(function() {

$("div#b1151").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------третий порт Барановки появляется при клике

$('#1152').click(function() {


$("div#b1152").show();

});

$('#q1152').click(function() {

$("div#b1152").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------первый порт Тополя 40 появляется при клике

$('#1158').click(function() {

$("div#b1158").show();

});

$('#q1158').click(function() {

$("div#b1158").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------второй порт Тополя 40 появляется при клике

$('#1159').click(function() {

$("div#b1159").show();

});

$('#q1159').click(function() {

$("div#b1159").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------третий порт Тополя 40 появляется при клике

$('#1160').click(function() {

$("div#b1160").show();

});

$('#q1160').click(function() {

$("div#b1160").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------четвертый порт Тополя 40  появляется при клике

$('#1161').click(function() {

$("div#b1161").show();

});

$('#q1161').click(function() {

$("div#b1161").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------первый порт Тополя 44 появляется при клике

$('#1154').click(function() {

$("div#b1154").show();

});

$('#q1154').click(function() {

$("div#b1154").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------второй порт Тополя 44 появляется при клике

$('#1155').click(function() {

$("div#b1155").show();

});

$('#q1155').click(function() {

$("div#b1155").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------третий порт Тополя 44 появляется при клике

$('#1156').click(function() {

$("div#b1156").show();

});

$('#q1156').click(function() {

$("div#b1156").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------первый порт Басы31 появляется при клике

$('#1149').click(function() {

$("div#b1149").show();

});

$('#q1149').click(function() {

$("div#b1149").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------

//-------второй порт Басы31 появляется при клике

$('#1166').click(function() {

$("div#b1166").show();

});

$('#q1166').click(function() {

$("div#b1166").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------третий порт Басы31 появляется при клике

$('#1167').click(function() {

$("div#b1167").show();

});

$('#q1167').click(function() {

$("div#b1167").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------

//-------четвертый порт Басы31 появляется при клике

$('#1168').click(function() {

$("div#b1168").show();

});

$('#q1168').click(function() {

$("div#b1168").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------первый порт Басы29 появляется при клике

$('#1162').click(function() {

$("div#b1162").show();

});

$('#q1162').click(function() {

$("div#b1162").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------второй порт Басы29 появляется при клике

$('#1163').click(function() {

$("div#b1163").show();

});

$('#q1163').click(function() {

$("div#b1163").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------третий порт Басы29 появляется при клике

$('#1164').click(function() {

$("div#b1164").show();

});

$('#q1164').click(function() {

$("div#b1164").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------
//-------четвертый порт Басы29 появляется при клике

$('#1165').click(function() {

$("div#b1165").show();

});

$('#q1165').click(function() {

$("div#b1165").hide();

})
//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------

//$('button#blk').click(function() {

$(document).ready(function (){
$("#blk").click(function () {
var sel = document.getElementById("block").style;
if(sel.display == "none")
{$("#block").show("slow");
$("#block").draggable();}
else $("#block").hide("slow");
});
});

$('button#ex').click(function() {
$("div#block").hide();

});

//obnovlenie 

$('button#delets').click(function() {

$dataPhp56=$('.data-php20').attr('data-attr');
alert($dataPhp56);

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('delete.php',{login:$dataPhp56},function(data) {
                $('#insert_data').html(data);
                });
                });

//obnovlenie zapisej

$("div#del").show();
$("div#user_data").show();
$dataPhp80=$('.data-php').attr('data-attr');
$dataPhp81=$('.data-php14').attr('data-attr');

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:$dataPhp80,d:$dataPhp81},function(data) {
                $('#user_data').html(data);
                });
                });                


let input = document.querySelector('input#skill_del');
input.value='';


$("div#insert_data").hide();
$("div#del_data").hide();


});

//----------------konec bloka baranovka---------------------------


//---- basi31 upravlenie



placemark501.events.add('click',function () {

$("div#olt").show();
$("div#olt").draggable();
$("div#info_port").show();
$('#bara45').hide();
$('#ba31').show();
$('#ba29').hide();
$('#to40').hide();
$('#to44').hide();


$('#off1').show();
$('#off2').show();
$('#off3').show();
$('#off4').show();

kl=1;
ret=1;



$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logoolt.php',{ipolt:"10.79.254.231",ad:"ул.Глинки,1",rn:"Басы"},function(data) {
                $('#logoolt_data').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('countonu.php',{ipolt:"10.79.254.231"},function(data) {
                $('#info_port').html(data);
                });
                });

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('oleg.php',{ipolt:"10.79.254.231"},function(data) {
                $('#oltik').html(data);
                });
                });

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('zab.php',{ipolt:"10.79.254.231",ol:"bas31"},function(data) {
                $('#grafo_data').html(data);
                });
                });



$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});


});


//---------------konec bloka basi31-------------------------

//----Басы 10.79.254.229 события

placemark502.events.add('click',function () {

$("div#olt").show();
$("div#olt").draggable();
$("div#info_port").show();


$('#bara45').hide();
$('#ba31').hide();
$('#ba29').show();
$('#to40').hide();
$('#to44').hide();

kl=2;
ret=1;
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logoolt.php',{ipolt:"10.79.254.229",ad:"ул.Глинки,1",rn:"Басы"},function(data) {
                $('#logoolt_data').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('countonu.php',{ipolt:"10.79.254.229"},function(data) {
                $('#info_port').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('oleg.php',{ipolt:"10.79.254.229"},function(data) {
                $('#oltik').html(data);
                });
                });

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('zab.php',{ipolt:"10.79.254.229",ol:"bas29"},function(data) {
                $('#grafo_data').html(data);
                });
                });


$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});



});


//------konec bloka basi 29-------

//---Тополянская первый олт 10.79.254.240-------


placemark105.events.add('click',function () {

$("div#olt").show();
$("div#olt").draggable();
$("div#info_port").show();

$('#off1').show();
$('#off2').show();
$('#off3').show();
$('#off4').show();



$('#bara45').hide();
$('#ba31').hide();
$('#ba29').hide();
$('#to40').show();
$('#to44').hide();

kl=3;
ret=3;


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logoolt.php',{ipolt:"10.79.254.240",ad:"пер.1-й Заводской,2",rn:"Тополянская"},function(data) {
                $('#logoolt_data').html(data);
                });
                });
             

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('countonu.php',{ipolt:"10.79.254.240"},function(data) {
                $('#info_port').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('oleg.php',{ipolt:"10.79.254.240"},function(data) {
                $('#oltik').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('zab.php',{ipolt:"10.79.254.240",ol:"top40"},function(data) {
                $('#grafo_data').html(data);
                });
                });

$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});


});



//----konec bloka 1 olta topol----

// Тополянская 10.79.254.244 - управление олтом


placemark106.events.add('click',function () {

$("div#olt").show();
$("div#olt").draggable();
$("div#info_port").show();


$('#off1').show();
$('#off2').show();
$('#off3').show();
$('#off4').show();

$('#bara45').hide();
$('#ba31').hide();
$('#ba29').hide();
$('#to40').hide();
$('#to44').show();


kl=4;
ret=3;
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logoolt.php',{ipolt:"10.79.254.244",ad:"пер.1-й Заводской,2",rn:"Тополянская"},function(data) {
                $('#logoolt_data').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('countonu.php',{ipolt:"10.79.254.244"},function(data) {
                $('#info_port').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('oleg.php',{ipolt:"10.79.254.244"},function(data) {
                $('#oltik').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('zab.php',{ipolt:"10.79.254.244",ol:"top44"},function(data) {
                $('#grafo_data').html(data);
                });
                });


$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});






});

//----------------------------------------------------------------------------------

//konec bloka 2 topol---------------


//Механизм отображения клиенстких портов

$('#klient').click(function () {

$("div#ports").show();
$("div#ports").draggable();
alert($kl);
});

$('#klexit').click(function () {
$("div#ports").hide();

});

//-----------------------------------------------------------------------------------

$('#lex').click(function() {
$("div#onu").hide();
$("div#del").hide();
$("div#user_data").hide();
$("div#logo_data").hide();


});

$('#foto').click(function() {

alert('sdsdsds');
$("div#grafo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('telnet.php',{},function(data) {
                $('#grafo_data').html(data);
                });
                });

});

$('button#clolt').click(function() {
$("div#oltik").hide();
$("div#olt_data").hide();

});

$('button#ping').click(function ping() {

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ping.php',{},function(data) {
                $('#ping_data').html(data);
                });
                });

});

//Вызов сводной таблицы по коммутатору

$(document).ready(function () {
$('#tab').click(function olt() {
$dataPhp14=$('.data-php11').attr('data-attr');
var sel = document.getElementById("olt_data").style;
if(sel.display == "none")
{
$("div#olt_data").show("slow");
$("div#olt_data").draggable();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('tabula.php',{ipolt:$dataPhp14},function(data) {
                $('#olt_data').html(data);
                });
                });
}
else {$("div#olt_data").hide();}
});
});

//-------------------------------------------------




$('#olt_data').click(function(


) {

$("dev#olt_data").hide();

});


$('a#pok').click(function pok() {

$("div#cis3750").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('pl.php',{},function(data) {
                $('#diagnos_data').html(data);
                });
                });

});


$('button#dex').click(function() {
$("div#cis3750").hide();
});

$('button#egex').click(function() {
$("div#edge").hide();
$("div#ping_edge").hide();
});


$('#adm').click(function() {
$dataPhp14=$('.data-php15').attr('data-attr');
if ($dataPhp14==0) 
{
alert("На этом делителе все порты заняты");
}
else
{

$("div#editor").show();
$("div#editor").draggable();
//document.getElementById("skill_input").value="";
$("#skill_input").focus();
}

});


//Барановская 1 порт события

//ул.Братская,9

placemark10.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'4',d:'8',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'4',d:'8',ip:"10.79.254.245",p:'1',a:"ул.Братская,9"},function(data) {
                $('#logo_data').html(data);
                });
                });
});
//ул.Пугачева,23

placemark11.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'1',d:'8',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'1',d:'8',ip:"10.79.254.245",p:'1',a:"ул.Пугачева,23"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//пер.И.Франко 18/1

placemark12.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'3',d:'4',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'3',d:'4',ip:"10.79.254.245",p:'1',a:"пер.И.Франко,18"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//пер.И.Франко,34

placemark13.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'2',d:'4',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'2',d:'4',ip:"10.79.254.245",p:'1',a:"пер.И.Франко,34"},function(data) {
                $('#logo_data').html(data);
                });
                });



});

//ул.Мухина,3

placemark14.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'5',d:'4',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'5',d:'4',ip:"10.79.254.245",p:'1',a:"ул.Мухиной,3"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Линтваревых,29

placemark16.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'6',d:'4',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'6',d:'4',ip:"10.79.254.245",p:'1',a:"ул.Линтваревых,29"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//пер.Линтваревых,13

placemark15.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'7',d:'4',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'7',d:'4',ip:"10.79.254.245",p:'1',a:"пер.Линтваревых,13"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Л.Толстого,7

placemark5.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'8',d:'4',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'8',d:'4',ip:"10.79.254.245",p:'1',a:"ул.Л.Толстого,7"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//пер.Линтваревых,3

placemark17.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'24',d:'8',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'24',d:'8',ip:"10.79.254.245",p:'1',a:"пер.Линтваревых,3"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//

placemark18.events.add('click',function(){
$("div#del").show();
$("div#del").draggable();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'10',d:'8',ip:"10.79.254.245",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'10',d:'8',ip:"10.79.254.245",p:'1',a:"кооп Энергетик"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//baranovka 2port activ

//ул.Сосновая,8

placemark39.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'25',d:'8',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'25',d:'8',ip:"10.79.254.245",p:'2',a:"ул.Сосновая,8"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//ул.Народная,12

placemark42.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'12',d:'8',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'12',d:'8',ip:"10.79.254.245",p:'2',a:"ул.Народная,12"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Чехова,4

placemark44.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'13',d:'8',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'13',d:'8',ip:"10.79.254.245",p:'2',a:"ул.Чехова,4"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//ул.Чехова,77

placemark46.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'14',d:'8',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'14',d:'8',ip:"10.79.254.245",p:'2',a:"ул.Чехова,77"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//ул.Курортная,2

placemark47.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'15',d:'8',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'15',d:'8',ip:"10.79.254.245",p:'2',a:"ул.Курортная,2"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Доватора,48

placemark43.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'11',d:'16',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'11',d:'16',ip:"10.79.254.245",p:'2',a:"ул.Доватора,48"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//ул.Миропольская,32

placemark48.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'16',d:'8',ip:"10.79.254.245",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'16',d:'8',ip:"10.79.254.245",p:'2',a:"ул.Миропольская,32"},function(data) {
                $('#logo_data').html(data);
                });
                });
});



//baranovka port 3 activ

//ул.Песчанская,11

placemark57.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'21',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'21',d:'8',ip:"10.79.254.245",p:'3',a:"ул.Песчанская,11"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//ул.Запотоцкого,11

placemark60.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'23',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'23',d:'8',ip:"10.79.254.245",p:'3',a:"ул.Запотоцкого,11"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//ул.Доватора,1

placemark65.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'18',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'18',d:'8',ip:"10.79.254.245",p:'3',a:"ул.Доватора,1"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.2-ая Севастопольская,7

placemark62.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'22',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'22',d:'8',ip:"10.79.254.245",p:'3',a:"ул.2-ая Севастопольская,7"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Барановская,41

placemark63.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'20',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'20',d:'8',ip:"10.79.254.245",p:'3',a:"ул.Барановская,41"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Барановская,87

placemark59.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'17',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'17',d:'8',ip:"10.79.254.245",p:'3',a:"ул.Барановская,87"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.1-ая Севастопольская,13

placemark61.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'19',d:'8',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'19',d:'8',ip:"10.79.254.245",p:'3',a:"ул.1-ая Севастопольская,13"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


//пер.Даватора,14

placemark68.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'24',d:'4',ip:"10.79.254.245",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'24',d:'4',ip:"10.79.254.245",p:'3',a:"ул.пер.Доватора,14"},function(data) {
                $('#logo_data').html(data);
                });
                });
});






//activ topol 1

//vivod data del 




placemark83.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'25',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'25',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Шахтерская,22"},function(data) {
                $('#logo_data').html(data);
                });
                });

});

//ул.Шахтерская,4

placemark80.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'26',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'26',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Шахтерская,4"},function(data) {
                $('#logo_data').html(data);
                });
                });

});

//ул.Героическая,20

placemark81.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'27',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'27',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Героическая,20"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//ул.Строителей,7

placemark86.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'28',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'28',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Строителей,7"},function(data) {
                $('#logo_data').html(data);
                });
                });

});

//ул.Строителей,8

placemark87.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'29',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'29',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Строителей,8"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark84.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

var t, a;
function example(e){
clearTimeout(t);
var w = e.width;
if (a) {
t = setInterval(function () {
if (w <= 450) clearTimeout(t); // Стили на уменьшение
e.style.cursor = 'zoom-in';
e.style.borderRadius = '1px';
e.style.boxShadow = '2px 2px 5px #fff'
e.width = w--;
}, 5);
}
else {
t = setInterval(function () {
if (w >= 650) clearTimeout(t);
// Стили на увеличение
e.style.cursor = 'zoom-out';
e.style.borderRadius = '5px';
e.style.boxShadow = '2px 2px 5px #888'
e.width = w++;
}, 5);
}
a = !a;
}



$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'31',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'31',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Тополянская,35"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


placemark82.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'32',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'32',d:'8',ip:"10.79.254.240",p:'1',a:"ул.Героическая,8"},function(data) {
                $('#logo_data').html(data);
                });
                });		
				
});

placemark85.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'30',d:'8',ip:"10.79.254.240",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'30',d:'8',ip:"10.79.254.240",p:'1',a:"пер.Строителей,5"},function(data) {
                $('#logo_data').html(data);
                });
                });

});


//activ 2 port 1 olt


placemark88.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'38',d:'8',ip:"10.79.254.240",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'38',d:'8',ip:"10.79.254.240",p:'2',a:"ул.Довженко,21"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark89.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'39',d:'8',ip:"10.79.254.240",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'39',d:'8',ip:"10.79.254.240",p:'2',a:"ул.Довженко,30"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark90.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'37',d:'8',ip:"10.79.254.240",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'37',d:'8',ip:"10.79.254.240",p:'2',a:"ул.Тополянская 57"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark92.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'35',d:'16',ip:"10.79.254.240",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'35',d:'16',ip:"10.79.254.240",p:'2',a:"ул.Тополянская,73"},function(data) {
                $('#logo_data').html(data);
                });
                });				
								
});

placemark91.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'36',d:'8',ip:"10.79.254.240",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'36',d:'8',ip:"10.79.254.240",p:'2',a:"ул.Тополянская,43"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//activ 3 port 1 olt topola

placemark96.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'42',d:'8',ip:"10.79.254.240",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'42',d:'8',ip:"10.79.254.240",p:'3',a:"пр.Горовой,10"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark95.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'41',d:'8',ip:"10.79.254.240",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'41',d:'8',ip:"10.79.254.240",p:'3',a:"ул.Горовая,21"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark94.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'43',d:'8',ip:"10.79.254.240",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'43',d:'8',ip:"10.79.254.240",p:'3',a:"ул.Подгорная,12"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark93.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'40',d:'8',ip:"10.79.254.240",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'40',d:'8',ip:"10.79.254.240",p:'3',a:"ул.Горовая,9/1"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//port 4 topol 1 activ

placemark103.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'47',d:'16',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'47',d:'16',ip:"10.79.254.240",p:'4',a:"ул.Космическая,8"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark104.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'52',d:'16',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'52',d:'16',ip:"10.79.254.240",p:'4',a:"ул.Ползунова,31"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark97.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'48',d:'8',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'48',d:'8',ip:"10.79.254.240",p:'4',a:"ул.Патона,5"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark100.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'50',d:'8',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'50',d:'8',ip:"10.79.254.240",p:'4',a:"ул.Ползунова,15/2"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark102.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'49',d:'8',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'49',d:'8',ip:"10.79.254.240",p:'4',a:"ул.Патона,23"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark101.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'51',d:'8',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'51',d:'8',ip:"10.79.254.240",p:'4',a:"ул.Ползунова,1"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark99.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'46',d:'8',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'46',d:'8',ip:"10.79.254.240",p:'4',a:"ул.Скрябина,28"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark98.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'45',d:'8',ip:"10.79.254.240",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'45',d:'8',ip:"10.79.254.240",p:'4',a:"ул.Скрябина,10"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

//activ 31 olt
//1 port

placemark512.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'61',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'61',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Басовская,32/3"},function(data) {
                $('#logo_data').html(data);
                });
                });
});				
placemark511.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'60',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'60',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Басовская,20"},function(data) {
                $('#logo_data').html(data);
                });
                });				
});				
placemark513.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'62',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'62',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Урожайная,14"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});				
placemark514.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'63',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'63',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Спортивная,7"},function(data) {
                $('#logo_data').html(data);
                });
                });				
});				
placemark515.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'64',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'64',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Майская,17"},function(data) {
                $('#logo_data').html(data);
                });
                });					
});				
placemark516.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'65',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'65',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Краснопольская,9"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});
placemark517.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'66',d:'8',ip:"10.79.254.231",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'66',d:'8',ip:"10.79.254.231",p:'1',a:"ул.Водная,4"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});

//port 2

placemark520.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'69',d:'4',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'69',d:'4',ip:"10.79.254.231",p:'2',a:"ул.М.Чурай-Корсакова"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});

placemark521.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'68',d:'8',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'68',d:'8',ip:"10.79.254.231",p:'2',a:"ул.Боровая,54"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});

placemark523.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'72',d:'8',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'72',d:'8',ip:"10.79.254.231",p:'2',a:"ул.Водная,62"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});
				
placemark524.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'70',d:'4',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'70',d:'4',ip:"10.79.254.231",p:'2',a:"ул.Куприна,29"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});
placemark525.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{
id:'71',d:'8',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'71',d:'8',ip:"10.79.254.231",p:'2',a:"ул.Куприна,59"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});

placemark519.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'126',d:'8',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'126',d:'8',ip:"10.79.254.231",p:'2',a:"ул.Урожайная,65"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});

placemark526.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'67',d:'4',ip:"10.79.254.231",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'67',d:'4',ip:"10.79.254.231",p:'2',a:"ул.Молодежная,32"},function(data) {
                $('#logo_data').html(data);
                });
                });	


});

//3 port /

placemark527.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'77',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'77',d:'8',ip:"10.79.254.231",p:'3',a:"пер.Карбышева,40"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark528.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'76',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'76',d:'8',ip:"10.79.254.231",p:'3',a:"пер.Карбышева,25"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark529.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'75',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'75',d:'8',ip:"10.79.254.231",p:'3',a:"ул.Карбышева,34"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});


placemark530.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'82',d:'4',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'82',d:'4',ip:"10.79.254.231",p:'3',a:"пер.Карбышева,6"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});


placemark531.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'81',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'81',d:'8',ip:"10.79.254.231",p:'3',a:"ул.Карбышева,64"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark532.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'80',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'80',d:'8',ip:"10.79.254.231",p:'3',a:"ул.Низовская,44"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark533.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'78',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'78',d:'8',ip:"10.79.254.231",p:'3',a:"пер.Карбышева,78"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark534.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'79',d:'8',ip:"10.79.254.231",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'79',d:'8',ip:"10.79.254.231",p:'3',a:"пер.Юбилейный,25"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

//4 port /

placemark536.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'87',d:'8',ip:"10.79.254.231",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'87',d:'8',ip:"10.79.254.231",p:'4',a:"ул.Нарбута,22"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});


placemark537.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'86',d:'8',ip:"10.79.254.231",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'86',d:'8',ip:"10.79.254.231",p:'4',a:"ул.Низовская,62"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark538.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'88',d:'8',ip:"10.79.254.231",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'88',d:'8',ip:"10.79.254.231",p:'4',a:"ул.Нарбута,50"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark539.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'90',d:'8',ip:"10.79.254.231",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'90',d:'8',ip:"10.79.254.231",p:'4',a:"ул.Юбилейная,124"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark540.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'91',d:'8',ip:"10.79.254.231",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'91',d:'8',ip:"10.79.254.231",p:'4',a:"ул.Юбилейная,156"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark554.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'125',d:'8',ip:"10.79.254.231",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'125',d:'8',ip:"10.79.254.231",p:'4',a:"ул.Юбилейная,106"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

//olt 29 aktiv/

//1 port/

placemark541.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'95',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'95',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Краснопольская,17"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark542.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'96',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'96',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Краснопольская,74"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark543.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'98',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'98',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Краснопольская,90"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark543.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'98',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'98',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Краснопольская,90"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark544.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'97',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'97',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Краснопольская,102"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark545.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'101',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'101',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Юбилейная,4"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark546.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'100',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'100',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Юбилейная,1"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark547.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'102',d:'8',ip:"10.79.254.229",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'102',d:'8',ip:"10.79.254.229",p:'1',a:"ул.Юбилейная,21"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

//port2/

placemark550.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'105',d:'8',ip:"10.79.254.229",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'105',d:'8',ip:"10.79.254.229",p:'2',a:"ул.1-ая Красносельская,4"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark551.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'106',d:'8',ip:"10.79.254.229",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'106',d:'8',ip:"10.79.254.229",p:'2',a:"ул.1-ая Красносельская,40"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark552.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'108',d:'16',ip:"10.79.254.229",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'108',d:'16',ip:"10.79.254.229",p:'2',a:"ул.2-ая Красносельская,20"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark553.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'107',d:'16',ip:"10.79.254.229",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'107',d:'16',ip:"10.79.254.229",p:'2',a:"ул.2-ая Красносельская,42"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

//3 port /

placemark560.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'117',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'117',d:'8',ip:"10.79.254.229",p:'3',a:"ул.Куприна,71"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark561.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'118',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'118',d:'8',ip:"10.79.254.229",p:'3',a:"ул.Куприна,87"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark562.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'115',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'115',d:'8',ip:"10.79.254.229",p:'3',a:"пер.Санаторный,1"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});
placemark563.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'114',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'114',d:'8',ip:"10.79.254.229",p:'3',a:"пер.Санаторный,15"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark564.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'110',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'110',d:'8',ip:"10.79.254.229",p:'3',a:"ул.Басовская,59"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark565.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'111',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'111',d:'8',ip:"10.79.254.229",p:'3',a:"ул.Басовская,79"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark566.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'112',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'112',d:'8',ip:"10.79.254.229",p:'3',a:"ул.Басовская,101"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark567.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'113',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'113',d:'8',ip:"10.79.254.229",p:'3',a:"ул.Молодежная,48"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark568.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'116',d:'8',ip:"10.79.254.229",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'116',d:'8',ip:"10.79.254.229",p:'3',a:"пер.М.Чурай,27"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});


//port 4 /

placemark570.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'121',d:'8',ip:"10.79.254.229",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'121',d:'8',ip:"10.79.254.229",p:'4',a:"ул.Войкова,4"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark571.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'122',d:'8',ip:"10.79.254.229",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'122',d:'8',ip:"10.79.254.229",p:'4',a:"ул.Войкова,53"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark572.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'120',d:'8',ip:"10.79.254.229",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'120',d:'8',ip:"10.79.254.229",p:'4',a:"ул.Войкова,2"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark573.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'123',d:'8',ip:"10.79.254.229",p:'4'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'123',d:'8',ip:"10.79.254.229",p:'4',a:"ул.Фурманова,34"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

//topol 2 10.79.254.244 activ /

//1 port/

placemark580.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'56',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'56',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Мусорского,1"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark581.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'55',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'55',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Мусорского,32"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark582.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'57',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'57',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Новоселовская,35"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark583.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'58',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'58',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Мусорского,62"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark584.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'59',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'59',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Мусорского,10"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});





placemark585.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'60',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'60',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Новоселовская,19"},function(data) {
                $('#logo_data').html(data);
                });
                });
});


placemark586.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'72',d:'8',ip:"10.79.254.244",p:'1'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'72',d:'8',ip:"10.79.254.244",p:'1',a:"ул.Новоселовская,8"},function(data) {
                $('#logo_data').html(data);
                });
                });
});



//port 2

placemark590.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'63',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'63',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,115"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark591.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'65',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'65',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,105"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark592.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'66',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'66',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,131"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark593.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'67',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'67',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,132"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark594.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'68',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'68',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,145"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark595.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'69',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'69',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,152"},function(data) {
                $('#logo_data').html(data);
                });
                });	


$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});






});









placemark596.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'70',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'70',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Тополянская,186"},function(data) {
                $('#logo_data').html(data);
                });
                });	
});

placemark597.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'71',d:'8',ip:"10.79.254.244",p:'2'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'71',d:'8',ip:"10.79.254.244",p:'2',a:"ул.Яровая,2"},function(data) {
                $('#logo_data').html(data);
                });
                });	


$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});



});

//3 порт 10.79.254.244

placemark400.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'73',d:'8',ip:"10.79.254.244",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'73',d:'8',ip:"10.79.254.244",p:'3',a:"ул.Тополянская,18"},function(data) {
                $('#logo_data').html(data);
                });
                });
});

placemark401.events.add('click',function(){
$("div#del").show();
$("div#user_data").show();
$("div#logo_data").show();

$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ira.php',{id:'74',d:'8',ip:"10.79.254.244",p:'3'},function(data) {
                $('#user_data').html(data);
                });
                });
$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('logo.php',{id:'74',d:'8',ip:"10.79.254.244",p:'3',a:"пер.1-й Заводской,7"},function(data) {
                $('#logo_data').html(data);
                });
                });

$('#wek').click(function() {

$("div#olt").hide();
$("div#info_port").hide();

});

});


//----------------------------------------------------------------------------------

//Процедура отрисовки магистралей прихода на оптические коммутаторы

$('#mag2').click(function(){

if (ret==5) {
var myGeoObject = new ymaps.GeoObject({
            
            geometry: {
                
                type: "LineString",
                
                coordinates: [
                    [50.9393, 34.8342],
                    [50.9389, 34.8339],
                    [50.9385, 34.8352],
                    [50.9380, 34.8351],
                    [50.9356, 34.8347],
                    [50.9355, 34.8346],
                    [50.9353, 34.8346],
                    [50.9350, 34.8347],
                    [50.9350, 34.8343],
                    [50.9350, 34.8338],
                    [50.9347, 34.8337],
                    [50.9335, 34.8333],
                    [50.9325, 34.8333],
                    [50.9320, 34.8334],
                    [50.9313, 34.8336],
                    [50.9311, 34.8337],
                    [50.9307, 34.8336],
                    [50.9306, 34.8331],
                    [50.9307, 34.8313],
                    [50.9296, 34.8296],
                    [50.9292, 34.8289],
                    [50.9282, 34.8274],
                    [50.9282, 34.8272],
                    [50.9281, 34.8270],
                    [50.9281, 34.8260],
                    [50.9279, 34.8233],
                    [50.9277, 34.8216],
                    [50.9270, 34.8219],
                    [50.9268, 34.8219],
                    [50.9266, 34.8219],
                    [50.9256, 34.8214],
                    [50.9244, 34.8205],
                    [50.9243, 34.8202],
                    [50.9243, 34.8202],
                    [50.9244, 34.8184],
                    [50.9245, 34.8165],
                    [50.9245, 34.8163],
                    [50.9253, 34.8132],
                    [50.9254, 34.8133],
                    [50.9245, 34.8163],
                    [50.9221, 34.8161],
                    [50.9222, 34.8109]

            ]
            },
            
            properties:{
                
                hintContent: "?~_??~@??~K? ???~@?~B (10.79.254.240)",
                // ?????~@????? ????~C??.
                balloonContent: "?~\???~O ????? ???~@??~B??~I??~B?~L"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#e50000",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);


//-----------------------------boxs---

var placemark500 = new ymaps.Placemark([50.9254,34.8133], {
    hintContent:'Ящик №1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark500);


var placemark502 = new ymaps.Placemark([50.9244,34.8206], {
   hintContent:'Ящик №2',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark502);


var placemark503 = new ymaps.Placemark([50.9270,34.8220], {
    hintContent:'Ящик №3',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark503);


var placemark504 = new ymaps.Placemark([50.9305,34.8320], {
    hintContent:'Ящик №4',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark504);


var placemark505 = new ymaps.Placemark([50.9235,34.8163], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark505);

var placemark506 = new ymaps.Placemark([50.9240,34.8163], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark506);

}

if (ret==3) {
var myGeoObject = new ymaps.GeoObject({
            // ?~^???~A?~K???? ??????~B?~@??~N ??????~J???~B?.
            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [
                    [50.9215, 34.8096],
                    [50.9217, 34.8109],
                    [50.9219, 34.8111],
                    [50.9221, 34.8111],
                    [50.9222, 34.8114],
                    [50.9221, 34.8155],
                    [50.9224, 34.8160],
                    [50.9243, 34.8160],
                    [50.9244, 34.8158],
                    [50.9252, 34.8132],
                    [50.9253, 34.8134],
                    [50.9255, 34.8133],
                    [50.9275, 34.8140],
                    [50.9278, 34.8139],
                    [50.9283, 34.8136],
                    [50.9365, 34.8083],
                    [50.9353, 34.8090],
                    [50.9335, 34.8020],
                    [50.9323, 34.8026],
                    [50.9321, 34.8030]


            ]
            },
            // ?~^???~A?~K???? ?~A????~A?~B?? ??????~J???~B?.
            properties:{
                // ?????~@????? ?~E???~B?.
                hintContent: "Приход на оптические коммутаторы Тополянская (10.79.254.240,10.79.254.244)",
                // ?????~@????? ????~C??.
                balloonContent: "Данные о оптических волокнах"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#e60000",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);

// box topol

var placemark507 = new ymaps.Placemark([50.9340,34.8041], {
    hintContent:'Ящик №1',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark507);


var placemark508 = new ymaps.Placemark([50.9365,34.8083], {
    hintContent:'Ящик №2',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark508);

var placemark509 = new ymaps.Placemark([50.9254,34.8133], {
    hintContent:'Ящик №3',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark509);

var placemark511 = new ymaps.Placemark([50.9235,34.8163], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark511);

var placemark601 = new ymaps.Placemark([50.9240,34.8163], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark601);

}

//Магистрали прихода Басы

if (ret==1) {
var myGeoObject = new ymaps.GeoObject({
            
            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [
                    [50.9213, 34.8095],
                    [50.9212, 34.8097],
                    [50.9204, 34.8095],
                    [50.9205, 34.8058],
                    [50.9204, 34.8063],
                    [50.9134, 34.8054],
                    [50.9130, 34.8052],
                    [50.9123, 34.8060],
                    [50.9116, 34.8060],
                    [50.9073, 34.8016],
                    [50.9070, 34.8024],
                    [50.9069, 34.8024],
                    [50.9066, 34.8035],
                    [50.9062, 34.8045],
                    [50.9010, 34.8172],
                    [50.8982, 34.8263],
                    [50.8980, 34.8261],
                    [50.8975, 34.8250],
                    [50.8974, 34.8246],
                    [50.8973, 34.8247],
                    [50.8949, 34.8227],
                    [50.8931, 34.8208],
                    [50.8925, 34.8201],
                    [50.8924, 34.8198],
                    [50.8901, 34.8220],
                    [50.8899, 34.8221],
                    [50.8899, 34.8224]


            ]

   },
            // ?~^???~A?~K???? ?~A????~A?~B?? ??????~J???~B?.
            properties:{
                // ?????~@????? ?~E???~B?.
                hintContent: "Рабочая магистраль прихода на оптические коммутаторы (10.79.254.231,10.79.254.299)",
                // ?????~@????? ????~C??.
                balloonContent: "Цветная маркировка оптических волокон"
            }
        }, {
            // ?~W????? ???~F?? ??????~J???~B?.
            // ?~R???~N?~G??? ?????????~A?~B?~L ???~@??~B??~A???????~O ???????.
            draggable: false,
            // ????~B ?????.
            strokeColor:"#e60000",
            // ???~@??? ?????.
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);

//Ящик Супруна возле салона красоты

var placemark512 = new ymaps.Placemark([50.9205,34.8058], {
    hintContent:'Ящик №1(Салон красоты)',
    balloonContent:'С офиса пришло 12 волокон.4 ушло на Горького.12 волокон ушло на Харьковскую,с них 8 скросировано',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark512);

var placemark513 = new ymaps.Placemark([50.9035,34.8112], {
    hintContent:'Ящик №2(Напротив АТБ)',
    balloonContent:'2 волокна ушло на ул.Даргомыжского,6(соцстрах),8 ушли на Басы',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark513);

var placemark514 = new ymaps.Placemark([50.8982,34.8262], {
    hintContent:'Ящик №3()',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark514);

var placemark515 = new ymaps.Placemark([50.8925,34.8201], {
    hintContent:'Ящик №4()',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark515);

//mufta

var placemark516 = new ymaps.Placemark([50.9156,34.8057], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark516);

var placemark517 = new ymaps.Placemark([50.9141,34.8055], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark517);

var placemark518 = new ymaps.Placemark([50.8978,34.8257], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark518);

var placemark519 = new ymaps.Placemark([50.8975,34.8247], {
    hintContent:'Муфта',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark519);

//Резервная линия

var myGeoObject = new ymaps.GeoObject({

            geometry: {
                // ??? ??????~B?~@?? - "?~[??????~O ?????~O".
                type: "LineString",
                // ?????~K???? ????~@?????~B?~K ???~@?~H?? ???????.
                coordinates: [
                    [50.9213, 34.8095],
                    [50.9212, 34.8093],
                    [50.9204, 34.8092],
                    [50.9205, 34.8064],
                    [50.9133, 34.8055],
                    [50.9132, 34.8056],
                    [50.9121, 34.8070],
                    [50.9116, 34.8064],
                    [50.9073, 34.8021],
                    [50.9071, 34.8024],
                    [50.9069, 34.8024],
                    [50.9066, 34.8035],
                    [50.9053, 34.8069],
                    [50.9057, 34.8076],
                    [50.9052, 34.8071],
                    [50.9040, 34.8100],
                    [50.9038, 34.8098],
                    [50.9034, 34.8096],
                    [50.9033, 34.8098],
                    [50.9036, 34.8103],
                    [50.9019, 34.8145],
                    [50.9016, 34.8151],
                    [50.9015, 34.8153],
                    [50.9009, 34.8170],
                    [50.9006, 34.8179],
                    [50.8999, 34.8199],
                    [50.8994, 34.8193],
                    [50.8978, 34.8236],
                    [50.8971, 34.8237],
                    [50.8964, 34.8231],
                    [50.8958, 34.8228],
                    [50.8942, 34.8212],
                    [50.8940, 34.8217],
                    [50.8929, 34.8205],
                    [50.8925, 34.8200],
                    [50.8924, 34.8198],
                    [50.8924, 34.8198],
                    [50.8914, 34.8208],
                    [50.8901, 34.8220],
                    [50.8899, 34.8221],
                    [50.8899, 34.8224]  


            ]

   },
            

  properties:{
                
                hintContent: "Резервная магистраль с заходом на дома ул.Харьковская,1,4,44 прихода на оптические коммутаторы (10.79.254.231,10.79.254.299)",
            
                balloonContent: "Цветная маркировка оптических волокон"
            }
        }, {
            
            draggable: false,

            strokeColor:"#0041e6",
    
            strokeWidth: 6
        });
myMap.geoObjects.add(myGeoObject);

//Ящик Супруна возле салона красоты

var placemark519 = new ymaps.Placemark([50.9116,34.8064], {
    hintContent:'Ящик №1 резервный (Дом №2 Мастерская кухонь)',
    balloonContent:'С ящика 4 волокна уходит на пер.Чугуевский,8 волокон на Петропавловскую,60-Федько,уходит На Череду,и резерный 8 волокон(не активный на ул.Глинки)',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark519);

var placemark520 = new ymaps.Placemark([50.9057,34.8076], {
    hintContent:'Ящик №2 резервный (ул.Харьковская,1)',
    balloonContent:'Розварка оптики на пиктейлы.Ящик находится на техническом этаже',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark520);

var placemark521 = new ymaps.Placemark([50.9034,34.8094], {
    hintContent:'Ящик №3 резервный (ул.Харьковская,4)',
    balloonContent:'Ящик находится в среднем подъезде возле лифтовой',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark521);

var placemark522 = new ymaps.Placemark([50.8977,34.8237], {
    hintContent:'Ящик №4 резервный (ул.Харьковская,44)',
    balloonContent:'Ящик находится третий подъезд возле лифтовой',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/box.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark522);

//mufta

var placemark523 = new ymaps.Placemark([50.9019,34.8145], {
    hintContent:'Муфта резервная',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark523);

var placemark524 = new ymaps.Placemark([50.9015,34.8151], {
    hintContent:'Муфта резервная',
    }, {

    iconLayout:'default#image',
    iconImageHref:'/image/mufta.png',
    iconImageSize:[40,40],
    iconImageoffset:[-16,-16],
});
myMap.geoObjects.add(placemark524);



}

});

}
