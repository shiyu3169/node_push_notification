console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("push received...");
  self.registration.showNotification(data.title, {
    body: "Notified by MSIMBO",
    icon: "https://msimbo.herokuapp.com/logo.png"
  });
});
