//사용자 정의 훅 ( 함수 )

import { useState } from 'react';

//use + 이름 : 함수
export const useInput = (initalState = {}) => {
    const [state, setState] = useState(initalState);
    /* 
        업데이트 상황
        useEffect(() => {})

    */
    const changeInput = (e) => {
        const { value, name } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    return { state, changeInput };
};
