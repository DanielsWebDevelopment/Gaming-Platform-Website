const hiddenEl = document.querySelectorAll('work-section');

window.addEventListener('scroll', function() {
    var game = document.getElementById('games');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 300) {
      game.classList.remove('games1');
    } else {
      game.classList.add('games1');
    }
  });

  window.addEventListener('scroll', function() {
    var work = document.getElementById('how-we-work');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 600) {
      work.classList.remove('work-section');
    } else {
      work.classList.add('work-section');
    }
  });
  
  window.addEventListener('scroll', function() {
    var player = document.getElementById('player-section');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 900) {
      player.classList.remove('player');
    } else {
      player.classList.add('player');
    }
  });