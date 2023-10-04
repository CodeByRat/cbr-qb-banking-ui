import { useEffect, useState } from "react";


const useSelector = (defaultValue: string) => {
    const [activeAccount, setActiveAccount] = useState<string>(defaultValue);
    
    useEffect(() => {
        console.log(activeAccount);
    }, [activeAccount]);


    return {activeAccount, setActiveAccount};
};

export default useSelector;