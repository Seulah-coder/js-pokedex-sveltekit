<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
<script>
  import { onDestroy, onMount } from "svelte";
  import '../hello/hello.css';

    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<nav>
    <ul>
        <li>
            <a href="/hello">Home</a>
        </li>
        <li>
            <a href="/hello/posts">Posts</a>
        </li>
    </ul>


</nav>
<slot />