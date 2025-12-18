const insert = document.querySelector('#insert')
console.log(insert);

window.addEventListener('keydown', (e) => {

    insert.innerHTML = `
    
    <div class = "color">
        <table>
        <thead>
            <th>KeyCode</th>
            <th>Key</th>
            <th>Code</th>
        </thead>
        <tbody>
            <tr>
            <td>${e.keyCode}</td>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.code}</td>
            </tr>
        </tbody>
        </table>
    </div>
    `;

})