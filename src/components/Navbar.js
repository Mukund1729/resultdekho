import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold hover:text-blue-200">
          DTU Hub
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/notes" className="hover:underline">Notes</Link>
        </div>
      </div>
    </nav>
  );
}