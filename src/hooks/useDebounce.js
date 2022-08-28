import { useState, useEffect } from 'react';

// khi gõ kí tự tìm kiếm thì nó k bắn ra network .
// mà chỉ khi nào debounce(dừng gõ) thì nó mới bắn
// Trong hàm useDebounce, mỗi khi value trong mảng deps thay đổi thì clearnup function được gọi, nên sẽ clear timeout trước đó đi (huỷ những lần trước đi). Vì vậy, cho tới khi người dùng ngừng gõ 500ms API mới được gọi
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handle);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
