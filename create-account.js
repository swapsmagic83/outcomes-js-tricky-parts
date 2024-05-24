function createAccount(pin, amount) {
    return {
        checkBalance(acctPin){
            if(acctPin !== pin) return "Invalid PIN!!!";
            return `$${amount}`;
        },
        deposite(acctPin,newAmount){
            if(acctPin !== pin) return "Invalid PIN!!!";
            amount = amount + newAmount;
            return `Succesfully deposited $${newAmount}. Current balance is $${amount}`;
        },
        withdraw(acctPin,withdrawAmount){
            if(acctPin !== pin) return "Invalid PIN!!!";
            if(withdrawAmount > amount){
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            amount = amount - withdrawAmount;
            return `Succesfully withdrew $${withdrawAmount}. Current balance is $${amount}`;
        },
        changePin(acctPin,newPin){
            if(acctPin !== pin) return "Invalid PIN!!!";
            pin = newPin;
            return "PIN successfully changed!";
        }
    }

}

module.exports = { createAccount };
