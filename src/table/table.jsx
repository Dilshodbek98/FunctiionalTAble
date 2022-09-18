import React from "react";
import { useState } from "react";
import { data } from "./data";
import { Btn, Container, Main } from "./tableStyled";
import Del from "../accets/icons/delete.svg";
import pencil from "../accets/icons/pencil.svg";
import search from "../accets/icons/search.svg";
import clear from "../accets/icons/close.svg";
import person from "../accets/icons/person.svg";

const Table = () => {
  const [dataState, setDataState] = useState(data);
  const [newUserBtn, setNewUserBtn] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [searchOption, setSearchOption] = useState("name");
  const [selected, setSelected] = useState([]);
  const [editedUser, setEditedUser] = useState({});

  //logical functions
  const saveNewUser = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
      id: dataState.length + 1,
      image: person,
    });
  };

  const addUser = () => {
    if (
      newUser.name.length > 2 &&
      newUser.age > 0 &&
      newUser.address.length > 2 &&
      newUser.status.length > 2 &&
      newUser.univ.length > 2 &&
      newUser.job.length > 2
    )
      setDataState([...dataState, newUser]);
    setNewUser({
      name: "",
      age: "",
      address: "",
      status: "",
      univ: "",
      job: "",
    });
  };
  const deleteItem = (id) => {
    let res = dataState.filter((value) => value.id !== id);
    setDataState(res);
  };
  const searchItem = (e) => {
    let res = data.filter((value) => {
      return `${value[searchOption]}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setDataState(res);
  };

  const selectItem = (value) => {
    if (selected.includes(value.id)) {
      let res = selected.filter((vl) => vl !== value.id);
      setSelected(res);
    } else {
      setSelected([...selected, value.id]);
    }
    setEditedUser(value)
  };

  const saveEdited = (e, value) => {
    setEditedUser({...editedUser, [e.target.name]: e.target.value})
  };
  const saveEditedData = (e, value) => {
    setEditedUser(value)
    let res = dataState.map((vl) => {
      if (vl.id === editedUser.id) {
        return editedUser;
      } else {
        return vl;
      }
    });
    setDataState(res);
    setSelected([]);
  };

  return (
    <Main>
      <Container>
        <div className="header">
          {!newUserBtn ? (
            <Btn
              borderColor="blue"
              color="blue"
              onClick={() => setNewUserBtn(!newUserBtn)}
            >
              New User
            </Btn>
          ) : (
            <div className="add-user-box">
              <div className="inputs">
                <input
                  onChange={saveNewUser}
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={newUser?.name}
                />
                <input
                  onChange={saveNewUser}
                  placeholder="Age"
                  type="number"
                  name="age"
                  value={newUser?.age}
                />
                <input
                  onChange={saveNewUser}
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={newUser?.address}
                />
                <input
                  onChange={saveNewUser}
                  placeholder="Status"
                  type="text"
                  name="status"
                  value={newUser?.status}
                />
                <input
                  onChange={saveNewUser}
                  placeholder="University"
                  type="text"
                  name="univ"
                  value={newUser?.univ}
                />
                <input
                  onChange={saveNewUser}
                  placeholder="Job"
                  type="text"
                  name="job"
                  value={newUser?.job}
                />
              </div>
              <div className="buttons">
                <Btn color="green" borderColor="green" onClick={addUser}>
                  Add User
                </Btn>
                <Btn
                  color="red"
                  borderColor="red"
                  onClick={() => setNewUserBtn(!newUserBtn)}
                >
                  Close Adding
                </Btn>
              </div>
            </div>
          )}
          <div className="search-field">
            <img src={search} alt="" width={20} className="searh-icon" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Seach"
              onChange={searchItem}
            />
            <select
              name=""
              id=""
              onChange={(e) => setSearchOption(e.target.value)}
            >
              <option value="name">NAME</option>
              <option value="age">AGE</option>
              <option value="address">ADDRESS</option>
              <option value="status">STATUS</option>
              <option value="univ">UNIVERSITY</option>
              <option value="job">JOB</option>
            </select>
          </div>
        </div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
              <th>UNIVERSITY</th>
              <th>JOB</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {dataState.map((value, index) => {
              return (
                <tr key={value.id}>
                  {!selected.includes(value.id) ? (
                    <>
                      <td>
                        <p>{index + 1}</p>
                      </td>
                      <td className="item">
                        <img src={value.image} width={40} alt="" />
                        <p>{value.name}</p>
                      </td>
                      <td>
                        <p>{value.age}</p>
                      </td>
                      <td>
                        <p>{value.address}</p>
                      </td>
                      <td>
                        <p>{value.status}</p>
                      </td>
                      <td>
                        <p>{value.univ}</p>
                      </td>
                      <td>
                        <p>{value.job}</p>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{value.id}</td>
                      <td>
                        <input
                          className="editeInput"
                          placeholder="Name"
                          type="text"
                          name="name"
                          defaultValue={value?.name}
                          onChange={(e) => saveEdited(e, value)}
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Age"
                          type="number"
                          className="editeInput age"
                          name="age"
                          defaultValue={value?.age}
                          onChange={(e) => saveEdited(e, value)}
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Address"
                          type="text"
                          name="address"
                          className="editeInput"
                          defaultValue={value?.address}
                          onChange={(e) => saveEdited(e, value)}
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Status"
                          type="text"
                          name="status"
                          className="editeInput"
                          defaultValue={value?.status}
                          onChange={(e) => saveEdited(e, value)}
                        />
                      </td>
                      <td>
                        <input
                          placeholder="University"
                          type="text"
                          name="univ"
                          defaultValue={value?.univ}
                          className="editeInput"
                          onChange={(e) => saveEdited(e, value)}
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Job"
                          type="text"
                          name="job"
                          defaultValue={value?.job}
                          className="editeInput"
                          onChange={(e) => saveEdited(e, value)}
                        />
                      </td>
                    </>
                  )}
                  <td>
                    {!selected.includes(value.id) ? (
                      <div className="buttonss">
                        <Btn
                          borderColor="red"
                          color="red"
                          onClick={() => selectItem(value)}
                        >
                          <img src={pencil} width={16} alt="" /> Edit
                        </Btn>
                        <Btn
                          color="green"
                          borderColor="green"
                          onClick={() => deleteItem(value.id)}
                        >
                          <img src={Del} width={16} alt="" />
                          Delete
                        </Btn>
                      </div>
                    ) : (
                      <div className="buttonss">
                        <Btn
                          color="blue"
                          borderColor="blue"
                          onClick={() => saveEditedData(value)}
                        >
                          Save
                        </Btn>

                        <Btn
                          color="red"
                          borderColor="red"
                          onClick={() => selectItem(value)}
                        >
                          Cancel
                        </Btn>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </Main>
  );
};

export default Table;
