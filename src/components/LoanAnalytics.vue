<template>
  <div class="loan-analytics">
    <div class="avg-payback">
        <p>Avg Time to Pay Back Loan </p>
        <h2>{{paybackDays}} days</h2>
    </div>
    <div class="avg-delay">
        <p>Avg Delay Past Due Date </p>
        <h2>{{delayDays}} day(s)</h2>
    </div>
    <div class="total-lent">
        <p>Helped Successfully Lend </p>
        <h2>+${{totalLent}}</h2>
    </div>
    <div class="avg-lending">
        <p>Avg Loan Amount</p>
        <h2>+${{avgLoanAmount}}</h2>
    </div>
  </div>
</template>

<script>
export default {
    name: "loan-analytics",
    data(){
        return {
            loans: this.$store.state.approvedLoans,
        }
    },
    computed: {
        completedLoans(){
            return this.loans.filter((loan) => {
                return (loan.transaction_rating > 0)
            });
        },
        paybackDays(){
            let totalCompletedLoans = this.completedLoans.length;
            let totalTime = 0;
            this.completedLoans.forEach((loan) => {
                let creationDate = new Date(loan.creation_date);
                let paymentDate = new Date(loan.payment_date);
                let differenceTime = paymentDate.getTime() - creationDate.getTime();
                totalTime += differenceTime;
            }); 
            let differenceDays = totalTime / (1000 * 3600 * 24)
            return (differenceDays / totalCompletedLoans).toFixed(2);
        },
        delayDays(){
            let lateLoans = this.completedLoans.filter((loan) => {
                let dueDate = new Date(loan.due_date);
                let paymentDate = new Date(loan.payment_date);
                return (Date.parse(dueDate) < Date.parse(paymentDate))
            });
            let totalTime = 0;
            lateLoans.forEach((loan) => {
                let dueDate = new Date(loan.due_date);
                let paymentDate = new Date(loan.payment_date);
                let differenceTime = paymentDate.getTime() - dueDate.getTime();
                totalTime += differenceTime;
            });
            let differenceDays = totalTime / (1000 * 3600 * 24)
            return (differenceDays / lateLoans.length).toFixed(2);
        },
        totalLent() {
            let sum = 0;
            this.completedLoans.forEach(loan => {
                let amount = Number(loan.amount)
                sum += amount;
            });
            return sum;
        },
        avgLoanAmount() {
            return (this.totalLent / this.completedLoans.length).toFixed(2);
        }

    }
}
</script>

<style>
    .loan-analytics {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        background-color: white;
        width: fit-content;
        height: fit-content;
        padding: 20px;
        border-radius: 5px;
        margin-top: 1%;
        margin-left: 1%;
        margin-right: 1%;
        gap: 10px;
        box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);

    }
    .loan-analytics div{
        border: 0.5px solid gray;
        border-radius: 10px;
        box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.189);
        padding-inline: 10px;
        height: fit-content;
        max-width: 40%;
    }

    .loan-analytics p{
        margin-bottom: 5px;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        font-weight: 300;
        color: rgba(72, 70, 70, 0.758);
        font-size: 1.2rem;
    }
    .loan-analytics h2 {
        font-size: 2rem;
        margin-top: 0;
    }
</style>