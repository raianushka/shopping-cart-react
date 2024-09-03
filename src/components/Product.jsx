import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {toast} from "react-hot-toast"
import { add,remove } from "../redux/Slices/CartSlice";

const Product = ({post}) =>{
    console.log(post);

    const {cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("item added to Cart");
    }

    return (



        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                {post.description}
            </div>
            <div>
                <img src={post.image} alt=""/>
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            {
                cart.some((p) => p.id === post.id) ? (
                <button
                onClick={removeFromCart}
                >Remove post</button>) :
                (<button
                onClick={addToCart}
                >
                    Add to Cart
                </button>)
            }
          
        </div>
    )
};

export default Product