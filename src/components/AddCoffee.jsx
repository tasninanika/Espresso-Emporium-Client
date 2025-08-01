import React from "react";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const newCoffee = {
      name,
      chef,
      category,
      supplier,
      taste,
      details,
      photo,
      price,
    };

    // Sending data to the backend
    fetch("https://espresso-emporium-server-3exr.onrender.com/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Holaaaa!",
            text: "New Coffee Added!",
            icon: "success",
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Failed to add tea.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error while adding tea:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Try again.",
          icon: "error",
        });
      });
  };
  return (
    <div className="w-[70%] mx-auto my-16">
      <Link className="title text-2xl flex items-center my-3" to="/">
        <HiMiniArrowLeftStartOnRectangle /> Back to home
      </Link>
      <div className="bg-[#F4F3F0] p-11">
        <div className="p-8">
          <h1 className="text-3xl title text-center">Add New Coffee</h1>
          <p className="text-[12px] text-center">
            Enhance your coffee collection by adding a new blend! Provide
            details such as name, origin, flavor, and price. This form ensures
            each coffee entry is well-documented, making it easier to manage and
            showcase your premium selections.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          {/* Coffe & Chef name input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="name"
                  placeholder="Enter coffee name"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Chef</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="chef"
                  placeholder="Enter chef name"
                />
              </fieldset>
            </div>
          </div>
          {/* Supplier & Taste input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Supplier</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="supplier"
                  placeholder="Enter supplier name"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Taste</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="taste"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
            </div>
          </div>
          {/* Category & Details input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="category"
                  placeholder="Enter coffee category"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Details</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="details"
                  placeholder="Enter coffee details"
                />
              </fieldset>
            </div>
          </div>
          {/* Photo & Price input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="photo"
                  placeholder="Enter Photo URL"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Price</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="price"
                  placeholder="Enter coffee price(BDT)"
                />
              </fieldset>
            </div>
          </div>
          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] border-[#331A15] border-1 mt-3"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
