import User from "../models/user.models.js";

export const CreateUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await User.create(data);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await User.find(data);

    res.status(200).json(user);
  } catch (error) {

  }
};


export const getOneUser = async (req, res, next) => {
  try {
    const data = req.params.id;
    const user = await User.findById(data);

    res.status(200).json(user);
  } catch (error) {

  }
};


export const updateUser = (req, res, next) => {
  res.status(201).json("updated!");
};

export const deleteUser = (req, res, next) => {
  res.status(201).json("deleted!");
};
