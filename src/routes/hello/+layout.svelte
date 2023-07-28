<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
<script lang="ts">
  import { page } from '$app/stores';
  import '../hello/hello.css';

</script>

<svelte:head>
    <title>{$page.data.post?.title}</title>
</svelte:head>

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