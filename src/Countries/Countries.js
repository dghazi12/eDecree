import { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    setCountries([]);
    fetch("https://devca.structura.ai/api/devtest/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.result.map((item) => {
          let countryObj = {
            countryId: item.country_id,
            countryName: item.country_name,
            priority: item.priority,
          };
          setCountries((countries) => [...countries, countryObj]);
        });
        setSortType("country_name");
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        priority: "priority",
        name: "country_name",
      };
      const sortProperty = types[type];
      const sorted = [...countries].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  });

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  placeholder="Country Name"
                  className="search-bar"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </th>
              <th>
                <label className="sort-title">Sort by: </label>
                <select
                  className="dropdown"
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="countryName">Highest Priority</option>
                  <option value="priority">Lowest Priority</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                if (searchTerm === "") {
                  return (
                    <tr key={item.country_id}>
                      <td>{item.countryName}</td>
                      <td>{item.priority}</td>
                    </tr>
                  );
                } else if (
                  item.countryName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return item.countryName;
                }
              })
              .map((item) => (
                <tr key={item.country_id}>
                  <td>{item.countryName}</td>
                  <td>{item.priority}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Countries;
