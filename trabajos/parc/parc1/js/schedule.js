// JavaScript específico para la página de horarios
document.addEventListener('DOMContentLoaded', function() {
    
    // Filtros de idiomas
    const filterButtons = document.querySelectorAll('.filter-btn');
    const scheduleTables = document.querySelectorAll('.schedule-table');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('data-language');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar/ocultar tablas según el filtro
            scheduleTables.forEach(table => {
                const tableLanguage = table.getAttribute('data-language');
                
                if (language === 'all' || tableLanguage === language) {
                    table.style.display = 'block';
                    table.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    table.style.display = 'none';
                }
            });
        });
    });
    
    // Animación de aparición de tablas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar tablas para animación
    scheduleTables.forEach(table => {
        table.style.opacity = '0';
        table.style.transform = 'translateY(30px)';
        table.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(table);
    });
    
    // Resaltar horarios disponibles
    const tableCells = document.querySelectorAll('.schedule-table-content td');
    tableCells.forEach(cell => {
        if (cell.textContent.trim() !== '-' && cell.textContent.trim() !== '') {
            cell.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e3f2fd';
                this.style.transform = 'scale(1.05)';
            });
            
            cell.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
                this.style.transform = '';
            });
        }
    });
    
    // Función para buscar horarios específicos
    function searchSchedule(time, day) {
        const results = [];
        scheduleTables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                cells.forEach((cell, index) => {
                    if (cell.textContent.includes(time)) {
                        results.push({
                            language: table.querySelector('h3').textContent,
                            level: cells[0].textContent,
                            time: cell.textContent,
                            day: getDayName(index)
                        });
                    }
                });
            });
        });
        return results;
    }
    
    function getDayName(index) {
        const days = ['Nivel', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return days[index] || 'Desconocido';
    }
    
    // Función para mostrar horarios disponibles en tiempo real
    function updateAvailableSchedules() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentDay = now.getDay(); // 0 = Domingo, 1 = Lunes, etc.
        
        scheduleTables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                cells.forEach((cell, index) => {
                    if (index > 0 && cell.textContent.trim() !== '-') {
                        const timeText = cell.textContent;
                        const startTime = parseInt(timeText.split(':')[0]);
                        
                        // Resaltar horarios que están próximos a comenzar
                        if (startTime - currentHour <= 2 && startTime > currentHour) {
                            cell.style.border = '2px solid #ff9800';
                            cell.style.backgroundColor = '#fff3e0';
                        }
                    }
                });
            });
        });
    }
    
    // Actualizar cada 5 minutos
    updateAvailableSchedules();
    setInterval(updateAvailableSchedules, 5 * 60 * 1000);
    
    // Función para imprimir horarios
    function printSchedule() {
        const printButton = document.createElement('button');
        printButton.textContent = 'Imprimir Horarios';
        printButton.className = 'btn btn-secondary';
        printButton.style.marginTop = '2rem';
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        const scheduleFilters = document.querySelector('.schedule-filters');
        scheduleFilters.appendChild(printButton);
    }
    
    printSchedule();
    
    // Función para exportar horarios como PDF (simulación)
    function exportToPDF() {
        const exportButton = document.createElement('button');
        exportButton.textContent = 'Exportar PDF';
        exportButton.className = 'btn btn-primary';
        exportButton.style.marginTop = '2rem';
        exportButton.style.marginLeft = '1rem';
        exportButton.addEventListener('click', function() {
            showNotification('Función de exportación PDF en desarrollo', 'info');
        });
        
        const scheduleFilters = document.querySelector('.schedule-filters');
        scheduleFilters.appendChild(exportButton);
    }
    
    exportToPDF();
    
    // Función para compartir horarios
    function shareSchedule() {
        const shareButton = document.createElement('button');
        shareButton.textContent = 'Compartir';
        shareButton.className = 'btn btn-secondary';
        shareButton.style.marginTop = '2rem';
        shareButton.style.marginLeft = '1rem';
        shareButton.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Horarios CEL',
                    text: 'Consulta los horarios del Centro Especializado en Lenguas',
                    url: window.location.href
                });
            } else {
                // Fallback para navegadores que no soportan Web Share API
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showNotification('Enlace copiado al portapapeles', 'success');
                });
            }
        });
        
        const scheduleFilters = document.querySelector('.schedule-filters');
        scheduleFilters.appendChild(shareButton);
    }
    
    shareSchedule();
    
    console.log('Horarios CEL cargados correctamente');
});
