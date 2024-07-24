'use client';
import { useStore } from "zustand";

export default function StatePage() {
    
    const user = useStore((state) => state.user);
  
    return (
      <>
        {user}
      </>
    );
}
  