import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: 5,
      }}
    >
      <h2 style={{margin: 5}}>Who are we?</h2>
      <Link to="description" style={{margin: 8, textDecoration: 'none'}}>Description</Link>
      <Link to="services" style={{margin: 8, textDecoration: 'none'}}>Services</Link>
      <Outlet />
    </div>
  );
};
