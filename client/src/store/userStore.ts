import { JwtPayload } from 'jwt-decode'
import { create } from 'zustand'

interface TokenPayload extends JwtPayload {
    email?: string
    given_name?: string
    family_name?: string
    picture?: string
}

interface UserStore {
    userData: TokenPayload
    setUserData: (userData: JwtPayload) => void
}

export const useUserStore = create<UserStore>((set) => ({
    userData: {},
    setUserData: (userData) => set({ userData })
}))