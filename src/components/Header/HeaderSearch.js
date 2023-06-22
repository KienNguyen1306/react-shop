import { AiOutlineSearch } from "react-icons/ai";

function HeaderSearch() {
  return (
    <form className="from_search">
      <input type="" placeholder="Search" />
      <button className="btn-submit" type="submit">
        <AiOutlineSearch className="icon-submit"/>
      </button>
    </form>
  );
}

export default HeaderSearch;
