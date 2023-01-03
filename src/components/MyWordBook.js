import logo from "../assets/logo.png";

const MyWordBook = () => {
  return (
    <>
      <nav className="flex ">
        <img className="w-16" src={logo} alt="logo" />
        <button>back to HomePage</button>
      </nav>
      <ul>
        <li>
          <div>word</div>
          <div>Bedeutung</div>
          <button>show in mindmap</button>
          <button>delete</button>
        </li>
      </ul>
    </>
  );
};

export default MyWordBook;
