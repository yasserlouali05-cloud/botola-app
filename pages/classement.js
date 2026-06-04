fetch("../data/botola.json")
  .then(res => res.json())
  .then(data => {

    const tbody = document.getElementById("standings-body");

    data.forEach(team => {

      let rankClass = "";

if(team.rank == 1 || team.rank == 2){
    rankClass = "rank-green";
}
else if(team.rank == 3){
    rankClass = "rank-blue";
}
else if(team.rank == 13 || team.rank == 14){
    rankClass = "rank-yellow";
}
else if(team.rank == 15 || team.rank == 16){
    rankClass = "rank-red";
}

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <span class="${rankClass}">
${team.rank}
</span>
        </td>

        <td style="text-align:left;padding-left:15px;">
          <img
            src="${team.logo}"
            width="28"
            height="28"
            style="vertical-align:middle;margin-right:10px;"
            onerror="this.style.display='none'"
          >
          ${team.team}
        </td>

        <td>${team.p}</td>
        <td>${team.diff}</td>
        <td>${team.pts}</td>
      `;

      tbody.appendChild(row);

    });

  })
  .catch(err => console.error(err));