export const validPhone = (rule, value, callback) => {
    if (/^[0-9]{10}$/.test(value)) {
        callback();
    } else {
        callback(new Error('Số điện thoại đủ 10 số'));
    }
};

export const validPassword = (rule, value, callback) => {
    if (/^[a-zA-Z0-9@$!%*#?&]{8,}$/.test(value)) {
        callback();
    } else {
        callback(new Error('Mật khẩu ít nhất 8 kí tự'));
    }
};

export const validEmail = (rule, value, callback) => {
    if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
        callback();
    } else {
        callback(new Error('Nhập đúng định dạng email!'));
    }
};
