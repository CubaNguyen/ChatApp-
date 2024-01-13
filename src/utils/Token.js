

// Lưu token vào local storage
const luuTokenVaoLocalStorage = (token) => {
    localStorage.setItem('accessToken', token);
}

// Truy xuất token từ local storage
const layTokenTuLocalStorage = () => {
    return localStorage.getItem('accessToken');
}

// Xóa token khỏi local storage
const xoaTokenKhoiLocalStorage = () => {
    localStorage.removeItem('accessToken');
}

export {
    luuTokenVaoLocalStorage,
    layTokenTuLocalStorage,
    xoaTokenKhoiLocalStorage
}





