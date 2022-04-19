<script>
    import Card, {Media, MediaContent, Content} from '@smui/card';
    import Chip, { Set, Text } from '@smui/chips';

    import '../node_modules/@smui/card/bare.css';
    import '../node_modules/@smui/chips/bare.css';

	export let periods

    let allChips = ['Rain', 'Cloudy', 'Sunny', 'Thunderstorms'];
    let selectedChips = [...allChips];
    $: filteredPeriods = periods.filter(p => {
        for (let i = 0; i < selectedChips.length; i++) {
            if (p.shortForecast.indexOf(selectedChips[i]) !== -1) {
                return true;
            }
        }
        return false;
    })

    function getTempColor(temp) {
        if (temp > 80){
            return 'red'
        }
        if (temp > 65) {
            return 'pink'
        }
        if (temp > 50){
            return 'lightseagreen'
        }
        if (temp >= 32) {
            return 'lightblue'
        }
        if (temp < 32) {
            return 'blue'
        }
    }

</script>

<main>
    <div class="filters">
        <Set chips={allChips} let:chip filter bind:selected={selectedChips}>
            <Chip {chip} touch>
                <Text>{chip}</Text>
            </Chip>
        </Set>
    </div>
	<div class="flex">
        {#each filteredPeriods as period}
        <div class="card-container">
            <Card class="card-media-16x9" style="background-color: {getTempColor(period.temperature)}">
                <Content>
                    <div style="width: 80px; font-size: 10px;">{period.name}</div>
                </Content>
                <Media class="card-media" aspectRatio="square" >
                    <MediaContent>
                        <img src={period.icon} alt="forecast-icon" />
                    </MediaContent>
                </Media>
                <Content>
                    <div>{period.temperature}</div>
                </Content>
            </Card>
        </div>
        {/each}
    </div>
</main>

<style>

    .card-container {
        margin: 10px;
    }

    @media (max-width: 768px) {
        :global(.card-media) {
            display: none;
        }
    }
    .flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
