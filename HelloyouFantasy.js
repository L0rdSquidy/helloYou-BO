var readlineSync = require('readline-sync');

function Begin(){
    console.log("there ones was a party of 3 S ranks, a knight, a wizzard and a dwarf. they where renound for their expertise the dwarf created exelent armour and penetrated heavy defenses with his heavy artilelry, the knight was the best in honerable fights and  showed the best skill with his blade and then for the last there was the wizzard, the wizzard though weak in a 1 versus 1 battle he was the best in taking out hoards of monsters as his aoi spells leveled the fields, one time these 3 adventurers went on a quest though something went wrong a enemy that was not supposed to be there, this insident made it so that 2 of the adventurers sacrifesed themself to save save the other one")
    survive = readlineSync.question("Who survives [1] the knight [2] the wizzard [3] the dwarf please choose eather 1, 2 or 3")
    if(survive == 1){
        knight
    }else if(survive == 2){
        wizzard
    }else if(survive == 3){
        dwarf
    }else{
        Begin
    }
}
function knight(){
    console.log("the knight angry and terrified tries to throw his blade at the monster but misses and is forced to run away")
    console.log(" ")
    console.log("the knight felt mad and shame for running from the battle he griefed for his teamates and felt he should have died with them the knight then resolved himself to kill the beast wether it took his live or not he will kill it though a new delema soon arrose as should he disgard his honour for his revenge or keep it and kill the beast with honour")
    questionofhonour = readlineSync.question("[1] honour [2] no honour")
    if(questionofhonour == 1){
        honour
    }else if (questionofhonour == 2){
        nohonour
    }
    else{
        knight
    }
}
function honour(){
     console.log("he may have lost his friends but he will not lose his honour he picked up his blade and walked to the village where he saw 3 kids being attacked by a man as he saw this he imeadiatly steped in and scared the man off he then looked at the kids as they where staring at him with admiration, the kids then imeadiatly asked if they could become his deciple ")
     selectionofdeciples = readlineSync.question("[1] take them [2] refuse")
     if(1){
        diciples
     }else if(2){
        alone1
     }
     else{honour}
}   
function diciples(){
    console.log("he accepted smiling as he took them under his wing he lead them to his training place and began training them the kids where determent and put their blood sweat and tears into their training the knight himself also trained and when he felt like they where ready he took them out the village after a few days they crossed roads with the beast the knight was hissitant remembering the people he lost last time but the kids had already readied their blades and thus he also readiet his, as the battle starts they manage to dodge and strike the beast multiple times and in the when the beast fell to its knees the knight charged his blade penatrating the beasts neck and he smiled at both the victory and though he felt sad that it came to this he thinks he can finally move on from his teamates")
    end1 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end1 == "yes"){
        Begin
    }else if(end1 == "no"){

    }else{
        diciples
    }
}
function alone1(){
    console.log("the knight though he wanted to he couldnt take them in and thus refused to teach them but as he liked how the kids were so he wrote them a letter of recomendation for them to go to another knight, the knight then went to train and train he did he put both blood sweat into his training after some time he finally felt he was ready so he set out when he left the village he saw the 3 kids training hard the knight smiled thinking he made the right desicion he then left the village where suprisingly he crossed paths with the beast once more readying his blade he prepares to get his revenge. the knight fights with honour and slowly but surely starts to harm the beast in the end the knight though he looked like he could fall down unconsios any time charged driving his blade through the beasts heart smiling as he killed it but it dint give him the satisfaction he thought it would as he felt alone")
    end2 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end2 == "yes"){
        Begin
    }else if(end2 == "no"){

    }else{
        alone1
    }
}
function nohonour(){
    console.log("he decided that honour had no place on the battlefield and he would play dirty if he had to the knight then left to train but as he was walking through the village that he was staying at he saw some children being herrasad by an older man but should he help them or should he keep a blind eye")
    comp = readlineSync.question("[1]dont save [2]save")
    if(comp == "2"){
        savefile 
    }else if(comp == "1"){
        nosave
    }else{
        nohonour
    }
}
function savefile(){
    console.log("he saved the kids there where 3 of them and it was good that he helped them as it seemed that one of them was about to die though he with some help he almost imeadiatly back to good health. after that the kids followed him everywhere and after some confinsing the knight taught them how to fight he was proud of them they eventualy left the village where the found the beast they worked together and though they fought with no honour targetting areas like the grown and the eyes they where winning and as the knight approched one last time he cut of its head. though the knight felt a bit of an ache for fighting with no honour he dint care as he looked at the kids his kids")
    end3 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end3 == "yes"){
        Begin
    }else if(end3 == "no"){

    }else{
        savefile
    }
}
function nosave(){
    console.log("he couldnt fully keep a blind eye as he allerted the guards of what happened but he felt that he couldnt truely save those kids so he kept training when he left the village to find the beast he saw the kids but now instead of 3 children it seemed that there where only 2 of them left, the knight ashamed left as quick as possible though he suprisingly found the beast quickly and as he found it he raised his blade and charged he went for the eyes and though it at first dint work he threw dirt in them wich allowed for a opening to slash his eyes the battle insute as the knight with a grave wound on his stumage striked the beast and killed he smiled though he felt dirty as if he gone a path that he shouldnt have with this thought the knight died")
    end4 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end4 == "yes"){
        Begin
    }else if(end4 == "no"){

    }else{
        nosave
    }
}
function wizzard(){
    console.log("the wizzard in a last attempt tries to cast a spell but ultimately fails and is forced to run away")  
    console.log(" ")
    console.log("The wizzard destrought went to the guild explaining what happened. a new delema came as he had to choose does he choose to go alone study and gain power for himself to kill the beast or does he gain new comerads and  have them cover his weakpoints")
    wizbegin = readlineSync.question("[1]Alone [2]seek help")
    if (wizbegin == 1) {
        alone2
    }else if(wizbegin == 2) {
        help1
    } else {
        wizzard
    }
}
function alone2(){
    console.log("In the end the wizzard found that the only way to truely get his revenge would be alone it would be the only way he would get the true saticfaction")
    console.log("The wizzard barely got out of his studys, the only time he got out was to meet the requirements to keep his position at the adventure guild. with his study he found new spells, the more power he gained the more his ambition grew the more power he gained eventually he started to try more and more dangorous mission to try out the spells, one day he thought it was finally time but one final problem arose where to look for the creature shall he go look for it on his own or shall he ask help from the guild")
    wizcho = readlineSync.question("[1]search alone [2]ask the guild")
    if (wizcho == 1) {
        final1
    }else if (wizcho == 2) {
        final2
    } else {
        alone2
    }
}
function final1(){
    console.log("he had do it comepletely alone anything else was out of the picture for the wizzard so he began a research to find out where it was,3 months thats how long it took him to find it when he found out he was suddenly filled with rage and rushed to the beasts location after he arrives the beast is there but it had a child the wizzards face lit up in a cruel smile appeart as he thought, I am going to take everything from you like you took everything from me")
    console.log("the wizzard first targetted the child casting spell after spell the child though seemed like he could take the hits till the child became arrogant and rushed the wizard as he did this the wizzard put his wand in the childs mouth and its head exploded, the beast filled with rage rushed the wizzard who was smirking fully as he spoke, hurts doesnt oh but i am not done. the wizzard spoke lifting the childs body and throwing it at the beast afterwards his casted his most powerfull spell as magic blade appeared and killed the beast. the wizzard though felt empty and a bit disgusted with himself why why did this happen")
    end5 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end5 == "yes"){
        Begin
    }else if(end5 == "no"){

    }else{
        final1	
    }
}
function final2(){
    console.log("he went to the guild demanding to know where the monster that killed his party was he the guild shocked by his sudden apearens was a bit hessitant to give him the information of its last location but eventualy they gave in and gave him the location of its last spotting the wizzard imeadiatly went to look for the beast and in the end it took him 3 more days, when he found it it was alone but seemed fatter then the last time he saw it he shook of his confusion and stared at the beast")
    console.log("the wizzard began to prepair his attack and as the beast walked into his trap chains sprung out ensnaring the beast, the wizzard slowly began to walk to it rasing his wand as he spoke: i am here to kill you for your sins. as the wizzard sead this a magic sythe appears around the beasts neck, goodbye you foul beast he said as the sythe pulled down beheading the beast but though he killed it he felt alone oh so alone and with it feeling it felt as if the color had faded from the world")
    end6 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end6 == "yes"){
        Begin
    }else if(end6 == "no"){

    }else{
        final2	
    }
}
function help1(){
    console.log("the wizzard eventualy thought that his friends those who died would want him to gain new friends, the wizzard thinks that even if he goes alone and tries to get revenge what would that bring him surely it wouldnt bring him satisfaction ")
    console.log("though the process of finding a new party was tirering as many dint trust the wizzard that survived. the guild put him with some newbies 2 ranks lower than him C rank they were a happy bunch and the wizzard slowly began to feel resposible for them the wizzard when it was time to return to his duties decided that he would stay with them and teach them how to be aventurers he thought that maybe his revenge would take some more time but atleast now he will have allies to help him. after about a month they where returning for a mision when they spoted the beast the hothead sead they should rush the beast while the archer proposed a ambush")
    wizchoice = readlineSync.question("[1]Ambush [2]rush")
    if (wizchoice == 1) {
        final3
    } else if (wizchoice == 2) {
        final4
    } else {
        help1
    }
}
function final3(){
    console.log("he choose logically and started prepairing the ambush after the beast eventually came both chains and ropes holded the beast as the archer and swordsman began to give blow to blow to the beast after a bit the wizzard finished casting as he released a incredible mana bast piersing its chest and finally kkilling the beast the wizzard smiled up at the blue sky he felt that his teamated his friends would have been proud")
    end7 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end7 == "yes"){
        Begin
    }else if(end7 == "no"){

    }else{
        final3	
    }
}
function final4(){
    console.log("he couldnt choose logically as it was the beast that killed his team the last time he dicided to rush the beast he casted shields for both the archer and the swordsman back to back but it was appearant they where out matched. the wizzard resighning himself told the two to run away though reluctant they saw the fire in his eyes and ran the wizzard then ran to beast and stunned it he started chanting. now ill finally be able to see you guys again. the wizzard thought as with smile both he and the beast exploded ")
    end8 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end8 == "yes"){
        Begin
    }else if(end8 == "no"){

    }else{
        final4
    }
}
function dwarf(){
    console.log("the dwarf runs away his hands shaking, terrified tries to hit the ground to disorient the enemy but fails and is forced to run away")
    console.log(" ")
    console.log("the dwarf felt angry both at himself and at his teamates for dying though he might be mad at them for leaving him alone he swears to get revenge for them even if his hands break and his bears gets choped of he will kill that beast but the question is wether he will seek help for people to wield his weapons or if he will do it alone and use his weapons himself")
    dwarfsplit = readlineSync.question("[1]alone [2]with help")
    if (dwarfsplit == 1) {
        alone3
    }else if (dwarfsplit == 2) {
        help2
    }else{
        dwarf
    }
}
function alone3(){
    console.log("the dwarf dint trust people to properly handel his weapons so he decides to do it himself and thus he starts to mine to get the matirials to craft the weapons he will need when he mines he finds a crymo crystal a crystal that is if not the most rare and holds the most power of crystals but that is why its tricky to use as he will need to make somthing truely great for him to use the crystal but then question is will he create a melee weapon with it or artilary ")
    choice1 = readlineSync.question("[1]melee [2]artilary")
    if (choice1 == 1) {
        final5
    }else if (choice1 == 2) {
        final6
    } else {
        alone3
    }
}
function final5(){
    console.log("the dwarf decided that he may not be the best fighter that he will fight the beast in melee and thus he starts to create a masterpiece in the end he had a gaint black warhammer with blue arks flying of it he grabs the warhammer and sets out to find the beast it takes him 3 days to find it but when he does he raises the warhammer arks multiplying till he finally charges the beast blowing one of his arms off the battle continues like this till eventually the dwarf gets one last hit that blows the beasts head off but it gave him no sitifaction as he watched the body fall down all he felt was sorrow ")
    end9 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end9 == "yes"){
        Begin
    }else if(end9 == "no"){

    }else{
        final5
    }
}
function final6(){
    console.log("he decides that as he is alone he will need as much fire power as posible and thus he will create heavy artilary with it it takes him long to make it good enough to take it on the field but when he does he thinks it will be enough to kill the beast as he rides the newly created tank to the beast he sits afar and shoots a blast at the beast but he misses a vital shot and hits the arm exploding it the dwarf tries to shoot again but the tank fails thus the dwarf quickly exits the tank carrying a small blue orb and a large greatsword as the beast comes close he throws the weapon as it hits the beasts shoulder it screams and the dwarf chucks the bllue orb into its mouth he quickly ran behind his tank and pressed the button wich made the orb explode though he kills the beast with it his arm gets caught up in the explosion and it blows off. after the dwarf looked at the carnage with pride and sadness: the wizzard would be proud at the explosion i made and the knight at the beautiful blade that pierced its shoulder ")
    end10 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end10 == "yes"){
        Begin
    }else if(end10 == "no"){

    }else{
        final6
    }
}
function help2() {
    console.log("he decides to trust people one last time as he decides this he starts to walk to to the mines and as he mines he finds a crymo crystal a crystal of incredible power though the problem is how to contain that power into a weapon afterall this is a crystal used to power a entire city it would be easier to contain into a melee weapon but it would be more powerful into artilary so wich should he choose")
    choice2 = readlineSync.question("[1]melee [2]artilary")
    if (choice2 == 1) {
        final7
    }else if (choice2 == 2) {
        final8
    } else {
        help2
    }
}
function final7(){
    console.log("he decides to go for the easier option and go for melee first he needed somebody to base the weapon off and he quickly found them a beserker in need of a battleaxe so he started to craft the battleaxe and he eventually succseeds and a black battleaxe that shines with a blue light was the final product after the axe was created they went out to search for the beast and after a while they found it the beserker gained a dark blue aura and lifted the axe and his aura changed to purple and then he went beserk he attacked the beast with full brutality in the end the beast was nothing but a pile of choped meat the drarf felt pride in his weapon but felt empty and lost without his friends his teamates")
    end11 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end11 == "yes"){
        Begin
    }else if(end11 == "no"){

    }else{
        final7
    }
}
function final8(){
    console.log("he finds that even if it will be harder he will need all the fire power he can get so he starts to search for people who are skilled enough to help him create it, after 3 days he find 5 people good enough to help and thus they start to work. when it is finished they ride it out and when they find te beast they set up a ambush. as soon as the beast walks into the trap the 5 people shoot chains from contraptions on the ground as the beast is chained the weapon is charging up and blasts the uper body of the beast straight off the dwarf felt satisfaction af he felt that his teamates would be proud of his creation")
    end12 = readlineSync.question("do you want to play again? awnser with ether yes or no")
    if(end12 == "yes"){
        Begin
    }else if(end12 == "no"){

    }else{
        final8
    }
}