import Headerbar from "./components/Headerbar";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="flex" >
        <Navbar />
        <div>
          <Headerbar/>
          <Homepage />
          </div>
      </div>
    </main>
  )
}
