<script>
  const apiBaseUrl = "https://jsonplaceholder.typicode.com";

  let Resources = {
    POSTS: "posts",
    USERS: "users",
    COMMENTS: "comments",
  };

  let currentResource = undefined;
  let data = [];
  let name = "roshane";
  let isLoading = false;

  let count = 0;

  const fetchResource = ({ resource }) => {
    currentResource = resource;
    isLoading = true;
    console.log("fetching resources for", resource);
    let url = `${apiBaseUrl}/${resource}`;
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        data = json;
        isLoading = false;
      });
  };
</script>

<div>
  <p on:click={() => (count += 1)}>Hello {name}</p>

  <span>you clicked {count} times</span>

  <hr />

  {#each Object.keys(Resources) as k}
    <button on:click={() => fetchResource({ resource: Resources[k] })}>
      {k}
    </button>
  {/each}

  {#if isLoading}
    <p>Loading...</p>
  {/if}

  {#if !isLoading}
    {#each data as i}
      <pre>{JSON.stringify(i)}</pre>
    {/each}
  {/if}
</div>
