
$(function () {
  count = 0
  array1 = []
  array2 = []
  $('.square').click(function () {
    if (!$(this).text())
      if (count % 2 !=== 0) {
        $(this).text('o');
        check(x)
        count++;
      } else {
          $(this).text('x');
          }
          count++;
          check(y)
      })
    else return
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
     return alert('player ' + player + ' wins');
     if (player === 'x') {
       
     }
   }
   return null;
 }
