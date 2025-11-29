// JavaScript específico para la página de contactos
document.addEventListener('DOMContentLoaded', function() {
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar formulario
            if (validateForm()) {
                // Simular envío del formulario
                showLoading();
                
                setTimeout(() => {
                    hideLoading();
                    showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
                    contactForm.reset();
                }, 2000);
            }
        });
    }
    
    // Validación del formulario
    function validateForm() {
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        const acepto = document.getElementById('acepto');
        
        let isValid = true;
        
        // Validar nombre
        if (!nombre.value.trim()) {
            showFieldError(nombre, 'El nombre es requerido');
            isValid = false;
        } else {
            clearFieldError(nombre);
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showFieldError(email, 'El correo electrónico es requerido');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showFieldError(email, 'Ingresa un correo electrónico válido');
            isValid = false;
        } else {
            clearFieldError(email);
        }
        
        // Validar mensaje
        if (!mensaje.value.trim()) {
            showFieldError(mensaje, 'El mensaje es requerido');
            isValid = false;
        } else if (mensaje.value.trim().length < 10) {
            showFieldError(mensaje, 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        } else {
            clearFieldError(mensaje);
        }
        
        // Validar checkbox
        if (!acepto.checked) {
            showFieldError(acepto, 'Debes aceptar recibir información');
            isValid = false;
        } else {
            clearFieldError(acepto);
        }
        
        return isValid;
    }
    
    // Mostrar error en campo
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.style.borderColor = '#e74c3c';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.25rem';
        
        field.parentNode.appendChild(errorDiv);
    }
    
    // Limpiar error del campo
    function clearFieldError(field) {
        field.style.borderColor = '#e1e5e9';
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los otros items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle del item actual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // Información de contacto interactiva
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('click', function() {
            const icon = this.querySelector('.info-icon i');
            const content = this.querySelector('.info-content');
            
            // Efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Copiar información al portapapeles si es posible
            const text = content.textContent;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification('Información copiada al portapapeles', 'success');
                });
            }
        });
    });
    
    // Mapa interactivo (simulación)
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            showNotification('Redirigiendo a Google Maps...', 'info');
            
            // Simular redirección a Google Maps
            setTimeout(() => {
                const address = 'Carrera 15 #93-47, Bogotá, Colombia';
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                window.open(mapsUrl, '_blank');
            }, 1000);
        });
        
        // Efecto hover en el mapa
        mapPlaceholder.addEventListener('mouseenter', function() {
            this.style.borderColor = '#667eea';
            this.style.backgroundColor = '#f8f9fa';
        });
        
        mapPlaceholder.addEventListener('mouseleave', function() {
            this.style.borderColor = '#667eea';
            this.style.backgroundColor = 'white';
        });
    }
    
    // Función para mostrar información de contacto en diferentes idiomas
    function showContactInLanguage(language) {
        const translations = {
            'es': {
                phone: '+57 (1) 234-5678',
                email: 'info@cel.edu.co',
                address: 'Carrera 15 #93-47, Bogotá, Colombia'
            },
            'en': {
                phone: '+57 (1) 234-5678',
                email: 'info@cel.edu.co',
                address: 'Carrera 15 #93-47, Bogotá, Colombia'
            },
            'fr': {
                phone: '+57 (1) 234-5678',
                email: 'info@cel.edu.co',
                address: 'Carrera 15 #93-47, Bogotá, Colombia'
            }
        };
        
        const translation = translations[language];
        if (translation) {
            showNotification(`Información mostrada en ${language.toUpperCase()}`, 'info');
        }
    }
    
    // Botones de idioma para información de contacto
    const languageButtons = document.createElement('div');
    languageButtons.className = 'language-buttons';
    languageButtons.style.textAlign = 'center';
    languageButtons.style.marginBottom = '2rem';
    
    const languages = ['es', 'en', 'fr'];
    languages.forEach(lang => {
        const button = document.createElement('button');
        button.textContent = lang.toUpperCase();
        button.className = 'btn btn-secondary';
        button.style.margin = '0 0.5rem';
        button.addEventListener('click', () => showContactInLanguage(lang));
        languageButtons.appendChild(button);
    });
    
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.insertBefore(languageButtons, contactInfo.firstChild);
    }
    
    // Función para enviar WhatsApp
    function sendWhatsApp() {
        const phone = '573001234567';
        const message = 'Hola, me interesa conocer más sobre los cursos del CEL';
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Botón de WhatsApp
    const whatsappButton = document.createElement('button');
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i> WhatsApp';
    whatsappButton.className = 'btn btn-primary';
    whatsappButton.style.backgroundColor = '#25d366';
    whatsappButton.style.marginTop = '1rem';
    whatsappButton.addEventListener('click', sendWhatsApp);
    
    const contactFormSection = document.querySelector('.contact-form-section');
    if (contactFormSection) {
        contactFormSection.appendChild(whatsappButton);
    }
    
    // Función para llamar por teléfono
    function makePhoneCall() {
        const phone = '+5712345678';
        window.location.href = `tel:${phone}`;
    }
    
    // Botón de llamada
    const callButton = document.createElement('button');
    callButton.innerHTML = '<i class="fas fa-phone"></i> Llamar';
    callButton.className = 'btn btn-secondary';
    callButton.style.marginTop = '1rem';
    callButton.style.marginLeft = '1rem';
    callButton.addEventListener('click', makePhoneCall);
    
    if (contactFormSection) {
        contactFormSection.appendChild(callButton);
    }
    
    // Función para enviar email
    function sendEmail() {
        const email = 'info@cel.edu.co';
        const subject = 'Consulta sobre cursos CEL';
        const body = 'Hola, me interesa conocer más información sobre los cursos disponibles.';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }
    
    // Botón de email
    const emailButton = document.createElement('button');
    emailButton.innerHTML = '<i class="fas fa-envelope"></i> Email';
    emailButton.className = 'btn btn-secondary';
    emailButton.style.marginTop = '1rem';
    emailButton.style.marginLeft = '1rem';
    emailButton.addEventListener('click', sendEmail);
    
    if (contactFormSection) {
        contactFormSection.appendChild(emailButton);
    }
    
    // Función para mostrar horarios de atención en tiempo real
    function updateBusinessHours() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentDay = now.getDay();
        
        const businessHours = {
            1: { start: 7, end: 20 }, // Lunes
            2: { start: 7, end: 20 }, // Martes
            3: { start: 7, end: 20 }, // Miércoles
            4: { start: 7, end: 20 }, // Jueves
            5: { start: 7, end: 20 }, // Viernes
            6: { start: 8, end: 18 }, // Sábado
            0: { start: 9, end: 14 }  // Domingo
        };
        
        const todayHours = businessHours[currentDay];
        const isOpen = currentHour >= todayHours.start && currentHour < todayHours.end;
        
        // Actualizar indicador de estado
        const statusIndicator = document.createElement('div');
        statusIndicator.className = 'business-status';
        statusIndicator.style.textAlign = 'center';
        statusIndicator.style.marginTop = '1rem';
        statusIndicator.style.padding = '1rem';
        statusIndicator.style.borderRadius = '10px';
        statusIndicator.style.fontWeight = '600';
        
        if (isOpen) {
            statusIndicator.style.backgroundColor = '#d4edda';
            statusIndicator.style.color = '#155724';
            statusIndicator.innerHTML = '<i class="fas fa-check-circle"></i> Estamos abiertos ahora';
        } else {
            statusIndicator.style.backgroundColor = '#f8d7da';
            statusIndicator.style.color = '#721c24';
            statusIndicator.innerHTML = '<i class="fas fa-times-circle"></i> Cerrado ahora';
        }
        
        // Remover indicador anterior si existe
        const existingStatus = document.querySelector('.business-status');
        if (existingStatus) {
            existingStatus.remove();
        }
        
        // Agregar nuevo indicador
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.appendChild(statusIndicator);
        }
    }
    
    // Actualizar estado cada minuto
    updateBusinessHours();
    setInterval(updateBusinessHours, 60000);
    
    console.log('Página de contactos CEL cargada correctamente');
});
