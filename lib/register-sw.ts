export const registerSW = async () => {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log("Service Worker successfully registered:", registration);
    } catch (error) {
      console.error("Failed to register Service Worker:", error);
    }
  } else {
    console.log("Service Workers are not supported in this browser.");
  }
};
