// ===============================
// LOGIN FUNCTIONALITY
// ===============================

const loginForm = document.getElementById('loginForm');

if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const role = document.querySelector('input[name="role"]:checked').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if(!email || !password) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        // Simular redirección según el rol
        setTimeout(() => {
            if(role === 'admin') {
                window.location.href = './src/views/administrador.html';
            } else if(role === 'employee') {
                window.location.href = './src/views/empleado.html';
            } else {
                window.location.href = './src/views/usuario.html';
            }
        }, 500);
    });
}

// ===============================
// NAVIGATION FUNCTIONALITY
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Agregar clase active al item clickeado
            this.classList.add('active');
            
            // Obtener el view a mostrar
            const viewName = this.dataset.view;
            showView(viewName);
        });
    });
});

function showView(viewName) {
    // Ocultar todos los views
    const allViews = document.querySelectorAll('.view');
    allViews.forEach(view => {
        view.classList.remove('active');
    });
    
    // Mostrar el view seleccionado
    const selectedView = document.getElementById(viewName);
    if(selectedView) {
        selectedView.classList.add('active');
        
        // Scroll al top
        window.scrollTo(0, 0);
    }
}

// ===============================
// LOGOUT FUNCTIONALITY
// ===============================

function logout() {
    if(confirm('¿Deseas cerrar sesión?')) {
        window.location.href = '../../index.html';
    }
}

// ===============================
// ADMIN FUNCTIONS
// ===============================

function addEmployee() {
    alert('Abriendo formulario para agregar empleado');
}

function viewEmployee() {
    alert('👁️ Abriendo detalles del empleado');
}

function viewReport() {
    alert('📊 Abriendo reporte del empleado');
}

function editEmployee() {
    alert('✏️ Editando empleado');
}

function downloadReport() {
    alert('📥 Descargando reporte...');
}

function viewReportDetail() {
    alert('📋 Abriendo detalles del reporte');
}

function createBackup() {
    const date = new Date().toLocaleDateString('es-ES');
    alert(`💾 Respaldo creado exitosamente - ${date}`);
}

function restoreBackup() {
    if(confirm('⚠️ ¿Deseas restaurar este respaldo?')) {
        alert('♻️ Respaldo restaurado exitosamente');
    }
}

function downloadBackup() {
    alert('📥 Descargando respaldo...');
}

// ===============================
// EMPLOYEE FUNCTIONS
// ===============================

function editClient() {
    alert('✏️ Editando información del cliente');
}

function markPaid() {
    alert('✓ Pago marcado como realizado');
}

function viewHistory() {
    alert('📋 Abriendo historial del cliente');
}

function shareQuote(plan) {
    alert(`📤 Cotización de ${plan} compartida con el cliente`);
}

function sendReport() {
    alert('📤 ✅ Reporte enviado automáticamente al administrador');
}

// ===============================
// FORM SUBMISSIONS
// ===============================

// Manejar envío de formulario de gasto
const gastoForm = document.getElementById('gastoForm');
if(gastoForm) {
    gastoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Gasto registrado exitosamente');
        this.reset();
    });
}

// Manejar envío de formulario de entrada
const entradaForm = document.getElementById('entradaForm');
if(entradaForm) {
    entradaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Entrada registrada exitosamente');
        this.reset();
    });
}

// Manejar envío de formulario de cliente
const clienteForm = document.getElementById('clienteForm');
if(clienteForm) {
    clienteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Cliente registrado exitosamente');
        this.reset();
    });
}

// Manejar envío de formulario de perfil
const profileForm = document.getElementById('profileForm');
if(profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Cambios guardados exitosamente');
    });
}

// ===============================
// UTILITY FUNCTIONS
// ===============================

function downloadDoc() {
    alert('📥 Descargando documento...');
}

function printReport() {
    window.print();
}

// Función para formatear moneda
function formatCurrency(value) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

// Función para formatear fecha
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
}

// ===============================
// DATA MANAGEMENT (Simulado)
// ===============================

// Objeto para almacenar datos en memoria
const appData = {
    admin: {
        entradas: [
            { id: 1, descripcion: 'Entrada 1', monto: 5000, fecha: '2024-11-01' },
            { id: 2, descripcion: 'Entrada 2', monto: 3000, fecha: '2024-11-05' }
        ],
        gastos: [
            { id: 1, descripcion: 'Gasto 1', monto: 2000, fecha: '2024-11-02' },
            { id: 2, descripcion: 'Gasto 2', monto: 1500, fecha: '2024-11-10' }
        ],
        empleados: [
            { id: 1, nombre: 'Juan Pérez', clientes: 24, comision: 2450 },
            { id: 2, nombre: 'Carlos López', clientes: 19, comision: 1890 },
            { id: 3, nombre: 'María González', clientes: 31, comision: 3120 }
        ]
    },
    employee: {
        clientes: [
            { id: 1, nombre: 'Marta Rodríguez', plan: 'Premium', monto: 89, proximo_pago: '2024-12-02' },
            { id: 2, nombre: 'Luis Fernández', plan: 'Básico', monto: 45, proximo_pago: '2024-12-03' },
            { id: 3, nombre: 'Ana García', plan: 'Elite', monto: 150, proximo_pago: '2024-12-05' }
        ]
    }
};

// Función para agregar datos
function addData(section, type, data) {
    if(!appData[section][type]) {
        appData[section][type] = [];
    }
    data.id = Date.now();
    appData[section][type].push(data);
    console.log(`${type} agregado:`, data);
}

// Función para obtener datos
function getData(section, type) {
    return appData[section][type] || [];
}

// ===============================
// EVENT LISTENERS GLOBALES
// ===============================

// Prevenir acciones accidentales
window.addEventListener('beforeunload', function(e) {
    // Solo mostrar si hay cambios sin guardar
    // Por ahora deshabilitado para facilitar la navegación
});

// ===============================
// INICIALIZACIÓN
// ===============================

console.log('✅ Script cargado correctamente');
console.log('Datos disponibles:', appData);

// Función auxiliar para debugging
window.debug = {
    getAppData: () => appData,
    clearData: () => {
        appData.admin.entradas = [];
        appData.admin.gastos = [];
        appData.employee.clientes = [];
        console.log('Datos limpiados');
    }
};



















function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');

    // Overlay
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }

    overlay.classList.toggle('show');

    overlay.onclick = () => {
        document.querySelector('.sidebar').classList.remove('active');
        overlay.classList.remove('show');
    };
}

