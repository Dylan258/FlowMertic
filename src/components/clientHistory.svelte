<script>
    import Fa from "svelte-fa/src/fa.svelte";
    import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="card w-96 bg-base-100s">
    <div class="card-body">
        <h6>DateTime of interaction</h6>
        <h2 class="card-title">Card title!</h2>
        <p />
        <div class="card-actions justify-end">
            <button>
                <Fa icon={faShareFromSquare} />
            </button>
        </div>
    </div>
</div>
