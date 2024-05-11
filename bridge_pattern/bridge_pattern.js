class PaymentProcess {
    pay(amount) {

    }
}

class VisaPaymentProcess extends PaymentProcess {
    constructor(cardNumber, expiryDate, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    pay(amount) {
        console.log(`Paying ${amount} by Visa payment using ${this.cardNumber}`);
        // TODO: implement logic here
    }
}

class MomoPaymentProcess extends PaymentProcess {
    constructor(phoneNumber) {
        super();
        this.phoneNumber = phoneNumber;
    }

    pay(amount) {
        console.log(`Paying ${amount} by Momo payment using ${this.phoneNumber}`);
        // TODO: implement logic here
    }
}

class MemberRegisterPayment {
    constructor(paymentProcess) {
        this.paymentProcess = paymentProcess;
    }

    register() {
        const amount = 30000;
        this.paymentProcess.pay(amount);
        console.log(`Registered for Youtube membership`);
    }
}

// Register with visa payment
const visaPaymentProcess = new VisaPaymentProcess('1234567890', '12/2020', '123');
const membershipVisa = new MemberRegisterPayment(visaPaymentProcess);
membershipVisa.register();

// Register with momo payment
const momoPaymentProcess = new MomoPaymentProcess('0987654321');
const membershipMomo = new MemberRegisterPayment(momoPaymentProcess);
membershipMomo.register();
