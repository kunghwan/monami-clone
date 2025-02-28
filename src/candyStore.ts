import {create} from 'zustand'

const candyStore = create(
    (set) => ({
       candies:['추파웁스','홍삼캔디'],
       addCandy: (새로운캔디) => {
        set(prev => ({...prev,candies: [...prev,candies:[...prev.candies,새로운캔디] }))
       }

    })
)