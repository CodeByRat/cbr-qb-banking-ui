import { useEffect, useState } from "react";

const useAccounts = () => {
    const [activeAccount, setActiveAccount] = useState<string>('Checking');
    
    useEffect(() => {
        console.log(activeAccount);
    }, [activeAccount]);


    return {activeAccount, setActiveAccount};
}

export default useAccounts;