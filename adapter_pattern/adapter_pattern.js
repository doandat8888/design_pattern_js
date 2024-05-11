// Bài toán đặt ra: Phương thức thanh toán của Youtube là visa, nhưng có 1 số người không có thẻ visa 
// => Có thể chuyển đổi thông tin từ Ví Momo sang Visa

class VisaPayment {
    pay(payment) {
        console.log(`Payment ${payment.amount.toFixed(2)} USD to visa card ${payment.cardNumber}`);
    }
}

class MomoPayment {
    constructor(cardNumber, expiryDate, cvv, visAmount){
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.amount = visAmount;
    }
}

class MomoPaymentAdapter {
    constructor(momoPayment) {
        this.momoPayment = momoPayment;
    }

    payWithVisa(visaPayment) {
        const convertedPayment = this.convertToVisaPayment(this.momoPayment);
        visaPayment.pay(convertedPayment);
    }

    convertToVisaPayment(momoPayment) {
        // Convert the momoPayment to a visaPayment
        const exchangeRate = 23000 // 1 USD = 23000VNĐ
        const visAmount = momoPayment.amount / exchangeRate;
        const visaPayment = {
            amount: visAmount,
            cardNumber: momoPayment.cardNumber,
            expiryDate: momoPayment.expiryDate,
            cvv: momoPayment.cvv,
        }
        return visaPayment;
    }
}

const momoPayment = new MomoPayment('123', '23-05-2023', '123', 30000);

const momoPaymentAdapter = new MomoPaymentAdapter(momoPayment);

const visaPayment = new VisaPayment();

momoPaymentAdapter.payWithVisa(visaPayment);

