// assets/scripts/auth.js
const AUTH_RULES = {
    // Страницы, требующие обязательной авторизации
    protected: [
        '/game.html',
        '/rating.html',
        '/profile.html',
        '/pages/game.html',
        '/pages/rating.html',
        '/pages/profile.html'
    ],
    // Страницы только для неавторизованных
    public: [
        '/login.html',
        '/register.html',
        '/pages/login.html',
        '/pages/register.html'
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    function checkPageAccess() {
        const isLoggedIn = checkAuth();
        const currentPath = window.location.pathname;

        // Проверяем защищенные страницы
        if (!isLoggedIn && AUTH_RULES.protected.some(page => currentPath.endsWith(page))) {
            window.location.href = getRedirectPath('login');
            return;
        }

        // Перенаправляем авторизованных пользователей с публичных страниц
        if (isLoggedIn && AUTH_RULES.public.some(page => currentPath.endsWith(page))) {
            window.location.href = getRedirectPath('index');
            return;
        }
    }

    // Заменяем существующую проверку авторизации на новую
    checkPageAccess();
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const playGameLink = document.querySelector('a[href="pages/game.html"]');
    const ratingLink = document.querySelector('a[href="pages/rating.html"]');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    const username = localStorage.getItem('username');
    if (username) {
        if (playGameLink) playGameLink.style.display = 'inline';
        if (ratingLink) ratingLink.style.display = 'inline';
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${username}!`;
        }
    } else {
        if (playGameLink) playGameLink.style.display = 'inline';
        if (ratingLink) ratingLink.style.display = 'inline';
    }

    
    function getRedirectPath(page) {
        const currentPath = window.location.pathname;
        const isInPagesDir = currentPath.includes('/pages/');
        
        switch(page) {
            case 'login':
                return isInPagesDir ? './login.html' : './pages/login.html';
            case 'game':
                return isInPagesDir ? './game.html' : './pages/game.html';
            case 'index':
                return isInPagesDir ? '../index.html' : './index.html';
            default:
                return isInPagesDir ? `./${page}.html` : `./pages/${page}.html`;
        }
    }

    function handleLogin(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Retrieve users from localStorage
        const storedUsers = localStorage.getItem('users');
        let confirmUsername = 'test'; // Default username
        let confirmPassword = 'test'; // Default password
        
        if (storedUsers) {
            try {
                const parsedUsers = JSON.parse(storedUsers);
                // Check if the array has at least one user and access its properties
                if (parsedUsers.length > 0) {
                    confirmUsername = parsedUsers[0].username || confirmUsername;
                    confirmPassword = parsedUsers[0].password || confirmPassword;
                }
                console.log(confirmUsername, confirmPassword)
            } catch (error) {
                console.error('Error parsing stored users:', error);
            }
        }
        
        // Validate credentials
        if (username === confirmUsername && password === confirmPassword) {
            localStorage.setItem('username', username);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginTime', new Date().toISOString());
            
            alert('Login successful!');
            
            // Redirect user
            window.location.href = '../index.html'; // Adjusted for a relative path
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }
    function handleRegister(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Сохраняем данные нового пользователя
        try {
            // Получаем существующих пользователей или создаем пустой массив
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Проверяем, существует ли пользователь
            if (users.some(user => user.username === username)) {
                alert('Username already exists. Please choose another one.');
                return;
            }

            // Добавляем нового пользователя
            users.push({
                username: username,
                password: password, // В реальном приложении пароль должен быть захеширован
                registerDate: new Date().toISOString()
            });

            // Сохраняем обновленный список пользователей
            localStorage.setItem('users', JSON.stringify(users));
            
            // Сохраняем текущего пользователя
            localStorage.setItem('username', username);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginTime', new Date().toISOString());

            alert('Registration successful!');
            // Перенаправление на страницу входа
            window.location.href = getRedirectPath('login');
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.');
        }
    }

    function handleStartGame(event) {
        event.preventDefault();
        const username = localStorage.getItem('username');
        if (username) {
            window.location.href =  getRedirectPath('game');  // Используем относительный путь
        } else {
            alert('Please log in or register first.');
            window.location.href = getRedirectPath('login');  // Используем относительный путь
        }
    }

    function logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTime');
        window.location.href = getRedirectPath('login');  // Используем относительный путь
    }

    // Функция для проверки статуса авторизации
    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const loginTime = localStorage.getItem('loginTime');

        if (isLoggedIn && loginTime) {
            // Можно добавить проверку времени сессии
            const sessionTimeout = 24 * 60 * 60 * 1000; // 24 часа
            const currentTime = new Date().getTime();
            const loginTimeMs = new Date(loginTime).getTime();

            if (currentTime - loginTimeMs > sessionTimeout) {
                logout();
                return false;
            }
            return true;
        }
        return false;
    }

});