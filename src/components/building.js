import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import { loadAllCategories, addFloors } from "../ApiCalls/RatApi";
import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Building = () => {
  const [buildingName, setBuildingName] = useState();
  const [buildingId, setBuildingId] = useState();
  const [floorName, setFloorName] = useState();
  const { http } = AuthUser();
  const { user } = AuthUser();

  console.log(buildingId);
  const navigate = useNavigate();
  const createPost = (bd) => {
    http.post("/api/building", { buildingName: buildingName }).then((res) => {
      console.log(res.data);
    });
  };

  const createFloor = () => {
    addFloors(buildingId, { floorName: floorName })
      .then((res) => {
        setFloorName(floorName);
        console.log(res);
toast.success("Floor Added Successfully")
        // window.alert("floor created  successfully");
      })
      .catch((error) => {
        console.log(floorName);
        console.log("floor not created");
        toast.warning("Failed to add Floor")
        // window.alert("floor creation  failed");
      });
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <div className="row justify-content-left pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <h1 className="text-center mb-3">Add Building </h1>
          <div className="form-group">
            <label>BuildingName:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setBuildingName(e.target.value)}
              id="buildingName"
            />
          </div>

          <button
            type="button"
            onClick={createPost}
            className="btn btn-primary mt-4"
          >
            Add Building
          </button>
        </div>
      </div>
      <div>
        <h2>Add Floors</h2>
        <div className="row justify-content-left pt-5">
          <div className="col-sm-6">
            <div className="card p-4">
              <h1 className="text-center mb-3">Add Floors </h1>
              <div className="my-3">
                <Label for="category">Post Category</Label>
                <Input
                  type="select"
                  id="buildingName"
                  placeholder="Enter here"
                  className="rounded-0"
                  name="buildingName"
                  onChange={(e) => setBuildingId(e.target.value)}
                  defaultValue={0}
                >
                  <option disabled value={0}>
                    --Select Building--
                  </option>

                  {categories.map((category) => (
                    <option
                      value={category.buildingId}
                      key={category.buildingId}
                    >
                      {category.buildingName}
                    </option>
                  ))}
                </Input>
              </div>
              <div className="form-group">
                <label>FloorName:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(e) => setFloorName(e.target.value)}
                  id="floorName"
                />
              </div>

              <button
                type="button"
                onClick={createFloor}
                className="btn btn-success mt-4"
              >
                Add Floor
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default Building;
