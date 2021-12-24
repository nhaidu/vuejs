<template>
    <div id="root">
        <client-only>
            <line-chart :data="chartData" />
        </client-only>
    </div>
</template>
<script>

    export default {
        layout: 'default',
        data() {
            return {
                chartData: {
                    datasets: [{
                        label: 'Title',
                        data: [45, 55, 48, 35, 12],
                    }],
                },
            };
        },
    };
</script>
