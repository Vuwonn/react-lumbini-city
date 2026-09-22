import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-2 shadow-2xl bg-amber-50 p-10 w-[50%] "
      >
        <label> Email Address</label>
        <input
          {...register("Email", { required: true })}
          type="text"
          placeholder="enter your email"
          className="p-4 border-2 rounded border-gray-500 outline-none"
        />
        {errors.Email && <p className="text-red-600">Email is required.</p>}

        <label>Password</label>
        <input
          {...register("Password", { required: true })}
          type="text"
          placeholder="enter your password"
          className="p-4 border-2 rounded border-gray-500  outline-none "
        />
        {errors.Password && (
          <p className="text-red-600"> Password name is required.</p>
        )}

        <div>
          <button className="bg-blue-600  p-4 "> Login </button>
          <Link to="/register">register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
