<script lang="ts">
    import { writings } from "./ieltsWriting";

    let searchString : "";
    const checkWritingAnswer = ((key:string, value:string) => {
        console.log(key, value);

    });
    
</script>

<div class="writings">

    {#if writings}
        {#each writings as writing (writing.id)}
            <p>{writing.id}</p>
            <p>{writing.subject}</p>
            <p>task : {writing.task}</p>
            <p>{writing.paragraph}</p>
            <input type="text"  bind:value={searchString}>
            <button on:click={() => checkWritingAnswer(`writing_answer`, writing.paragraph.toString())}>submit</button>
        {/each}
    {/if}
</div>

<style>

</style>