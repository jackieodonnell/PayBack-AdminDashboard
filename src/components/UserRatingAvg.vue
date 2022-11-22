<template>
    <div id="chart">
        <p>Average User Rating</p>
        <apex-chart type="radialBar" :options="chartOptions" :series="series"></apex-chart>
    </div>
</template>

<script>
export default {
    name: "user-rating-avg",
    data() {
        return {
            series: [(Number(this.$store.state.avgUserRating) / 5)*100],
            chartOptions: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: '97%',
                            margin: 5, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                color: '#999',
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '36px',
                                formatter: function (val) {
                                    return ((val/100) * 5);
                                }
                            }
                        }
                    }
                },
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: ['Average Score'],
            }
        }
    },
}
</script>

<style scoped>
    #chart {
        background-color: white;
        padding-top: 30px;
        box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);
        border-radius: 5px;
        margin-top: 1%;
    }
    #chart p {
        margin-top: 0;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        font-weight: 300;
        color: rgba(72, 70, 70, 0.758);
        font-size: 1.2rem;
    }

</style>