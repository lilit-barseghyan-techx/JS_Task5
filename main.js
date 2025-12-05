const API_URL = "https://reqres.in/api/users?delay=1";

document.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("status");
  const outputEl = document.getElementById("output");

  document.getElementById("btn-header").addEventListener("click", () => {
    fetchUsers(true, statusEl, outputEl);
  });

  document.getElementById("btn-no-header").addEventListener("click", () => {
    fetchUsers(false, statusEl, outputEl);
  });
});

async function fetchUsers(includeHeader, statusEl, outputEl) {
  console.log("Fetching users...");
  statusEl.textContent = "Loading...";
  outputEl.textContent = "";

  try {
    const options = { method: "GET", headers: {} };
    if (includeHeader) {
      options.headers["x-api-key"] = "reqres_cabd01c776874114b546f70761f8babe";
    }

    const response = await fetch(API_URL, options);
    const data = await response.json();
    console.log(data);

    if (!data.data) throw new Error("API returned no user list");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const ul = document.createElement("ul");

    data.data.forEach((u) => {
      const li = document.createElement("li");
      li.textContent = `${u.first_name} ${u.last_name}`;
      ul.appendChild(li);
    });

    outputEl.appendChild(ul);

    console.log("Done.");
  } catch (err) {
    console.error(err);
    outputEl.textContent = "No users";
  } finally {
    statusEl.textContent = "";
  }
}
