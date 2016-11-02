
$(document).ready(function() {
  $('#new-game').click(function() {
    $('.square')
      .text('')
      .prop('disabled', false);
  });
  $('#banner').hide();
  var currentPlayer = 'O';
  $('.square').click(function() {
    var text = $(this).text();
    if (text !== '') {
      return;
    }
    $(this).text(currentPlayer);
    var board = [
      [$('#1').text(), $('#2').text(), $('#3').text()],
      [$('#4').text(), $('#5').text(), $('#6').text()],
      [$('#7').text(), $('#8').text(), $('#9').text()]
    ];
    var winner = tictactoe(board);
    if (winner) {
      $('.square').prop('disabled', true);
      $('#banner').show().text('Winner is ' + winner);
    }
    if (currentPlayer === 'O') {
      currentPlayer = 'X';
    } else {
      currentPlayer = 'O';
    }
  });
});


function tictactoe(board) {

 function check(player) {
   var topLeft = board[0][0] === player,
       topMid = board[0][1] === player,
       topRight = board[0][2] === player,
       midLeft = board[1][0] === player,
       mid = board[1][1] === player,
       midRight = board[1][2] === player,
       btmLeft = board[2][0] === player,
       btmMid = board[2][1] === player,
       btmRight = board[2][2] === player;

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
     return player;
   }
   return null;
 }

 var x = check('X'),
     y = check('O');
 return x || y;
}
