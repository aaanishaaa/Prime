import Papa from "papaparse";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [profile, setProfile] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      complete: handleData,
    });
  };

  const handleData = ({ data, errors }) => {
    if (errors.length) {
      console.error(errors);
    } else {
      setProfile(data);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div>
        {profile.map((elem, idx) => (
          <Card
            key={idx}
            name={elem.name}
            email={elem.email}
            github={elem.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
