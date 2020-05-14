export const join = (req, res) => res.render("Join", { PageTitle: "Join" });
export const login = (req, res) => res.render("Login", { PageTitle: "Login" });
export const logout = (req, res) =>
  res.render("Logout", { PageTitle: "Logout" });
export const users = (req, res) => res.render("Users", { PageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("User Detail", { PageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("Edit Profile", { PageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("Change Password", { PageTitle: "Change Password" });
