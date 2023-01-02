const Nav = () => {
  return (
    <nav className="bg-slate-200 flex  px-8 gap-8 justify-between grid grid-cols-8">
      <div className="col-span-1">
        <img src="" alt="logo" />
      </div>
      <div className="border-b-2 col-span-5">
        <form action="">
          <input className="w-10/12" type="search" />
          <button>Suchen</button>
        </form>
      </div>
      <div className="col-span-2 flex gap-8">
        <button>Mein Wörterbuch </button>
        <button> theme </button>
      </div>
    </nav>
  );
};

export default Nav;
