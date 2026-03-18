const ADMIN_HASH = "#admin";
const ADMIN_QUERY_KEY = "panel";
const ADMIN_QUERY_VALUE = "admin";
const ADMIN_PANEL_ID = "admin-panel";

function getSearchParams(search = window.location.search) {
  return new URLSearchParams(search);
}

export function resolveAdminAccessState(locationLike = window.location) {
  const searchParams = getSearchParams(locationLike.search);

  return locationLike.hash === ADMIN_HASH || searchParams.get(ADMIN_QUERY_KEY) === ADMIN_QUERY_VALUE;
}

export function requestAdminAccess() {
  window.location.hash = ADMIN_HASH.slice(1);
}

export function getAdminPanelId() {
  return ADMIN_PANEL_ID;
}

export function subscribeToAdminAccessChanges(onChange) {
  const syncAdminAccess = () => {
    onChange(resolveAdminAccessState());
  };

  window.addEventListener("hashchange", syncAdminAccess);
  window.addEventListener("popstate", syncAdminAccess);

  return () => {
    window.removeEventListener("hashchange", syncAdminAccess);
    window.removeEventListener("popstate", syncAdminAccess);
  };
}
