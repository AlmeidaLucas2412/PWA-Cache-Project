export const registerSW = async () => {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log("Service Worker registrado com sucesso:", registration);
    } catch (error) {
      console.error("Falha ao registrar Service Worker:", error);
    }
  } else {
    console.log("Service Workers não são suportados neste navegador");
  }
};
