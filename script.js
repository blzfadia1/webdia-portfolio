const grid = document.getElementById("grid");
sites.forEach(s => {
  const a = document.createElement("article");
  a.className = "card";
  a.innerHTML = `
    <div class="thumb" style="background:linear-gradient(135deg,${s.colors[0]},${s.colors[1]})">${s.icon}</div>
    <div class="body">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="tags">${s.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <a class="visit" href="${s.url}" target="_blank" rel="noopener">Voir le site</a>
    </div>`;
  grid.appendChild(a);
});
