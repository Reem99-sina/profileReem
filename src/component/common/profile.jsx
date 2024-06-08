function Profile({url,children}) {
  return (
    <article
      className="protifolio__item"
      style={{ backgroundImage: `url(${url})` }}
    >
      {/* <div className="protifolio__item-image">
                    <img src={img2} alt="" />
                </div> */}
      <div className="layout_profile">
       {children}
      </div>
    </article>
  );
}
export default Profile;
