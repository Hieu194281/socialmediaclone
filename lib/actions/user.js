import User from "../models/User";

import { dbConnect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_address,
  username
) => {
  try {
    await dbConnect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        firstName: first_name,
        lastName: last_name,
        profilePhoto: image_url,
        username: username,
        email: email_address[0].email_address,
      },
      { upsert: true, new: true }
    );
    await user.save();

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await dbConnect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
};
