export function getBrowserName() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("chrome")) {
    return "Google Chrome";
  }

  if (userAgent.includes("safari")) {
    return "Safari";
  }

  if (userAgent.includes("firefox")) {
    return "Mozilla Firefox";
  }

  if (userAgent.includes("edge")) {
    return "Microsoft Edge";
  }

  if (userAgent.includes("opera") || userAgent.includes("opr")) {
    return "Opera";
  }

  if (userAgent.includes("msie") || userAgent.includes("trident")) {
    return "Internet Explorer";
  }

  return "Unknown Browser";
}
