document.addEventListener('DOMContentLoaded', function() {
    function colorChessboard() {
        const rows = document.querySelectorAll('table tbody tr:nth-child(n+2):nth-last-child(n+2)');
        rows.forEach((row, rowIndex) => {
            const cells = row.querySelectorAll('td:nth-child(n+2):nth-last-child(n+2)');
            cells.forEach((cell, cellIndex) => {
                if ((rowIndex + cellIndex) % 2 === 0) {
                    cell.style.backgroundColor = '#ffce9e'; 
                } else {
                    cell.style.backgroundColor = '#d18b47'; 
                }
            });
        });
    }

    colorChessboard();
});
