import React, {useState, useContext, createContext} from "react";

// 1. Context 생성
export const ThemeContext = createContext();   

export function ThemeProvider({children}){  // props를 children으로 받는 중
    const [theme, setTheme] = useState("light");    // 초반의 상태는 light모드 

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    // 2. Context.Provider 정의 및 공유할 객체를 value props로 전달.
    return (
    <ThemeContext. Provider value = {{theme, toggleTheme}}>
        {children}  
    </ThemeContext. Provider>
    // 3. value Props로 전달된 객체를 공유할 컴포넌트를 Context.Provider 내부에 위치.
    );
}

// 사용자 정의 훅 
export function useTheme(){
    const{theme, toggleTheme} = useContext(ThemeContext)
    return {theme, toggleTheme}
}