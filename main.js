quick_draw_data_set=["parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts",,"shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"];


random_number = ((Math.floor()*quick_draw_data_set.length)+1)

Element_of_array = quick_draw_data_set[random_number]

document.getElementById("sketch_input").innerHTML="Sketch To Be Drawn :" + Element_of_array;

timer_count=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score="";

function createCanvas(){
canvas=createCanvas(250,250);
canvas.center();
}

sketch=Element_of_array;

function draw(){
    check_sketch()
    if(drawn_sketch == sketch){
        answer_holder="set";
        score=score+1;
        document.getElementById("score").innerHTML="Score :" + score;
    }
}
function check_sketch(){
    timer_count++;
    document.getElementById("timer").innerHTML="Timer :"+timer_count;

    if(timer_count>400){
    timer_count=0;
    timer_check="completed";
    }

    if(timer_check =="completed" || answer_holder=="set"){
    timer_check="";
    answer_holder="";
    updateCanvas( );
    }
}

function updateCanvas(){
    background("white");
    sketch=Element_of_array;
    document.getElementById("sketch_input").innerHTML="Sketch To Be Drawn :" + Element_of_array;
}





