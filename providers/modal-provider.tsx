"use client";

import { useState, useEffect } from "react";

import RenameModal from "@/components/modals/rename-modal";

const ModalProvider = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <>
          <RenameModal />
        </>
    );
}
 
export default ModalProvider;