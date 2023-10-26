const { cartModel } = require("../Models/Cart.model");

const getCartData = async (req, res) => {
  try {
    const { userId } = await req.body;
    const cartData = await cartModel.find({ userId });
    res.status(200).json({ cartData });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

const addCartData = async (req, res) => {
  try {
    const payload = req.body;
    const exist = await cartModel.findOne({
      userId: payload.userId,
      _id: payload._id,
    });
    console.log(exist)
    if (!exist) {
      const new_cartData = await new cartModel(payload);
      await new_cartData.save();
      res.status(200).json({ msg: "CartData added successfully" ,status:true});
    } else {
      res.status(400).json({ msg: "Item Already In The CartList" ,status:false});
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err,status:false });
  }
};

const handleRemoveCartData= async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await cartModel.deleteOne({ _id: id, userId: userId });
    res.status(200).json({ msg: "Item reomoved from cart" });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
};

module.exports = {
 getCartData ,
  addCartData,
  handleRemoveCartData
};