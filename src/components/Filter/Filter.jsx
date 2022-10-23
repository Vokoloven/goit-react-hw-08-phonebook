export const Filter = ({ onChange, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        ng-model="search"
        id="search"
        onChange={onChange}
      ></input>
    </>
  );
};
