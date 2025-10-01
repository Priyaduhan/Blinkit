const userDataObject = [
  {
    Id: 1,
    FirstName: "Priya",
    LastName: "Duhan",
    Email: "duhanpriya264@gmail.com",
    PhoneNo: 9817782194,
    City: "Hansi",
    State: "Haryana",
    Pincode: 125033,
    Address: "Arya Nagar Colony,Hissar",
    Password: "abc@112",
    ConfirmPassword: "abc@112",
  },
  {
    Id: 2,
    FirstName: "Swaute",
    LastName: "Duhan",
    Email: "duhanpriya264@gmail.com",
    PhoneNo: 9817782194,
    City: "Hansi",
    State: "Haryana",
    Pincode: 125033,
    Address: "Arya Nagar Colony,Hissar",
    Password: "abc@112",
    ConfirmPassword: "abc@112",
  },
  {
    Id: 3,
    FirstName: "Prince",
    LastName: "Duhan",
    Email: "duhanpriya264@gmail.com",
    PhoneNo: 9817782194,
    City: "Hansi",
    State: "Haryana",
    Pincode: 125033,
    Address: "Arya Nagar Colony,Hissar",
    Password: "abc@112",
    ConfirmPassword: "abc@112",
  },
  {
    Id: 4,
    FirstName: "Varun",
    LastName: "Duhan",
    Email: "duhanpriya264@gmail.com",
    PhoneNo: 9817782194,
    City: "Hansi",
    State: "Haryana",
    Pincode: 125033,
    Address: "Arya Nagar Colony,Hissar",
    Password: "abc@112",
    ConfirmPassword: "abc@112",
  },
];

export const getUserData = async (req, res) => {
  var userId = parseInt(req.params.userId);
  const user = userDataObject.find((u) => u.Id === userId);
  if (!user) {
    return res.status(404).json({ message: "wrong user id" });
  }
  res.status(200).json(user);
};

export const getallData = async (req, res) => {
  res.status(200).json({ userDataObject });
};
