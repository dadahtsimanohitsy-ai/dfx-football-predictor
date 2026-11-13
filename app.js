const data = {
  league: 'English League',
  match: {
    home: 'West Ham',
    away: 'Fulham',
    score: { home: 2, away: 1 },
    winner: 'West Ham',
    odds: [
      { label: '1 (dom.)', value: 58, cote: 'cote 2.43' },
      { label: 'N', value: 19, cote: 'cote 3.57' },
      { label: '2 (ext.)', value: 23, cote: 'cote 2.71' }
    ],
    goals: {
      home: 2.02,
      away: 1.17,
      total: 3.19
    }
  }
};

const scoreWrap = document.querySelector('.score');
if (scoreWrap) {
  scoreWrap.innerHTML = `
    <span>${data.match.score.home}</span>
    <span class="vs">vs</span>
    <span>${data.match.score.away}</span>
  `;
}

const winnerLine = document.querySelector('.winner-line');
if (winnerLine) {
  winnerLine.innerHTML = `Vainqueur probable : <strong>${data.match.winner}</strong>`;
}

document.querySelectorAll('.odds-box').forEach((box, index) => {
  const item = data.match.odds[index];
  if (!item) return;

  box.innerHTML = `
    <div class="odds-label">${item.label}</div>
    <div class="odds-value">${item.value}%</div>
    <div class="odds-cote">${item.cote}</div>
  `;
});

document.querySelectorAll('.goal-box').forEach((box, index) => {
  if (index === 0) {
    box.innerHTML = `
      <span>${data.match.home}</span>
      <strong>${data.match.goals.home.toFixed(2)}</strong>
    `;
  } else {
    box.innerHTML = `
      <span>${data.match.away}</span>
      <strong>${data.match.goals.away.toFixed(2)}</strong>
    `;
  }
});

const goalsHead = document.querySelector('.goals-head strong');
if (goalsHead) {
  goalsHead.textContent = `${data.match.goals.total.toFixed(2)} buts attendus`;
}
