export default ({ code, loading, name }) => (
  <div className="table table-row">
    <p className={loading ? "loading" : ""}>{code}</p> <p>{name}</p>
  </div>
);
