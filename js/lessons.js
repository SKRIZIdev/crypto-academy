const LESSONS = [
  ['What is a blockchain?', 'A shared ledger copied across thousands of computers. Once data is added it is practically impossible to change.'],
  ['Why decentralization matters', 'No single company controls the network, so no one can freeze or reverse it on their own.'],
  ['Coins vs tokens', 'Coins (BTC, ETH) run their own chain. Tokens live on top of another chain, like ERC-20 on Ethereum.'],
  ['Wallets & seed phrases', 'A wallet is a key pair. Your 12–24 word seed phrase IS the wallet — anyone with it owns your funds.'],
  ['Custodial vs self-custody', 'On an exchange, they hold the keys. Self-custody means you do — more freedom, more responsibility.'],
  ['Gas fees explained', 'Every transaction pays the network to process it. Fees rise when the chain is busy.'],
  ['What is staking?', 'Locking coins to help secure a proof-of-stake network, earning rewards in return.'],
  ['Stablecoins', 'Tokens pegged to a currency like the US dollar, used to park value without volatility.'],
  ['Spotting scams', 'Nobody legit DMs you first. Verify contracts, never share your seed phrase, distrust "guaranteed" returns.'],
  ['Before you sign', 'Read what a transaction actually approves. Unlimited approvals are how many wallets get drained.'],
];
const KEY = 'cryptoacademy.done';
let done = JSON.parse(localStorage.getItem(KEY) || '[]');

function render() {
  const box = document.getElementById('lessons');
  box.innerHTML = '';
  LESSONS.forEach(([title, body], i) => {
    const isDone = done.includes(i);
    const el = document.createElement('div');
    el.className = 'lesson' + (isDone ? ' done' : '');
    el.innerHTML = `<div class="num">${isDone ? '✓' : i + 1}</div><div><h3>${title}</h3><p>${body}</p></div>`;
    el.onclick = () => {
      const wasDone = done.includes(i);
      if (wasDone) done = done.filter(x => x !== i); else done.push(i);
      localStorage.setItem(KEY, JSON.stringify(done));
      render();
      if (window.UI) {
        if (done.length === LESSONS.length) UI.toast('Course complete! 🎉', 'success', 3200);
        else if (!wasDone) UI.toast(`Lesson done · ${done.length}/${LESSONS.length}`, 'success');
      }
    };
    box.appendChild(el);
  });
  const pct = Math.round(done.length / LESSONS.length * 100);
  document.getElementById('bar').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${done.length} of ${LESSONS.length} done`;
}
render();
