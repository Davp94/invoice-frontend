import { create } from "zustand";


const useStore = create((set) => ({
    user: {name: 'user1', email: 'test@test.com'},
    setUser: () => set((state)=> ({user: state.email = 'testUpdated@test.com'})),
    setUserEmail: (email: string) => set((state)=> ({user: state.email = email}))
}))

function UserData() {
    const user = useStore((state) => state.user)
    return user;
}