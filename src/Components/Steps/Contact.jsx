import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be digits")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      company: Yup.string().required("Company name is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="flex flex-col p-4">
      <h2 className="font-semibold text-xl">Contact Details</h2>
      <p className="text-slate-500 text-sm mb-4">
        Please provide your contact information below.
      </p>
      <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Name Field */}
          <div className="w-full">
            <label className="block text-gray-900 text-sm font-bold mb-2">Name</label>
            <div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
              <input
                type="text"
                name="name"
                className="w-full focus:outline-none"
                placeholder="John Carter"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <CiUser className="text-gray-400 ml-2" />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Email Field */}
          <div className="w-full">
            <label className="block text-gray-900 text-sm font-bold mb-2">Email</label>
            <div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
              <input
                type="email"
                name="email"
                className="w-full focus:outline-none"
                placeholder="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <AiOutlineMail className="text-gray-400 ml-2" />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>

        {/* Phone and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Phone Field */}
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
              <input
                type="text"
                name="phone"
                className="w-full focus:outline-none"
                placeholder="(123) 456 - 7890"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <IoPhonePortraitOutline className="text-gray-400 ml-2" />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            ) : null}
          </div>

          {/* Company Field */}
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
            <div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
              <input
                type="text"
                name="company"
                className="w-full focus:outline-none"
                placeholder="Company Name"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <BsBuildings className="text-gray-400 ml-2" />
            </div>
            {formik.touched.company && formik.errors.company ? (
              <p className="text-red-500 text-xs mt-1">{formik.errors.company}</p>
            ) : null}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
