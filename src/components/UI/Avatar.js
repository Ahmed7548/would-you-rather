import classes from "./Avatar.module.css";
const Avatar = (props) => {
  const { url } = props;

  const className = `${classes.avatar} ${props.className}`;
  return (
      <div
          className={className}
      style={{
        backgroundImage: `url(${url})`,
        width: props.width,
        height: props.height,
      }}
    ></div>
  );
};

export default Avatar;
