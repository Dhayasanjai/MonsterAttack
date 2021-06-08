const attackValue = 10;
const monsterAttackValue = 14;
const strongAttackValue = 19;
const healHealth = 20;

const attackBtn = document.querySelector('.attack-btn');
const heavyAttackBtn = document.querySelector('.heavy-attack-btn');
const healthHealBtn = document.querySelector('.health-heal');
const monsterHealth = document.querySelector('.monster-health');
const humanHealth = document.querySelector('.human-health');
const WinGif = document.querySelector('.Win-gif');
const youWonMsg = document.querySelector('.you-won ');
const youLoseMsg = document.querySelector('.you-lose');
const progress = document.querySelectorAll('progress');
// const styles = window.getComputedStyle(
//   document.querySelector('progress'),
//   '::-webkit-progress-bar'
// );
// let content = styles['color'];
// console.log(progressBar);
// console.log(styles);

// console.log(content);

// styles.style.display = 'none';
// content.style.display = 'none';
function HealthColorHandler(value, player) {
  let i;
  if (player === 'human') {
    i = 1;
  } else if (player === 'monster') {
    i = 0;
  }
  progress[i].setAttribute('value', value);
  if (value >= 91) {
    progress[i].style.setProperty('--c', ' #00ff00');
  } else if (value >= 83) {
    progress[i].style.setProperty('--c', ' #33ff00');
  } else if (value >= 74) {
    progress[i].style.setProperty('--c', ' #66ff00');
  } else if (value >= 65) {
    progress[i].style.setProperty('--c', ' #99ff00');
  } else if (value >= 56) {
    progress[i].style.setProperty('--c', ' #ccff00');
  } else if (value >= 47) {
    progress[i].style.setProperty('--c', ' #ffff00');
  } else if (value >= 38) {
    progress[i].style.setProperty('--c', ' #ffcc00');
  } else if (value >= 29) {
    progress[i].style.setProperty('--c', ' #ff9900');
  } else if (value >= 20) {
    progress[i].style.setProperty('--c', ' #ff6600');
  } else if (value >= 11) {
    progress[i].style.setProperty('--c', ' #ff3300');
  } else if (value >= 0) {
    progress[i].style.setProperty('--c', ' #ff0000');
  }
}

attackBtn.addEventListener('click', () => {
  winCheck();

  humanHealth.value -= monsterAttackValue;
  monsterHealth.value -= attackValue;

  HealthColorHandler(monsterHealth.value, 'monster');
  HealthColorHandler(humanHealth.value, 'human');
});
heavyAttackBtn.addEventListener('click', () => {
  winCheck();
  humanHealth.value -= monsterAttackValue;
  monsterHealth.value -= strongAttackValue;
  HealthColorHandler(monsterHealth.value, 'monster');
  HealthColorHandler(humanHealth.value, 'human');
});
healthHealBtn.addEventListener('click', () => {
  humanHealth.value += healHealth;
  HealthColorHandler(humanHealth.value, 'human');
});
function winCheck() {
  if (monsterHealth.value <= 0) {
    outPutResult('win');
  } else if (humanHealth.value <= 0) {
    outPutResult('lose');
  }
}
function outPutResult(decision) {
  if (decision === 'win') {
    WinGif.style.display = 'grid';
    youWonMsg.style.display = 'grid';

    setTimeout(() => {
      WinGif.style.display = 'none';
      youWonMsg.style.display = 'none';

      humanHealth.value = 100;
      monsterHealth.value = 100;
      HealthColorHandler(monsterHealth.value, 'monster');
      HealthColorHandler(humanHealth.value, 'human');
    }, 2500);
  } else if (decision === 'lose') {
    youLoseMsg.style.display = 'grid';

    setTimeout(() => {
      youLoseMsg.style.display = 'none';

      humanHealth.value = 100;
      monsterHealth.value = 100;
      HealthColorHandler(monsterHealth.value, 'monster');
      HealthColorHandler(humanHealth.value, 'human');
    }, 2000);
  }
}
