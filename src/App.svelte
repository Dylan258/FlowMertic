<script>
    import Router from "svelte-spa-router";
    import ClientInteraction from "./routes/clientInteraction.svelte";
    import Home from "$src/routes/home.svelte";
    import RoutingExample from "$src/base_components/routes/routingExample.svelte";
    import ComponentLibrary from "$src/base_components/routes/componentLibrary.svelte";
    import NotFound from "$src/routes/notFound.svelte";
    import Login from "$src/routes/login.svelte";
    import CreateAccount from "$src/routes/createAccount.svelte";
    import ForgotPassword from "$src/routes/forgotPassword.svelte";
    import ResetPassword from "$src/routes/resetPassword.svelte";
    import Profile from "$src/routes/profile.svelte";
    import ServiceWorkerUpdate from "$src/lib/service_worker/serviceWorkerUpdate.svelte";
    import NotificationOnboarding from "$src/routes/notificationOnboarding.svelte";
    import { onMount } from "svelte";
    import { updateProfilePicturePath } from "$src/lib/js/stores/userData";

    /**
     * Update this to suit your needs
     */

    const routes = {
        "*": ClientInteraction,
    };

    onMount(async () => {
        // This updates the profilePicturePath store upon authentication to ensure synchronicity with server
        updateProfilePicturePath();
    });
</script>

<main>
    <Router {routes} />
    <ServiceWorkerUpdate />
</main>
