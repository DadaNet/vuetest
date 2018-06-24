<template>
    <div>
        <p>Name: {{ coin.name }}</p>
        <p>Symbol: {{ coin.symbol }}</p>
        <p>Price (USD): {{ coin.price_usd }}</p>
        <p>Price (BTC): {{ coin.price_btc }}</p>
        <p>Percent change 24h: {{ coin.percent_change_24h }}</p>
        <p>Percent change 7 days: {{ coin.percent_change_7d }}</p>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Coins',

        data() {
            return {
                coin: {}
            }
        },

        created() {
            this.fetchData()
        },

        watch: {
            '$route': 'fetchData'
        },

        methods: {
            fetchData() {
                axios.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
                    .then((resp) => {
                    this.coin = resp.data[0]
                console.log(resp)
            })
            .catch((err) => {
                    console.log(err)
            })
            }
        }
    }
</script>

<style>
    a {
        color: #42b983;
        font-size: 20px;
        margin: 0 20px;
    }
</style>