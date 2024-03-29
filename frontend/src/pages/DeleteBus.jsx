/* eslint-disable no-unused-vars */
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSnackbar } from "notistack";

const DeleteBus = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBus = () => {
    setLoading(true);
    axios
      .delete(
        `https://busschedulingapp-cuet-transitlink-3.onrender.com/buses/${id}`
      )
      .then((response) => {
        setLoading(false);
        enqueueSnackbar("Bus is deleted", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        // alert('Some Error Occur. Check console');
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4 text-center mx-auto font-bold">
        Delete Bus
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">Are you sure you want to delete the Bus?</h3>
          <button
            className="p-4 bg-red-500 text-white m-8 w-full"
            onClick={handleDeleteBus}
          >
            Yes, Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBus;
