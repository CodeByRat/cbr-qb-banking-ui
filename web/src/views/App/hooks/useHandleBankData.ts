import { useEffect, useState } from "react";
import { useNuiEvent } from "../../../hooks/useNuiEvent";

interface BankData {
    accountinfo: string;
    bankbalance: string;
    cash: string;
    name: string;
}



const useHandleBankData = () => {
    const [accountNumber, setAccountNumber] = useState<string>();
    const [bankBalance, setBankBalance] = useState<number>();
    const [cashBalance, setCashBalance] = useState<number>();
    const [username, setUsername] = useState<string>();

    const keysToSet = [
        {key: 'accountinfo', setter: setAccountNumber as (val: string | number) => void, convertToNumber: false},
        {key: 'bankbalance', setter: setBankBalance as (val: string | number) => void, convertToNumber: true},
        {key: 'cash', setter: setCashBalance as (val: string | number) => void, convertToNumber: true},
        {key: 'name', setter: setUsername as (val: string | number) => void, convertToNumber: false}
    ];

    const logBankData = (data: BankData) => {
        console.log(data);
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                setValueByKey(key, data[key as keyof BankData]);
            }
        }
    };
    
    const currencyStringToNumber = (s: string): number => {
        const cleanedString = s.replace(/[^\d.-]/g, ''); 
        return parseFloat(cleanedString);
    };
    
    const setValueByKey = (key: string, value: string) => {
        const keyObj = keysToSet.find(k => k.key === key);
        if (keyObj) {
            if (keyObj.convertToNumber) {
                keyObj.setter(currencyStringToNumber(value));
            } else {
                keyObj.setter(value);
            }
        }
    };

    useNuiEvent<BankData>("openBank", logBankData);

    // Return states if needed
    return {
        accountNumber,
        bankBalance,
        cashBalance,
        username
    };
};

export default useHandleBankData;