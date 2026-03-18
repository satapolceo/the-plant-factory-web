import { resolveAdminAccessState } from "./panelAccess";

export const SURFACE_KEYS = {
  WEBSITE: "website",
  ADMIN: "admin",
  CHAT: "chat"
};

export const HOME_VIEW_KEYS = {
  HOME: "home",
  LOGIN: "login",
  MEMBER: "member"
};

export function getDefaultHomeView() {
  return HOME_VIEW_KEYS.HOME;
}

export function resolveAccountEntryView(currentUser) {
  return currentUser ? HOME_VIEW_KEYS.MEMBER : HOME_VIEW_KEYS.LOGIN;
}

export function resolveSurfaceRenderState(locationLike = window.location) {
  const showAdmin = resolveAdminAccessState(locationLike);

  return {
    activeIntent: showAdmin ? SURFACE_KEYS.ADMIN : SURFACE_KEYS.WEBSITE,
    showWebsite: true,
    showAdmin,
    showChat: true
  };
}

export function subscribeToSurfaceStateChanges(onChange) {
  const syncSurfaceState = () => {
    onChange(resolveSurfaceRenderState());
  };

  window.addEventListener("hashchange", syncSurfaceState);
  window.addEventListener("popstate", syncSurfaceState);

  return () => {
    window.removeEventListener("hashchange", syncSurfaceState);
    window.removeEventListener("popstate", syncSurfaceState);
  };
}

export function isViewActive(currentView, targetView) {
  return currentView === targetView;
}
