<?php if (!$this) { exit(header('HTTP/1.0 403 Forbidden')); }
$loremIpsum = ["
<p>
  JUST BRING IT
  Don't you ever, and the Rock means ever, come at the Rock and ask him a question like that again or else the Rock will knock your teeth so far down your throat,
  you'll have to stick a toothbrush up your ass to brush them! Seeing as The Rock was not done speaking, you should know your role, and shut your mouth!
  The Rock is fixing to walk down the people's ramp, enter the people's ring, and kick your candy ass. The Rock would wipe a monkey's ass with what you think.
  The Rock is the best damn Intercontinental Champion there ever was. The Rock is gonna lay the smackdown on your candy ass.
  How dare you, you little jabroni. The Rock is going to show you why he is, without a shadow of a doubt, the most electrifying man in sports entertainment.
</p>"
,
"
<p>
  If ya smell what the Rock is cooking! The Rock would like to take that whistle you got, shine it up real nice, turn that sumbitch sideways, and stick it straight up your candy ass!
  Lillian, would you like to try some of The Rock's strudel? You want to go one on one with The Great One? If ya smell what the Rock is cooking!
  The Rock would like to take that whistle you got, shine it up real nice, turn that sumbitch sideways, and stick it straight up your candy ass! Lillian,
  would you like to try some of The Rock's strudel? The Rock would wipe a monkey's ass with what you think.
  Stone Cold is the biggest piece of Texas trailer park trash walking God's green earth. The Rock says this: if the Rock hits you, he'll kill you.
  If he misses, the wind behind the punch will give you pneumonia and you'll die anyway, so the choice is yours, jabroni! Louise, you like pancakes?
</p>
"];
?>

<div class="container">
  <h2>Welcome to your Home page <?php /*þetta er temp fix, database og session driven síðar*/ $user = "Siggi"; echo $user;?></h2>

  <?php
  foreach($loremIpsum as $i){
    echo $i;
  }
  ?>
</div>
