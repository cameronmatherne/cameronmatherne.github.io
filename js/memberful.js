window.Memberful = window.Memberful || [];

Memberful.push([
  "ready",
  function () {
    if (Memberful.user) {
      document.body.classList.add("logged-in");

      // Check if user has purchased Full Access
      const hasFullAccess = Memberful.user.products?.some(
        p => p.name === "Full Access – Lifetime"
      );

      if (hasFullAccess) {
        document.body.classList.add("has-full-access");
      }
    }
  }
]);
