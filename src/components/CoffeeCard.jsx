import React from "react";
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Hey Buddy, Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-3exr.onrender.com/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#F5F4F1] p-5 rounded-2xl">
      <div className="flex justify-between items-center">
        <div>
          <img
            className="max-w-[150px] h-41 rounded-xl"
            src={coffee.photo}
            alt=""
          />
        </div>
        <div className="text-md space-y-2">
          <p>
            <span className="font-semibold">Name: </span> {coffee.name}
          </p>
          <p>
            <span className="font-semibold">Chef: </span> {coffee.chef}
          </p>
          <p>
            <span className="font-semibold">Price: </span> {coffee.price} Tk.
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-3 lg:mr-7">
          <Link to={`coffees/${coffee._id}`}>
            <p className="bg-[#D2B48C] text-white p-2 w-8 rounded-sm cursor-pointer">
              <IoMdEye />
            </p>
          </Link>
          <Link to={`updateCoffee/${coffee._id}`}>
            <p className="bg-[#3C393B] text-white p-2 w-8 rounded-sm cursor-pointer">
              <HiPencil />
            </p>
          </Link>
          <p
            onClick={() => handleDelete(coffee._id)}
            className="bg-[#EA4744] text-white p-2 w-8 rounded-sm cursor-pointer"
          >
            <MdDelete />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
