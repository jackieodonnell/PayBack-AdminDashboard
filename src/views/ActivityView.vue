<template>
  <div class="activity">
    <label for="userTable">PayBack Users</label>
    <table id="userTable">
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Borrowing</th>
                <th>Lending</th>                
                <th>Reputation</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in this.$store.state.orderedUsers" :key="user.username">
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.total_borrowing}}</td>
                <td>{{user.total_lending}}</td>
                <td>{{user.reputation}}</td>
            </tr>
        </tbody>
    </table>
    <label for="loanTable">PayBack Loans</label>
    <table id="loanTable">
        <thead>
            <tr>
                <th>Loan ID</th>
                <th>Created On</th>
                <th>Lender</th>
                <th>Borrower</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Paid On</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="loan in this.$store.state.loans" :key="loan.loan_id">
                <td>{{loan.loan_id}}</td>
                <td>{{loan.creation_date.substring(0,10)}}</td>
                <td>{{loan.lender}}</td>
                <td>{{loan.borrower}}</td>
                <td>{{loan.amount}}</td>
                <td>{{loan.description}}</td>
                <td>{{loan.due_date.substring(0,10)}}</td>
                <td>{{loan.status}}</td>
                <td>{{loan.payment_date}}</td>
                <td>{{loan.transaction_rating}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.activity {
    background-color: rgb(236, 236, 236);
    box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.303);
    position: absolute;
    width: 91vw;
    height: fit-content;    
    min-height: 100vh;
    margin-left: 130px;
    margin-right: 0px;
    margin-top: -10px;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
}

.activity label {
    margin-top: 30px;
    margin-bottom: 5px;
    margin-left: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    color: rgba(72, 70, 70, 0.952);
    font-size: 1.5rem;
}

#userTable {
    margin-left: 30px;
    width: 45%;
    background-color: white;
    box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.303);
}

#userTable, th, td {
    border: 1px solid gray;
    border-collapse: collapse;
    padding-left: 5px;
    padding-right: 10px;
    text-align: left;
}

#userTable th {
    background-color: rgba(252, 205, 76, 0.713);
}

#loanTable {
    margin-left: 30px;
    width: 95%;
    margin-bottom: 100px;
    background-color: white;
    box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.303);
}

#loanTable, th, td {
    border: 1px solid gray;
    border-collapse: collapse;
    padding-left: 5px;
    padding-right: 10px;
    text-align: left;
}

#loanTable th {
    background-color: rgba(76, 202, 252, 0.713);
}
</style>