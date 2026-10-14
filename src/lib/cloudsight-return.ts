const auditPath = "/website-audit";
const productionAuditUrl = "https://cloudsightmail.com/website-audit";

function configuredAuditUrl() {
  const configured = import.meta.env.VITE_CLOUDSIGHT_AUDIT_URL?.trim();
  if (import.meta.env.DEV) return configured || "http://localhost:5174/website-audit";
  return configured === productionAuditUrl ? configured : null;
}

export function getCloudSightReturnUrl() {
  const returnTo = new URLSearchParams(window.location.search).get("returnTo");
  const configured = configuredAuditUrl();
  if (!returnTo || !configured) return null;

  try {
    const candidate = new URL(returnTo);
    const approved = new URL(configured);
    const isLocalDevelopment = import.meta.env.DEV && candidate.href === "http://localhost:5174/website-audit";
    const isProductionAuditUrl = !import.meta.env.DEV && candidate.href === productionAuditUrl && approved.href === productionAuditUrl;
    if (candidate.pathname !== auditPath || (!isLocalDevelopment && !isProductionAuditUrl)) return null;
    return candidate.href;
  } catch {
    return null;
  }
}
