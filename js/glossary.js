const TERMS = [
  ['Blockchain', 'A distributed ledger of transactions grouped into blocks and chained together.'],
  ['Wallet', 'Software or hardware that stores the keys used to access your crypto.'],
  ['Seed phrase', '12–24 words that back up a wallet. Whoever has it controls the funds.'],
  ['Private key', 'The secret number that authorizes spending from an address.'],
  ['Gas', 'The fee paid to have a transaction processed by the network.'],
  ['DeFi', 'Decentralized Finance — lending, trading and more, run by smart contracts.'],
  ['NFT', 'A token representing ownership of a unique item, on-chain.'],
  ['Staking', 'Locking coins to help secure a proof-of-stake network for rewards.'],
  ['Stablecoin', 'A token pegged to a stable asset such as the US dollar.'],
  ['DEX', 'Decentralized Exchange — trade tokens directly from your wallet.'],
  ['Rug pull', 'A scam where creators abandon a project and take investors\' money.'],
  ['Cold wallet', 'A wallet kept offline (e.g. hardware) for maximum security.'],
  ['Market cap', 'Price multiplied by circulating supply — a coin\'s total value.'],
  ['Halving', 'A scheduled cut to Bitcoin\'s block reward roughly every four years.'],
];
function render(list) {
  const box = document.getElementById('terms');
  box.innerHTML = list.length ? list.map(([t, d]) =>
    `<div class="term"><h3>${t}</h3><p>${d}</p></div>`).join('')
    : '<p class="muted">No matches.</p>';
}
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  render(TERMS.filter(([t, d]) => (t + d).toLowerCase().includes(q)));
});
render(TERMS);
