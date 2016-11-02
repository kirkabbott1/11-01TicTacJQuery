
$(function () {
  var player1 = true
  $('.square').click(function () {
    if (player1 === true && $(this).text() === '') {
      $(this).text('o');
      player1 = false;
      check('o');
    } else if (player1 === false && $(this).text() === '') {
        $(this).text('x');
        player1 = true;
        }
        check('x');
    })
});

 function check(player) {
   var topLeft = $('#topLeft').text() === player,
       topMid = $('#topMid').text() === player,
       topRight = $('#topRight').text() === player,
       midLeft = $('#midLeft').text() === player,
       mid = $('#mid').text() === player,
       midRight = $('#midRight').text() === player,
       btmLeft = $('#btmLeft').text() === player,
       btmMid = $('#btmMid').text() === player,
       btmRight = $('#btmRight').text() === player;

   if (
     (topLeft && topMid && topRight) ||
     (btmLeft && btmMid && btmRight) ||
     (topLeft && midLeft && btmLeft) ||
     (topRight && midRight && btmRight) ||
     (midLeft && mid && midRight) ||
     (topMid && mid && btmMid) ||
     (topLeft && mid && btmRight) ||
     (btmLeft && mid && topRight)
   ) {
     return alert(player + 'wins');
   }
   return null;
 }
