<script>
    import MainFooter from "../lib/navigation/mainFooter.svelte";
    import DateTimeSnooze from "../components/dateTimeSnooze.svelte";
    import ClientHistory from "../components/clientHistory.svelte";
</script>

<main class="artboard phone-6 p-5">
    <h1 class="text-purple-900 uppercase font-bold">Client Interaction</h1>
    <h3 class="text-base-content">Next client interaction</h3>
    <DateTimeSnooze />
    <h1 class="text-purple-900 uppercase font-bold">COMMENTS/NOTES</h1>
    <input
        class="input w-full max-w-xs"
        style="background-color: #f8f8f8;"
        type="text"
        placeholder="Make a new comment..." />
    <h3 class="text-base-content">Client History</h3>
    <ClientHistory />
</main>

<MainFooter />
