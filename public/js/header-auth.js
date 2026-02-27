import Keycloak from "./keycloak.js";

(() => {
    const env = (typeof window !== "undefined" && window.__CARTESGOUVFR_EDITO_ENV__) ?? {};

    const authContainer = document.getElementById("header-auth");
    if (!authContainer) return;

    const renderLoggedOut = () => {
        document.querySelectorAll(".login-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const urlWithoutHash = window.location.href.split('#')[0];
                keycloak.login({ redirectUri: urlWithoutHash });
            });
        });
    };

    const renderLoggedIn = async () => {
        const claims = keycloak.idTokenParsed || keycloak.tokenParsed || {};

        const displayName =
            (typeof claims.name === "string" && claims.name) ||
            [claims.given_name, claims.family_name].filter(Boolean).join(" ") ||
            (typeof claims.preferred_username === "string" && claims.preferred_username) ||
            (typeof claims.email === "string" && claims.email) ||
            "Compte";

        const generateUserMenuHTML = (collapseId) => {
            const urlWithoutHash = window.location.href.split('#')[0];
            const currentUrl = encodeURIComponent(urlWithoutHash);
            const logoutUrl = `${env.iamUrl}/realms/${encodeURIComponent(env.iamRealm)}/protocol/openid-connect/logout?post_logout_redirect_uri=${currentUrl}&client_id=${encodeURIComponent(env.iamClientId)}`;
            return `
                <li>
                    <div class="fr-translate fr-nav">
                        <div class="fr-nav__item">
                            <button aria-controls="${collapseId}" aria-expanded="false" title="Mon espace" class="fr-translate__btn fr-btn fr-px-2w">
                                <span class="fr-icon-account-circle-fill fr-icon--sm fr-mr-1w" aria-hidden="true"></span>Mon espace</button>
                            <div class="fr-collapse fr-translate__menu fr-menu" id="${collapseId}">
                                <ul class="fr-menu__list">
                                    <li style="pointer-events: none;">
                                        <div style="text-align: left;">
                                            <p class="fr-text--sm fr-text--bold fr-mx-2w fr-mt-3v fr-mb-2v">${displayName}</p>
                                            <p class="fr-text--xs fr-mb-3v fr-mx-2w fr-text-mention--grey">${claims.email}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="fr-nav__link fr-mr-3w" href="/tableau-de-bord">
                                            <span class="fr-icon-dashboard-3-line fr-icon--sm">&emsp;Tableau de bord</span></a>
                                    </li>
                                    <li>
                                        <a class="fr-nav__link fr-mr-3w" href="/mon-compte">
                                            <span class="fr-icon-user-line fr-icon--sm">&emsp;Mon compte</span></a>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="${logoutUrl}"
                                                class="fr-icon-logout-box-r-line fr-icon--sm custom-center-btn fr-btn fr-btn--tertiary fr-btn--sm fr-mt-3v fr-mx-2w">
                                                Se déconnecter
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            `;
        };

        authContainer.innerHTML = generateUserMenuHTML("espace-collapse");

        const authContainerMobile = document.getElementById("header-auth-mobile");
        if (authContainerMobile) {
            authContainerMobile.innerHTML = generateUserMenuHTML("espace-collapse-mobile");
        }
    };

    const requiredEnvKeys = ["iamUrl", "iamRealm", "iamClientId"];
    const missingEnvKeys = requiredEnvKeys.filter((key) => !env[key]);

    if (missingEnvKeys.length > 0) {
        console.error(
            "Failed to initialize Keycloak: missing required configuration values:",
            missingEnvKeys.join(", ")
        );
        renderLoggedOut();
        return;
    }

    const keycloak = new Keycloak({
        url: env.iamUrl,
        realm: env.iamRealm,
        clientId: env.iamClientId,
    });

    // "Authorization Code" flow avec PKCE (type de client Keycloak : Public).
    keycloak
        .init({
            onLoad: "check-sso",
            flow: "standard",
            pkceMethod: "S256",
            checkLoginIframe: false,
            silentCheckSsoRedirectUri: `${window.location.origin}/edito/silent-check-sso.html`,
            responseMode: 'query',
        })
        .then(async (authenticated) => {

            if (!authenticated) {
                renderLoggedOut();
                return;
            }

            await renderLoggedIn();

            // Si on veut garder le token à jour pour d'éventuels futurs appels API :
            // window.setInterval(() => {
            //     keycloak.updateToken(60).catch(() => {
            //         // Si le rafraîchissement échoue, on affiche simplement l'interface déconnectée.
            //         renderLoggedOut();
            //     });
            // }, 30_000);
        })
        .catch((error) => {
            console.error("Failed to initialize Keycloak", error);
            renderLoggedOut();
        });
})();
