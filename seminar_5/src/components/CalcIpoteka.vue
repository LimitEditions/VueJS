<template>
    <div>
        <input type="nubmer" v-model="credit" placeholder="Сумма кредита">
        <input type="nubmer" v-model="period" placeholder="Срок кредита">
        <input type="nubmer" v-model="percent" placeholder="Процентная ставка">
        <p>Ежемесяный платеж: {{ result.payByMonth }}</p>
        <p>Сумма выплаты по кредиту: {{ result.total }}</p>
    </div>
</template>

<script>cd


export default {
    data() {
        return {
            credit: null,
            period: null,
            percent: null,
        };
    },
    computed: {
        result() {
            const principal = parseFloat(this.credit);
            const interestRate = parseFloat(this.percent) / 100 / 12;
            const loanTermMonths = parseFloat(this.period) * 12;

            const numerator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
            const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
            const payByMonth = (numerator / denominator).toFixed(2);
            const total = (payByMonth * 12 * this.period).toFixed(2);
            return { payByMonth, total };
        }
    }
}
</script>

<style lang="scss" scoped></style>