<!-- App.svelte -->
<script lang="ts">
    import {onMount} from 'svelte'

    let count: number = 0
    onMount(() => {
        const interval = setInterval(() => count++, 1000)
        return () => {
            clearInterval(interval)
        }
    })
</script>
<style>
    /* css will go here */
</style>
<div class="App">
    <header class="App-header">
        <p>Edit <code>src/App.svelte</code> and save to reload.</p>
        <p>Page has been open for <code>{count}</code> seconds.</p>
        <a class="App-Link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
            Learn Svelte
        </a>
    </header>
</div>