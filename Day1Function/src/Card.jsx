import ProfilePic from "./assets/arvin.png";
function Card() {
  return (
    <div className="card">
      <img className="card-img" alt="Profile Picture" src={ProfilePic}></img>
      <h2 className="card-title">Arvin John</h2>
      <p className="cart-des">
        I am studying ReactJS right Now and so what asdasdasaasdasd display:
        -webkit-box; /* Creates a flex container */ -webkit-box-orient:
        vertical; /* Specifies the orientation */ overflow: hidden; /* Hides
        overflowing content */ text-overflow: ellipsis; /* Adds the ellipsis */
        line-clamp: 2; /* Specifies the number of lines to display */
        -webkit-line-clamp: 2; /* Limits content to 2 lines */
      </p>
    </div>
  );
}
export default Card;
