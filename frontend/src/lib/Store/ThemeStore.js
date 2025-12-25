import {create } from 'zustand'
import {persist } from 'zustand/middleware';


const useThemeStore = create(
    persist(
        (set)=>({
            theme : 'system',
            setTheme : (theme)=>set({theme})
        }),
        {
            name:"Theme-store"
        }
    )
)

export default useThemeStore;