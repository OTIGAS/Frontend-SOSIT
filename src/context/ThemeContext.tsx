import { createContext, useState } from 'react'

interface ThemaContextProps {
    theme: string | null;
    handleThemeChange: () => void;
}

export const ThemaContext = createContext<ThemaContextProps>({} as ThemaContextProps)

export function ThemaStorage({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>('light');

    function handleThemeChange() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        window.localStorage.setItem('theme', theme);
    }

    return(
        <ThemaContext.Provider value={{ handleThemeChange, theme }}>
            {children}
        </ThemaContext.Provider>
    )
}