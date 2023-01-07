import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollToTop from "react-scroll-to-top";
const MyWordBook = () => {
  return (
    <>
      <nav className="flex ">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <Link to="/">back to HomePage</Link>
      </nav>
      <ul>
        <li>
          <div>word</div>
          <div>Bedeutung</div>
          <div>Notizen</div>
          <button>show in mindmap</button>
          <button>delete</button>
          <button>add Notizen</button>
        </li>
      </ul>
      <div className="card w-1/4 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end ">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">delete</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>word</th>
              <th>Bedeutung</th>
              <th>Notizen </th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button>show in mindmap</button>
              </td>
              <td>
                <button>delete</button>
              </td>
              <td>
                <button>add Notizen</button>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ScrollToTop smooth color="#6f00ff" />
    </>
  );
};

export default MyWordBook;
