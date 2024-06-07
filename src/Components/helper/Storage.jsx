export const setAuthUser = (userData) => {
    localStorage.setItem('authUser', JSON.stringify(userData));
};

export const getAuthUser = () => {
    const userData = localStorage.getItem('authUser');
    return userData ? JSON.parse(userData) : null;
};

export const clearAuthUser = () => {
    localStorage.removeItem('authUser');
};