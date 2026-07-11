import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-32 h-32 rounded-full mx-auto"
        />

        <h1 className="text-3xl font-bold mt-4">
          {data.name}
        </h1>

        <p className="text-gray-500">@{data.login}</p>

        <p className="mt-2">
          Followers: {data.followers}
        </p>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/hiteshchoudhary"
  );

  return response.json();
};