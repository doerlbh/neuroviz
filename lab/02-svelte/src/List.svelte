<script>

    export let list = [];

</script>

<div class="state-list">
    {#each list as state}
        <div class="state-list-item">{state}</div>
    {/each}
</div>

<style>
.state-list {
    columns: 3;
    min-height: 200px;
}

.state-list-item {
    font-weight: bold;
    font-size: 24px;
}
</style>
