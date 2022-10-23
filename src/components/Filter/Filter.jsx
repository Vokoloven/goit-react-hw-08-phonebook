export const Filter = ({ onChange }) => {
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
