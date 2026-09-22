import { Link } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(3, "email must be more then 3 character")
    .max(30, " must be less then 30 character")
    .email("Invalid Email Format"),

  phone: z
    .string()
    .length(10, " phone must be 10 digit")
    .regex(
      /^(97|98)\d{8}$/,
      "phone must start with 98/97 and must be 10 digit Nepali Number",
    ),

  fullName: z
    .string()
    .min(3, "must be 3 character0")
    .max(15, "must not be more then 15"),

  address: z
    .string()
    .min(2, "address must be more then 2 character")
    .max(20, " address must not be more then 20 character"),
});

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      //actual api to submit

      const res = await axios.post("http://localhost:8000/register", data);

      console.log(data);
      alert(res.data.message || "user Created sucessfully 🙏");
      reset();
    } catch (error) {
      console.log(error);
      alert(error.message || "failed to register");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        className="flex flex-col gap-2 shadow-2xl bg-amber-50 p-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label> Email</label>
        <input
          type="text"
          placeholder="enter your email"
          className="p-4 border-2"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-red-500  text-sm">{errors.email?.message}</p>
        )}

        <label>FullName</label>
        <input
          type="text"
          placeholder="enter your FullName"
          className="p-4 border-2"
          {...register("fullName")}
        />
        {errors.fullName?.message && (
          <p className="text-red-500  text-sm">{errors.fullName?.message}</p>
        )}

        <label>Address</label>
        <input
          type="text"
          placeholder="enter your Address"
          className="p-4 border-2"
          {...register("address")}
        />
        {errors.address?.message && (
          <p className="text-red-500  text-sm">{errors.address?.message}</p>
        )}

        <label> Phone Number</label>
        <input
          type="text"
          placeholder="enter your Number"
          className="p-4 border-2"
          {...register("phone")}
        />
        {errors.phone?.message && (
          <p className="text-red-500  text-sm">{errors.phone?.message}</p>
        )}
        <div>
          {" "}
          <button type="submit" className="bg-blue-600  p-4 ">
            {" "}
            Register
          </button>
          <Link to="/login">Login</Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default Register;
