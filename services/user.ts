import axios from "axios";

export const getUsers = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_MOCKY_URL!;

    const { data } = await axios.get(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    localStorage.setItem("users", JSON.stringify(data));

    return { data };
  } catch (error) {
    throw error;
  }
};
