<script>
	export let periods

    function getTempClass(temp) {
        if (temp > 80){
            return 'hot'
        }
        if (temp > 65) {
            return 'warm'
        }
        if (temp > 50){
            return 'cool'
        }
        if (temp >= 32) {
            return 'cold'
        }
        if (temp < 32) {
            return 'freezing'
        }
    }
</script>

<main>
	<div class="flex">
        {#each periods as period}
            <div class={"period " + getTempClass(period.temperature)}>
                <h5>{period.name}</h5>
                <img src={period.icon} alt="forecast-icon" />
                <p>Temp: {period.temperature}</p>
            </div>
        {/each}
    </div>
</main>

<style>
    .period {
        height: 200px;
        width: 150px;
        border: 1px solid gray;
        padding: 5px;
        margin: 5px;
    }

    @media (max-width: 800px) {
        .period {
            width: 100px;
            height: 100px;
        }
        .period img {
            display: none;
        }
    }

    .hot {
        background-color: red;
    }
    .warm {
        background-color: pink;
    }
    .cool {
        background-color: lightseagreen;
    }
    .cold {
        background-color: lightblue;
    }
    .freezing {
        background-color: blue;
    }
    .flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
