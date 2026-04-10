async function loadData() {
  const res = await fetch('/api/loads');
  const loads = await res.json();

  const container = document.getElementById('loadsContainer');
  container.innerHTML = '';

  loads.forEach(load => {
    const card = document.createElement('div');
    card.className = 'load-card';

    card.innerHTML = `
      <h3>📦 ${load.origin} → ${load.destination}</h3>
      <p>💰 قیمت: ${load.price}</p>
      <p>⚖️ وزن: ${load.weight} تن</p>
      <p>📊 امتیاز: ${load.score}</p>
      <button onclick="selectLoad(${load.id})">انتخاب بار</button>
    `;

    container.appendChild(card);
  });
}

async function selectLoad(id) {
  await fetch('/api/select-load', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ loadId: id })
  });

  alert("بار انتخاب شد (در نسخه واقعی ثبت می‌شود)");
}
