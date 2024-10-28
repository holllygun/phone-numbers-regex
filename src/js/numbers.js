export default function formatPhoneNumber(phonenumber){
    phonenumber = phonenumber.replace(/\s+/g, '')
    phonenumber = phonenumber.replace(/[^\d]/g, '')
    
    if (phonenumber.startsWith('8') && phonenumber.length === 11) {
        return phonenumber.replace(/^8/, '+7')
    } else if (phonenumber.startsWith('7') && phonenumber.length === 11) {
        return '+' + phonenumber;
    } else if (phonenumber.length === 12){
        return '+' + phonenumber;
    } else {
        throw new Error ("Это не номер телефона!")
    }

}

