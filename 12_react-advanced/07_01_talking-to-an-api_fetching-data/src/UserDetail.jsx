export const UserDetail = ({ user }) => {
  return user ? (
    <div className="userDetail">
      <h2>{user.name}</h2>
      <p className="userData">
        <span className="userDataType">email:</span> {user.email}
      </p>
      <p className="userData">
        <span className="userDataType">website:</span> {user.website}
      </p>
      <p className="userData">
        <span className="userDataType">company:</span> {user.company.name}
      </p>
    </div>
  ) : null;
};
