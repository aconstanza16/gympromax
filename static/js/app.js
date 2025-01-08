
document.addEventListener('DOMContentLoaded', () => {
    // Attendance Chart
    const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(attendanceCtx, {
        type: 'bar',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Asistencia Semanal',
                data: [12, 19, 10, 15, 7, 11, 14],
                backgroundColor: 'rgba(255, 215, 0, 0.6)',
                borderColor: 'rgba(255, 215, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Membership Chart
    const membershipCtx = document.getElementById('membershipChart').getContext('2d');
    new Chart(membershipCtx, {
        type: 'pie',
        data: {
            labels: ['Activos', 'Inactivos', 'Totales'],
            datasets: [{
                label: 'Membresías',
                data: [75, 15, 90],
                backgroundColor: ['rgba(255, 215, 0, 0.6)', 'rgba(192, 192, 192, 0.6)', 'rgba(0, 0, 0, 0.6)']
            }]
        }
    });

    // Sales Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Ventas Diarias',
                data: [200, 400, 300, 500, 250, 300, 450],
                backgroundColor: 'rgba(255, 215, 0, 0.4)',
                borderColor: 'rgba(255, 215, 0, 1)',
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
